
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { query, collection, onSnapshot, getFirestore} from '@firebase/firestore';
import { OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import { ClaseI } from '../../../../models/models';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage {
  clases: any[]= [];
  username:string='';
  
    constructor(

      private menu:MenuController,
      private AuthService:AuthService,
      private FirestoreService:FirestoreService,
      private db: FirestoreService,
    ) {
    }
    async ngOnInit() {
      await this.loadasis();
    }
    verMenu(){
      this.menu.open('first');
    }
    //get all courses from the user
    async loadasis(){
      this.db.getCollection<ClaseI>('Clases').subscribe(res => {
        res.forEach(element => {
          //get the last date of the course
          let lastDate = element.fechas[element.fechas.length-1];
          lastDate = lastDate.toDate().toLocaleDateString();
          this.clases.push({
            asignatura: element.asignatura,
            fechas: lastDate,
            asistencia: element.asistencia,
        } );
        console.log(this.clases);
        });
      }
      );
    }
}