import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() msg: string;
  @Output() sendToParent = new EventEmitter();

  ChildMsg = "Message from Child"

  constructor() { }

  ngOnInit() {
    this.sendToParent.emit(this.ChildMsg);
  }

}
