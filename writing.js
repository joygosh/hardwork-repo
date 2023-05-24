



// const color = document.getElementById('body')
// // color.style.backgroundColor = 'black'
// color.style.color = 'red'
// color.style.justifyContent = 'center'
// const btn = document.getElementById('btn')
// btn.style.color = 'black'
// btn.style.backgroundColor = 'black'
// btn.style.border = 'none'



// const txt = document.getElementById('text')
// const value = txt.value
// const innerr = textt.innerText
// txt.value = textt.innerText





// document.getElementById('btn').addEventListener('click', function (event) {
//   // const txt = document.getElementById('text')
// const value = txt.value
// txt.value = '';

// const text = event.target.value
// const btn = document.getElementById('btn')






// if (text === 'joy') {
//   btn.removeAttribute('disabled')
// }

// else {
//   btn.style.color = 'none'
//   btn.setAttribute('disabled', true)
// }

var i = 0;
var text = ''
var speed = 50;
function joy() {


  if (i < text.length) {
    document.getElementById('pp').innerHTML += text.charAt(i);
    i++;
    setTimeout(joy, speed);



  }

  const txt = document.getElementById('text')
  const valuee = txt.value
  text = valuee



  const bijoy = '';
  const div = document.getElementById('div')


  const inner = div.innerText
  const bijoyy = '';
  if (txt.value === bijoy && div.innerText === bijoyy) {
    alert('Please Type !!!')


  }
}

// var i = 0;
// var text = ''
// var speed = 50;
// document.getElementById('btn').addEventListener('click', function () {




//   if (i < text.length) {
//     document.getElementById('pp').innerHTML += text.charAt(i);
//     i++;
//     setTimeout(joy, speed);



//   }

//   const txt = document.getElementById('text')
//   const valuee = txt.value
//   text = valuee



//   const bijoy = '';
//   const div = document.getElementById('div')


//   const inner = div.innerText
//   const bijoyy = '';
//   if (txt.value === bijoy && div.innerText === bijoyy) {
//     alert('Please Type !!!')


//   }

// })









// }

document.getElementById('btnnn').addEventListener('click', function () {
  const div = document.getElementById('div')
  const inner = div.innerText
  const joy = 'Tor Kam Hoiya gese tui eber side ja....'
  const txt = document.getElementById('text')
  const value = txt.value

  const bijoy = '';
  if (txt.value === bijoy) {
    alert('Please Type !!!')


  }

  else {
    div.innerText = joy

  }
  txt.style.color = 'white'
  if (txt.value !== bijoy) {

    const numm = document.getElementById('btn')

    numm.style.color = 'black'
  }

})

/*
 <h1 id="h1">My secret info</h1>
    <input id="input" type="text" placeholder="Please type delete">
    <button id="delete" disabled>Delete</button>

    <script>
        // document.getElementById('delete').addEventListener('click', function () {
        //     const varr = document.getElementById('h1');
        //     varr.style.color = 'white';
        // })
        document.getElementById('input').addEventListener('keyup', function (event) {
            const text = event.target.value;
            const deletebutton = document.getElementById('delete');
            if (text === 'delete') {
                deletebutton.removeAttribute('disabled');
                deletebutton.style.backgroundColor = 'red';


            }
            else {

                deletebutton.setAttribute('disabled', true);
                deletebutton.style.backgroundColor = '';
            }
        })

*/









// document.getElementById('next').addEventListener('click', function () {
//   const txt = document.getElementById('text')
//   const value = txt.value
//   const joy = 'Tor Kam Hoiya gese tui eber side ja....'
//   const div = document.getElementById('div')


//   const inner = div.innerText
//   const bijoy = '';
//   if (div.innerText !== joy) {
//     alert('Please Type !!!')


//   }


//   else {
//     location.href = 'joy.html'
//   }


// })
// document.getElementById('btn').addEventListener('click', function () {

//   const contan = document.getElementById('contan')
//   contan.style.display = 'none'




// })

