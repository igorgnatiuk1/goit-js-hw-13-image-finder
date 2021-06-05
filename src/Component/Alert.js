
export const Alert = (root) => {


  const component = `<div class="alert alert-danger" role="alert">
                          Please check what are you looking for
                    </div>`
  root.insertAdjacentHTML('beforebegin', component);

  setTimeout(()=>{
    document.querySelector('.alert-danger')?.remove()
    const inputRef = document.querySelector('.form-control')
    inputRef.focus()
    inputRef.select()

  }, 2000)

}
