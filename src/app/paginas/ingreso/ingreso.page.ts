import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import{
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
 credenciales = {
  correo:null,
  password: null
 }


  constructor(private auth: AuthService ,
              private interaction: InteractionService,
              private router: Router) {}

  ngOnInit() {}
  async login(){
    await this.interaction.showLoading('ingresando...')
    console.log('credenciales',this.credenciales);
    const res = await this.auth.login(this.credenciales.correo,this.credenciales.password).catch(error =>{
      console.log('error')
      this.interaction.closeLoading();
      this.interaction.presentToast('usario o contraseña invalida')
    })
    if(res){
      console.log('res ->',res)
      this.interaction.closeLoading();
      this.interaction.presentToast('ingreso exitoso')
      this.router.navigate(['/menu'])
    }
  }



}


