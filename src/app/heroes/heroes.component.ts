import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  // selector is a pattern of elements that tells the browser which HTML elements should be selected
  // to have CSS elements
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
