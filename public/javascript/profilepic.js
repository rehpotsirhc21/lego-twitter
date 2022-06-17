

window.onload = function ()
{
  const api = (`/api/users/p`)
  fetch(api).then(function (response)
{
  if (response.ok)
  {
    response.json().then(function (data)
    {
      document.getElementById('Lego-Bin').innerHTML = data[0].username+"'s " + 'Lego Bin'
      console.log(data[0].username+"'s");
      let pic = data[0].profilepic
      document.querySelector('.profile-Img').src = pic
      console.log(pic);
      if (!pic)
      {
        document.querySelector('.profile-Img').src = 'https://rebrickable.com/static/img/nil_mf.jpg';
        return pic
      }
    })
  }
})
}
async function changeProfliePictureHandler (event)
{
  event.preventDefault()
  const response = await fetch('/dashboard/profilepic', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.ok)
  {
    document.location.replace('/dashboard/profilepic')
  }
}
document.querySelector('.change-profile-pic-btn').addEventListener('click', changeProfliePictureHandler)