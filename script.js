/* const content = document.querySelector('.main_content');
if(content){
    fetch("data.json")
    .then((res) =>{
        return res.json()
    })
    .then((response) =>{
        let tab =[]
       Object.keys(response).forEach(key =>{
        tab.push(response[key])
       })
        console.log('mon tableau' , tab[1]);
       
       tab.map((item , index) =>{
        if (index == 1) {
            console.log(item);
            
            item.forEach((list) =>{
                content.innerHTML += `
                <div class="sect1">
                    <div class="learn_comment">
                        <div class="score_section">
                            <button><img src="images/icon-plus.svg" alt=""></button>
                            <div class="score">${list.score}</div>
                            <button><img src="images/icon-minus.svg" alt=""></button>
                        </div>
                        <div class="comment_section">
                            <div class="head">
                                <div class="user_info">
                                    <img src="${list.user.image.png}" alt="">
                                    <h4>${list.user.username}</h4>
                                    <span>${list.createdAt}</span>
                                </div>
                                <div class="replay_section">
                                    <button type="button" class="replay">
                                        <img src="images/icon-reply.svg" alt="">
                                        <a href="">Replay</a>
                                    </button>
                                </div>
                            </div>
                            <div class="comment">
                                <p>${list.content}</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="replay_comment">
                        <img src="images/avatars/image-juliusomo.png" alt="">
                        <input type="text" name="" id="add_comment" placeholder="Add a comment...">
                        <div><button type="button" id="replay">REPLAY</button></div>
                    
                    </div>
                </div>
                `
                list.replies.forEach((repl) =>{
                    content.innerHTML += `
                    <div class="section">
                        <div class="sect1">
                            <div class="learn_comment modify">
                                <div class="score_section">
                                    <img src="images/icon-plus.svg" alt="">
                                    <div class="score">${repl.score}</div>
                                    <img src="images/icon-minus.svg" alt="">
                                </div>
                                <div class="comment_section">
                                    <div class="head">
                                        <div class="user_info">
                                            <img src="${repl.user.image.png}" alt="">
                                            <h4>${repl.user.username}</h4>
                                            <span>${repl.createdAt}</span>
                                        </div>
                                        <div class="replay_section">
                                            <button type="button" class="replay">
                                                <img src="images/icon-reply.svg" alt="">
                                                <a href="">Replay</a>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="comment">
                                        <p> <span>@${repl.replyingTo}</span> ${repl.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                })
            })
            
        }
       })
    })
}

const comment = document.createElement('div')
comment.className = 'add_comment'
comment.innerHTML = `
<img src="images/avatars/image-juliusomo.png" alt="">
<input type="text" name="" id="add_comment" placeholder="Add a comment...">
<div><button type="button" id="send">SEND</button></div>
`
content.appendChild(comment)
 */


const content = document.querySelector('.main_content');
if (content) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let tab = [];
            Object.keys(data).forEach(key => {
                tab.push(data[key]);
            });
            const jsonData = JSON.stringify(tab);
            localStorage.setItem('myData', jsonData);
        });
}
let myData = JSON.parse(localStorage.getItem('myData'));
if (myData) {
    myData[1].map((item) =>{
        const element = document.createElement('div')
        element.className = 'container'
        element.innerHTML = `
        <div class="sect1">
            <div class="learn_comment">
                <div class="score_section">
                    <button><img src="images/icon-plus.svg" alt=""></button>
                    <div class="score">${item.score}</div>
                    <button><img src="images/icon-minus.svg" alt=""></button>
                </div>
                <div class="comment_section">
                    <div class="head">
                        <div class="user_info">
                            <img src="${item.user.image.png}" alt="">
                            <h4>${item.user.username}</h4>
                            <span>${item.createdAt}</span>
                        </div>
                        <div class="replay_section">
                            <button type="button" class="replay">
                                <img src="images/icon-reply.svg" alt="">
                                <span>Replay</span>
                            </button>
                        </div>
                    </div>
                    <div class="comment">
                        <p>${item.content}</p>
                    </div>
                </div>
            </div>
        
            <div class="replay_comment">
                <img src="images/avatars/image-juliusomo.png" alt="">
                <input type="text" name="" class="respond-comment" placeholder="Add a comment...">
                <div><button type="button" class="replay">REPLAY</button></div>
                    
            </div>
        </div>
        `
        item.replies.forEach((repl) =>{
            element.innerHTML += `
            <div class="section">
                <div class="sect1">
                    <div class="learn_comment modify">
                        <div class="score_section">
                            <img src="images/icon-plus.svg" alt="">
                            <div class="score">${repl.score}</div>
                            <img src="images/icon-minus.svg" alt="">
                        </div>
                        <div class="comment_section">
                            <div class="head">
                                <div class="user_info">
                                    <img src="${repl.user.image.png}" alt="">
                                    <h4>${repl.user.username}</h4>
                                    <span>${repl.createdAt}</span>
                                </div>
                                <div class="replay_section">
                                    <button type="button" class="replay">
                                        <img src="images/icon-reply.svg" alt="">
                                        <span>Replay</span>
                                    </button>
                                </div>
                            </div>
                            <div class="comment">
                                <p> <span>@${repl.replyingTo}</span> ${repl.content}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="replay_comment">
                    <img src="images/avatars/image-juliusomo.png" alt="">
                    <input type="text" name="" class="respond-comment" placeholder="Add a comment...">
                    <div><button type="button" class="replay">REPLAY</button></div>
                </div>
            </div>
            `
        })
        
        content.appendChild(element)
    })
    const replayButtons = document.querySelectorAll('.replay');
    replayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const replayComment = button.closest('.sect1').querySelector('.replay_comment');
            if (replayComment) {
                replayComment.style.display = 'flex'; 
            }
            const commentRep = button.closest('.section').querySelector('.replay_comment');
            if(commentRep) {
                commentRep.style.display = 'flex'
            }
        });
    });

    const inputS = document.querySelectorAll('input')
    inputS.forEach((input) =>{
        /* input.addEventListener('input' , () =>{ */
            let inputComment = input.value;
            console.log(inputComment);
            
            /* myData[2].map((list) =>{
                const newElement = document.createElement('div')
                newElement.className = 'sect1'
                newElement.innerHTML = `
                <div class="learn_comment">
                    <div class="score_section">
                        <button><img src="images/icon-plus.svg" alt=""></button>
                        <div class="score">${list.score}</div>
                        <button><img src="images/icon-minus.svg" alt=""></button>
                    </div>
                    <div class="comment_section">
                        <div class="head">
                            <div class="user_info">
                                <img src="${list.user.image}" alt="">
                                <h4>${list.user.username}</h4>
                                <span></span>
                            </div>
                            <div class="replay_section">
                                <button type="button" class="replay">
                                    <img src="images/icon-reply.svg" alt="">
                                    <span>Replay</span>
                                </button>
                            </div>
                        </div>
                        <div class="comment">
                            <p>${list.content}</p>
                        </div>
                    </div>
                </div>
                `    
            })
            content.appendChild(newElement) */
           /* const newElement = document.createElement('div')
           newElement.className = 'sect1'
           newElement.innerHTML = `
            <div class="learn_comment">
                <div class="score_section">
                    <button><img src="images/icon-plus.svg" alt=""></button>
                    <div class="score"></div>
                    <button><img src="images/icon-minus.svg" alt=""></button>
                </div>
                <div class="comment_section">
                    <div class="head">
                        <div class="user_info">
                            <img src="images/avatars/image-juliusomo.png" alt="">
                            <h4>Juliusomo</h4>
                            <span></span>
                        </div>
                        <div class="replay_section">
                            <button type="button" class="replay">
                                <img src="images/icon-reply.svg" alt="">
                                <span>Replay</span>
                            </button>
                        </div>
                    </div>
                    <div class="comment">
                        <p>${inputComment}</p>
                    </div>
                </div>
            </div>
           `; */

           /* const confirm = document.querySelectorAll('.replay')
           confirm.forEach((btn) =>{
            btn.addEventListener('click', function(){
                const newData = {
                    id : 1 ,
                    content : inputComment ,
                    score : 0 ,
                    user : {
                        image : "images/avatars/image-juliusomo.png" ,
                        username : 'juliusomo'
                    }
                }
                let mytab = [] ;
                mytab.push(newData)
                myData.push(mytab) 
                localStorage.setItem('myData', JSON.stringify(myData))
            })
           }) */
           
       /*  }) */
    })

    /* console.log(myData); */
}




