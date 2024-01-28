import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/components/breadcrumbs/breadcrumbs.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PeopleListComponent } from "../../components/people-list/people-list.component";

@Component({
  selector: 'app-solicitations',
  standalone: true,
  templateUrl: './solicitations.component.html',
  styleUrl: './solicitations.component.scss',
  imports: [MatCardModule, MatButtonModule, BreadcrumbsComponent, MatFormFieldModule, MatIconModule, MatInputModule, PeopleListComponent]
})

export class SolicitationsComponent {
}
