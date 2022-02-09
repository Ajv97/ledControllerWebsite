import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tv-stand',
  templateUrl: './tv-stand.component.html',
  styleUrls: ['./tv-stand.component.scss']
})
export class TvStandComponent implements OnInit {

  constructor(private http:HttpService, public editor:EditorService) { }

  ngOnInit(): void {
    this.refreshBoxes();
    this.refreshSettings()
  }

  boxId;
  boxes;

  refreshBoxes(){
    this.http.getBoxesId(0).subscribe({
      next: data => {
        this.boxes = data;
        console.log(this.boxes);
      }
    });
  }
  
  refreshSettings(){
    this.http.getSettings(0).subscribe({
      next: data => {
        this.editor.settings.brightness = data.brightness;
      }
    });
  }

  setColor(){
    this.editor.saveColor(0,this.boxId);
    this.editor.setColor(this.boxes[this.boxId], this.editor.color);
  }

  getColor(index){
    if(this.boxes == null || this.isOff(this.boxes[index])){
      return 'transparent';
    }
    let r = this.boxes[index].r;
    let g = this.boxes[index].g;
    let b = this.boxes[index].b;
    return 'rgb('+r+', '+g+', '+b+')'
  }

  isOff(box){
    return box.r==0 && box.g==0 && box.b==0;
  }

  setBoxId(boxId){
    this.boxId = boxId;
    this.editor.previous = this.boxes[boxId];
    this.editor.syncColors();
  }

  paste(){
    this.editor.paste(0,this.boxId);
    this.editor.setColor(this.boxes[this.boxId], this.editor.copiedColor);
  }

  updateColor(color: {}){
    console.log('updating')
    Object.keys(color).forEach(k => {
      console.log(`${k}`);
      document.documentElement.style.setProperty(`--${k}`, color[k])
    });
  }
}
