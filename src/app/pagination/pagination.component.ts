import { Component, OnInit } from '@angular/core';
import {PagingService} from './paging.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  constructor(private pagingService: PagingService) { }

  ngOnInit() {
  }

}
