import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {

  heroe:Heroe

  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 
    this.heroe = {nombre:'', bio: '', img: '', aparicion:'' , casa:''}
    this._activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    } )
  }

  ngOnInit(): void {
    // console.log(this.heroe);
    
  }

}
