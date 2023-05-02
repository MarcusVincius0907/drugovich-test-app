import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Client} from "../../../models/clients.model";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() clientsList: Array<Client> = []
  @Output() onEditClientButtonAction = new EventEmitter()

  onEditClient(client: Client){
    this.onEditClientButtonAction.emit(client)
  }
}
