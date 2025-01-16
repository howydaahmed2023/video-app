import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { VideosData } from '../../interface/videos-data';


@Component({
  selector: 'app-load-more',
  standalone: true,
  imports: [],
  templateUrl: './load-more.component.html',
  styleUrl: './load-more.component.css'
})
export class LoadMoreComponent {

  @ Input() videos:VideosData[]=[]
  @ Output() videoEvent =new EventEmitter<VideosData[]>()

page:number = 0
private service = inject(ServiceService)

loadMoreVideos(){
  this.page ++
  this.service.getMoreVideos(this.page).subscribe((res:any)=>{
this.videos = res.hits
console.log(this.videos)
this.videoEvent.emit(this.videos)
  })

}
handleClick(){

}
}
