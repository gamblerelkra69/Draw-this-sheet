const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
const clrs = document.querySelectorAll('.clr');
console.log(clrs);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 5;
let prevX=null;
let prevY=null;
let draw = false;
let clrArr = Array.from(clrs);
console.log(clrArr);
clrArr.forEach(clr=>{
	clr.addEventListener('click',()=>{
		ctx.strokeStyle = clr.dataset.clr;;
	});
});
window.addEventListener('mousedown',()=>{  draw=true ;});
window.addEventListener('mouseup',()=>{  draw=false ;});
window.addEventListener('mousemove',(e)=>{
	if(draw==false || prevX==null || prevY == null){
		prevX=e.clientX;
		prevY=e.clientY;
	}
	console.log(e.clientX);
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	ctx.beginPath(); // zuraasiin zamiig ehluuleh
	ctx.moveTo(prevX,prevY);  // mouse hodloh bairshil
	ctx.lineTo(mouseX,mouseY) // mousenii bairshild zurah
	ctx.stroke(); // zursan zuraasiig gargaj ireh
	prevX = e.clientX;
	prevY = e.clientY;
});
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
	ctx.clearRect(0,0,canvas.width,canvas.height);
})
let saveBtn = document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
	let data = canvas.toDataURL('imag/jpg');
	let a = document.createElement('a');
	a.href=data;
	a.download='maluudiin jursan wtf.jpg';
	a.click();
});
let selectBtn = document.querySelector('.select')
let selector = document.querySelector('.selector')
selectBtn.addEventListener('click',()=>{
	ctx.lineWidth=selector.value;
})
let colorSelector = document.querySelector('.spider')
colorSelector.addEventListener('click',()=>{
	ctx.color=spider.value;
})