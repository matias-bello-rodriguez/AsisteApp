import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qraprobado',
  templateUrl: './qraprobado.page.html',
  styleUrls: ['./qraprobado.page.scss'],
})


@Component({
  selector: 'app-qraprobado',
  templateUrl: './qraprobado.page.html',
  styleUrls: ['./qraprobado.page.scss'],
})

export class QraprobadoPage {

  username:string='';
  
    constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,
      private menu:MenuController
    ) {
  
      this.activatedRouter.queryParams.subscribe(params=>{
        if(this.router.getCurrentNavigation().extras.state){
  
          let usuario=this.router.getCurrentNavigation().extras.state.miusuario;
          console.log("Llego el state: " + usuario.username);
          this.username=usuario.username;
        }
        
      })
  
  
    }
  
    verMenu(){
      this.menu.open('first');
    }
  
  }