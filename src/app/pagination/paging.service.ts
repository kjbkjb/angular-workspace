import {Paged} from './paged';
import {Injectable} from '@angular/core';
import {PagedParameters} from './pagedParameters';
import {Params} from '@angular/router';

@Injectable()
export class PagingService implements Paged {
  pagedParameters: PagedParameters;
  state: { paginationVisible: boolean; buttonPreviousEnabled: boolean; buttonNextEnabled: boolean; pageButtons: [] };

  firstPage(): number {
    console.log('first page');
    this.pagedParameters.current_page = 1;
    return this.pagedParameters.current_page;
  }

  gotoPage(pageNumber: number) {
    if(pageNumber < 1 || pageNumber > this.pagedParameters.total_pages) { return this.pagedParameters.current_page; }
    console.log('go to page ' + pageNumber);
    this.pagedParameters.current_page = pageNumber;
    return pageNumber;
  }

  lastPage(): number {
    console.log('last page');
    this.pagedParameters.current_page = this.pagedParameters.total_pages;
    return this.pagedParameters.current_page;
  }

  nextPage(): number {
    if(this.pagedParameters.current_page === this.pagedParameters.total_pages) { return this.pagedParameters.current_page; }
    console.log('next page');
    this.pagedParameters.current_page += 1;
    return this.pagedParameters.current_page;
  }

  collect(pagedParameters: PagedParameters) {
    this.pagedParameters = pagedParameters;
  }

  previousPage(): number {
    if (this.pagedParameters.current_page === 1) { return 1; }
    this.pagedParameters.current_page -= 1;
    return this.pagedParameters.current_page;
  }

  toApiParams(mergedParams: Params): PagedParameters {
    return undefined;
  }

  setState(): void {
    // TODO: Implement observable on pagedParameters and set the state objects to control the UX
    this.state = {
      paginationVisible: false,
      buttonPreviousEnabled: false,
      buttonNextEnabled: false,
      pageButtons: []
    };
  }

  constructor() {
    this.setState();
  }
}
