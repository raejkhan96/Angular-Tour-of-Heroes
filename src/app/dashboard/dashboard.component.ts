import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// The class below is like the HeroesComponent class
// It defines a heroes array property
// the constructor expects Angular to inject the HeroService into a private heroService property
// The ngOnInit() lifecycle hook calls the getHeroes()

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // the getHeroes returns the sliced list of heroes at positions 1 and 5
    // returning only Heroes 2,3,4, and 5
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
