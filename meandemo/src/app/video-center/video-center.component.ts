import { Component } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent {
  
  videos!: Array<Video>
  selectedVideo! :any;
  public hidenewVideo : boolean = true

   constructor(private _videoService:VideoService){}

  ngOnInit(){
    this._videoService.getVideos()
        .subscribe(resVideoData => this.videos = resVideoData)
  }

  onSelectVideo(video:any){
    this.selectedVideo = video
    this.hidenewVideo = true
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          this.videos.push(resNewVideo)
          this.hidenewVideo = true
          this.selectedVideo = resNewVideo
        })
  }
  newVideo(){
    this.hidenewVideo = false
  }
  onUpdateVideoEvent(vid:Video){
    this._videoService.updateVideo(vid)
        .subscribe(resUpdatedVideo => vid = resUpdatedVideo)
    this.selectedVideo = null;
  }
}
