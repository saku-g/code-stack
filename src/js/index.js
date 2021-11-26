import '../scss/style.scss';

import { drawer } from './drawer';
import { searchArea } from './searchArea';
import { tocGenerate } from './tocGenerate';
import { tocFixed } from './tocFixed';
import { tocActive } from './tocActivate';

window.addEventListener('DOMContentLoaded', function () {
  drawer();
  searchArea();
  tocGenerate();
  tocFixed();
  tocActive();
});
