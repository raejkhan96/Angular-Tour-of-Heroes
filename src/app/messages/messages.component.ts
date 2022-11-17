import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Constructor has parameter that declares a public messageService property
  // Angular injects the singleton MessageService into that property when it creates MessagesComponent
  // messageService must be public because it is going to be bound in the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
