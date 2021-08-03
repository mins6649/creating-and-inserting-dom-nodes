//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

const element = document.createElement('div'); 

document.body.appendChild(element); 

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

element.style.backgroundColor = '#27647B'; 
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2; 

{/* <div>
    <ul>
         <li>

         </li>
    </ul>
</div>
 */}
