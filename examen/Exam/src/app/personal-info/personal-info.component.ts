import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  theNames: string = "";
  username: string = "";
  emailInvalid: boolean = true;


  FillUsername(names: string) {
    this.theNames = names;
    if(names === "") this.username = "";
    else this.username = names.replaceAll(" ", "");
  }

  ValidateEmail(email: string) {
    if(!email || email === "" || !email.includes("@") || !email.includes(".")) this.emailInvalid = true;
    else this.emailInvalid = false;
  }

  NextBtnDisabled() {
    this.theNames === "" || this.username === "" || this.emailInvalid ? true : false;
  }
  
}
