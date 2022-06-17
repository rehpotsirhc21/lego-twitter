window.onload = function ()
{
  
  // const api = (`/api/profilepics/name/${name}`)
  const api = (`/api/users/p`)
  fetch(api).then(function (response)
{
  if (response.ok)
  {
    response.json().then(function (data)
    {
      let pic = data[0].profilepic
      document.querySelector('.profile-Img').src = pic
      console.log(pic);
      if (!pic)
      {
        document.querySelector('.profile-Img').src = 'https://rebrickable.com/static/img/nil_mf.jpg';
        return pic
      }
      // console.log(data);
      
      // data[0].profilepic
    })
  }
})
}
async function changeProfliePictureHandler (event)
{
  event.preventDefault()

  document.location.replace('/profilepic')
}
document.querySelector('.change-profile-pic-btn').addEventListener('click', changeProfliePictureHandler)