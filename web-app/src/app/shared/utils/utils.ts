import { PAGE_MODE, PageModel } from '../model';
import { ActivatedRoute } from '@angular/router';

export const getPageModel = (route: ActivatedRoute): PageModel => {

  const id = route.snapshot.params.id;
  const isEdit = route.snapshot.url[0].path === 'edit';

  if (id) {

    if (isEdit) {
      return { pageMode: PAGE_MODE.EDIT, id };
    } else {
      return { pageMode: PAGE_MODE.DETAILS, id };
    }

  } else {
    return { pageMode: PAGE_MODE.CREATE };
  }
};
