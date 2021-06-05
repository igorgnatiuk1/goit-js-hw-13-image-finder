import { CardItem } from './CardItem';
import { clickSubscriber } from '../HelperFunction/clickSunscriber';

export const GalleryList= (root) => {

  const state = window.store.currentPortion

  if (state.length === 0){
    return
  }

  const cardItems = state.map(card => CardItem(card)).join(' ');
  const component = `
    <ul class="gallery">
         ${cardItems}
    </ul>
  `;

  root.insertAdjacentHTML('beforeend', component);





  const listRef = document.querySelectorAll('.imageItem')
  listRef.forEach(item => item.addEventListener('click', (e) => clickSubscriber(e)))
};
'largeImageUR'
