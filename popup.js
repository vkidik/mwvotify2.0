import { spotifyAPI } from "./spotifyData.js"

class MainApp{
    constructor(token){
        this.token = token
        this.spotifyAPI = new spotifyAPI(`${this.token}`)

        this.imgTrack = document.querySelector("#track")
        this.btn = document.querySelector("#toogle-play")

        setTimeout(() => {
            this.getCurrentPlaying(this.spotifyAPI)
        }, 1000);
    }
    getCurrentPlaying(api){
        api.getRequest('getCurrentPlaying').then(result => {
            console.log(result);
        })
    }
}

const token = prompt("Enter your API token from Spotify account")

document.addEventListener('DOMContentLoaded', ()=>{
    window.MainApp = new MainApp(token)
})