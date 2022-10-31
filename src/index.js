const swup=new Swup()

var btnCloseOne=document.getElementById('closebtn');
var btnOpenOne=document.getElementById('openbtn1');

var body1=document.getElementById('one');

btnCloseOne.addEventListener('click',()=>{
    body1.style.display="none";
})

btnOpenOne.addEventListener('click',()=>{
    body1.style.display="block";
})


var btnCloseTwo=document.getElementById('closebtnSec2');
var btnOpenTwo=document.getElementById('openbtn2');

var body2=document.getElementById('two');

btnCloseTwo.addEventListener('click',()=>{
    body2.style.display="none";
})

btnOpenTwo.addEventListener('click',()=>{
    body2.style.display="block";
})



const formkeepEmbed = document.querySelector('#formkeep-embed')

formkeepEmbed.addEventListener('formkeep-embed:submitting', _event => {
  console.log('Submitting form...')
})

formkeepEmbed.addEventListener('formkeep-embed:submitted', _event => {
  console.log('Submitted form...')
})
