import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'clients-header',
  templateUrl: './clients-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsHeaderComponent {
  @Input() title = '';
  @Input() showButton = false;
  @Output() buttonAction = new EventEmitter();

  onButtonActionClick(){
    this.buttonAction.emit()
  }
}
