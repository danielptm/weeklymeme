import {Component, Input, OnInit} from '@angular/core';
import {Meme} from "../../model/meme";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('meme') meme: Meme;
  @Input('isExample') isExample: boolean;
  @Input('isDownload') isDownload: boolean;
  @Input('isWinner') isWinner: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
