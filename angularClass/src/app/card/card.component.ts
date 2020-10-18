import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('id') id: any;
  @Input('image') image: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('action') action: string;
  @Input('urlAction') urlAction: string;
  @Output('outputEvent')outputEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    const objectEvent = {
      id: this.id,
      title: this.title,
      description: this.description,
      action: this.action
    };
    this.outputEvent.emit(objectEvent);
  }

}
