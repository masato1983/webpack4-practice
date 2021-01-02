import './heading.scss';
import $ from 'jquery'

class Heading {
  render(pageName) {
    const h1 = $('<h1>');
    const body = $('body');
    h1.text('webpack is awesome. Tihs is "' + pageName + '" page');
    body.append(h1);
  }
}

export default Heading;