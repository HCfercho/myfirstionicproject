import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
    console.log(this.places);
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
