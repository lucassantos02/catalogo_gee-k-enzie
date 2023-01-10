let items = [
    {
        image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/painting/gamepad.jpg",
        name: "Painting Controller PlayStation",
        price: "R$ 39,99",
        type: "painting",
      },

    {
      image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/actions/dragonballpersonagem.jpg",
      name: "Figure Dragonball - limited edition 'GOKU BOLADO' ",
      price: "R$ 599,80",
      type: "figure",
    },
  
    {
      image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/actions/starwarspersonagem.jpg",
      name: "Figure Baby Yoda - Star Wars",
      price: "R$ 289,99",
      type: "figure",
    },
  
    {
      image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/painting/clock.jpg",
      name: "Painting Smart Watch HW57 Pro",
      price: "R$ 43,00",
      type: "painting",
    },
     
    {
        image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/painting/personagem.jpg",
        name: "Painting Star Wars C-3PO",
        price: "R$ 89,99",
        type: "painting",
      },

      {
        image: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil-Developers/m1-entrega-loja-geek/master/assets/img/actions/animewoman.jpg",
        name: "Figure Soryu Asuka - Neon Genesis Evangelion",
        price: "R$ 329,00",
        type: "figure",
    },
];

let listFigures = [];
let listFrames = [];

function separateItens(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].type == "painting"){
        listFrames.push(lista[i]);
    } else {
      listFigures.push(lista[i]);
    };
  };
};
separateItens(items);
console.log(listFrames);
console.log(listFigures);

let listPaintingSection = document.getElementsByClassName("paintingsSection")[0];
let listFigureSection = document.getElementsByClassName("figuresSection")[0];
let FigureUl = listFigureSection.getElementsByClassName("figureListUl")[0];
let PaintingUl = listPaintingSection.getElementsByClassName("paintingListUl")[0];

for (let i = 0; i < listFrames.length; i++) {
    let elementList = document.createElement("li");
    let imgCard = document.createElement("img");
    imgCard.src = listFrames[i].image;
    imgCard.alt = listFrames[i].name;
    imgCard.classList.add("imgCard");
    let name = document.createElement("span");
    name.innerText = `${listFrames[i].name}`;
    let p = document.createElement("p");
    p.innerText = `${listFrames[i].price}`;
    elementList.appendChild(imgCard);
    elementList.appendChild(name);
    elementList.appendChild(p);
    PaintingUl.appendChild(elementList);
};

for (let i = 0; i < listFigures.length; i++) {
    let elementList = document.createElement("li");
    let imgCard = document.createElement("img");
    imgCard.src = listFigures[i].image;
    imgCard.alt = listFigures[i].name;
    imgCard.classList.add("imgCard");
    let name = document.createElement("span");
    name.innerText = `${listFigures[i].name}`;
    let p = document.createElement("p");
    p.innerText = `${listFigures[i].price}`;
    elementList.appendChild(imgCard);
    elementList.appendChild(name);
    elementList.appendChild(p);
    FigureUl.appendChild(elementList);
};