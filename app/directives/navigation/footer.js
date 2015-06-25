/**
* @desc topNavigation directive that will be used across pages
* @example <footer-nav></footer-nav>
*/
import template from './footer.html!text';
import css from './footer.css!css';

export var footerNav = function () {
    return {
        restrict: 'E',
        template: template
    }
}