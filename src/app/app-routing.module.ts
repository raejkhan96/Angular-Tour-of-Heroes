import { NgModule } from '@angular/core';
// import RouterModule and routes so the application can have routing capability
import { RouterModule, Routes } from '@angular/router';
// HeroesComponent gives the router somewhere to go once the routes are configured
import { HeroesComponent } from './heroes/heroes.component';

// routes tell the router which view to display when a user clicks a link/pastes a URL into the browser address bar
// we use the Heroes Component in the routes array 
// the path is a string that matches the URL in the browser address bar, ex: localhost:4200/heroes
// the component is the component that the router should create when navigating to this route
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // adds the Router Module to the App Routing Module imports array and confgiures it with routes
  // the method is called forRoot() because it configues it at the route level
  imports: [RouterModule.forRoot(routes)],
  // exports RouterModule to be configured throughout the application
  exports: [RouterModule]
})
export class AppRoutingModule { }
