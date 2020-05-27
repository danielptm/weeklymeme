import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('image') image: string;
  @Input('userName') userName: string;
  @Input('votes') votes: number;

  constructor() { }

  ngOnInit(): void {
  }

}