    'use strict'

 // document.querySelector('.button').addEventListener('click', ()=> {
 //     const input = document.querySelector('.input').value;
 //
 //     if(!input) {
 //         return;
 //     }
 //     document.querySelector('.panel').innerText = input;
 //     document.querySelector('.input').value = '';
 //     console.log(input)
 // })
   function submitForm() {
       const input = document.querySelector('.input').value;

       if(!input) {
           return;
       }
       document.querySelector('.panel').innerText = input;
       document.querySelector('.input').value = '';
       document.querySelector('.notification').style.display = 'block';

   }
    function inputChanged(e) {
        if(e.code === 'Enter') {
            submitForm();
        }
    }
// document.querySelector(".input").addEventListener('keydown', (e)=> {
//     if(e.code === 'Enter') {
//         submitForm();
//     }
// })

    console.log(document.querySelector('.one').innerText);
    console.log(document.querySelector('.one ~ div').innerText);
    console.log(document.querySelector('#two').innerText);
    console.log(document.querySelector('[user-id="4"]').innerText);


    const panelClass = "button";
    const panelText = "Panel";
    const newElement =  document.createElement('div');
  newElement.setAttribute('user-id', 1);
  newElement.classList.add('panel');
 // newElement.innerText = 'Button';
  newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;

  document.querySelector('.test').appendChild(newElement);

