import { Component, Input } from '@angular/core';
import { MyIfDirective } from './directive';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  hostDirectives: [{ directive: MyIfDirective }],
})
export class HelloComponent {
  @Input() name: string;
}
