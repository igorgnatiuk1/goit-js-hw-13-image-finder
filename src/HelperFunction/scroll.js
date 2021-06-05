
export const appLog = (upSelector) => {
  const upElem = document.querySelector(upSelector);
  upElem.style.opacity = 0;
  window.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 1000) {
      upElem.style.opacity = 1;
    } else {
      upElem.style.opacity = 0;
    }
  });
  upElem.addEventListener('click', () => window.scrollTo(0, 0))
};




