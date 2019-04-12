import { Component } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-restrooms-tab',
  templateUrl: './restrooms-tab.page.html',
  styleUrls: ['./restrooms-tab.page.scss'],
})
export class RestroomsTabPage {

  toilets: any;

  constructor(public restService: RestService) {
    this.getLocations();
   }

  getLocations() {
    this.restService.getLocations().then(data => {
      this.toilets = data;
    });
  }
}
