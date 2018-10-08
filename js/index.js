var element = document.createElement('div');
element.innerHTML = 'Helo, DOM!';
element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);
element.style.textAlign = 'center';

var ul = document.createElement('ul');

for (let i = 0; i < 3; i++){
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

var ul2 = document.createElement('ul');

for (let i = 0; i < 4; i++){
  let li = document.createElement('li');
  li.innerHTML = (i * 2).toString();
  ul2.appendChild(li);
}

document.body.appendChild(ul);
// document.body.appendChild(ul2);


// ul.removeChild(ul.querySelector('li:nth-child(3)'))

// ul.remove()
