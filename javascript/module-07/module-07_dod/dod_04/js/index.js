
/* <div class="post">
<img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
<h2 class="post__title">Lorem ipsum dolor</h2>
<p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
<ul class="actions post__actions">
  <li class="actions__item">
  <button class="actions__btn ">
    <span class="actions__icon actions__icon--like"></span>
    <span class="actions__count">0</span>
  </button>
  </li>
  <li class="actions__item">
  <button class="actions__btn">
    <span class="actions__icon actions__icon--dislike"></span>
    <span class="actions__count">0</span>
  </button>
  </li>
  <li class="actions__item">
  <button class="actions__btn">
     <span class="actions__icon actions__icon--fav"></span>
    <span class="actions__count">0</span>
  </button>
  </li>
</ul>
</div> */


const post = document.createElement('div');
post.classList.add('post');


  const postImage = document.createElement('img');
  postImage.classList.add('post__image');
  postImage.setAttribute('src', 'http://via.placeholder.com/400x150')


  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = 'Lorem ipsum dolor';


  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';


  const actionsPostAct = document.createElement('ul');
  actionsPostAct.classList.add('actions', 'post__actions');
  const actionsItems = []


    for (let i = 0; i < 3; i += 1) {
      const actionsItem = document.createElement('li');
      actionsItem.classList.add('actions__item');
      const actionsBtn = document.createElement('button');
      actionsBtn.classList.add('actions__btn');
      
      const actionsIcon = document.createElement('span');
      actionsIcon.classList.add('actions__icon');
        if (i === 0) {
          actionsIcon.classList.add('actions__icon--like');
        }
        else if (i === 1) {
          actionsIcon.classList.add('actions__icon--dislike');
        }
        else if (i === 2) {
          actionsIcon.classList.add('actions__icon--dislike');
        }
      const actionsCount = document.createElement('span');
      actionsCount.classList.add('actions__count');
      actionsCount.textContent = 0;

      actionsBtn.append(actionsIcon, actionsCount);
      actionsItems.push(actionsItem, actionsBtn);
    }

    actionsPostAct.append(...actionsItems,);

post.append(postImage, postTitle, postText, actionsPostAct);
// console.log(actionsItems)
console.log(post);