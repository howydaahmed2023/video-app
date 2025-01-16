import { CommonModule } from '@angular/common';
import { VideosData } from './../../interface/videos-data';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent implements OnInit {

  @ Input () videoData: any |VideosData[]
  isLiked?: boolean ;
  ngOnInit(): void {

  }
numberOfLikes :number = 0 ;
increaseLikes(){
  this.videoData.likes +=this.isLiked ? -1:1
  this.isLiked =!this.isLiked
}
decreaseLikes(){
this.videoData.likes -=this.isLiked ? 1:0
this.isLiked =!this.isLiked


}
}
