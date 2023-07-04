import { Component, OnInit, Input } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userData = { name: '', password: '', email: '', birthday: ''};


  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserProfileComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser(): void {
    this.fetchApiData.getUser().subscribe((response) => {
      this.userData = response;
      console.log(this.userData);
      return this.userData;
    })
  }

  updateUser(): void {
    this.fetchApiData.updateUser(this.userData.name).subscribe((response) => {
      this.dialogRef.close();
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log('response ' + response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

}
