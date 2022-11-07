import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  // @Input() heroe:Heroe = {}

  @Input() heroe:any = {}

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private _router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {

    this._router.navigate( ['/heroe', this.heroe.id] )
    // this.heroeSeleccionado.emit( this.index )
  }

}
