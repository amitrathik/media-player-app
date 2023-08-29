const baseUrl = 'http://localhost:8080/videos'

export const loadVideos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}
