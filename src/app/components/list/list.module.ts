import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { TopSongsComponent } from './top-songs/top-songs.component';
import { TopArtistComponent } from './top-artist/top-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistFollowingComponent } from './artist-following/artist-following.component';



@NgModule({
  declarations: [
    TopSongsComponent,
    TopArtistComponent,
    PlaylistComponent,
    ArtistFollowingComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    TopSongsComponent,
    TopArtistComponent,
    PlaylistComponent,
    ArtistFollowingComponent
  ]
})
export class ListModule { }
