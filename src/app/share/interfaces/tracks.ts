import { GenreList } from './genreList';

export interface TracksBundle {
    tracksSavedLastYear: number;
    tracksSavedThisYear: number;
    tracksSavedThisMonth: number;
    totalTracks: number;
    favoriteGenre: GenreList
}