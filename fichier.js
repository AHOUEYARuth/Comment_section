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
}




