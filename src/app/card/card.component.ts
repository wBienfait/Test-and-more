import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() CardName: string;
	@Input() CardImageSrc: string;
	@Output() newCard : EventEmitter<string> = new EventEmitter<string>();
	hide : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  addCard()
  {
  	//this.hide = false;
  	this.newCard.emit(this.CardName);
  }

}
