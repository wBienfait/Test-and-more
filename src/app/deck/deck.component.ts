import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
	@Input() deckName : string;
deckList = [];
  constructor() { }

  ngOnInit() {
  }

  addCard()
  {
  	this.deckList.push({ "name" : "Card1", "image" : "./assets/Cards/Card1.jpg"});
  }

  removeCard(cardName)
  {
  	var i;
  	for(i = 0; i < this.deckList.length; i++)
  	{
  		if(this.deckList[i].name == cardName)
  		{
  			this.deckList.splice(i, 1);
  		}
  	}
  }

}
