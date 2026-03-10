import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { GoogleMap } from '../google-map/google-map';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about-us',
  imports: [Navigation, GoogleMap, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
