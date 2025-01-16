import { VideoPostComponent } from './../../components/video-post/video-post.component';
import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { VideosData } from '../../interface/videos-data';
import { RouterLink } from '@angular/router';
import { LoadMoreComponent } from '../../components/load-more/load-more.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,VideoPostComponent,LoadMoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  videos:VideosData[] = [];
  private service = inject(ServiceService)
  ngOnInit(): void {
this.loadVideos()
  }
  loadVideos(){
    this.service.getVideos().subscribe((res:any)=>{
      console.log(res)
      this.videos = res.hits
      console.log(this.videos)
    })
  }
receiveVideos(videos:VideosData[]){
this.videos = videos

}
}
