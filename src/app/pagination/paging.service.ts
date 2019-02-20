import {Paged} from './paged';
import {ActivatedRoute, Params} from '@angular/router';
import {Injectable} from '@angular/core';
import {PagedParameters} from './pagedParameters';

@Injectable()
export class PagingService implements Paged {
  pagedParameters: PagedParameters;

  firstPage(): number {
    console.log('first page')
    this.pagedParameters.current_page = 1;
    return this.pagedParameters.current_page;
  }

  gotoPage(pageNumber: number) {
    console.log('go to page ' + pageNumber);
    return pageNumber;
  }

  lastPage(): number {
    console.log('last page');
    this.pagedParameters.current_page = this.pagedParameters.total_pages;
    return this.pagedParameters.current_page;
  }

  nextPage(): number {
    console.log('next page')
    this.pagedParameters.current_page += 1
    return this.pagedParameters.current_page;
  }

  populateFromMetadata(pagedParameters: PagedParameters) {
    this.pagedParameters = pagedParameters;
  }

  previousPage(): number {
    this.pagedParameters.current_page -= 1
    return this.pagedParameters.current_page;
  }

  toApiParams(mergedParams: Params): PagedParameters {
    return undefined;
  }

  constructor(){

  }
}
