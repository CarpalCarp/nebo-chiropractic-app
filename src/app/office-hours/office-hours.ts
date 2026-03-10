import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { GoogleMap } from '../google-map/google-map';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-office-hours',
  imports: [Navigation, GoogleMap, Footer],
  templateUrl: './office-hours.html',
  styleUrl: './office-hours.scss',
})
export class OfficeHours {

}
