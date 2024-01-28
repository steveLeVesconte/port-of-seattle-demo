import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { PeopleService } from '../../../../services/people.service';



@Component({
  selector: 'pos-people-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  public nameFilter = new FormControl('');

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
