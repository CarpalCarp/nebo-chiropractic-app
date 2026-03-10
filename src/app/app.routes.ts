import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { OfficeHours } from './office-hours/office-hours';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

const companyEmail = 'mtnebochiro@gmail.com';
const companyPhone = '801-465-8177';
const companyName = 'Nebo Chiropractic';

export const routes: Routes = [
  { path: '', component: Home, title: companyName, data: { companyEmail, companyPhone } },
  { path: 'about-us', component: AboutUs, title: companyName, data: { companyEmail, companyPhone } },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Web Privacy Policy', data: { companyEmail, companyPhone, companyName } },
  { path: 'office-hours', component: OfficeHours, title: companyName, data: { companyEmail, companyPhone } },
];
