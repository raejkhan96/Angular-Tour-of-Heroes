import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  // selector is a pattern of elements that tells the browser which HTML elements should be selected
  // to have CSS elements
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes:  Hero[] = [];
 
 // private heroService parameter of type HeroService to the constructor
 constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // Observable class, allows us to make asynchronous calls
  // This is useful when the HeroService is actually making requests to a remote server
  // Waits for observable to emit the array of heroes, which could happen now or in several minutes
  // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property
  getHeroes(): void {
    this.heroService.getHeroes() 
      .subscribe(heroes => this.heroes = heroes);
  }

 
}
