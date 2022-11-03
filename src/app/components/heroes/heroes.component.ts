import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Array<Heroe>

  constructor( private _heroesService:HeroesService ) { 

    this.heroes = this._heroesService.getHeroes()

  }

  ngOnInit(): void {
    console.log( this.heroes);
  }

}
