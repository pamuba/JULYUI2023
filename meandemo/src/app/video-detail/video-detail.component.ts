import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {
  @Input() video:any;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();
  editTitle:boolean = false;

  onTitleClick(){
    this.editTitle=true;
  }
  ngOnChanges(){
    this.editTitle = false;
  }
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }
  
}
