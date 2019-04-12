import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MyLocation, Environment, HtmlInfoWindow, GoogleMapsAnimation, LatLng, MarkerOptions, GoogleMapOptions, LocationService } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-directions-tab',
  templateUrl: './directions-tab.page.html',
  styleUrls: ['./directions-tab.page.scss'],
})
export class DirectionsTabPage {

  map: GoogleMap;
  locations: any;
  error: any;
  location: any;
  toiletID: any;
  updatedLocation: any;
  pointOfInterest: any;
  variable = false;
  latLng: LatLng;

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

      this.map.moveCamera({
        target: location.latLng, 
        zoom: 18, 
      });
 
      let marker: Marker = this.map.addMarkerSync({
        icon: 'blue',
        position: location.latLng,      
      });

      let htmlInfoWindow = new HtmlInfoWindow();

      let frame: HTMLElement = document.createElement('div');
      frame.innerHTML = [         
        `
          <p>Current Location</p>
          <form>
            <ion-button type="submit" class="refreshMap">Refresh</ion-button>
          </form>
        `
        ].join(""); 
  
        frame.getElementsByClassName("refreshMap")[0].addEventListener("click", () => {
          	console.log('Map refreshed!');
        });

        htmlInfoWindow.setContent(frame, {
          width: "125px",
          height: "125px"
        });

        htmlInfoWindow.open(marker);

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
          `
            <ion-button class="updateMarker">Update</ion-button>
            <ion-button class="removeMarker">Remove</ion-button>
          `
        ].join("");        

        frame.getElementsByClassName("updateMarker")[0].addEventListener("click", () => {
          let htmlInfoWindow = new HtmlInfoWindow();

          let frame: HTMLElement = document.createElement('div');
          frame.innerHTML = [
            `
              <p>Enter details below:</p>     
              <label>Location:</label>
              <p><input type="text" id="location" name="location" required></p>
              <label>Description:</label>
              <p><input type="text" id="description" name="description" required></p>
              <label>Type:</label>
              <p><select id="typeList"></p>
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>  
                  <option>Gender Neutral</option>
                  <option>Disabled</option>
                </select>
              <p><ion-button class="updateRestroom">Update</ion-button>
              <ion-button class="closeInfoWindow">Close</ion-button></p>
            `
          ].join(",");

          frame.getElementsByClassName("updateRestroom")[0].addEventListener("click", () => {
            var location = (<HTMLInputElement>document.getElementById("location")).value;
            var description = (<HTMLInputElement>document.getElementById("description")).value;
            var type = (<HTMLSelectElement>document.getElementById("type")).value;
              
            var updateRestroomLocation = {};

            updateRestroomLocation['toiletID'] = this.locations[i]['toiletID'];
            updateRestroomLocation['location'] = location;
            updateRestroomLocation['description'] = description;
            updateRestroomLocation['type'] = type;
            updateRestroomLocation['latitude'] = this.locations[i]['latitude'];
            updateRestroomLocation['longitude'] = this.locations[i]['longitude'];
              
            this.restService.updateLocation(updateRestroomLocation).then((result) => {
              console.log(result);
              }, (err) => {
              console.log(err);
            }); 
          });

          frame.getElementsByClassName("closeInfoWindow")[0].addEventListener("click", () => {
            htmlInfoWindow.close();
          });

          htmlInfoWindow.setContent(frame, {
            width: "275px",
            height: "325px"
          });

          htmlInfoWindow.open(marker);
        });

        frame.getElementsByClassName("removeMarker")[0].addEventListener("click", () => {
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
              <p>Marker added. Do you wish to add this restroom</p>
              <ion-button class="addMarker">Add</ion-button>
              <ion-button class="removeMarker">Remove</ion-button>
            `
          ].join("");        

          frame.getElementsByClassName("addMarker")[0].addEventListener("click", () => {
            let htmlInfoWindow = new HtmlInfoWindow();

            let frame: HTMLElement = document.createElement('div');            
            frame.innerHTML = [     
              `   
                <p>Enter information below:</p>                                                                       
                <label>Location:</label>
                <p><input type="text" id="location" name="location"></p>
                <label>Description:</label>
                <p><input type="text" id="description" name="description"></p>
                <label>Type:</label>
                <p><select id="typeList"></p>
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>  
                  <option>Gender Neutral</option>
                  <option>Disabled</option>
                </select>
                <p><ion-button class="addRestroom">Submit</ion-button>
                <ion-button class="closeInfoWindow">Close</ion-button></p>                                                       
              `
            ].join("");              

            frame.getElementsByClassName("addRestroom")[0].addEventListener("click", () => {
              var location = (<HTMLInputElement>document.getElementById("location")).value;
              var description = (<HTMLInputElement>document.getElementById("description")).value;
              var type = (<HTMLSelectElement>document.getElementById("typeList")).value;

              var addRestroomLocation = {};
                
              addRestroomLocation['location'] = location;
              addRestroomLocation['description'] = description;
              addRestroomLocation['type'] = type;
              addRestroomLocation['lat'] = this.location[i]['lat'];
              addRestroomLocation['lng'] = this.location[i]['lng'];
                
              this.restService.addLocation(addRestroomLocation).then((result) => {
                console.log(result);
                }, (err) => {
                console.log(err);
              });                          
            });

            frame.getElementsByClassName("closeInfoWindow")[0].addEventListener("click", () => {
              console.log('InfoWindow closed!');

              htmlInfoWindow.close();
            });

            htmlInfoWindow.setContent(frame, {
              width: "275px",
              height: "325px"
            });

            htmlInfoWindow.open(marker);
          });

          frame.getElementsByClassName("removeMarker")[0].addEventListener("click", () => {
            console.log('Marker removed!');

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
      }
    );
  }

  async loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '', 
      // 'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAtcaMeDtBfN4lc6aYcL2gZxCoLejUj_tc'
    });
    this.map = GoogleMaps.create('map_canvas');
    this.goToMyLocation();
    this.addMarkerLocation();
    // this.addPointOfInterest();
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
}
