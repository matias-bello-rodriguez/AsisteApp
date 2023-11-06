import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { AuthService } from './../../services/auth.service';
import { Component, Query} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { querystring } from '@firebase/util';
import { query, collection, onSnapshot, getFirestore} from '@firebase/firestore';
import { ClaseI, UserI } from '../../../../models/models';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qrfinal',
  templateUrl: './qrfinal.page.html',
  styleUrls: ['./qrfinal.page.scss'],
})

export class QrfinalPage {
  asistencia: UserI;
  code:any;
  username: any;
  clases: any[]= [];

  
    constructor(
  
      private menu:MenuController,
      private db: FirestoreService,
      private AuthService:AuthService,
      private animacion:InteractionService,
      private barcodeScanner: BarcodeScanner,
    ) {
      
  
  
    }
    ngOnInit() {
    }
  
    verMenu(){
      this.menu.open('first');
    }
    scan(){
      /**/
    }
      

    //create a function to save all the clases from firebase in a array
    async asis() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.code = barcodeData.text;
        this.db.getCollection<ClaseI>('Clases').subscribe(res => {
          this.clases = res;
        });
        for(let i = 0; i < this.clases.length; i++) {
          if (this.clases[i].asignatura === this.code) {
            // order to add a new date to the array of dates and add 1 to the attendance
            let fechas = this.clases[i].fechas;
            let asistencia = this.clases[i].asistencia;
            this.db.updateDoc({
              asignatura: this.code,
              fechas: fechas.concat(new Date()),
              asistencia: asistencia + 1,
            }, 'Clases', this.code);
            console.log('Class exists, adding attendance');
            break;
          } else if (i === this.clases.length - 1){
            this.db.createDoc({
              asignatura: this.code,
              fechas: [new Date()],
              asistencia: 1,
            }, 'Clases', this.code);
            console.log('Class created');
            break;
          }
        }
      }   
      ).catch(err => {
        console.log('Error', err);
      }
      );
    }
  }

      /*try {
        const courses = await this.db.getCollection('Clases').toPromise();
        courses.forEach(course => this.clases.push(course));
      } catch (err) {
        console.error(err);
      }
      console.log(this.clases);
    }
  }
      /*console.log(this.clases);
            console.log(this.clases);
            let fechas: any = this.clases.fechas;
            let asistencia: any = this.clases.asistencia;
            let data: any = {
              asignatura: this.code,
              fechas: fechas.concat(new Date()),
              asistencia: asistencia + 1,
            }
            console.log(data);
            this.db.setDoc(data, 'Clases', this.code).then((res) => {
              console.log('Asistencia añadida');
            })
            console.log('Class exists, assitance added')

          }
        else{
          //if dont existe create a new class on firebase
          let fechas: any = [new Date()];
          this.db.createDoc({
            asignatura: this.code,
            fechas: fechas,
            asistencia: 1,
          }, 'Clases', this.code);
          console.log('Class created');
        }
      }

    }
    
    





    /*this.database.createDoc(data).then((res) => {
      console.log('se a creado correctamente',res);
      this.animacion.showLoading;
      this.animacion.presentToast('Ha quedado presente');
      
    })*/


