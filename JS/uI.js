class UI
{
	constructor()
	{
		this._constructionsTab=[	{price:50,name:"nursery",color:"yellow"},
								{price:50,name:"tortureChamber",color:"tomato"},
								{price:50,name:"sissyRoom",color:"pink"},
								{price:50,name:"denial",color:"darkviolet"},
								{price:10,name:"arrival",color:"deepskyblue"},
								{price:50,name:"animalry",color:"burlywood"}];
		this.lateralMenu = document.createElement('p');
		this.bottomMenu	 = document.createElement('p');
		this._topMenu	 = document.createElement('p');
		this.mainMenu	 = document.createElement('p');
		this.filter		 = document.createElement('p');
		this.constructionButton	 = document.createElement('p');
		this.menuOptions = ['resume','save','load','exit'];
		this.lateralMenu.id	= "LateralMenu"	;
		this.bottomMenu.id	= "BottomMenu"	;
		this._topMenu.id	= "TopMenu"		;
		this.mainMenu.id	= "MainMenu"	;
		this.filter.className = "lateralfiltre";
		this.constructionButton.id	= "ConstructionButton"	;
		this.mainMenu.className = "mainMenu";
		this.mainMenu.innerHTML = "menu"	;
		document.body.appendChild(this.lateralMenu	);
		document.body.appendChild(this.bottomMenu	);
		document.body.appendChild(this._topMenu		);
		document.body.appendChild(this.mainMenu		);
		document.body.appendChild(this.filter		);
		document.body.appendChild(this.constructionButton	);
		this.uICoordinates = {	"mainMenu":				{"coord":	[[(0.5*winW)-(MainMenu.offsetWidth/2),0],
																	[(0.5*winW)+(MainMenu.offsetWidth/2),MainMenu.offsetHeight]],
														"statu":	true,
														"precStatu":true},
								"mainMenuOpen":			{"coord":	[[0,0],[150,winH]],
														"statu":	false},
								"bottomMenu": 			{"coord":	[[(0.125*winW)+100,winH-75],
																	[(winW-(0.125*winW))-100,winH]],
														"statu":	false},
								"lateralMenu":			{"coord":	[[0.375*winW,0.25*winH],
																	[0.625*winW,0.75*winH]],
														"statu":	false},
								"topMenu":				{"coord":	[[winW-TopMenu.offsetWidth,0],
																	[winW,TopMenu.offsetHeight]],
														"statu":	false},
								"constructionButton":	{"coord":	[[winW-75,winH-75],[winW,winH]],
														"statu":	false}};
		this.gameMenuType={	room:{	coordinates:{	slave:	[[this.uICoordinates.lateralMenu.coord[0][0],this.uICoordinates.lateralMenu.coord[0][1]+64],[this.uICoordinates.lateralMenu.coord[1][0],0]],//debY (h2)37+(h3)32+(br)2*0 finY : (h2)37+(h3)32+(br)2*0+(elements)18*el.length
													dom:	[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]],
													furniture:[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]]	},
									statu:			false},
							slave:{	coordinates:{ 	rooms: [[this.uICoordinates.lateralMenu.coord[0][0],this.uICoordinates.lateralMenu.coord[0][1]+64],[this.uICoordinates.lateralMenu.coord[1][0],0]],
													skills:[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]],
													outfit:[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]]},
									statu:			false},
							dom:{	coordinates:{	rooms:[[this.uICoordinates.lateralMenu.coord[0][0],this.uICoordinates.lateralMenu.coord[0][1]+64],[this.uICoordinates.lateralMenu.coord[1][0],0]],
													punishments:[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]]},
													/*trainings:[[this.uICoordinates.lateralMenu.coord[0][0],133+(18*Object.keys(evHan.rooms).length)+(18*Object.keys(toRender._subs.punishments).length)],[this.uICoordinates.lateralMenu.coord[1][0],133+(18*Object.keys(evHan.rooms).length)+(18*Object.keys(toRender._subs.punishments).length)+(18*Object.keys(time._subs._skillList).length]]*/
									statu:			false},
							furniture:{coordinates:{items:[[this.uICoordinates.lateralMenu.coord[0][0],this.uICoordinates.lateralMenu.coord[0][1]+32],[this.uICoordinates.lateralMenu.coord[1][0],0]]},
									statu:			false},
							outfit:{coordinates:{	outfit:[[this.uICoordinates.lateralMenu.coord[0][0],0],[this.uICoordinates.lateralMenu.coord[1][0],0]]},
									statu:			false}};
		this.currentGameObject=null;
		this.currentGameRoom=null;
		this.renderConstruction();
	}
	
	get topMenu()
	{
		return this._topMenu;
	}
	
	get constructionsTab()
	{
		return this._constructionsTab;
	}
	
	renderMenu()
	{
		switch(true)
		{
			case (!this.uICoordinates.mainMenu.statu && this.uICoordinates.mainMenu.precStatu):
				this.mainMenu.className="mainMenuOpen";
				for(let i = 0;i<this.menuOptions.length;i++)
					this.mainMenu.innerHTML+="<span>"+this.menuOptions[i]+"</span>";
				this.uICoordinates.mainMenu.precStatu=this.uICoordinates.mainMenu.statu;
				break;
			case (this.uICoordinates.mainMenu.statu && !this.uICoordinates.mainMenu.precStatu):
				this.mainMenu.className="mainMenu";
				this.mainMenu.innerHTML="menu";
				this.uICoordinates.mainMenu.precStatu=this.uICoordinates.mainMenu.statu;
				break;
			case (this.uICoordinates.constructionButton.statu):
				this.constructionButton.className="constructionButtonOn";
				break;
			case (!this.uICoordinates.constructionButton.statu):
				this.constructionButton.className="";
				break;
		}
	}
	
	renderConstruction()
	{
		for(let i = 0;i<this._constructionsTab.length;i++)
		{
			let item = document.createElement('p');
			item.className="bottomMenuItem";
			item.style.backgroundColor=this._constructionsTab[i].color;
			this.bottomMenu.appendChild(item);
		}
	}
	
	renderGameOptions(toRender)
	{
		let previousGameObject=this.currentGameObject;
		this.filter.style.display="inline";
		this.uICoordinates.lateralMenu.statu=true;
		this.lateralMenu.style.display="inline";
		this.currentGameObject=toRender;
		switch(true)
		{
			case (toRender instanceof Subject):
				this.resetTypes();
				this.gameMenuType.slave.statu=true;
				this.gameMenuType.slave.coordinates.rooms[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+64+(18*Object.keys(evHan.rooms).length);
				this.gameMenuType.slave.coordinates.skills[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*Object.keys(evHan.rooms).length);
				this.gameMenuType.slave.coordinates.skills[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*Object.keys(evHan.rooms).length)+(18*Object.keys(toRender._skillList).length);
				this.gameMenuType.slave.coordinates.outfit[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+118+(18*Object.keys(evHan.rooms).length)+(18*Object.keys(toRender._skillList).length);
				this.gameMenuType.slave.coordinates.outfit[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+118+(18*Object.keys(evHan.rooms).length)+(18*Object.keys(toRender._skillList).length)+(18*Object.keys(toRender._currentOutfit).length);
				this.lateralMenu.innerHTML="<h2>"+toRender.name+"</h2><p/><h3>Rooms</h3><p/>";
				for(let i = 0;i<Object.keys(evHan.rooms).length;i++)
					this.lateralMenu.innerHTML+="<span>"+Object.keys(evHan.rooms)[i]+"</span><br/>";
				this.lateralMenu.innerHTML+="<h3>Skills</h3><p/>";
				for(let i = 0;i<Object.keys(toRender._skillList).length;i++)
					if(toRender._currentSkillLearning.indexOf(Object.keys(toRender._skillList)[i])>-1)
						this.lateralMenu.innerHTML+="<span class='obtainedFurniture'>"+Object.keys(toRender._skillList)[i]+"&#8195 "+toRender._skillList[Object.keys(toRender._skillList)[i]].currentMastery+"</span><br/>";
					else this.lateralMenu.innerHTML+="<span>"+Object.keys(toRender._skillList)[i]+"&#8195 "+toRender._skillList[Object.keys(toRender._skillList)[i]].currentMastery+"</span><br/>";
				this.lateralMenu.innerHTML+="<h3>Outfit</h3>";
				for(let i = 0;i<Object.keys(toRender._currentOutfit).length;i++)
					if(toRender._currentOutfit[Object.keys(toRender._currentOutfit)[i]]!=null)
						this.lateralMenu.innerHTML+="<span>"+toRender._currentOutfit[Object.keys(toRender._currentOutfit)[i]].name+"</span><br/>";
					else this.lateralMenu.innerHTML+="<span>"+Object.keys(toRender._currentOutfit)[i]+"</span><br/>";
				break;
			case (toRender instanceof Employee):
				this.resetTypes();
				this.gameMenuType.dom.statu=true;
				this.gameMenuType.dom.coordinates.rooms[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+64+(18*Object.keys(evHan.rooms).length);
				this.gameMenuType.dom.coordinates.punishments[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*Object.keys(evHan.rooms).length);
				this.gameMenuType.dom.coordinates.punishments[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*Object.keys(evHan.rooms).length)+(18*toRender._punishmetList.length);
				this.lateralMenu.innerHTML="<h2>"+toRender._name+"</h2><p/><h3>Rooms</h3><p/>";
				for(let i = 0;i<Object.keys(evHan.rooms).length;i++)
					this.lateralMenu.innerHTML+="<span>"+Object.keys(evHan.rooms)[i]+"</span><br/>";
				this.lateralMenu.innerHTML+="<h3>Punishments</h3><p/>";
				for(let i = 0;i<toRender._punishmetList.length;i++)
					this.lateralMenu.innerHTML+="<span>"+toRender._punishmetList[i]+"</span><br/>";
				break;
			case (toRender instanceof Room):
				this.resetTypes();
				this.currentGameRoom=toRender;
				this.gameMenuType.room.statu=true;
				this.gameMenuType.room.coordinates.slave[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+64+(18*toRender._subs.length);
				this.gameMenuType.room.coordinates.dom[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*toRender._subs.length);
				this.gameMenuType.room.coordinates.dom[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+91+(18*toRender._subs.length)+(18*toRender._doms.length);
				this.gameMenuType.room.coordinates.furniture[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+118+(18*toRender._subs.length)+(18*toRender._doms.length);
				this.gameMenuType.room.coordinates.furniture[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+118+(18*toRender._subs.length)+(18*toRender._doms.length)+(18*toRender._roomTypes[toRender._type]["furnitures"].length);
				this.lateralMenu.innerHTML="<h2>"+toRender._name+"</h2><p/><h3>Slaves</h3><p/>";
				for(let i = 0;i<toRender._subs.length;i++)
					this.lateralMenu.innerHTML+="<span>"+toRender._subs[i]+"</span><br/>";
				this.lateralMenu.innerHTML+="<h3>Dominants</h3><p/>";
					for(let i = 0;i<toRender._doms.length;i++)
						this.lateralMenu.innerHTML+="<span>"+toRender._doms[i]+"</span><br/>";
				this.lateralMenu.innerHTML+="<h3>Furnitures</h3><p/>";
				if(toRender._type!=="emptyRoom");
					for(let i = 0;i<toRender._roomTypes[toRender._type]["furnitures"].length;i++)
						if(!toRender._roomTypes[toRender._type]["furnitures"][i]["obtained"])
							this.lateralMenu.innerHTML+="<span>"+toRender._roomTypes[toRender._type]["furnitures"][i]["name"]+"&#8195 "+
							toRender._roomTypes[toRender._type]["furnitures"][i]["price"]+"$</span><br/>";
						else this.lateralMenu.innerHTML+="<span class='obtainedFurniture'>"+toRender._roomTypes[toRender._type]["furnitures"][i]["name"]+"</span><br/>";
				break;
			case (toRender instanceof Object):
				let toRendelElSize=0;
				this.resetTypes();
				if(typeof toRender.currentPart !== 'undefined')
				{
					let itemBodyPart;
					this.gameMenuType.outfit.statu=true;
					this.lateralMenu.innerHTML="<h2>"+toRender.currentPart+"</h2><p/>";
					for(let i = 0;i<this.currentGameRoom.stock.length;i++)
						if(this.currentGameRoom.stock[i].bodyPart===toRender.currentPart)
						{
							this.lateralMenu.innerHTML+="<span>"+this.currentGameRoom.stock[i].name+"&#8195 "+this.currentGameRoom.stock[i].stock+"</span><p/>";
							itemBodyPart++;
						}
					this.gameMenuType.outfit.coordinates.outfit[0][1]=this.uICoordinates.lateralMenu.coord[0][1]+32;
					this.gameMenuType.outfit.coordinates.outfit[1][1]=this.uICoordinates.lateralMenu.coord[0][1]+32+(18*itemBodyPart);
				}
				else
				{
					this.gameMenuType.furniture.statu=true;
					let end=false;
					if(toRender.contains.length>0)
						toRendelElSize=this.uICoordinates.lateralMenu.coord[0][1]+32+(18*this.currentGameRoom._itemTypes[toRender.contains[0]].length);
					else if(toRender.contains.length>1)
						for(let i = 1;i<toRender.contains.length;i++)
							toRendelElSize+=18*this.currentGameRoom._itemTypes[toRender.contains[i]].length;
					this.gameMenuType.furniture.coordinates.items[1][1]=toRendelElSize;
					this.lateralMenu.innerHTML="<h2>"+this.currentGameRoom._name+"</h2>";
					for(let i = 0;i<toRender.contains.length;i++)
						for(let j = 0;j<this.currentGameRoom._itemTypes[toRender.contains[i]].length;j++)
						{
							for(let k = 0;!end&&(k<this.currentGameRoom.stock.length);k++)
								end=(this.currentGameRoom._itemTypes[toRender.contains[i]][j].name===this.currentGameRoom.stock[k].name);
							if(end)
							{
								this.lateralMenu.innerHTML+="<span class='obtainedFurniture'>"+this.currentGameRoom._itemTypes[toRender.contains[i]][j].name+"&#8195 "+
								this.currentGameRoom._itemTypes[toRender.contains[i]][j].price+"$ &#8195 "+
								this.currentGameRoom._itemTypes[toRender.contains[i]][j].stock+"</span><p/>";
								end=false;
							}
							else
								this.lateralMenu.innerHTML+="<span>"+this.currentGameRoom._itemTypes[toRender.contains[i]][j].name+"&#8195 "+
								this.currentGameRoom._itemTypes[toRender.contains[i]][j].price+"$</span><p/>";
						}
				}
				break;
				
				
				//punishments give temporary bonuses
		}
	}
	
	resetTypes()
	{
		for(let i = 0;i<Object.keys(this.gameMenuType).length;i++)
			this.gameMenuType[Object.keys(this.gameMenuType)[i]].statu=false;
	}
	
	hideLateralMenu()
	{
		this.getCoords().lateralMenu.statu=!this.getCoords().lateralMenu.statu;
		this.filter.style.display="none";
		this.lateralMenu.style.display="none";
	}
	
	getCoords()
	{
		return this.uICoordinates;
	}
}
let userint=new UI();