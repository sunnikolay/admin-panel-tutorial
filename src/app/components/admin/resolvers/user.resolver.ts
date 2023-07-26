import { ResolveFn, Router } from '@angular/router';
import { User } from '../user';
import { inject } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { EMPTY, catchError, delay } from 'rxjs';

export const userResolver: ResolveFn<User> = (route, state) => {
  const adminService = inject(AdminService);
  const router = inject(Router);
  
  return adminService.getPersonById(route.params?.['id']).pipe(
    delay(2000),
    catchError( () => {
      router.navigate(['admin/contacts'])
      return EMPTY;
    } )
  );
};
