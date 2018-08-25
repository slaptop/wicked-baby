class Message
{
	constructor(content,displayTime=3000)
	{
		this.mess=document.createElement('p');
		this.mess.className="msg unselectable";
		this.mess.innerHTML=content;
		document.body.appendChild(this.mess);
		let currentMess=this;
		setTimeout(function(){currentMess.hide();},displayTime);
	}
	
	hide()
	{
		document.body.removeChild(this.mess);
	}
}

new Message("In an attempt to find new ways of controlling humanity,\
 the govenement chose you in order to do some tests on subjects. \
He let you the liberty to treat your subjects however you desire\
he supplies you with some money at the end of every month\
and sends a new sub volunteer or not every month.\
He also gave you a hiddent base in a mountain with which you re\
free to do whatever you want, have fun.",10000);