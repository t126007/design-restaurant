const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards'
    }
  );
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8
      },
      {
        opacity: 0,
        offset: 1
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});



const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

for(let i = 0; i < thumbImages.length; i++){
  thumbImages[i].addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
}
thumbImages.forEach((thumbImage)=>{
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});

document.getElementById('search-form').addEventListener('submit', function(e){
  e.preventDefault();
  const keyword = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('.product-item');
  const statusMessage = document.getElementById('search-status');


  items.forEach(item => {
    const productName = item.getAttribute('data-name').toLowerCase();
    if(productName.includes(keyword) || keyword === ""){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
});


const products = [
  { name: "米 主食 カレーライス", title: "カレーライス", price: "￥1,200", img: "img/pexels-spotwizardlee-35777904-9110581.jpg" },
  { name: "米 主食 オムライス", title: "オムライス", price: "￥900", img: "img/pexels-gu-ko-2150570603-37332245.jpg" },
  { name: "麺 うどん 主食", title: "うどん", price: "￥400", img: "img/pexels-makafood-82669418-9029281.jpg" },
  { name: "麺 そば 主食", title: "そば", price: "￥600", img: "img/pexels-minami-okamoto-1451818736-26727317.jpg" },
  { name: "米 天丼 主食", title: "天丼", price: "￥580", img: "img/pexels-zhen-ciang-huang-2150740552-31416983.jpg" },
  { name: "米 かつ丼 主食", title: "かつ丼", price: "￥580", img: "img/pexels-viridianaor-32789244.jpg" },
  { name: "天ぷら 副菜", title: "天ぷら", price: "￥200", img: "img/pexels-julias-torten-und-tortchen-434418-19021559.jpg" },
  { name: "魚 塩焼き 鮭の塩焼き 副菜", title: "鮭の塩焼き", price: "￥180", img: "img/pexels-richard-l-2150581203-32722832.jpg" },
  { name: "米 主食 鮭丼", title: "鮭丼", price: "￥300", img: "images/pexels-gu-ko-2150570603-37332351.jpg" },
  { name: "魚 鮭とさつまいもの煮物 煮物 副菜", title: "鮭とさつまいもの煮物", price: "￥300", img: "images/pexels-gu-ko-2150570603-37332340.jpg" },
  { name: "鮭大根 煮物 副菜", title: "鮭大根", price: "￥260", img: "images/pexels-gu-ko-2150570603-37297762.jpg" },
  { name: "炒め物 副菜 なすとピーマンと揚げ豆腐の炒め物", title: "なすとピーマンと揚げ豆腐の炒め物", price: "￥260", img: "images/pexels-gu-ko-2150570603-37297770.jpg" },
  { name: "煮物 副菜 大根とタコの煮物", title: "大根とタコの煮物", price: "￥120", img: "images/pexels-gu-ko-2150570603-36964138.jpg" },
  { name: "生姜焼き 副菜", title: "生姜焼き", price: "￥360", img: "images/pexels-gu-ko-2150570603-37297736.jpg" },
  { name: "肉じゃが 副菜 煮物", title: "肉じゃが", price: "￥600", img: "imgs/pexels-gu-ko-2150570603-36964124.jpg" },
  { name: "煮物 副菜 かぼちゃの煮物", title: "かぼちゃの煮物", price: "￥180", img: "imgs/pexels-gu-ko-2150570603-36964132.jpg" },
  { name: "副菜 炒め物 豚肉の炒め物", title: "豚肉の炒め物", price: "￥430", img: "imgs/pexels-fox-58267-8288080.jpg" },
  { name: "煮物 副菜 れんこんの煮物", title: "れんこんの煮物", price: "¥120", img: "imgs/pexels-gu-ko-2150570603-36964062.jpg" },
  { name: "茄子の煮物 煮物 副菜", title: "茄子の煮物", price: "￥130", img: "imgs/pexels-gu-ko-2150570603-36964123.jpg" }
];

const productList = document.getElementById('product-list');

if (productList) {
  products.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('product-item');
    item.setAttribute('data-name', product.name);

    item.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price}</p>
    `;
    
    productList.appendChild(item);
  });
}
