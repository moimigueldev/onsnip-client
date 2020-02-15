import { GenreList } from './genreList';

export interface TracksBundle {
    tracksSavedLastYear: number;
    tracksSavedThisYear: number;
    tracksSavedThisMonth: number;
    totalTracks: number;
    favoriteGenre: GenreList
}

export interface FavoriteTrack {
    name: string;
    image: string;
    album: string;
}