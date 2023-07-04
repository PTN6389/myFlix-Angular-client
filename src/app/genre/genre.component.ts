import { Component, OnInit, Inject } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor(
    public fetchApiData: UserRegistrationService,
    @Inject(MAT_DIALOG_DATA)
      public data: {name: string, description: string}
    )
    { }

  ngOnInit(): void {

  }



}
