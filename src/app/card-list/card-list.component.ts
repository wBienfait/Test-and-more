import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
fullCardList = [];
@Output() selectedCard : EventEmitter<object> = new EventEmitter<object>();
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  	  	this.getJSON().subscribe(data => {
			this.fullCardList = data;
            console.log(data);
        });
  }

  addCard(event)
  {
  	var i;
    var cardName = event;
  	for(i = 0; i < this.fullCardList.length; i++)
  	{
  		if(this.fullCardList[i].name == cardName)
  		{
          this.selectedCard.emit(this.fullCardList[i]);
          break;
  		}
  	}
  }

 	getJSON(): Observable<any> {
        return this.http.get("./assets/Cards/CardList.json")

    }

}
