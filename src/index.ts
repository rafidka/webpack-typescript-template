import * as $ from 'jquery';
import './index.css';
import Image1 from './assets/building-ceiling.jpg';
import Image2 from './assets/building.jpg';
import Image3 from './assets/squirrel.jpg';

function createImageElement(image: string, width: number): JQuery {
  return $('<div>').append($('<img/>').attr('src', image).attr('width', width));
}

function addImages(): void {
  const body = $('body');
  body.append(createImageElement(Image1, 320));
  body.append(createImageElement(Image2, 320));
  body.append(createImageElement(Image3, 320));
}

function addButton(): void {
  const body = $('body');
  const button = $('<input />').attr('type', 'button').attr('value', 'Click Me');
  button.on('click', () => {
    alert('Hello, WebPack with TypeScript!');
  });
  body.append(button);
}

addImages();
addButton();
