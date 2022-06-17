picImgEl = document.getElementById('pic-image-list-group')
themeBtnListEl = document.getElementById('Theme-List')
window.onload = function ()
{
    fetch('/api/profilepics/').then(function (response)
    {
        if (response.ok)
        {
            response.json().then(function (data)
            {
                var themeList = []
                for (let i = 0; i < data.length; i++) {
                    
                    if (!themeList.includes(data[i].fig_theme))
                    {
                        var btnLiEl = document.createElement('li')
                        var themeListEl = document.createElement('button')
                        themeListEl.className = 'Pic-Btn'
                        themeListEl.textContent = data[i].fig_theme
                        btnLiEl.append(themeListEl)
                        themeBtnListEl.append(btnLiEl)
                        themeList.push(data[i].fig_theme)
                        console.log(data[i].fig_theme);
                    }
                }
                btn = document.getElementsByClassName('Pic-Btn')
                for (var i = 0; i < btn.length; i++)
                {
                    btn[i].addEventListener('click', pictureThemeHandler)
                }
                console.log(themeList);
            })
        }
    })
}
async function pictureThemeHandler (event)
{
    if (picImgEl.hasChildNodes())
    {
        while (picImgEl.firstChild)
        {
            picImgEl.removeChild(picImgEl.firstChild)
        }
    }
    const api = (`/api/profilepics/theme/${event.target.textContent}`)
    console.log('click');
    console.log(api);
    fetch(api).then(function (response)
    {
        if (response.ok)
        {
            response.json().then(function (data)
            {
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].fig_name);
                    var liElement = document.createElement('div')
                    liElement.className = 'Img-Div'
                    imgEl = document.createElement('img')
                    imgEl.src = data[i].fig_url
                    imgEl.height = 200
                    imgEl.width = 200
                    liElement.textContent = data[i].fig_name
                    liElement.append(imgEl)
                    picImgEl.append(liElement)
                }
                console.log(data);
                imgClicked = document.getElementsByClassName('Img-Div')
                for (let i = 0; i < imgClicked.length; i++) {
                    imgClicked[i].addEventListener('click', clicked)
                    
                }
            })
        }
    })
}
function clicked (event)
{
    console.log(event);
    console.log(event.path[1].childNodes[1].currentSrc)
    profilepic = event.path[1].childNodes[1].currentSrc
    fetch('/api/users/p').then(function (response)
    {
        if (response.ok)
        {
            response.json().then(function (data)
            {
                console.log(data[0].id);
                console.log(profilepic)
                userid = data[0].id
                const response = fetch(`/api/users/profilepics/${userid}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        profilepic
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
                document.location.replace('/dashboard')
            })
        }
    })
}
