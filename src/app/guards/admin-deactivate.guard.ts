import { CanDeactivateFn } from '@angular/router';

export const adminDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if (confirm('Are you sure?')) {
    localStorage.removeItem('token');
    return true;
  }

  return false;
};
