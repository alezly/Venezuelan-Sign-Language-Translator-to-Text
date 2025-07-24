import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-text-output',
  imports: [],
  templateUrl: './text-output.component.html',
  styleUrl: './text-output.component.scss'
})
export class TextOutputComponent {
  @Input() translation: string = '';
  selected: string = 'Text output';

  select(name: string) {
    this.selected = name;
  }

  copyTranslation() {
    navigator.clipboard.writeText(this.translation).then(() => {
      console.log('Translation copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy translation: ', err);
    });
  }
}
