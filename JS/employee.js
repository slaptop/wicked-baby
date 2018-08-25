class Employee
{
	constructor(x,y,name,room)
	{
		this._employeeTypes=["mommy","mistress","nurse","dominatrice","pet trainer"];
		this._punishmetList=["enema","soap","boundage","tabasco","toothpaste","figging","anal","urethral","flagelation","spanking"];
		this._favoritePunishment=this._punishmetList[Math.floor(Math.random()*this._punishmetList.lenght)];
		this._posX=x;
		this._posY=y;
		this._el=document.createElement('p');
		this._el.className="character dom unselectable";
		this._el.style.marginLeft=this._posX+"px";
		this._el.style.marginTop=this._posY+"px";
		document.body.append(this._el);
		this._salary=10;
		this._currentRoom=room;
		this.name="dom"+name;
	}
	
	changeRoom(oldRoom,room)
	{
		this._currentRoom=room._name;
		let index;
		if ((index = oldRoom._doms.indexOf(this.name)) > -1)
		{
		  oldRoom._doms.splice(index, 1);
		  room._doms.push(this.name);
		}
		this.pX=room.coords[0][0]+((room.coords[1][0]-room.coords[0][0])/2)-(((room.coords[1][0]-room.coords[0][0])/2)%24);
		this.pY=room.coords[0][1]+((room.coords[1][1]-room.coords[0][1])/2)-(((room.coords[1][1]-room.coords[0][1])/2)%24);
		this._el.style.marginLeft=this.pX+"px";
		this._el.style.marginTop=this.pY+"px";
	}
}

//employee of the month
//what there is to add in event add punishment onclick
//add the functions of punishment, (wheighting subs diaper...)
//messages when slave behaves badly
//render notion of time(days) to the user
//collecting semen
//show to user current selected room, type, cost of the selection.
//menu (save exit etc...) but also not having to reopen the entire menu when an item is bought