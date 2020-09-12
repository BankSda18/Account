export const enum PAGE_MODE {
  DETAILS = 'DETAILS',
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export interface PageModel {
  pageMode: PAGE_MODE;
  id?: string;
}
