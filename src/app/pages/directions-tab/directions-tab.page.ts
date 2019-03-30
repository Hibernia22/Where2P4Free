import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MyLocation, Environment, HtmlInfoWindow, GoogleMapsAnimation, LatLng } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-directions-tab',
  templateUrl: './directions-tab.page.html',
  styleUrls: ['./directions-tab.page.scss'],
})
export class DirectionsTabPage implements OnInit {

  map: GoogleMap;
  locations: any;
  error: any;
  location: any;
  toiletID: any;
  variable = false;

  constructor(private platform: Platform, public restService: RestService) {
    if (this.variable = false) {
      this.variable = true;
    }
    else {
      this.getLocations();
    }
  }

  goToMyLocation() { 
    this.map.getMyLocation().then((location: MyLocation) => {
 
      this.map.animateCamera({
        target: location.latLng,
        zoom: 15,
        duration: 5000
      });
 
      let marker: Marker = this.map.addMarkerSync({
        title: 'Current location.',
        position: location.latLng,      
      });
 
      marker.showInfoWindow();
 
      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
            console.log("Click MAP",data);
        }
      );
    })
  }

  getLocations() {
    this.restService.getLocations().then(data => {
      this.locations = data;
      for (let i = 0; i < this.locations.length; i++) {
        let marker: Marker = this.map.addMarkerSync({
          position: {
            lat: this.locations[i]['latitude'],
            lng: this.locations[i]['longitude'],
          },       
        });

        let htmlInfoWindow = new HtmlInfoWindow();

        let frame: HTMLElement = document.createElement('div');
        frame.innerHTML = [     
          `<p>` + this.locations[i]['location'] + `</p>`,      
          `<ion-button class="updateMarker">Update</ion-button>
            <ion-button class="removeMarker">Remove</ion-button>`
        ].join("");        

        frame.getElementsByClassName("updateMarker")[0].addEventListener("click", () => {
          console.log('Marker updated!');
        });

        frame.getElementsByClassName("removeMarker")[0].addEventListener("click", () => {
          console.log('Marker removed!');

          var removeMarkerLocation =  {};
          removeMarkerLocation['toiletID'] = this.locations[i]['toiletID'];

          this.restService.removeLocation(removeMarkerLocation).then((result) => {
            console.log(result);
            }, (err) => {
            console.log(err);
          });

          marker.remove();
        });
            
        htmlInfoWindow.setContent(frame, {
          width: "275px",
          height: "125px"
        });

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
        });
      }
    });
  }
  
  addMarkerLocation() {
    this.map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe(
      (data) => {
        this.location = data;
        for (let i = 0; i < this.location.length; i++) {
          let marker: Marker = this.map.addMarkerSync({
            position: {
              lat: this.location[i]['lat'],
              lng: this.location[i]['lng'],
            },       
          });
  
          let htmlInfoWindow = new HtmlInfoWindow();
  
          let frame: HTMLElement = document.createElement('div');
          frame.innerHTML = [     
            `
            <p>Marker added. Do you wish to add this restroom?</p>    
            <ion-button class="addMarker">Add</ion-button>
            <ion-button class="removeMarker">Remove</ion-button>
            `
          ].join("");        
  
          frame.getElementsByClassName("addMarker")[0].addEventListener("click", () => {
            console.log('Marker added!');
          });
  
          frame.getElementsByClassName("removeMarker")[0].addEventListener("click", () => {
            console.log('Marker removed!');
  
            marker.remove();
          });
              
          htmlInfoWindow.setContent(frame, {
            height: "125px"
          });
  
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            htmlInfoWindow.open(marker);
          });
        }
      }
    );
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '', 
      'API_KEY_FOR_BROWSER_DEBUG': ''
      // 'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD2Epl4sTOB8doQThPI8iApvzssOLng60o'
    });
    this.map = GoogleMaps.create('map_canvas');
    this.goToMyLocation();
    this.addMarkerLocation();
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
}
