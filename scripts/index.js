import getFormPerson from "./modules/formPerson.js";
import readyPlane from "./modules/readyPlane.js";
import start from "./modules/start.js";


const init = (selectorApp, title) => {
   const app = document.querySelector(selectorApp);

   const {main, firsForm} = start(app, title);
   
  firsForm.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const forms = getFormPerson(firsForm.count.value);
    firsForm.remove();

    main.append(...forms);

    readyPlane(forms, main);
  })
};

init('.app', 'Выберите тур');