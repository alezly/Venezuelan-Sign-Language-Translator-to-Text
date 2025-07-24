import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { VideoService } from '../video.service';
import { interval, Subscription, of } from 'rxjs';
@Component({
  selector: 'app-sign-camera',
  imports: [],
  templateUrl: './sign-camera.component.html',
  styleUrl: './sign-camera.component.scss',
})
export class SignCameraComponent implements OnDestroy {
  videoUrl: string = 'http://localhost:5000/video_feed';
  prediction = 'Cámara apagada';
  cameraEnabled = false;
  @Output() translationChanged = new EventEmitter<string>();
  private predictionSubscription!: Subscription;

  constructor(private videoService: VideoService) { }

  startCamera(): void {
    this.cameraEnabled = true;
    this.translationChanged.emit('Cámara encendida, esperando señas...');
    this.initPredictionFetching();
  }

  stopCamera(): void {
    this.cameraEnabled = false;
    this.translationChanged.emit('Cámara apagada');
    if (this.predictionSubscription) {
      this.predictionSubscription.unsubscribe(); // Stop fetching predictions
    }
  }

  // ngOnInit(): void {
  //   this.initPredictionFetching();
  // }

  private initPredictionFetching(): void {
    // Unsubscribe from any existing subscription before creating a new one
    if (this.predictionSubscription) {
      this.predictionSubscription.unsubscribe();
    }

    // Only fetch if the camera is enabled
    if (this.cameraEnabled) {
      this.predictionSubscription = interval(1000).pipe(
        switchMap(() => this.videoService.getPrediction().pipe(
          catchError(error => {
            console.error('Error al obtener la predicción:', error);
            // Return an observable of an empty or error state to prevent the stream from completing
            return of({ prediction: 'Error de conexión' });
          })
        ))
      ).subscribe(
        (response: any) => {
          this.prediction = response.prediction;
          this.translationChanged.emit(response.prediction);
        },
        (error) => {
          // This block will only be hit if the interval stream itself errors,
          // not for individual getPrediction errors if catchError is used in switchMap.
          console.error('Error general en la suscripción de predicción:', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.predictionSubscription) {
      this.predictionSubscription.unsubscribe();
    }
  }
}
