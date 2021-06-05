import { apiService } from '../API/apiService';
import { render} from '../index';
import { ScrollUp } from './ScrollUp';

const onAddCard = async () => {
  window.store.addPageNumber()
  let pageNumber = window.store.pageNumber
  let valueStore = window.store.search
    const data = await apiService(valueStore,pageNumber)
    window.store.update(data.hits)
    render()
  const element = document.querySelector('.add-card');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });

}





export const LearnMoreBtn = (root) => {
  const btn = document.querySelector('.add-card')
  if (window.store.total < 12) {
    if(btn){
      btn.remove()
    }
    return;
  }
  if(btn){
    return
  }
  if(window.store.total === window.store.gallery.length){
    btn?.remove()
  }

  const component = `<button type="button" class="btn btn-primary add-card">Learn More</button>`
  root.insertAdjacentHTML('afterend',component)
  ScrollUp(root)
  document.querySelector('.add-card').addEventListener('click', onAddCard)
}


