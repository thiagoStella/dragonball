const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const goku = document.querySelector('.goku');
btn1.onclick = function(){
    document.querySelector('.goku').src="assets/gokussj1.webp";
}
btn2.onclick = function(){
    document.querySelector('.goku').src="assets/gokussj2.jpeg";
}
btn3.onclick = function(){
    document.querySelector('.goku').src="assets/gokussj3.png";
}
