import Model from '../js/model';

describe('Model class', () => {
    it('Should created new model', () => {
        const model = new Model({ id: "efsdf324324234", text: "ddfsddefggefw"})

        expect(model instanceof Model).toBe(true);
    });


    it('Should validate item', () => { 
        const model = new Model()
        model.validateItem("https://tproger.ru/translations/configure-webpack4/");
        model.items.forEach(element => {
            expect(element).toHaveProperty("text", "https://tproger.ru/translations/configure-webpack4/");
        });
    });
    it('Should dont validate item', () => { 
        const model = new Model()
        model.validateItem("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        model.items.forEach(element => {
            expect(element).not.toHaveProperty("text", "https://tproger.ru/translations/configure-webpack4/");
        });
    });

    it('Should add item', () => { 
        const model = new Model()

        model.addItem("https://tproger.ru/translations/configure-webpack4/");
        model.items.forEach(element => {
            expect(element).toHaveProperty("text", "https://tproger.ru/translations/configure-webpack4/");
        });
    });

    it('Should remove item', () => { 
        const model = new Model([{ id: "efsdf324324234", text: "ddfsddefggefw"}])

        model.removeItem("efsdf324324234");
        model.items.forEach(element => {
            expect(element).not.toHaveProperty("text", "https://tproger.ru/translations/configure-webpack4/");
        });
    });

});



