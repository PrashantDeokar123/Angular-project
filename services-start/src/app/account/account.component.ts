import { Component,Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService,AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  accountsService: any;
  

  constructor(private loggingService:LoggingService){

  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status);
    this.loggingService.logStatusChange(status);
  }
}