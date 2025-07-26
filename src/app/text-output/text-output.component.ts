import { Component, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-output',
  imports: [],
  templateUrl: './text-output.component.html',
  styleUrl: './text-output.component.scss'
})
export class TextOutputComponent {
  private baseUrl = 'http://localhost:5000';
  @Input() translation: string = '';
  selected: string = 'Text output';

  constructor(private http: HttpClient) { }

  select(name: string) {
    this.selected = name;
  }
  resetTranslation() {
    this.translation = '';
    this.http.get(`${this.baseUrl}/reset_prediction`);
  }
  copyTranslation() {
    navigator.clipboard.writeText(this.translation).then(() => {
      console.log('Translation copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy translation: ', err);
    });
  }
}
