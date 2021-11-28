import '../scss/style.scss';

import { drawer } from './drawer';
import { searchArea } from './searchArea';
import { tocFixed } from './tocFixed';
import { tocActivate } from './tocActivate';
import { smoothScroll } from './smoothScroll';

window.addEventListener('DOMContentLoaded', function () {
  drawer();
  searchArea();
  tocFixed();
  tocActivate();
  smoothScroll();
});
