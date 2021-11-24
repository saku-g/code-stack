import '../scss/style.scss';

import { drawer } from './drawer';
import { searchArea } from './searchArea';
import { tocGenerate } from './tocGenerate';

window.addEventListener('DOMContentLoaded', function () {
  drawer();
  searchArea();
  tocGenerate();
});
