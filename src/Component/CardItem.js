 export const CardItem = (props) => {
  const {webformatURL, largeImageURL, likes, views, comments, downloads} = props


  const Item = `<li class='imageItem' style="width: 24.5%;">
                        <img src='${webformatURL}' class="card-img-top" alt="card" path=${largeImageURL}>
                            <div class="card-body">
                                <ul class="card-items">
                                 <li>
                                         <div class="group">
                                            <span class="group-text">${likes}</span>
                                            <span class="group-text">
                                                <i class="bi bi-hand-thumbs-up"></i>
                                            </span>
                                        </div>
                                 </li>
                                 <li>
                                         <div class="group">
                                            <span class="group-text">${views}</span>
                                            <span class="group-text">
                                                <i class="bi bi-tv"></i>
                                            </span>
                                        </div>
                                 </li>
                                  <li>
                                         <div class="group">
                                            <span class="group-text">${comments}</span>
                                            <span class="group-text">
                                                <i class="bi bi-chat-right-text"></i>
                                            </span>
                                        </div>
                                 </li>
                                 <li>
                                         <div class="group">
                                            <span class="group-text">${downloads}</span>
                                            <span class="group-text">
                                                <i class="bi bi-download"></i>
                                            </span>
                                        </div>
                                 </li>
                                </ul>
                            </div>
                    </li>`
return Item
}

