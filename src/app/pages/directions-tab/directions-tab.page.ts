import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MyLocation, Environment, HtmlInfoWindow, GoogleMapsAnimation, LatLng, MarkerOptions } from '@ionic-native/google-maps/ngx';
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
          `
            <ion-button class="updateMarker">Update</ion-button>
            <ion-button class="removeMarker">Remove</ion-button>
          `
        ].join("");        

        frame.getElementsByClassName("updateMarker")[0].addEventListener("click", () => {
          console.log('Marker updated!');                    

          let htmlInfoWindow = new HtmlInfoWindow();

          let frame: HTMLElement = document.createElement('div');
          frame.innerHTML = [
            `
              <p>Enter details below:</p>
              <form>
                <label>Location:</label>
                <p><input type="text" id="location" name="location"></p>
                <label>Description:</label>
                <p><input type="text" id="description" name="description"></p>
                <label>Type:</label>
                <p><input type="text" id="type" name="type"></p>
                <ion-button type="submit" class="updateRestroom">Update</ion-button>
                <ion-button class="closeInfoWindow">Close</ion-button>
            `
          ].join(",");

          frame.getElementsByClassName("updateRestroom")[0].addEventListener("click", () => {
            console.log('Restroom added!');

            var location = (<HTMLInputElement>document.getElementById("location")).value;
            var description = (<HTMLInputElement>document.getElementById("description")).value;
            var type = (<HTMLInputElement>document.getElementById("type")).value;
              
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
                <p>Marker added. Do you wish to add this restroom?</p>
                <ion-button class="addRestroom">Add</ion-button>
                <ion-button class="closeInfoWindow">Close</ion-button>
              `
            ].join(",");
            frame.innerHTML = [     
              `   
                <p>Enter information below:</p>        
                <form>                         
                  <label>Location:</label>
                  <p><input type="text" id="location" name="location"></p>
                  <label>Description:</label>
                  <p><input type="text" id="description" name="description"></p>
                  <label>Type:</label>
                  <p><input type="text" id="type" name="type"></p>
                  <ion-button type="submit" class="addRestroom">Submit</ion-button>
                  <ion-button class="closeInfoWindow">Close</ion-button>       
                </form>       
              `
            ].join("");              

            frame.getElementsByClassName("addRestroom")[0].addEventListener("click", () => {
              var location = (<HTMLInputElement>document.getElementById("location")).value;
              var description = (<HTMLInputElement>document.getElementById("description")).value;
              var type = (<HTMLInputElement>document.getElementById("type")).value;
              
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

  // addPointOfInterest() {
  //   this.map.on(GoogleMapsEvent.POI_CLICK).subscribe(
  //     (data) => {
  //       console.log(data[2]['lat']);
  //       console.log(data[2]['lng']);
        
  //       let marker: Marker = this.map.addMarkerSync({
  //         position: {
  //           lat: data[2]['lat'],
  //           lng: data[2]['lng']
  //         }
  //       });          

  //       let htmlInfoWindow = new HtmlInfoWindow();

  //       let frame: HTMLElement = document.createElement('div');
  //       frame.innerHTML = [
  //         `
  //           <p>Marker added. Do you wish to add this restroom?</p>
  //           <ion-button class="addPointOfInterest">Add</ion-button>
  //           <ion-button class="removeMarker">Remove</ion-button>
  //         `
  //       ].join(",");

  //       frame.getElementsByClassName("addPointOfInterest")[0].addEventListener("click", () => {
  //         console.log('Restroom added!');
  //       });

  //       frame.getElementsByClassName("removeMarker")[0].addEventListener("click", () => {
  //         console.log('Marker removed!');

  //         marker.remove();
  //       });

  //       htmlInfoWindow.setContent(frame, {
  //         width: "275px", 
  //         height: "125px"
  //       });

  //       marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //         htmlInfoWindow.open(marker);
  //       });
  //     }
  //   )
  // }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '', 
      'API_KEY_FOR_BROWSER_DEBUG': ''
      // 'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD2Epl4sTOB8doQThPI8iApvzssOLng60o'
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
