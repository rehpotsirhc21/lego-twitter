async function newFormHandler(event) {
    event.preventDefault();
  // console.log(event)
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('[name="post-body"]').value;
    const post_img = document.querySelector('[name="post_img"]').value;
    
    console.log(title, post_body, post_img)
    const response = await fetch(`/api/posts`, {
      method: 'post',
      body: JSON.stringify({
        title,
        post_body,
        post_img
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
