import { Component, OnInit } from '@angular/core';
import { VideosData } from '../../interface/videos-data';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { VideoPostComponent } from '../../components/video-post/video-post.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule,VideoPostComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  text:string= '';
  videos:VideosData[]=[];

  constructor(private activatedRoute : ActivatedRoute ,private api : ServiceService){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    console.log(params['text'])
    this.text=params['text'];

    this.api.searchVideos(params['text']).subscribe((res:any)=>{
     console.log(res)
     this.videos = res.hits


    })
   })
}
}
