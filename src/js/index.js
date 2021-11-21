import '../scss/style.scss';

import { drawer } from './drawer';
import { searchArea } from './searchArea';

window.addEventListener('DOMContentLoaded', function () {
  drawer();
  searchArea();
});
