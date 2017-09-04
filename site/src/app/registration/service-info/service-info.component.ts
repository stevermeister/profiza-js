import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {

  public reg2form: FormGroup;
  public lodingForm: boolean = false;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.reg2form = this._fb.group({
      description: [''],
      experience: [''],
      speciality: ['']
    });
  }

  sendData() {
    this.lodingForm = true;
    this._userService.tempUser = Object.assign({}, this._userService.tempUser, this.reg2form.value)
    this._userService.update(this._userService.tempUser).subscribe(_=> {
      this.lodingForm = false;
      this._router.navigate(['registration','step-3']);
    });
  }

}
