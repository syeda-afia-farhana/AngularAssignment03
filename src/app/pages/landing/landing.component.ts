import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public cardList: Card[] = [];

  constructor() {
    this.cardList = this.getCardList();
  }

  ngOnInit(): void {
  }


  private getCardList(): Card[]{
    let allCard: Card[];
    allCard = [];

    allCard.push({title: 'HTML-CSS', count: 3, frequent: 'Weekly', body: 'This is html Component.'});
    allCard.push({title: 'JavaScript', count: 2, frequent: 'Weekly', body: 'This is JavaScript Component.'});
    allCard.push({title: 'Angular', count: 1, frequent: 'Monthly', body: 'This is Angular Component.'});
    return allCard;
  }
}
