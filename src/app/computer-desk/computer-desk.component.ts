import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-computer-desk',
  templateUrl: './computer-desk.component.html',
  styleUrls: ['./computer-desk.component.scss']
})
export class ComputerDeskComponent implements OnInit {

  constructor(private http:HttpService, public editor: EditorService) { }

  ngOnInit(): void {
    this.refreshBoxes();
    this.refreshSettings()
  }

  boxId;
  boxes;

  refreshBoxes(){
    this.http.getBoxesId(1).subscribe({
      next: data => {
        this.boxes = data;
        console.log(this.boxes);
      }
    });
  }
  
  refreshSettings(){
    this.http.getSettings(1).subscribe({
      next: data => {
        console.log(data);
        this.editor.settings = data;
      }
    });
  }

  setColor(){
    this.editor.saveColor(1,this.boxId);
    this.editor.setColor(this.boxes[this.boxId], this.editor.color);
  }

  getColor(index){
    if(this.boxes == null || index >= this.boxes.length || this.isOff(this.boxes[index])){
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
    // console.log('updating')
    Object.keys(color).forEach(k => {
      // console.log(`${k}`);
      document.documentElement.style.setProperty(`--${k}`, color[k])
    });
  }
}
