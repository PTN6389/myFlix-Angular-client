import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
      public data: {year: number, description: string}
  ) { }

  ngOnInit(): void {
  }

}
