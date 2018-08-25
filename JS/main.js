let classes=["terrain","item","toolsClass","messageClass","roomClass","employee","subject","ui","bankSystem","timeManagement","event"];
let winW=window.innerWidth;
let winH=window.innerHeight;
let tileSize=24;

document.addEventListener("DOMContentLoaded",function()
{
	for(let i = 0;i<classes.length;i++)
	{
		let sEl=document.createElement('script');
		sEl.src="JS/"+classes[i]+".js";
		document.head.appendChild(sEl);
	}
});