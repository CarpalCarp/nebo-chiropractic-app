import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';
import { GoogleMap } from "../google-map/google-map";
import { FadeInOnScrollDirective } from '../directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-home',
  imports: [Navigation, Footer, GoogleMap, FadeInOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
