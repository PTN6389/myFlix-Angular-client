import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { MatDialog } from '@angular/material/dialog';
import { DirectorComponent } from '../director/director.component';
import { MoveDetailComponent } from '../move-detail/move-detail.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }
/**
 * Return the list of all movies
 */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   *
   * @param name
   * @param description
   * Pass in the Genre details to display on the GenreComponent
   */

  openGenreDetail(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name,
        description: description
      }
    })
  }

  /**
   *
   * @param name
   * @param bio
   * @param birthYear
   * @param deathYear
   * Pass in the Director details to display on the DirectorComponent
   */

  openDirectorDetail(name: string, bio: string, birthYear: number, deathYear: number): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name: name,
        bio: bio,
        birthYear: birthYear,
        deathYear: deathYear
      }
    })
  }

  /**
   *
   * @param year
   * @param description
   * Pass in the Movie Details to display on the MovieDetailsComponent
   */
  openMovieDetail(year: number, description: string): void {
    this.dialog.open(MoveDetailComponent, {
      data: {
        year: year,
        description: description
      }
    })
  }

  addFavorite() {
    console.log('addedfavorite')
    //this.fetchApiData.addFavoriteMovie(userName: string, movieId: any)
  }

}
