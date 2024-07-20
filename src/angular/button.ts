import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<ng-content></ng-content>'
})
export class ButtonWrapperComponent {
  @Input() props: any;
}
  