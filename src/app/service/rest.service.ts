import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://where2p4free.pythonanywhere.com/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getLocations() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/findLocation").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addLocation(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/addLocation", JSON.stringify(data), httpOptions).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  updateLocation(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/updateLocation", JSON.stringify(data), httpOptions).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  removeLocation(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/removeLocation", JSON.stringify(data), httpOptions).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
