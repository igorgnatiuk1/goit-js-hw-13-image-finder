import { inputSubscriber } from '../HelperFunction/inputSubscriber';

export const FormSearch = (root) => {
  const component = `
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
                <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-search"></i>
                        </span>
                        <form class="search-form d-flex" id="search-form">
                            <input
                             type="text"
                             class="form-control"
                             name="query"
                             autocomplete="off"
                             placeholder="Search images..."
                            />
                        </form>
                         <h1 class="navbar-text ms-5 fs-6 text-primary">
                               APP for searching images
                         </h1>
                  </div>
        </div>
    </nav>
  `;
  root.insertAdjacentHTML('beforebegin', component);
  inputSubscriber('.search-form')
};

