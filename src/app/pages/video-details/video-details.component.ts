import { Component, inject, OnInit } from '@angular/core';
import { VideosData } from '../../interface/videos-data';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { LikesComponent } from '../../components/likes/likes.component';

@Component({
  selector: 'app-video-details',
  standalone: true,
  imports: [CommonModule,LikesComponent],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css'
})
export class VideoDetailsComponent implements OnInit {
  videoData: any |VideosData[];
  private service = inject(ServiceService)
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res:ParamMap)=>{
      console.log('paramMap',res.get('id'))
      const id =String(res.get('id'))
      this.service.getVideoId(id).subscribe((res:any)=>{
        console.log(res)
       if(!res){
         this.router.navigateByUrl('/')
          return
        }
        this.videoData = res
      })



    })
  }

}
