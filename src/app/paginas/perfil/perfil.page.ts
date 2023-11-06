import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserI } from '../../../../models/models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  uid: string = null;
  info: UserI = null;

  constructor(
    private menu:MenuController,
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) { }

  async ngOnInit() {
    console.log('estoy en mi perfil');
    this.getUid();
    this.authService.stateUser().subscribe( res => {
      console.log('en perfil - estado de autenticacion ->', res);
    })

  }
  async getUid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid = uid;
    console.log('uid -> ', this.uid);
    this.getInfoUser();
    }else{
      console.log('no existe uid');
    }
  }
  getInfoUser(){
    const path = 'Usuarios';
    const id = this.uid;
    this.firestoreService.getDoc<UserI>(path, id).subscribe( res => {
      if(res) {
        this.info = res;
      }
    console.log('datos son ->', res);

    })
  }

  verMenu(){
    this.menu.open('first');
  }
}
