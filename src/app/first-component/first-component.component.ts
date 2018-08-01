import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

title: string = "Component";
isEnabled: boolean = true;
@Input() ComponentName: string;
@Input() State: boolean;

constructor() { }
ngOnInit() {}
  getColor()
  {
  	if(this.isEnabled == true)
  	{
  		return "black";
  	}
  	else
  	{
  		return "grey";
  	}
  }

  setState()
  {
  	console.log("Enable/Disable clicked");
  	this.isEnabled = !this.isEnabled;
  }

}
