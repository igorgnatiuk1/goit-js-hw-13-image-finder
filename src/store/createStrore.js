export const createStore=() =>{
  let search = ''
  let pageNumber = 1
  let gallery = []
  let currentPortion = []
  let total = 0;
  return {
    get total(){
      return total
    },
    get currentPortion(){
      return currentPortion
    },
    get gallery() {
      return gallery
    },
    get pageNumber(){
      return pageNumber
    },
    get search(){
      return search
    },
    update(cards) {
      gallery = [...gallery, ...cards]
      currentPortion = [...cards]
    },
    setSearch(value){
      search = value
    },
    addPageNumber(){
      pageNumber++
    },
    updateTotal(count){
      total = count
    },
    resetStore(){
      search = ''
      pageNumber = 1
      gallery = []
      currentPortion = []
    },

  }
}
