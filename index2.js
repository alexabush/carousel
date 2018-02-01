const main = document.querySelector('main');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const state = {
  numElementsDisplay: 4,
  firstElement: 0,
  elements: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ]
};

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
  for (let i = start; i < end; i++) {
    const section = document.createElement('section');
    const p = document.createElement('p');
    const img = document.createElement('img');
    img.src = '/Users/macbook/Desktop/trees.jpg';
    p.innerText = state.elements[i];
    section.append(img);
    section.append(p);
    main.append(section);
  }
}

//rithm ppl said there's an empty() function?
function emptyNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

// <section>
//   <img src="" alt="">
//   <h3>box4</h3>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem esse voluptate alias, id nemo facilis nemo.</p>
//   <button>btn4</button>