import { Component } from '@angular/core';
import { DeckComponent } from './deck/deck.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-project';
  deck : DeckComponent;

createDeck(deckName)
{
	this.deck = new DeckComponent();
	this.deck.deckName = (<HTMLInputElement>document.getElementById(deckName)).value;
}

isDeckCreated()
{
	if(this.deck != null) return true;
	else return false;
}
constructor(){};

}
