import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { PeopleService } from '../../../../services/people.service';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'pos-people-list',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule, MatInputModule,
    MatButtonModule,CommonModule, ReactiveFormsModule, RouterModule,MatTableModule,MatChipsModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {
  public nameFilter = new FormControl('');
  columnsToDisplay = ['userName', 'age'];
  displayedColumns: string[] = ['user-name', 'name', 'favorite-feature','address', 'gender'];
  public input$ = this.nameFilter.valueChanges.pipe(
    startWith(''),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap(name => this.peopleService.getPeople(name ?? ''))
  );

  constructor(private peopleService: PeopleService) { }

ngOnInit(){
}
}
