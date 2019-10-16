import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.google.com/search?q=cardinals+images&client=firefox-b-1-d&tbm=isch&source=iu&ictx=1&fir=etS8UWCHjf8q_M%253A%252CiYP_G0jPyA73WM%252C_&vet=1&usg=AI4_-kTrx_cOrhGvwkMdOl8pFJbk8OlvTA&sa=X&ved=2ahUKEwjPuJTR0J_lAhVReKwKHQxOBskQ9QEwA3oECAQQCg#imgrc=etS8UWCHjf8q_M:';
  image3 = 'https://www.google.com/search?q=cardinals+images&client=firefox-b-1-d&tbm=isch&source=iu&ictx=1&fir=etS8UWCHjf8q_M%253A%252CiYP_G0jPyA73WM%252C_&vet=1&usg=AI4_-kTrx_cOrhGvwkMdOl8pFJbk8OlvTA&sa=X&ved=2ahUKEwjPuJTR0J_lAhVReKwKHQxOBskQ9QEwA3oECAQQCg#imgrc=1vgthiUsGELHEM:&vet=1';

  constructor() { }

  ngOnInit() {
  }

}