import getFormPerson from "./modules/formPerson.js";
import readyPlane from "./modules/readyPlane.js";
import start from "./modules/start.js";
import getData from "./servis/getTour.js";



const init = async (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  const data = await getData();


  const { main, firsForm, h1 } = start(app, title, data);

  firsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const tourData = data.find(tour => tour.id === firsForm.tour.value)
    h1.textContent = tourData.tour;

    const forms = getFormPerson(firsForm.count.value);
    firsForm.remove();

    main.append(...forms);

    readyPlane(forms, main, tourData);
  })
};

init('.app', 'Выберите тур');