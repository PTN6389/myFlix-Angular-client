import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {
/**
 *
 * @param data
 * Display the Movie Details data in a dialog from the MovieCardComponent
 */
  constructor(
    @Inject(MAT_DIALOG_DATA)
      public data: {year: number, description: string}
  ) { }

  ngOnInit(): void {
  }

}
