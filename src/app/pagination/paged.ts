import {PagedParameters} from './pagedParameters';
import {Params} from '@angular/router';

export interface Paged {
  populateFromMetadata(pagedParameters: PagedParameters);
  toApiParams(mergedParams: Params): PagedParameters;
  nextPage(): number;
  previousPage(): number;
  firstPage(): number;
  lastPage(): number;
  gotoPage(pageNumber: number);
}
