import { Component, Input, OnInit } from '@angular/core';

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
	var text = JSON.stringify(this.deckList),
    blob = new Blob([text], { type: 'text/plain' }),
    anchor = document.createElement('a');

	anchor.download = this.deckName + ".json";
	anchor.href = URL.createObjectURL(blob);
	anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
	anchor.click();
  }




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
