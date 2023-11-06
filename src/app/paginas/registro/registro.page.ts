import { Route, Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../../models/models';
import{
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  datos: UserI = {
    nombre : null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'estudiante',
  }

  constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction :InteractionService,
    private Router:Router ) { }

  ngOnInit() {
  }
  async registrar(){
    this.interaction.showLoading('registrando...')
    console.log('datos ->',this.datos);
    const res = await this.auth.registarUser(this.datos).catch(error =>{
      this.interaction.closeLoading();
      this.interaction.presentToast('error')
      console.log('error');
    })
    if(res){
      console.log('exito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid=id;
      this.datos.password = null
      await this.firestore.createDoc(this.datos,path,id)
      this.interaction.closeLoading();
      this.interaction.presentToast('registrado con exito')
      this.Router.navigate(['/ingreso'])
    }
  }

}