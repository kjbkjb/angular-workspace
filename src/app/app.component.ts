import {Component, OnInit} from '@angular/core';
import {PagingService} from './pagination/paging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angular-workspace';
  constructor(private pagingService: PagingService){}

  ngOnInit(): void {
    this.pagingService.collect({current_page: 1, first_page: true, last_page: false, limit: 2, offset: 4, total: 6, total_pages: 10});
  }
}
