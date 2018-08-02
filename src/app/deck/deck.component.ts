import { Component, Input, OnInit } from '@angular/core';
import { Jsonify } from

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
	@Input() deckName : string;
  @Input() deckList = [];
  constructor() { }

  ngOnInit() {
  }

 public addCard(card)
  {
    this.deckList.push(card);
  }

  saveDeck()
  {
    saveTextAsFile(hello, "test.json");
  }

  function saveTextAsFile (data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        var blob = new Blob([data], {type: 'text/plain'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')


  removeCard(event)
  {
  	var i;
    var name : string = event;
  	for(i = 0; i < this.deckList.length; i++)
  	{
  		if(this.deckList[i].name == name)
  		{
  			this.deckList.splice(i, 1);
        break;
  		}
  	}
  }

}
