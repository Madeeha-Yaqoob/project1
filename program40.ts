interface music_album{
    artist_name: string;
    title : string;
    tracks?: number; 
}
function make_album(artist_name:string,title:string,tracks?:number) :music_album {
    const album: music_album={
        artist_name:artist_name,
        title:title
    };
    if(tracks)
    {
        album.tracks=tracks;
    }
    return album;

}  
const album1: music_album = make_album("The Beatles", "Abbey Road");
console.log(album1);

const album2: music_album = make_album("Pink Floyd", "Dark Side of the Moon", 10);
console.log(album2);

const album3: music_album = make_album("Led Zeppelin", "IV", 8);
console.log(album3);



export{};