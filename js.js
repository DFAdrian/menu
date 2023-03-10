const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },{
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      }
  ];

const buttons = document.querySelectorAll('.btn');
const fragment = document.createDocumentFragment()
const container = document.getElementById('container');

window.addEventListener('DOMContentLoaded',createElements(menu))


buttons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const cards = document.querySelectorAll('.item');
        let clickedBtn = e.target.dataset.id
        hideElements(cards,clickedBtn)
    })
})



function createElements(data){
    data.map(item=>{
        let article = document.createElement('article')
        article.setAttribute('class','item');
        article.setAttribute('data-category',`${item.category}`);
        article.innerHTML =`
        <img src=${item.img} class="item__img" alt="food-img">
        <div class="item__info">
        <header class="item__header">
        <h4 class="item__name">${item.title}</h4>
        <span class="item__price">$${item.price}</span>
        </header>
        <p class="item__text">${item.desc}</p>
        </div>`
        fragment.appendChild(article)
    })
    container.appendChild(fragment)
}


function hideElements(elements,btn){
    elements.forEach(el=>{
        if(el.dataset.category == btn){
          el.classList.remove('hide')
        }else{
          el.classList.add('hide')
        }
        if(btn == 'all'){
          el.classList.remove('hide')
        }
    })
}
