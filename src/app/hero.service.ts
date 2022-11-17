import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // declare private messageService property 
  // Angular injects the singleton MessageService into that property when it creates HeroService
  constructor(private messageService: MessageService) { }

  // Observable<Hero[]> emits a single value, the array of mock heroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
