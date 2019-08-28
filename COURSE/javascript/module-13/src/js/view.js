import EventEmitter from '../services/event-emitter';
import Model from './model';
import { error } from 'util';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.querySelector('.js-form');
    this.input = this.form.querySelector('.input');
    this.list = document.querySelector('.link-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();


  const { value } = this.input;

  if (value === '') return;

  this.emit('add', value);
  }



//   inspector(val){
//     const link = arr.find(url => url.includes(userLink));
//     if(link !== undefined){
//         alert('Такая ссылочка уже есть(((')
//     }
//     else return userLink
// };

  createNote(note) {
    const item = document.createElement('li');
    item.dataset.id = note.id;
    item.classList.add('link-item');

    const text = document.createElement('a');
    text.textContent = note.text;
    text.classList.add('link');

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'X';
    buttonRemove.dataset.action = 'remove';
    buttonRemove.classList.add('remove-btn');

    item.append(buttonRemove, text);

    this.appendEventListners(item);

    return item;
  }

  addNote(note) {
    const item = this.createNote(note);
    console.log(item)
    this.form.reset();

    this.list.appendChild(item);
  }

  appendEventListners(item) {
    const removeBtn = item.querySelector('[data-action="remove"]');
    removeBtn.addEventListener('click', this.handleRemove.bind(this));
  
  }

  handleRemove({ target }) {
    const parent = target.closest('.link-item');
    this.emit('remove', parent.dataset.id);
  }

  removeNote(id) {
    const item = this.list.querySelector(`[data-id="${id}"]`);
    this.list.removeChild(item);
  }
}
