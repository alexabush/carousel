"use strict";

document.addEventListener('DOMContentLoaded', function(event) {
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

  (function start() {
    state.selectNumElements(8);
    populate(0, state.numElementsDisplay);
  })();

  leftBtn.addEventListener('click', function(e) {
    let current = state.firstElement;
    let numDisplay = state.numElementsDisplay;
    if (current >= numDisplay) current -= numDisplay;
    populate(current, current + numDisplay);
  });

  rightBtn.addEventListener('click', function(e) {
    let current = state.firstElement;
    let numDisplay = state.numElementsDisplay;
    current += numDisplay;
    current = processOverflow(current, state.elements.length);
    populate(current, current + numDisplay);
  });

  function populate(start, end) {
    emptyNode(main);
    let pokemonCounter = start + 1;
    for (let i = start; i < end; i++) {
      const section = document.createElement('section');
      const p = document.createElement('p');
      p.innerText = 'Loading Pokemans...';
      const img = document.createElement('img');
      getPokemonPic(img, p, pokemonCounter, i);
      section.append(img);
      section.append(p);
      main.append(section);
    }

    function getPokemonPic(img, p, numPokem, index) {
      $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonCounter}`).then(function(response) {
          console.log(`pokemon ${numPokem} recieved`);
          img.src = response.sprites.front_default;
          p.innerText = `${state.elements[index]}: ${response.name[0].toUpperCase()}${response.name.slice(1)}`;
        })
        .catch(function(response) { console.log(`failed to get pokemon ${numPokem}`) });
      pokemonCounter++;
    }

  }
});
/*
helper functions
*/

//rithm ppl said there's an empty() function?
function emptyNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function processOverflow(num, limit) {
  if (num >= limit) num = num % limit;
  return num;
}