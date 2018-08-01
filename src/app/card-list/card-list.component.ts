import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  	  	this.getJSON().subscribe(data => {
			this.fullCardList = data;
            console.log(data);
        });
  }

  addCard(cardName)
  {
  	var i;
  	for(i = 0; i < this.fullCardList.length; i++)
  	{
  		if(this.fullCardList[i].name == cardName)
  		{
  			console.log(cardName + " found");
  		}
  	}
  }

 	getJSON(): Observable<any> {
        return this.http.get("./assets/Cards/CardList.json")
    }

}
