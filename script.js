const goods = [
    { title: 'Shirt', price: 150, description: 'The best shirt in the world!', img: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50, description: 'The best socks in the world!', img: 'img/Socks.jpg' },
    { title: 'Jacket', price: 350, description: 'The best jacket in the world!', img: 'img/Jacket.jpg' },
    { title: 'Shoes', price: 250, description: 'The best shoes in the world!', img: 'img/Shoes.jpg' },
];


const $goodsList = document.querySelector('.goods-list');
  
const renderGoodsItem = ({ title = '', price = 0, description = '', img = '' }) => {
    return `<div class="goods-item">
    <img src="${img}" alt="${title}">
    <h3>${title}</h3>
    <p>${price} р</p>
    <p>${description}</p>
    <button>Купить</button>
    </div>`;
};
  
const renderGoodsList = (list = goods) => {
    let goodsList = list.reduce((pList, p) => pList += renderGoodsItem(p), "");
    //let goodsList = list.map(
    //         item => renderGoodsItem(item)
    //     );

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();