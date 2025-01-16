import { Component, Input, OnInit } from '@angular/core';
import { VideosData } from '../../interface/videos-data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css'
})
export class VideoPostComponent implements OnInit {
  @ Input () videos:VideosData[] = [];
  ngOnInit(): void {

  }


}
