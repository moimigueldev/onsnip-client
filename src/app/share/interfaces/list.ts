export interface ArtistList {
    name: string;
    image: string;
    followers?: number;
    genres: string[]
}

export interface TopSongs {
    name: string,
    image: string,
    duration: string,
    album: string
}

export interface Playlist {
    name: string;
    image: string;
    total: number
}