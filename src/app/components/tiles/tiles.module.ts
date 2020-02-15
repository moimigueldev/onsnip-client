import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThisYearComponent } from './this-year/this-year.component';
import { ThisMonthComponent } from './this-month/this-month.component';
import { LastYearComponent } from './last-year/last-year.component';
import { GenreComponent } from './genre/genre.component';
import { ArtistComponent } from './artist/artist.component';
import { TotalSongsComponent } from './total-songs/total-songs.component';
import { ShareModule } from 'src/app/share/share.module';
import { GeneralTracksComponent } from './general-tracks/general-tracks.component';



@NgModule({
  declarations: [
    ThisYearComponent,
    ThisMonthComponent,
    LastYearComponent,
    GenreComponent,
    ArtistComponent,
    TotalSongsComponent,
    GeneralTracksComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ThisYearComponent,
    ThisMonthComponent,
    LastYearComponent,
    GenreComponent,
    ArtistComponent,
    TotalSongsComponent,
    GeneralTracksComponent
  ]
})
export class TilesModule { }
