import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://www.pexels.com/photo/bloom-blooming-blossom-blur-462118/';
  image2 = 'https://sundaynightlights2016.shutterfly.com/4822';
  image3 = 'https://sundaynightlights2016.shutterfly.com/4639';

  constructor() { }

  ngOnInit() {
  }

}