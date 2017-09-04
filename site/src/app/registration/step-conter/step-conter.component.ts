import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profiza-step-conter',
  templateUrl: './step-conter.component.html',
  styleUrls: ['./step-conter.component.scss']
})
export class StepConterComponent implements OnInit {

  @Input() selectedStep: number;

  constructor() { }

  ngOnInit() {
  }

}
