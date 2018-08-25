class Event
{
	constructor()
	{
		let evMan=this;
		this.clickX;
		this.clickY;
		this.endX;
		this.endY;
		this.hasChanged=false;
		this.selectedType=null;
		this.rooms={};
		document.addEventListener("mousedown",function(ev){
			evMan.clickX=ev.clientX;
			evMan.clickY=ev.clientY;
			evMan.checkUI();
			evMan.clickX=ev.clientX-(ev.clientX%ter.tileSize)+ter.tileSize;
			evMan.clickY=ev.clientY-(ev.clientY%ter.tileSize)+ter.tileSize;
		});
		
		document.addEventListener("mouseup",function(ev){
			if(!evMan.hasChanged)	
				evMan.checkGame(ev);
		});
	}
	
	checkUI()
	{
		this.hasChanged=false;
		let currentSelectedObject=null;
		/*for(let i = 0;i<Object.keys(userint.getCoords()).length;i++)
			if(this.testCoordinates(userint.getCoords()[Object.keys(userint.getCoords())[i]].coord))
				userint.getCoords()[Object.keys(userint.getCoords())[i]].statu=!userint.getCoords()[Object.keys(userint.getCoords())[i]].statu;*/
		if	(!this.testCoordinates(userint.getCoords().topMenu.coord))
		{
			switch(true)
			{
				case (!this.testCoordinates(userint.getCoords().mainMenuOpen.coord) 	&& !userint.getCoords().mainMenu.statu	):
					userint.getCoords().mainMenu.statu=!userint.getCoords().mainMenu.statu;
					this.hasChanged=true;
					break;
				case	(this.testCoordinates(userint.getCoords().mainMenu.coord)		&&	userint.getCoords().mainMenu.statu	):
					userint.getCoords().mainMenu.statu=!userint.getCoords().mainMenu.statu;
					this.hasChanged=true;
					break;
				case (this.testCoordinates(userint.getCoords().constructionButton.coord)):
					userint.getCoords().constructionButton.statu=!userint.getCoords().constructionButton.statu;
					this.hasChanged=true;
					break;
				case (this.testCoordinates(userint.getCoords().bottomMenu.coord)):
					for(let i = 0;i<userint.constructionsTab.length;i++)
						if(this.testCoordinates(tools.makeCoords(	userint.getCoords().bottomMenu.coord[0][0]+i*(((userint.getCoords().bottomMenu.coord[1][0]-userint.getCoords().bottomMenu.coord[0][0])*0.0675)+4),
																	userint.getCoords().bottomMenu.coord[0][1],
																	userint.getCoords().bottomMenu.coord[0][0]+(i+1)*(((userint.getCoords().bottomMenu.coord[1][0]-userint.getCoords().bottomMenu.coord[0][0])*0.0675)+4),
																	userint.getCoords().bottomMenu.coord[1][1])))
							this.selectedType=userint.constructionsTab[i];
					this.hasChanged=true;
					break;
				case (!this.testCoordinates(userint.getCoords().lateralMenu.coord)&&userint.getCoords().lateralMenu.statu):
					userint.hideLateralMenu();
					this.hasChanged=true;
					break;
				case (this.testCoordinates(userint.getCoords().lateralMenu.coord)&&userint.getCoords().lateralMenu.statu):
					/*for(let i = 0;i<Object.keys(userint.gameMenuType).length;i++)
						for(let j = 0;j<Object.keys(userint.gameMenuType[Object.keys(userint.gameMenuType)[i]].coordinates).length;j++)
							if(this.testCoordinates(userint.gameMenuType[Object.keys(userint.gameMenuType)[i]].coordinates[Object.keys(userint.gameMenuType[Object.keys(userint.gameMenuType)[i]].coordinates)[j]]))*/
					if(userint.currentGameObject!=null)
						switch(true)
						{
							case (userint.gameMenuType.room.statu):	
								switch(true)
								{
									case (this.testCoordinates(userint.gameMenuType.room.coordinates.slave)):
										for(let i = 0;i<time._subs.length;i++)
											if(time._subs[i].name==userint.currentGameObject._subs[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.slave[0][1])/18)])
												currentSelectedObject=time._subs[i];
										break;
									case (this.testCoordinates(userint.gameMenuType.room.coordinates.dom)):
										for(let i = 0;i<time._doms.length;i++)
											if(time._doms[i].name==userint.currentGameObject._doms[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.dom[0][1])/18)/*-((this.clickY-userint.gameMenuType.room.coordinates.dom[0][1])%18))+1*/])
												currentSelectedObject=time._doms[i];
										break;
									case (this.testCoordinates(userint.gameMenuType.room.coordinates.furniture)):
										if(	userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)].obtained&&
											userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)].contains.length>0)
											currentSelectedObject=userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)];
										else if (!userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)].obtained&&
												bank.subMoney(userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)].price))
											userint.currentGameObject._roomTypes[userint.currentGameObject._type].furnitures[Math.floor((this.clickY-userint.gameMenuType.room.coordinates.furniture[0][1])/18)].obtained=true;
										break;
								}
								if(currentSelectedObject!==null)
									userint.renderGameOptions(currentSelectedObject);
								break;
							case (userint.gameMenuType.slave.statu):
								if(this.testCoordinates(userint.gameMenuType.slave.coordinates.rooms))
									userint.currentGameObject.changeRoom(userint.currentGameRoom,this.rooms[Object.keys(this.rooms)[Math.floor((this.clickY-userint.gameMenuType.slave.coordinates.rooms[0][1])/18)]]);
								else if (this.testCoordinates(userint.gameMenuType.slave.coordinates.skills))
									userint.currentGameObject._currentSkillLearning.push(Object.keys(userint.currentGameObject._skillList)[Math.floor((this.clickY-userint.gameMenuType.slave.coordinates.skills[0][1])/18)]);
								else if (this.testCoordinates(userint.gameMenuType.slave.coordinates.outfit))
								{
									let oldGameObject=userint.currentGameObject;
									userint.currentGameObject={"currentPart":Object.keys(userint.currentGameObject._currentOutfit)[Math.floor((this.clickY-userint.gameMenuType.slave.coordinates.outfit[0][1])/18)],
																"outfitMode":oldGameObject};
									userint.renderGameOptions(userint.currentGameObject);
								}
								break;
							case (userint.gameMenuType.outfit.statu):
									userint.currentGameObject.outfitMode._currentOutfit[userint.currentGameObject.currentPart]=userint.currentGameRoom.stock[Math.floor((this.clickY-userint.gameMenuType.outfit.coordinates.outfit[0][1])/18)];
									userint.renderGameOptions(userint.currentGameObject.outfitMode);
								break;
							case (userint.gameMenuType.dom.statu):			
								if(this.testCoordinates(userint.gameMenuType.dom.coordinates.rooms))
									userint.currentGameObject.changeRoom(userint.currentGameRoom,this.rooms[Object.keys(this.rooms)[Math.floor((this.clickY-userint.gameMenuType.dom.coordinates.rooms[0][1])/18)]]);
								break;
								break;
							case (userint.gameMenuType.furniture.statu):	
								let endBTwo=false;
								let endBOne=false;
								let currentClick=Math.floor((this.clickY-userint.gameMenuType.furniture.coordinates.items[0][1])/18);
								for(let i = 0;(!endBOne)&&(i<userint.currentGameObject.contains.length);i++)
									if(endBOne=(!(currentClick>userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]].length-1)))
									{
										for(let j = 0;(!endBTwo)&&(j<userint.currentGameRoom.stock.length);j++)
											if(bank.transactionIsPossible(userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].price)&&
											(endBTwo=(userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].name===userint.currentGameRoom.stock[j].name)))
											{
												bank.subMoney(userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].price)
												userint.currentGameRoom.stock[j].stock+=userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].quantity;
											}
										if(bank.transactionIsPossible(userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].price)&&(!endBTwo))
										{
											bank.subMoney((userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick].price));
											userint.currentGameRoom.stock.push(userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]][currentClick]);
										}
									}
									else currentClick-=userint.currentGameRoom._itemTypes[userint.currentGameObject.contains[i]].length;
							break;
						}
					//zone1 37+32+br*2+18*nbel
					this.hasChanged=true;
					break;
			}
		}
		else
		{
			switch(true)
			{
				case (!userint.getCoords().mainMenu.statu):
					userint.getCoords().mainMenu.statu=!userint.getCoords().mainMenu.statu;
					this.hasChanged=true;
					break;
				case (this.testCoordinates(tools.makeCoords(userint.getCoords().topMenu.coord[0][0],
															userint.getCoords().topMenu.coord[0][1],
															userint.getCoords().topMenu.coord[0][0]+(userint.getCoords().topMenu.coord[0][0]*0.125),
															userint.getCoords().topMenu.coord[1][1]))):
					bank.addInvestment();
					this.hasChanged=true;
					break;
				case (this.testCoordinates(tools.makeCoords(userint.getCoords().topMenu.coord[1][0]-(userint.getCoords().topMenu.coord[0][0]*0.125),
															userint.getCoords().topMenu.coord[0][1],
															userint.getCoords().topMenu.coord[1][0],
															userint.getCoords().topMenu.coord[1][1]))):
					bank.subInvestment();
					this.hasChanged=true;
					break;
				case (!this.testCoordinates(userint.getCoords().latteralMenu.coord)&&userint.getCoords().latteralMenu.statu):
					userint.hideLateralMenu();
					this.hasChanged=true;
					break;
			}
		}
		userint.renderMenu();
	}
	
	checkGame(ev)
	{
		if(userint.getCoords().constructionButton.statu)
		{
			this.endX=ev.clientX-(ev.clientX%ter.tileSize)+ter.tileSize;
			this.endY=ev.clientY-(ev.clientY%ter.tileSize)+ter.tileSize;
			this.coords=tools.makeCoords(this.clickX,this.clickY,this.endX,this.endY);
			this.coords[0][0]-=24;	this.coords[0][1]-=24;
			if(this.isBigEnough()&&!this.testRoomsCollision())
				if((Object.keys(this.rooms).length>0)&&(!this.isRoad())&&bank.subMoney(this.getPriceForCoord(75)))
					this.rooms["room"+Object.keys(this.rooms).length]=new Room(this.coords);
				else if((!this.isRoad())&&bank.subMoney(this.getPriceForCoord(75)))
					this.rooms["room"+Object.keys(this.rooms).length]=new Room(this.coords);
				else if(bank.subMoney(this.getPriceForCoord(5)))
				{
					this.rooms["room"+Object.keys(this.rooms).length]=new Room(this.coords);
					this.rooms["room"+Object.keys(this.rooms).length-1].type="road";
				}
				this.rooms["room"+(Object.keys(this.rooms).length-1)]._name="room"+(Object.keys(this.rooms).length-1);
		}
		else
		{
			if (this.selectedType!=null)
				this.setRoomType();
			else 
				for(let i = 0;i<Object.keys(this.rooms).length;i++)
					if	(this.testCoordinates(this.rooms["room"+i].coords))
						userint.renderGameOptions(this.rooms["room"+i]);
			this.selectedType=null;
		}
	}

	getPriceForCoord(typePrice)
	{
		return ((this.coords[1][0]-this.coords[0][0])/ter.tileSize)*((this.coords[1][1]-this.coords[0][1])/ter.tileSize)*typePrice;
	}
	
	getPriceForRoom(room,typePrice)
	{
		//calcule la taille de la salle moins les murs 
		return ((((room.coords[1][0]-room.coords[0][0])/24)*((room.coords[1][1]-room.coords[0][1])/24))-
				((2*(((room.coords[1][0]-room.coords[0][0])/24)+((room.coords[1][1]-room.coords[0][1])/24)))-4))*typePrice;
	}
	
	setRoomType()
	{
		for(let i = 0;i<Object.keys(this.rooms).length;i++)
			if	(this.testCoordinates(this.rooms["room"+i].coords)	&&
				(this.rooms["room"+i].type==="emptyRoom")			&&
				(this.rooms["room"+i].type!=="road")				&&
				bank.subMoney(this.getPriceForRoom(this.rooms["room"+i],this.selectedType.price)))
			{
				if(this.selectedType.name==="arrival")
				{
					this.rooms["room"+i]._subs.push("slave"+time._subs.length);
					this.rooms["room"+i]._doms.push("dom"+time._doms.length);
					time._subs.push(new Subject(	this.rooms["room"+i].coords[0][0]+((this.rooms["room"+i].coords[1][0]-this.rooms["room"+i].coords[0][0])/2)-(((this.rooms["room"+i].coords[1][0]-this.rooms["room"+i].coords[0][0])/2)%24),
													this.rooms["room"+i].coords[0][1]+((this.rooms["room"+i].coords[1][1]-this.rooms["room"+i].coords[0][1])/2)-(((this.rooms["room"+i].coords[1][1]-this.rooms["room"+i].coords[0][1])/2)%24),
													time._subs.length,"room"+i));
					time._doms.push(new Employee(	this.rooms["room"+i].coords[0][0]+((this.rooms["room"+i].coords[1][0]-this.rooms["room"+i].coords[0][0])/2)-(((this.rooms["room"+i].coords[1][0]-this.rooms["room"+i].coords[0][0])/2)%24),
													this.rooms["room"+i].coords[0][1]+((this.rooms["room"+i].coords[1][1]-this.rooms["room"+i].coords[0][1])/2)-(((this.rooms["room"+i].coords[1][1]-this.rooms["room"+i].coords[0][1])/2)%24),
													time._doms.length,"room"+i));
				}
				this.rooms["room"+i].type=this.selectedType.name;	
			}
	}
	
	testRoomsCollision()
	{
		let roomCol=false;
		for(let i = 0;(i<Object.keys(this.rooms).length)&&!(roomCol=this.testCollisionCoords(this.rooms["room"+i]));i++);
		return roomCol;
	}
	
	isRoad()
	{
		return ((this.coords[1][0]-this.coords[0][0]>24)&&(this.coords[1][1]-this.coords[0][1]>24)&&
				((this.coords[1][0]-this.coords[0][0]<=48)||(this.coords[1][1]-this.coords[0][1]<=48)));
	}
	
	isBigEnough()
	{
		return ((this.coords[1][0]-this.coords[0][0]>24)&&(this.coords[1][1]-this.coords[0][1]>24));
	}
	
	testTerrainRoom(x,y)
	{
		return ter.terrain[x/24][y/24].className.includes("wall");
	}
	
	testCollisionCoords(totestCoords)
	{
		return ((((	this.coords[0][0] > totestCoords.coords[0][0])&&(this.coords[0][0] < totestCoords.coords[1][0]))&&	//xdeb v xroomdeb && xdeb v xroomfin
				((	this.coords[0][1] > totestCoords.coords[0][1])&&(this.coords[0][1] < totestCoords.coords[1][1])))||	//ydeb v yroomfin && ydeb v yroomfin
				(((	this.coords[1][0] > totestCoords.coords[0][0])&&(this.coords[1][0] < totestCoords.coords[1][0]))&&	//xfin v xroomdeb && xfin v xroomfin
				((	this.coords[1][1] > totestCoords.coords[0][1])&&(this.coords[1][1] < totestCoords.coords[1][1])))||	//yfin v yroomdeb && yfin v yroomfin
				(((	this.coords[0][0] > totestCoords.coords[0][0])&&(this.coords[0][0] < totestCoords.coords[1][0]))&& 	//point de coté xdeb v xroomdeb && xdeb v xroomfin
				((	this.coords[1][1] > totestCoords.coords[0][1])&&(this.coords[1][1] < totestCoords.coords[1][1])))||	//yfin v yroomdeb && yfin v yroomfin
				(((	this.coords[1][0] > totestCoords.coords[0][0])&&(this.coords[1][0] < totestCoords.coords[1][0]))&&	//xfin v xroomdeb && xfin v xroomfin
				((	this.coords[0][1] > totestCoords.coords[0][1])&&(this.coords[0][1] < totestCoords.coords[1][1]))));
	}

	testCoordinates(coords)
	{
		return ((coords[0][0] <= this.clickX)&&
				(coords[0][1] <= this.clickY)&&
				(coords[1][0] >= this.clickX)&&
				(coords[1][1] >= this.clickY));
	}
}
let evHan=new Event();

/*
humiliation add wheighting of diaper and slave is punished when not full enough
*/