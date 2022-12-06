const text = document.getElementsByTagName('p')[0];
const botao = document.getElementById('btn');

botao.addEventListener('click', function(){
    text.style.color = 'green';
});