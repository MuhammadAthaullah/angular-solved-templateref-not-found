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
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnInit() {
    this.vcr.createEmbeddedView(this.tpl);
  }
}
