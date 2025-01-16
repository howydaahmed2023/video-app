import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideosData } from '../interface/videos-data';
const apiUrl = environment.apiUrl
const apiKey= environment.apiKey
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private http = inject(HttpClient)
 getVideos():Observable<VideosData[]>{
  return this.http.get<VideosData[]>(`${apiUrl}?api_key=${apiKey}&urls=true&page=1`)
 }
 searchVideos(text:string):Observable<VideosData[]>{
  return this.http.get<VideosData[]>(`${apiUrl}?query={text}&api_key=${apiKey}&urls=true`)
 }
 getVideoId(id:string):Observable<VideosData[]>{
  return this.http.get<VideosData[]>(`${apiUrl}/${id}?api_key=${apiKey}&urls=true`)
 }
 getMoreVideos(page:number=0):Observable<VideosData[]>{
return this.http.get<VideosData[]>(`${apiUrl}?api_key=${apiKey}&urls=true&page=${page}`)
 }
}
