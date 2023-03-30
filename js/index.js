const bg_change = document.querySelectorAll('.bac_item')
const bg_dom = document.querySelector('.box')

let bg_img = localStorage.getItem('bg_img')
if (bg_img) bg_dom.style.backgroundImage = `url(./imgs/bg/${bg_img})`

bg_change.forEach(item => item.addEventListener('click', e => {
  let img_name = item.getAttribute('alt')
  console.log(img_name);
  bg_dom.style.backgroundImage = `url(./imgs/bg/${img_name})`
  localStorage.setItem('bg_img', img_name) 
}))

const change_bac = document.querySelector('.change_bac')
const change_box = document.querySelector('.change_bac_box')
const cls_btn = document.querySelector('.cls_btn')
change_bac.addEventListener('click', () => change_box.style.display = 'block')
cls_btn.addEventListener('click', () => change_box.style.display = 'none')
const re = document.querySelector('.re')
re.addEventListener('click', () => window.location.reload())
