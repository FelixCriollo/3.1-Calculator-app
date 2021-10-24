// Contains the inputs
const themes = document.querySelectorAll('.input-radio')
// Contains the calculatar container
const cal = document.querySelector('body')
// Contains slider
const slider = document.querySelector('.slider')


themes.forEach(r => r.addEventListener('click', () => {
  if (r.checked === true && r.id == 'theme-1') {
    console.log('Este es el tema1');
    cal.classList.add('theme-1')
    cal.classList.remove('theme-2')
    cal.classList.remove('theme-3')
    slider.classList.add('left-1')
    slider.classList.remove('left-8')
    slider.classList.remove('left-15')
  } 
  if (r.checked === true && r.id == 'theme-2') {
    console.log('Este es el tema2');
    cal.classList.add('theme-2')
    cal.classList.remove('theme-3')
    cal.classList.remove('theme-1')
    slider.classList.add('left-8')
    slider.classList.remove('left-1')
    slider.classList.remove('left-15')
  } 
  if (r.checked === true && r.id == 'theme-3') {
    console.log('Este es el tema3');
    cal.classList.add('theme-3')
    cal.classList.remove('theme-2')
    cal.classList.remove('theme-1')
    slider.classList.add('left-15')
    slider.classList.remove('left-1')
    slider.classList.remove('left-8')
  } 
}))

