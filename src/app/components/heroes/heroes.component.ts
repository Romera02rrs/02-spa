import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [
    './heroes.component.css'
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Array<Heroe>
  busqueda: string

  constructor( private _heroesService:HeroesService, private _router:Router, private _activatedRoute:ActivatedRoute ) { 

    this.busqueda = ''
    this.heroes = this._heroesService.getHeroes()
    this._activatedRoute.params.subscribe( params => {
      if(params['nombre'] != undefined){
        this.busqueda = params['nombre']
        this.heroes = this._heroesService.searchHeroe(this.busqueda)
      }
    })
  }

  ngOnInit(): void {
    //console.log( this.heroes);
  }

  verHeroe(index:number) {
    this._router.navigate( ['/heroe', index] )
  }

}
