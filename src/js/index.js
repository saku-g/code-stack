import '../scss/style.scss';

import { drawer } from './drawer';
import { searchArea } from './searchArea';
import { tocGenerate } from './tocGenerate';
import { smoothScroll } from './smoothScroll';

window.addEventListener('DOMContentLoaded', function () {
  drawer();
  searchArea();
  tocGenerate();
  smoothScroll();
});
