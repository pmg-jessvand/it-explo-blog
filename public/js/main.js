const fetchData = async () => {
  const data = await fetch('https://itexploblog.herokuapp.com/posts');
  const jsonData = await data.json();
  return jsonData;
}


const showData = async () => {
  const container = document.querySelector('.blogs-container');
  const data = await fetchData();

  if( data ) {
    let tempStr = '';
    data.forEach(blog => {
      tempStr += `
        <div class="col-4">
         <a href="#${blog.id}">
          <div class="blog-teaser">
            <div class="image-wrap">
              <img src="https://itexploblog.herokuapp.com${blog.thumbnail.url}">
            </div>
            <div class="title-wrap">
              <p>${blog.Title}</p>
            </div>
          </div>
         </a>
        </div>
      `;
    });
    container.innerHTML = tempStr;

  } else {
    container.innerHTML = 'No Blogs, sorry...';
  }

}

const showBlogs = async () => {
  const blogData = await fetchData();
  
  if( blogData ) {
    const blogContainer = document.querySelector('.blogs-detail-container');
    let blogStr = '';
    blogData.forEach(post => {
      blogStr += `
        <section class="blog-post" id="${post.id}">
          <div class="blog-banner">
            <img src="https://itexploblog.herokuapp.com${post.thumbnail.url}">
          </div>
          <div class="blog-body">
            <h2>${post.Title}</h2>
            ${post.content}
          </div>
        </section>
      `;
    });
    blogContainer.innerHTML = blogStr;

  } else {
    return null
  }

}

const init = () => {
  fetchData();
  showData();
  showBlogs();
}

init();