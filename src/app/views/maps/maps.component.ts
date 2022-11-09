import { Component } from '@angular/core';

import { MessageService } from './../../shared/services/message.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent {
  constructor(private message: MessageService) {}

  public openToastSuccess() {
    this.message.show('success', 'Usuário salvo com sucesso!');
  }

  public openToastError() {
    this.message.show('error', 'Falha ao salvar usuário.');
  }

  public openToastInfo() {
    this.message.show('info', 'Verifique os campos por favor!');
  }

  public openToastWarning() {
    this.message.show('warning', 'Bateria do dispositivo necessita atenção.');
  }
}
