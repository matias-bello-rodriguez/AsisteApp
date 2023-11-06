import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { mensajess } from '../../../../models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{
  username:string='';
  mensaje: mensajess[]=[];
  subjects;
  cuadrados: any[] = [
    {id: 1, name: 'Escanear Qr', src: 'assets/icon/codigo-qr.png', background: 'rgba(27,150,181, 0.1)', url: '/qrfinal'},
    {id: 2, name: 'Mis Datos', src: 'assets/icon/informacion-personal.png', background: 'rgba(106,100,255, 0.1)', url: '/perfil'},
    {id: 3, name: 'Asignaturas', src: 'assets/icon/libro.png', background: 'rgba(255, 196, 9, 0.1)', url: '/cursos'},
    {id: 4, name: 'Asistencia', src: 'assets/icon/prueba.png', background: 'rgba(27,150,181, 0.1)', url: '/miasistencia'},
  ]

    constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,
      private menu:MenuController,
      private database:FirestoreService 
    ){
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
    
    getResultados() {

      const path = 'mensajes';
      this.database.getCollection<mensajess>(path).subscribe( res => {
          console.log('esta es la lectura', res);
          this.mensaje = res;
      })

  }
}