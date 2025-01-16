export interface VideosData {
  created_at: string
  updated_at: string
  title: string
  base_filename: string
  poster: string
  thumbnail: string
  description: string
  state: string
  is_vertical: boolean
  tags: string[]
  downloads: any
  views: any
  likes: number
  contributor_id: any
  published_at: string
  playback_id: string
  aspect_ratio: string
  duration: string
  max_height: number
  max_width: number
  video_id: string
  d2v_ratio: number
  id: string
  published_at_timestamp: number
  downloads_last_month: number
  scene: any
  urls: Urls
  blur_hash: string
  is_premium: boolean
  fps: number
  is_ai_generated: boolean
  slug: string
  objectID: string
}
export interface Urls {
  mp4: string
  mp4_preview: string
  mp4_download: string
}

