import { Component } from '@angular/core';
import { SignCaptureComponent } from '../sign-capture/sign-capture.component';
import { TextOutputComponent } from '../text-output/text-output.component';

@Component({
  selector: 'app-app-screen',
  imports: [SignCaptureComponent, TextOutputComponent],
  templateUrl: './app-screen.component.html',
  styleUrl: './app-screen.component.scss'
})
export class AppScreenComponent {
  title = 'LSV-to-text-and-speech';

  translation: string = '';

  onTranslationChanged(value: string) {
    this.translation = value;
  }
}
