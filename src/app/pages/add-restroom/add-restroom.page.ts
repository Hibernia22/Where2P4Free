import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-restroom',
  templateUrl: './add-restroom.page.html',
  styleUrls: ['./add-restroom.page.scss'],
})
export class AddRestroomPage implements OnInit {

  toilet = { "location": "", "description": "", "type": "", "lat": "", "lng": "" };
  variable = false;

  constructor(private platform: Platform, public restService: RestService, public toastController: ToastController) {
    if (this.variable == false) {
      this.variable = true;
    }
    else {
      this.addLocation();
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Restroom has been added.',
      duration: 2000, 
      position: 'middle'
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  addLocation() {
    this.restService.addLocation(this.toilet).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  async ngOnInit() {
    this.platform.ready();
  }
}
