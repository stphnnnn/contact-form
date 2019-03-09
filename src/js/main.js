import { domReady } from './utilities/helpers';
import { initContactForm } from './modules/contact-form';

function start() {
  initContactForm();
}

domReady(start);
