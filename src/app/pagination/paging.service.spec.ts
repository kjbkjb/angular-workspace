import {PagingService} from './paging.service';


describe('PagingService', () => {
  const pagingService = new PagingService;
  const pagingParameters = {current_page: 1, first_page: true, last_page: false, limit: 2, offset: 4, total: 6, total_pages: 10};
  beforeEach(() => {
    pagingService.collect(pagingParameters);
  });

  it('should collect parameters', () => {
    expect(pagingService.pagedParameters.current_page).toBe(1);
    expect(pagingService.pagedParameters.total_pages).toBe(10);
    expect(pagingService.pagedParameters.last_page).toBe(false);
    expect(pagingService.pagedParameters.first_page).toBe(true);
    expect(pagingService.pagedParameters.limit).toBe(2);
    expect(pagingService.pagedParameters.offset).toBe(4);
    expect(pagingService.pagedParameters.total).toBe(6);
  });

  describe('navigation', () => {
    it('should navigate next page', () => {
      pagingService.nextPage();
      expect(pagingService.pagedParameters.current_page).toBe(2);
    });

    it('should navigate prior page', () => {
      pagingService.pagedParameters.current_page = 4;
      pagingService.previousPage();
      expect(pagingService.pagedParameters.current_page).toBe(3);
    });

    it('should navigate last page', () => {
      pagingService.lastPage();
      expect(pagingService.pagedParameters.current_page).toBe(10);
    });

    it('should navigate first page', () => {
      pagingService.firstPage();
      expect(pagingService.pagedParameters.current_page).toBe(1);
    });

    it('should goto page', () => {
      pagingService.gotoPage(2);
      expect(pagingService.pagedParameters.current_page).toBe(2);
    });
  });

  describe('boundaries', () => {
    it('should not navigate past last page', () => {
      pagingService.gotoPage(10)
      expect(pagingService.nextPage()).toBe(10);
      expect(pagingService.pagedParameters.current_page).toBe(pagingService.pagedParameters.total_pages);
    });

    it('should not navigate before first page', () => {
      pagingService.gotoPage(1);
      expect(pagingService.previousPage()).toBe(1);
      expect(pagingService.pagedParameters.current_page).toBe(1);
    });

    it('should not go to page that does not exist', () => {
      pagingService.pagedParameters.current_page = pagingService.pagedParameters.total_pages;
      expect(pagingService.gotoPage(11)).toBe(10);
      expect(pagingService.pagedParameters.current_page).toBe(pagingService.pagedParameters.total_pages);
    });

  });

  describe('controls state', () => {
    it('should be visible if more than one page', () => {
      expect(pagingService.state.paginationVisible).toBeTruthy();
    });

    it('should not be visible if one page', () => {
      pagingService.pagedParameters.total_pages = 1
      expect(pagingService.state.paginationVisible).toBeFalsy();
    });

    it('should previous button enabled', () => {
      pagingService.pagedParameters.current_page = 2;
      expect(pagingService.state.buttonPreviousEnabled).toBeTruthy();
    });

    it('should previous button disabled', () => {
      pagingService.pagedParameters.current_page = 1;
      expect(pagingService.state.buttonPreviousEnabled).toBeFalsy();
    });

    it('should next button enabled', () => {
      expect(pagingService.state.buttonNextEnabled).toBeTruthy();
    });

    it('should next button disabled', () => {
      pagingService.pagedParameters.current_page = 10;
      expect(pagingService.state.buttonNextEnabled).toBeFalsy();
    });
  });
});
