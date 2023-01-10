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

let framesList = [];
let figuresList = [];

function separateItens(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == "painting"){
        framesList.push(items[i]);
    } else {
      figuresList.push(items[i]);
    };
  };
};
separateItens(items);
console.log(framesList);
console.log(figuresList);

let listPaintingSection = document.getElementsByClassName("paintingsSection")[0];
let listFigureSection = document.getElementsByClassName("figuresSection")[0];
let FigureUl = listFigureSection.getElementsByClassName("figureListUl")[0];
let PaintingUl = listPaintingSection.getElementsByClassName("paintingListUl")[0];

for (let i = 0; i < framesList.length; i++) {
    let elementList = document.createElement("li");
    let imagens = document.createElement("img");
    imagens.src = framesList[i].image;
    imagens.alt = framesList[i].name;
    imagens.classList.add("imagenStyle");
    let name = document.createElement("span");
    name.innerText = `${framesList[i].name}`;
    let p = document.createElement("p");
    p.innerText = `${framesList[i].price}`;
    elementList.appendChild(imagens);
    elementList.appendChild(name);
    elementList.appendChild(p);
    PaintingUl.appendChild(elementList);
};

for (let i = 0; i < figuresList.length; i++) {
    let elementList = document.createElement("li");
    let imagens = document.createElement("img");
    imagens.src = figuresList[i].image;
    imagens.alt = figuresList[i].name;
    imagens.classList.add("imagenStyle");
    let name = document.createElement("span");
    name.innerText = `${figuresList[i].name}`;
    let p = document.createElement("p");
    p.innerText = `${figuresList[i].price}`;
    elementList.appendChild(imagens);
    elementList.appendChild(name);
    elementList.appendChild(p);
    FigureUl.appendChild(elementList);
};