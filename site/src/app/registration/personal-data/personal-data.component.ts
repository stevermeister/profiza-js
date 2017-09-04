import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { CityService } from './../../city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public cities;
  public nameFocusClass: boolean;
  public reg1form: FormGroup;
  public lodingForm: boolean = false;

  constructor(private _fb: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _cityService: CityService) {
    this._cityService.getAll().subscribe(cities => this.cities = cities);
  }

  ngOnInit() {
    this.reg1form = this._fb.group({
      city: [1],
      name: ['', Validators.required],
      phone: [''],
      email: ['', Validators.email],
    });
  }

  sendData() {
    this.lodingForm = true;
    this._userService.addNew(this.reg1form.value).subscribe( newUser => {
      this._userService.tempUser = newUser;
      this.lodingForm = false;
      this._router.navigate(['registration','step-2']);
    });
  }

}
