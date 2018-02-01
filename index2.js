const main = document.querySelector('main');

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

for (let i = 0; i < 4; i++) {
  const section = document.createElement('section');
  const p = document.createElement('p');
  p.innerText = elements[i];
  // section.innerText = elements[i];
  section.append(p);
  main.append(section);
}
    
    // <section>
    //   <img src="" alt="">
    //   <h3>box4</h3>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem esse voluptate alias, id nemo facilis nemo.</p>
    //   <button>btn4</button>