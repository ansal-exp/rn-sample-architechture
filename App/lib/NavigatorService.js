/*
* Extended function like support for react navigation. With these functions, we can navigate to any
*  page from any where. Even from saga function
*
*/
/*
* @flow
*/

import { NavigationActions } from 'react-navigation';
import type { NavigationParams, NavigationRoute } from 'react-navigation';
import { BackHandler } from 'react-native';

let _container; // eslint-disable-line

function setContainer(container: Object) {
  _container = container;
}

function reset(routeName: string, params?: NavigationParams) {
  _container.dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
      }),
    ],
  }));
}
function goBack() {
  _container.dispatch(NavigationActions.back({}));
}

function navigate(routeName: string, params?: NavigationParams) {
  const cRoute = this.getCurrentRoute();
  if (!cRoute) {
    BackHandler.exitApp();
    return;
  }
  if (cRoute && cRoute.routeName === routeName) {
    return;
  }
  _container.dispatch(NavigationActions.navigate({
    type: 'Navigation/NAVIGATE',
    routeName,
    params,
  }));
}

function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {
  _container.dispatch(actions.reduceRight(
    (prevAction, action): any =>
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName: action.routeName,
        params: action.params,
        action: prevAction,
      }),
    undefined,
  ));
}

function getCurrentRoute(): NavigationRoute | null {
  if (!_container || !_container.state.nav) {
    return null;
  }
  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute,
  goBack,
};
