const main = document.querySelector('main');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

leftBtn.addEventListener('click', function(e) {
  populate(0, 4);
});

rightBtn.addEventListener('click', function(e) {
  populate(4, 8);
});

const elements = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8
];

populate(0, 4);

function populate(start, end) {
  emptyNode(main);
  for (let i = start; i < end; i++) {
    const section = document.createElement('section');
    const p = document.createElement('p');
    p.innerText = elements[i];
    // section.innerText = elements[i];
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