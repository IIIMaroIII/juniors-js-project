const supportList = document.querySelector('.js-suport-list');
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

const supportLink = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
];

import supportImg1 from '../img/supportUkraine/supportUkraine1.png';
import supportImg1x2 from '../img/supportUkraine/supportUkraine1-2x.png';
import supportImg2 from '../img/supportUkraine/supportUkraine2.png';
import supportImg2x2 from '../img/supportUkraine/supportUkraine2-2x.png';
import supportImg3 from '../img/supportUkraine/supportUkraine3.png';
import supportImg3x2 from '../img/supportUkraine/supportUkraine3-2x.png';
import supportImg4 from '../img/supportUkraine/supportUkraine4.png';
import supportImg4x2 from '../img/supportUkraine/supportUkraine4-2x.png';
import supportImg5 from '../img/supportUkraine/supportUkraine5.png';
import supportImg5x2 from '../img/supportUkraine/supportUkraine5-2x.png';
import supportImg6 from '../img/supportUkraine/supportUkraine6.png';
import supportImg6x2 from '../img/supportUkraine/supportUkraine6-2x.png';
import supportImg7 from '../img/supportUkraine/supportUkraine7.png';
import supportImg7x2 from '../img/supportUkraine/supportUkraine7-2x.png';
import supportImg8 from '../img/supportUkraine/supportUkraine8.png';
import supportImg8x2 from '../img/supportUkraine/supportUkraine8-2x.png';
import supportImg9 from '../img/supportUkraine/supportUkraine9.png';
import supportImg9x2 from '../img/supportUkraine/supportUkraine9-2x.png';

const arrImg1x = [];
const arrImg2x = [];

arrImg1x.push(
  supportImg1,
  supportImg2,
  supportImg3,
  supportImg4,
  supportImg5,
  supportImg6,
  supportImg7,
  supportImg8,
  supportImg9
);

arrImg2x.push(
  supportImg1x2,
  supportImg2x2,
  supportImg3x2,
  supportImg4x2,
  supportImg5x2,
  supportImg6x2,
  supportImg7x2,
  supportImg8x2,
  supportImg9x2
);

function getImages(arrImg1x, arrImg2x, supportLink) {
  for (let i = 0; i < arrImg1x.length; i += 1) {
    supportLink[i].id = i + 1;
    supportLink[i].img = arrImg1x[i];
    supportLink[i].img1x = arrImg1x[i];
    supportLink[i].img2x = arrImg2x[i];
  }

  return supportLink;
}

getImages(arrImg1x, arrImg2x, supportLink);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, img1x, img2x, title, url }) => `
        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${img}" alt="${title}" srcset="${img1x} 1x, ${img2x} 2x" height="32">
            </a>
        </li>                
        `
    )
    .join('');
}

arrowDown.addEventListener('click', handlerDown);
arrowUp.addEventListener('click', handlerUp);

let i = 0;
supportLink.forEach(element => {
  element.id = i + 1;
  i += 1;
});

supportList.insertAdjacentHTML('afterbegin', createMarkup(supportLink));

function handlerDown() {
  arrowDown.classList.toggle('hidden');
  arrowUp.classList.toggle('hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.add('hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.remove('hidden');
  }
}

function handlerUp() {
  arrowDown.classList.toggle('hidden');
  arrowUp.classList.toggle('hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.remove('hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.toggle('hidden');
  }
}
