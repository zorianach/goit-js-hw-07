import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) { 
    return galleryItems.map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>
  `).join("");
  }

gallery.insertAdjacentHTML("afterbegin", markup);
gallery.addEventListener('click', clickOnImage);

console.log(gallery);



function clickOnImage(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;

    const modalImgSrc = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${modalImgSrc}" width="1280" height="auto"/>
  `, {
          onShow: (instance) => {
            window.addEventListener('keydown', pressEsc);
          },
          onClose: (instance) => {
            window.removeEventListener('keydown', pressEsc);
          },
        }
    ); 
  instance.show();

  function pressEsc(event) {
    if (event.code !== 'Escape') return;
    instance.close();
  }
}
// export const galleryItems = [
//     {
//       preview:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//       original:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//       description: 'Hokkaido Flower',
//     }