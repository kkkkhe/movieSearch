
export function manifestF(){
	return {
        name: "movieSearchApp", 
        short_name: "MoviePwa",
        theme_color: "#141414",
        background_color: "#141414",
        display: "standalone",
        orientation: "portrait",
        scope: '/',
        start_url: "/?source=pwa",
        icons: [
			{
			  "src": "icons/512.png",
			  "sizes": "512x512",
			  "type": "image/png"
			},
			{
			  "src": "icons/256.png",
			  "sizes": "256x256",
			  "type": "image/png"
			},
			{
			  "src": "icons/192.png",
			  "sizes": "192x192",
			  "type": "image/png"
			},
			{
			  "src": "icons/and-192.png",
			  "sizes": "192x192",
			  "type": "image/png"
			},
			{
			  "src": "icons/120.png",
			  "sizes": "120x120",
			  "type": "image/png"
			},
			{
			  "src": "icons/and-96.png",
			  "sizes": "96x96",
			  "type": "image/png"
			},
			{
			  "src": "icons/72.png",
			  "sizes": "72x72",
			  "type": "image/png"
			}
		  ]
    }
}