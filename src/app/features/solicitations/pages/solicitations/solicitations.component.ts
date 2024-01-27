import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/components/breadcrumbs/breadcrumbs.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-solicitations',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,BreadcrumbsComponent, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './solicitations.component.html',
  styleUrl: './solicitations.component.scss'
})
export class SolicitationsComponent {

}
