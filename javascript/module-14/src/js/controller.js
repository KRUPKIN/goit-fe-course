import {set, get} from "../services/storage";
export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addNote.bind(this));
    view.on('remove', this.removeNote.bind(this));

    const hydration = get();
    this.startLoading(hydration);
    // console.log(hydration)
    // console.log(model)
  }
  startLoading(arr){
    arr.forEach(element => {
      this.addNote(element.text)
    });
  }
  
  addNote(ipt) {
    const valid = this.model.validateItem(ipt)
    if (valid !== undefined){
    const text = this.model.filtration(valid)
      if (text !== undefined){
      this.model.addItem(text).then(item => this.view.addNote(item));
      // console.log(this.model);
      }
    }
  }

  removeNote(id) {
    this.model.removeItem(id);
    this.view.removeNote(id);
  }
}
