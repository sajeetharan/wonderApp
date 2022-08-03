import { Component, Input} from '@angular/core';
import { Wonder } from '../../interfaces/wonders.interface';

@Component({
  selector: 'app-wonder-card',
  templateUrl: './wonder-card.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
      min-height: 85vh;
    }

    .mat-card-image{
      max-height: 60vh;
      max-width: 20vw;
    }
    
`]
})
export class WonderCardComponent {

  @Input() wonder!:Wonder; 

  constructor() { }


}
