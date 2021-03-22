import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void { }
  
  ngAfterViewInit() {
    console.log("AFTTTTTEEEEEEEERRRRRRRR");
    this._activatedRoute.url.subscribe(url =>{
      if (this._activatedRoute.snapshot.params['id'] !== undefined) {
        switch (this._activatedRoute.snapshot.params['id']) {
          case "location":
            this.focusOnSection("1");
            break;
          case "blog":
            this.focusOnSection("2");
            break;
          case "services":
            this.focusOnSection("3");
            break;
          case "aboutUs":
            this.focusOnSection("4");
            break;
          case "franchiseWithUs":
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
