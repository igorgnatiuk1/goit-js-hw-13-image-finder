import * as basicLightbox from 'basiclightbox'

export const popup = (src) => {
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
    `)

  instance.show()
}
