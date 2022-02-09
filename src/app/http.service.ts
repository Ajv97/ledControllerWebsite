import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  urlBase = 'http://api.alexvanbeekum.com:8080/api';
  urlBase='http://localhost:8080/api';


  getBoxesId(id){
    return this._http.get<any>(this.urlBase + '/boxes/' + id);
  }

  getSettings(id){
    return this._http.get<any>(this.urlBase + '/settings/' + id)
  }

  // creat a new box for a set {boxId,setId,ledCount}
  postBox(body:string){
    return this._http.post<any>(this.urlBase + '/box', body);
  }

  // update colors r,g,b for a box from a set {r,g,b}
  putBoxesSetIdBoxId(setId:string, boxId:string, body:string){
    return this._http.put<any>(this.urlBase + '/boxes/'+ setId + '/' + boxId, body);
  }

  putSettingsIdBrightness(id,brightness){
    return this._http.put<any>(this.urlBase + '/settings/' + id +'/brightness/' + brightness, {})
  }

  putSettingsIdDay(id,brightness){
    return this._http.put<any>(this.urlBase + '/settings/' + id +'/day/' + brightness, {})
  }

  putSettingsIdNight(id,brightness){
    return this._http.put<any>(this.urlBase + '/settings/' + id +'/night/' + brightness, {})
  }

  putSettingsIdOnOff(id, on_off){
    return this._http.put<any>(this.urlBase + '/settings/' + id + '/switch/' + on_off, {})
  }
}
