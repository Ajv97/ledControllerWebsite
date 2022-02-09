import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpService) { }

  copiedColor;
  color = {
    r:0,
    g:0,
    b:0
  };
  previous;
  settings = {
    set_id: <any>null,
    brightness: <any>null,
    day_brightness: <any>null,
    night_brightness: <any>null,
    on_off: <boolean> false
  };


  setBox(setId,boxId,color){
    this.http.putBoxesSetIdBoxId(setId,boxId,color).subscribe({
      next: () => {
      }, error: e => {
      }, complete: () => {
      }
    })
  }

  getStyledColor(){
    if(this.color == null || this.isOff(this.color))
      return '#81879E'
    return 'rgb('+this.color.r+', '+this.color.g+', '+this.color.b+')';
  }

  getStyledPrevious(){
    if(this.previous == null)
      return this.getStyledColor()
    return 'rgb('+this.previous.r+', '+this.previous.g+', '+this.previous.b+')';
  }

  getStyledCopy(){
    if(this.copiedColor == null)
      return '#81879E'
    return 'rgb('+this.copiedColor.r+', '+this.copiedColor.g+', '+this.copiedColor.b+')'
  }

  syncColors(){
    this.color.r = this.previous.r;
    this.color.g = this.previous.g;
    this.color.b = this.previous.b;
  }

  copy(){
    this.copiedColor = this.newColor();
    this.copiedColor.r = this.color.r
    this.copiedColor.g = this.color.g
    this.copiedColor.b = this.color.b
  }

  paste(setId, boxId){
    this.setBox(setId,boxId, this.copiedColor);
  }

  saveColor(setId, boxId){
    this.setBox(setId,boxId, this.color);
  }

  newColor(){
    return {r:0,g:0,b:0};
  }

  setColor(x, y){
    x.r = y.r
    x.g = y.g
    x.b = y.b
  }

  toggleOff(){
    console.log(this.settings.on_off);
    let onOff = 0;
    if(!this.settings.on_off){
      onOff = 1;
    }
    this.http.putSettingsIdOnOff(this.settings.set_id, onOff).subscribe({
      next: data => {
        this.settings.on_off = !this.settings.on_off
      }
    })
  }

  isOff(box){
    return box.r==0 && box.g==0 && box.b==0;
  }

  // Functions for settings

  setDayBrightness(){
    this.http.putSettingsIdDay(this.settings.set_id, this.settings.day_brightness).subscribe({
      next: () => { 
      },error: e => {
        console.log(e);
      }
    })
  }

  setNightBrightness(){
    this.http.putSettingsIdNight(this.settings.set_id, this.settings.night_brightness).subscribe({
      next: () => { 
      },error: e => {
        console.log(e);
      }
    })
  }
}
