import {
  Directive,
  Injectable,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Directive({
  selector: '[myIf]',
  standalone: true,
})
export class MyIfDirective {
  tpl: TemplateRef<any>
  constructor( private vcr: ViewContainerRef) {}

  ngOnInit() {
    this.vcr.createEmbeddedView(this.tpl);
  }
}
