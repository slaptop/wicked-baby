class Subject
{
	constructor(pab,pord,numberOfSlaves,curRoom)
	{
		this._rarity=Math.floor(Math.random()*3)+1;
		this._comps=["obedianceSkills","analSkills","incontinenceSkills","urethralSkills","denialSkills","feminizationSkills","painSkills","blowjobSkills"];
		this._thingsToDo=["performing task","cleaning","cooking meal"];
		this._skillList={"obedianceSkills":	{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["obeidiant","good boy","slave","tamed"]},
						"analSkills":		{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["anal orgasm","anal slut","widely stretched","beant hole"]},
						"incontinenceSkills":{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["diaper lover","incontinent","baby","playful","un potty trained","milkaholic","pacified"]},
						"urethralSkills":	{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["opened hole","the third hole","urethral fetish","pisshole plugged","constant urethral stimulation"]},
						"denialSkills":		{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["chastitized","barely cums ever","monthly Orgasm","yearly orgasm"]},
						"feminizationSkills":{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["sucked a real man","real woman","on her periods","fucked by a man","slut","whore","maid","madame","goo gobler"]},
						"painSkills":		{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["masochist","painslut","needles lover","nettles lover"]},
						"blowjobSkills":	{	"currentMastery"	:	1+Math.floor(Math.random()*10)*this._rarity,
												"associatedSkills"	:	["expert sucker","loves dicks","making men cum"]}};
												
												
		this.pX=pab;
		this.pY=pord;
		this._subSkills=[];
		this.timeout;
		this.hourRate=0;
		this.name="slave"+numberOfSlaves;
		this.subEl=document.createElement('p');
		this.subEl.className="character neutralSlave unselectable";
		this.subEl.style.marginLeft=this.pX+"px";
		this.subEl.style.marginTop=this.pY+"px";
		document.body.appendChild(this.subEl);
		this.volunteer=Math.floor(Math.random()*100)==Math.floor(Math.random()*100);
		this._currentSkillLearning=[];
		
		this.volunteer?this._currentSkillLearning.push(this._comps[Math.floor(Math.random()*this._comps.length)]):false;
		this._isLearning=this.volunteer;
		
		this._underwearStates=	[["wet","very Wet","leaking"],
								["messy","very messy","stinks"],
								["wet and messy","very wet and messy","leaking and messy"]];
		
		this._enemaType=[500,1000,1500,2000,2500,3000];
		this._comfort		= 	1+Math.floor(Math.random()*10)*this._rarity;
		this._mealTypes=["normal","laxative","hormones","diuretics","overfeeding"];
		this._lastOrgasmType="normal";	this._lastMeal="normal";
		this._lastOrgasm	=	0;		this._enema	=	0;
		this._hydratation	=	100;	this._lastToiletUse=0;
		this._toiletAccess=true;
		this._currentRoom=curRoom;
		this._generatedIncome=5+this.calculateIncome();
		this.bodyParts=["head","torso","anus","urethra","penis","mouth","underwear","waist","shoes"];
		this._currentOutfit={
			//head:null,
			torso:new Item("shirt",0,0,0,0,0,0,0,15,"",1,"torso"),
			//bra:null,
			anus:null,
			urethra:null,
			penis:null,
			mouth:null,
			//legs:null,
			//toy:null,
			//face:null,
			//neck:null,
			//sanitaryUnderwear:null,
			underwear:new Item("shorts",0,0,0,0,0,0,0,5,"",1,"underwear"),
			waist:new Item("pants",0,0,0,0,0,0,0,10,"",1,"waist"),
			shoes:new Item("sandals",0,0,0,0,0,0,0,10,"",1,"shoes"),
		};
		this.moveAround();
		this._givenEnema=0;
		let ab=new Message(this.name+" ha arrived !");
	}
	
	improveAbility(ability)		{this.isNotOver(this._skillList[ability]["currentMastery"]+1);	this._skillList[ability]["currentMastery"]++;}
	
	isNotOver(caracteristic){return (caracteristic>-1)&&(caracteristic<100);}
	
	training(comp)
	{
		console.log(comp);
		let obedianceChance=Math.floor(Math.random()*3);
		
		if(comp==this._comps[0])
			if(Math.floor(Math.random()*3)==obedianceChance)
				this.improveAbility(comp);
		else
			if(Math.round(Math.random()))
				this.improveAbility(comp);
			
		this.checkSkillWin(comp);
		this.updateIncome();
	}
	
	startTraining(comp)
	{
		console.log('a');
		this._isLearning=true;
	}
	
	checkSkillWin(currentSkill)
	{
		let selectedSkill;
		if(this._skillList[currentSkill]["currentMastery"]>10)
			if(Math.floor(Math.random()*100)<this._skillList[currentSkill]["currentMastery"]);
				if(selectedSkill=this.checkHasntSkill(this._skillList[currentSkill]["associatedSkills"][Math.floor(Math.random()*this._skillList[currentSkill]["associatedSkills"].length)]))
					this._subSkills.push(selectedSkill);
	}
	
	checkHasntSkill(sknum)
	{
		return this._subSkills.indexOf(sknum)!=-1?sknum:false;
	}
	
	stopTraining()
	{
		this._isLearning=false;
	}
	
	startTraining()
	{
		this._isLearning=true;
	}
	
	isWearingAnInapropriateObject()
	{
		let wearingOr=false;
		for(let i = 0;(i<this.bodyParts.length)&&!wearingOr;i++)
			if(this._currentOutfit[Object.keys(this._currentOutfit)[i]]!=null)
				if(this._currentOutfit[Object.keys(this._currentOutfit)[i]].skillNeeded!=="")
					if(this._skillList[this._currentOutfit[Object.keys(this._currentOutfit)[i]].skillNeeded]["currentMastery"]<10)
						wearingOr=true;
		return wearingOr;
	}
	
	hasAnAccident()
	{
		switch(true)
		{
			case(this._skillList["incontinenceSkills"]["currentMastery"]>50):
				if(((this._underwearStates[0].indexOf(this._currentOutfit.underwear.state)>-1)||
					(this._currentOutfit.underwear.state==="fresh"))&&
					!this._toiletAccess)
					this._currentOutfit.underwear.state=this._underwearStates[Math.round(Math.random())][0];
				this._currentOutfit.underwear.state=this.canMess(1);
				this._currentOutfit.underwear.state=this.canMess(2);
				break;
			case(this._skillList["incontinenceSkills"]["currentMastery"]>10):
				this._currentOutfit.underwear.state=this.canMess(0);
				break;
		}
	}
	
	enemaInducedAccident(hold)
	{
		if(!hold) this._currentOutfit.underwear.state=this._underwearStates[2][1];
		else if(!this._toiletAccess&&hold&&
		(this._currentOutfit.underwear.weight<this._givenEnema)) 
		this._currentOutfit.underwear.weight+=(Math.floor(Math.random()*this._enemaType[this._givenEnema]));
		else if(hold&&this._skillList.incontinenceSkills.currentMastery>75) this._currentOutfit.underwear.weight=this._givenEnema;
	}
	
	canMess(currentLevel)
	{
		let currentIndex=0;
		return (((currentIndex=this._underwearStates[currentLevel].indexOf(this._currentOutfit.underwear.state))>-1)&&
				((this._underwearStates[currentLevel].indexOf(this._currentOutfit.underwear.state))<3)&&
				!this._toiletAccess)?this._underwearStates[currentLevel][currentIndex++]:this._currentOutfit.underwear.state=this._underwearStates[currentLevel][0];
	}
	
	isPerformingAnInapropriateTask()
	{
		 	/*(this._skillList[this._comps[0]]["currentMastery"]<20)&&*/
		return	((this._enema>0)/*||(this._lastOrgasm>24)*/||(this._lastToiletUse>24)||(this._lastMeal!=="normal"));
	}
	
	calculateIncome()
	{
		let total=0;
		for(let i = 1;i<this._comps.length;i++)
			total+=(5*(this._skillList[this._comps[i]]["currentMastery"]/10));
		return 	total;
	}
	
	updateIncome(){this._generatedIncome=5+this.calculateIncome();}
	
	moveAround()
	{
		this.hasAnAccident();
		this.hourRate+=1000;
		this._lastToiletUse++;
		if(this._toiletAccess&&(this.hourRate%6)==0)
			this._lastToiletUse=0;
		if((this.hourRate%12)==0)
			this._lastMeal=evHan.rooms[this._currentRoom].currentMealType;
		let direction=Math.floor(Math.random()*4);
		switch(direction)
		{
			case 0 :
				if(!evHan.testTerrainRoom(this.pX+24,this.pY))
					this.pX+=24;
				break;
			case 1 :
				if(!evHan.testTerrainRoom(this.pX-24,this.pY))
					this.pX-=24;
				break;
			case 2 :
				if(!evHan.testTerrainRoom(this.pX,this.pY+24))
					this.pY+=24;
				break;
			case 3 :
				if(!evHan.testTerrainRoom(this.pX,this.pY-24))
					this.pY-=24;
				break;
		}
		this.subEl.style.marginLeft=this.pX+"px";
		this.subEl.style.marginTop=this.pY+"px";
		let curSl=this;
		this.hourRate=this.hourRate%24;
		this.timeout=setTimeout(function(){curSl.moveAround();},1000);
	}
	
	changeRoom(oldRoom,room)
	{
		this._currentRoom=room._name;
		let index;
		if ((index = oldRoom._subs.indexOf(this.name)) > -1)
		{
		  oldRoom._subs.splice(index, 1);
		  room._subs.push(this.name);
		}
		this.pX=room.coords[0][0]+((room.coords[1][0]-room.coords[0][0])/2)-(((room.coords[1][0]-room.coords[0][0])/2)%24);
		this.pY=room.coords[0][1]+((room.coords[1][1]-room.coords[0][1])/2)-(((room.coords[1][1]-room.coords[0][1])/2)%24);
	}
}