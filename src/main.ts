import 'bulma';

import App from './App.svelte';
import { preloadImages } from './lib/util/preloadImages';

preloadImages();

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
