import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  medSelected = 0;
  medics = [
    { nombre: "Juliana Medina", url: "https://reqres.in/img/faces/7-image.jpg", descrip: "Alcance rotatorio en el hospital de especialidades de la Universidad Autónoma de México y con experiencia en cirugía de tejidos blandos."},
    { nombre: "Jimmy Perez", url: "https://reqres.in/img/faces/8-image.jpg", descrip: "Cuenta con un diplomado en manejo clínico y biológico de fauna silvestre y un diplomado en medicina biorreguladora y mucha experiencia."},
    { nombre: "Juan Sanchez", url: "https://reqres.in/img/faces/9-image.jpg", descrip: "Egresado de la Universidad de La Salle. Tiene un diplomado en medicina biológica con énfasis en clínica, cirugía y nutrición de caninos y felinos."},
  ]

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void { }
  
  ngAfterViewInit() {
    this._activatedRoute.url.subscribe(url =>{
      if (this._activatedRoute.snapshot.params['id'] !== undefined) {
        switch (this._activatedRoute.snapshot.params['id']) {
          case "sedes":
            this.focusOnSection("1");
            break;
          case "servicios":
            this.focusOnSection("2");
            break;
          case "doctores":
            this.focusOnSection("3");
            break;
          case "citas":
            this.focusOnSection("4");
            break;
          case "nosotros":
            this.focusOnSection("5");
            break;
        }
      }
    });
  }

  focusOnSection(number: string){
    window.location.hash = `#section00${number}`;
  }

}
