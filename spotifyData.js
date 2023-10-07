export class spotifyAPI {
    constructor(token) {
        this.token = token
    }

    async getRequest(data, ...args) {
        if (this[data]) {
            // return (await this[data]())
            return (await this[data].apply(this, args))
        }
    }

    async getWebAPI(endpoint, method, body) {
        try {
            const res = await fetch(`https://api.spotify.com/${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                },
                method,
                body: JSON.stringify(body)
            });
            console.log("ok");
            return await res.json();   
        } catch (error) {
            console.error("INVALID TOKEN OR ANOTHER ERROR")
            console.error(error)
            alert("error")
        }
    }

    async getCurrentPlaying() {
        return (await this.getWebAPI('v1/me/player/currently-playing', 'GET'));
    }
}