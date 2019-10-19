import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = 'Favorite Links';
  favLinks = ['https://www.facebook.com/',
    'https://seniorshomecare.com/',
    'https://www.greentreechurch.com/'];
    
  constructor() { }

  ngOnInit() {
  }

}
