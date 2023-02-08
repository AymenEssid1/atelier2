import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/models/Emploi';

@Component({
  selector: 'app-offers-emploi-component',
  templateUrl: './offers-emploi-component.component.html',
  styleUrls: ['./offers-emploi-component.component.css']
})
export class OffersEmploiComponentComponent implements OnInit {
listarticles!:Emploi[];

  constructor() { } 


        nbre2!:number

  ngOnInit(): void {
 this.listarticles  = [
      { reference: '1', titre: 'T-shirt 1', entreprise:"f", etat:false },
      { reference: '2', titre: 'T-shirt 2', entreprise: "21", etat:true  },
      { reference: '3', titre: 'T-shirt 3', entreprise: "16", etat:true },
    ];
  }

  calcul(){
        var  nbre:number=0;

   for ( var i in this.listarticles) {
 if (this.listarticles[i].etat==false ){

  nbre ++;}

 }
this.nbre2=nbre;

   }
   filter!: String ;

 }

  


