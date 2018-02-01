const main = document.querySelector('main');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const state = {
  numElementsDisplay: 4,
  firstElement: 0,
  elements: [],
  selectNumElements: function(num) {
    for (let i = 1; i <= num; i++) {
      this.elements.push(i);
    }
  }
};

state.selectNumElements(8);

leftBtn.addEventListener('click', function(e) {
  if (state.firstElement >= state.numElementsDisplay) state.firstElement -= state.numElementsDisplay;
  populate(state.firstElement, state.firstElement + state.numElementsDisplay);
});

rightBtn.addEventListener('click', function(e) {
  state.firstElement += state.numElementsDisplay;
  state.firstElement = processOverflow(state.firstElement);
  populate(state.firstElement, state.firstElement + state.numElementsDisplay);
});

function processOverflow(num) {
  if (num >= state.elements.length) num = num % state.elements.length;
  return num;
}

populate(0, 4);

function populate(start, end) {
  emptyNode(main);
  let pokemonCounter = start + 1;
  for (let i = start; i < end; i++) {
    const section = document.createElement('section');
    const p = document.createElement('p');
    const img = document.createElement('img');
    // img.src = '/Users/macbook/Desktop/trees.jpg';
    $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonCounter}`).then(function(response) {
        console.log('response recieved');
        var imgUrl = response.sprites.front_default;
        img.src = imgUrl;
        p.innerText = `${state.elements[i]}: ${response.name[0].toUpperCase()}${response.name.slice(1)}`;
      })
      .catch(function(response) { console.log('no') });
    pokemonCounter++;
    // p.innerText = state.elements[i];
    p.innerText = 'Loading Pokemans...';
    section.append(img);
    section.append(p);
    main.append(section);
  }
}

// function getPokemonPic(num) {
//   debugger;
//     $.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(function(response) {
//         console.log('response recieved');
//         var imgUrl = response.sprites.front_default;
//         return imgUrl;
//       })
//       .catch(function(response) {console.log('no')});
//     // }
//   }


//rithm ppl said there's an empty() function?
function emptyNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}