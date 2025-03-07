import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'


@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
