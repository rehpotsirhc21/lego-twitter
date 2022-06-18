async function newFormHandler(event) {
    event.preventDefault();
  console.log(event)
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('[name="post-body"]').value;
    const post_img = document.querySelector('input[name="post_img"]').value;
    
    console.log(title, post_body, post_img)
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
          title,
          post_body,
          post_img,
        }),
      
      
      headers: {
        'Content-Type': 'undefined'
        // 'Accept': '*/*'
        // 'Content-Type': 'multipart/form-data'; 'Boundary': 'X'
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // "content-Type": 'application/json'
      }
    });
  console.log(response);

    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
      
    //   alert(response.statusText);
    // }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
