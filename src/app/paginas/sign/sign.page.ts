

import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';






@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
  providers:[AuthService],
})
export class SignPage {
  



  constructor(public AuthService: AuthService ) {}
  ngOnInit() {
    
  }
  onReset(){
  
  }
  
  

}

