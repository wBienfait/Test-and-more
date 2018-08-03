import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-project';
  deck : DeckComponent;
  deckList = [];

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

addCardToDeck(event)
{
	var newCard = event;
	if(this.isDeckCreated())
	{
		this.deck.addCard(newCard);
	}

}

loadSelectedDeck(elementId)
{
	var fileSelected = (<HTMLInputElement>document.getElementById(elementId)).files[0].name;
	if(fileSelected != null)
	{
		var fileData : object = [];
		this.getJSON("./assets/Cards/" + fileSelected).subscribe(data => {
			this.deckList = data;
			this.deck = new DeckComponent();
			this.deck.deckName = fileSelected;
			this.deck.deckList = this.deckList;
        });
	}
}
getJSON(path): Observable<any> {
        return this.http.get(path);

    }
constructor(private http: HttpClient){};

}
