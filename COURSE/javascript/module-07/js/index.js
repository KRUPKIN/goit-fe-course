

const createPostCard = function(
  img = 'http://via.placeholder.com/400x150', 
  title = 'Title text', 
  text = 'Text lorem ipsum', 
  stats = {
    likes: 0,
    dislikes: 0,
    fav: 0
}) {
  
  const post = document.createElement('div');
  post.classList.add('post');
  
    const postImage = document.createElement('img');
    postImage.classList.add('post__image');
    postImage.setAttribute('src', img)
  
    const postTitle = document.createElement('h2');
    postTitle.classList.add('post__title');
    postTitle.textContent = title;
  
    const postText = document.createElement('p');
    postText.classList.add('post__text');
    postText.textContent = text;
  
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
        const actionsCount = document.createElement('span');
        actionsCount.classList.add('actions__count');
        actionsCount.textContent = 0;
          if (i === 0) {
            actionsIcon.classList.add('actions__icon--like');
            actionsCount.textContent = stats.likes;
          }
          else if (i === 1) {
            actionsIcon.classList.add('actions__icon--dislike');
            actionsCount.textContent = stats.dislikes;
          }
          else if (i === 2) {
            actionsIcon.classList.add('actions__icon--fav');
            actionsCount.textContent = stats.fav;
          }
  
        actionsBtn.append(actionsIcon, actionsCount);
        actionsItems.push(actionsItem, actionsBtn);
      }
  
      actionsPostAct.append(...actionsItems,);
  
  post.append(postImage, postTitle, postText, actionsPostAct);
  
  const homeWork = document.querySelector('.home__work');
  homeWork.append(post);
  console.log(stats)
  return homeWork;
}


const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const createCards = function(posts) {
  posts.forEach(element => {
    const {img, title, text, stats} = element
    createPostCard(img, title, text, stats)
  });
}

createCards(posts);

// createPostCard()
// const createCards = function(posts) {
// posts.forEach((num, idx) ({}
  
// );
// }

// \


