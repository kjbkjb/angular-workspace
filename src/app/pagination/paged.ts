import {PagedParameters} from './pagedParameters';
import {Params} from '@angular/router';

export interface Paged {
  state: {
    paginationVisible: boolean,
    buttonPreviousEnabled: boolean,
    buttonNextEnabled: boolean,
    pageButtons: Array<number>
  };

  collect(pagedParameters: PagedParameters);

  toApiParams(mergedParams: Params): Params;

  nextPage(): number;

  previousPage(): number;

  firstPage(): number;

  lastPage(): number;

  gotoPage(pageNumber: number);
}
