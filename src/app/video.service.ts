import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getPrediction(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_prediction`);
  }
}
