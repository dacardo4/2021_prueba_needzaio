import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
