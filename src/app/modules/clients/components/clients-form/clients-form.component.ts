import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Client, ClientStatus} from "../../models/clients.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getLoading} from "../../store/selectors/clients.selector";

//TODO implement FormGroup
//TODO form validation
@Component({
  selector: 'clients-form',
  templateUrl: './clients-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsFormComponent implements OnInit,OnChanges{
  @Input() clientToEditData: Client | null = null;
  @Output() onSaveFormButtonAction = new EventEmitter<Client>()

  formData: Client = {
    name: '',
    cnpj: '',
    status: ClientStatus.INACTIVE
  }

  loading$: Observable<boolean> | undefined;

  constructor(private cdr: ChangeDetectorRef, private store$: Store) {
  }

  ngOnInit() {
    this.loading$ = this.store$.select(getLoading);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['clientToEditData'].currentValue){
      this.formData = {...changes['clientToEditData'].currentValue}
      this.cdr.markForCheck();
    }
  }

  onSaveForm(){
    this.onSaveFormButtonAction.emit({...this.formData})
  }
}
