// import {postFile} from './api'



const themeButtons = document.querySelectorAll('.header__theme-menu-button');
const inputButton = document.querySelector('.button')
const input = document.querySelector('input[type="file"]')

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('header__theme-menu-button_type_light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('header__theme-menu-button_type_dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .classList.add('header__theme-menu-button_active');
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

// inputeButton.addEventListener('click', () => {
//   postFile(input)
//   .then(() => {
//     console.log('Hi')
//   })
// })

initTheme();


const config = {
    baseUrl: 'https://sleep.projectswhynot.site/upload',
};


function checkFetchResult (res) {
    if (res.ok) {
        return res.json();
    } 
    else {
        Promise.reject(`Ошибка: ${res.status}`)
    }
}

function postFile (input) {
    return fetch(`${config.baseUrl}`, {
        method: 'POST',
        body: input.files[0]
    })
    .then((res) => {
        return checkFetchResult(res)
      })
}





inputButton.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  postFile(input)
  .then(() => {
    console.log('Hi')
  })
})





// window.addEventListener('load', function () {
//   preloader.style.display = 'none';
// });




