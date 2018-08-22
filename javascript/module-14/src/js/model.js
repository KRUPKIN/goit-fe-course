import v4 from 'uuid/v4';
import {set, get} from "../services/storage";
let urlArrey = []

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  validateItem(inputText){
    const VALIDATOR = {
      paterns: {
        url: /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i,
      },
        
      validate(ipt){

        const valid = this.isValid(ipt);

            if (!valid){
              alert('Пожалуйста, введите коректный url...')
              return
            }
            else{
                return ipt;
            }
      },

      isValid(value){
        return this.paterns["url"].test(value);
      },
    };

    const validated = VALIDATOR.validate(inputText)
    return validated;
  }

  filtration(input){
    console.log(this.items)
    const filtered = this.items.find(element => element.text === input);
    if (filtered === undefined){
      return input
    }
    else {    
      alert("такая ссылочка уже есть!!!")
    }
  }

  addItem(text) {
    const item = {
      id: v4(),
      text,
    };

    this.items.push(item);
    console.log(this.items)
    urlArrey.push(item);
    set(urlArrey)


    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item);
      }, 200);
    });
  }


  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    urlArrey = urlArrey.filter(item => item.id !== id);
    set(urlArrey)
  }
}

