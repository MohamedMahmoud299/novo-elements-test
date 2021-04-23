import { Component } from '@angular/core';

import { NovoModalParams, NovoModalRef, IDataTableColumn } from 'novo-elements';

import {Sendout} from '../../bullhorn.entity';

@Component({
  selector: 'platform-configure-modal',
  templateUrl: './configure-modal.component.html',
  styleUrls: ['./configure-modal.component.scss']
})
export class ConfigureColumnsModalComponent {
  public columns: IDataTableColumn<Sendout>;

  constructor(private modalRef: NovoModalRef, private params: NovoModalParams) {
    this.columns = params['columns'];
  }

  public close(): void {
    this.modalRef.close();
  }

  public save() {
    this.modalRef.close(this.columns);
  }
}
