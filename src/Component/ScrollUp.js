import { appLog } from '../HelperFunction/scroll';

export const ScrollUp = (root) => {
  const component = `<div class="scroll-up text-primary">
                            <i class="bi bi-arrow-up-square"></i>
                         </div>`
  root.insertAdjacentHTML('afterend',component)
  appLog('.scroll-up')
}
