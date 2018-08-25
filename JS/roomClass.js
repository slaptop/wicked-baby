class Room
{
	constructor(crds)
	{
		this._roomLists=["nursery","sissyRoom","tortureChamber","arrival","denial","animalry"]
		this._roomTypes={
			nursery:{furnitures:[	{name:"diaper drawer",	obtained:false,price:150,contains:["diapers"]},
									{name:"enema bucket",	obtained:false,price:50,contains:[]},
									{name:"potty",			obtained:false,price:20,contains:[]},
									{name:"crib",			obtained:false,price:300,contains:[]},
									{name:"high chair",		obtained:false,price:100,contains:[]},
									{name:"playspace",		obtained:false,price:100,contains:[/*"toys"*/]},
									{name:"changing table",	obtained:false,price:100,contains:[]},
									{name:"weighs",			obtained:false,price:15,contains:[]},
									{name:"hypno tapes",	obtained:false,price:25,contains:[]},
									{name:"fridge",			obtained:false,price:100,contains:[]}
								]},
			sissyRoom:{furnitures:[	{name:"drawer",			obtained:false,price:150,contains:["clothes"]},
									{name:"princess bed",	obtained:false,price:500,contains:[]},
									{name:"hunk man poster",obtained:false,price:10,contains:[]},
									{name:"hypno tapes",	obtained:false,price:25,contains:[]},
									{name:"make up table",	obtained:false,price:125,contains:[]},
									{name:"vacuum cleaner",	obtained:false,price:25,contains:[]}
								]},
			tortureChamber:{furnitures:[{name:"medical table",	obtained:false,price:150,contains:["urethral"]},
										{name:"whip hanger",	obtained:false,price:50,contains:["whips"]},
										{name:"toy drawer",		obtained:false,price:150,contains:["anal"]}
										]},
			arrival:{furnitures:[	{name:"toilets",	obtained:false,price:50,contains:[]},
									{name:"fridge",		obtained:false,price:100,contains:[]},
									{name:"shower",		obtained:false,price:75,contains:[]}
								]},
			denial:	{furnitures:[	{name:"chastity cages drawer",	obtained:false,price:150,contains:["chastity"]},
									{name:"bondage accessory",		obtained:false,price:125,contains:[]},
									{name:"bed",					obtained:false,price:250,contains:[]},
									{name:"cage",					obtained:false,price:250,contains:[]}
								]},
			animalry:{furnitures:[	{name:"milking table",	obtained:false,price:400,contains:[]},
									{name:"sperm fridge",	obtained:false,price:100,contains:[]},
									{name:"costume drawer",	obtained:false,price:150,contains:[]},
									{name:"bowl",			obtained:false,price:10,contains:[]}
								]}
		};
		
		this._itemsLists=["diapers","urethral","anal",/*"foods",*/"whips","gags","chastity","clothes"/*,"toys","miscelenous"*/];
		this._itemTypes={ diapers:[	new Item("pamers",0,0,0,0,0,0,0,10,"incontinenceSkills",10,"underwear"),
									new Item("goodnits",0,0,0,0,0,0,0,15,"incontinenceSkills",10,"underwear"),
									new Item("teno",0,0,0,0,0,0,0,20,"incontinenceSkills",10,"underwear"),
									new Item("abene",0,0,0,0,0,0,0,25,"incontinenceSkills",20,"underwear"),
									new Item("fibine",0,0,0,0,0,0,0,20,"incontinenceSkills",12,"underwear"),
									new Item("crunklez",0,0,0,0,0,0,0,20,"incontinenceSkills",15,"underwear"),
									new Item("albu",0,0,0,0,0,0,0,20,"incontinenceSkills",10,"underwear"),
									new Item("super bimpa",0,0,0,0,0,0,0,20,"incontinenceSkills",10,"underwear"),
									new Item("trycables",0,0,0,0,0,0,0,25,"incontinenceSkills",10,"underwear"),
									new Item("insert",0,0,0,0,0,0,0,10,"incontinenceSkills",28,"underwear"),
									new Item("little scales",0,0,0,0,0,0,0,20,"incontinenceSkills",10,"underwear"),
									new Item("prinsass pink",0,0,0,0,0,0,0,20,"incontinenceSkills",12,"underwear"),
									new Item("rarz",0,0,0,0,0,0,0,25,"incontinenceSkills",12,"underwear"),
									new Item("bambine magnific",0,0,0,0,0,0,0,25,"incontinenceSkills",10,"underwear"),
									new Item("doc mamor",0,0,0,0,0,0,0,40,"incontinenceSkills",10,"underwear"),
									new Item("plastic pants",0,0,0,0,0,0,0,20,"incontinenceSkills",10,"underwear"),
									new Item("locker plastic pants",0,0,0,0,0,0,0,50,"incontinenceSkills",10,"underwear")
									],
						urethral:[	new Item("sound ultra small",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound very small",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound small",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound small medium",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound medium",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound large medium",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound large",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound very large",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("sound ultra large",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra"),
									new Item("small urthral plug",0,0,0,0,0,0,0,40,"urethralSkills",1,"urethra"),
									new Item("medium urthral plug",0,0,0,0,0,0,0,40,"urethralSkills",1,"urethra"),
									new Item("large urthral plug",0,0,0,0,0,0,0,40,"urethralSkills",1,"urethra"),
									new Item("catether",0,0,0,0,0,0,0,10,"urethralSkills",1,"urethra")
								],
						anal:[	new Item("small buttplug 2cm",0,0,0,0,0,0,0,10,"analSkills",1,"anus"),
								new Item("small buttplug 3cm",0,0,0,0,0,0,0,10,"analSkills",1,"anus"),
								new Item("medium buttplug 4cm",0,0,0,0,0,0,0,10,"analSkills",1,"anus"),
								new Item("medium buttplug 5cm",0,0,0,0,0,0,0,30,"analSkills",1,"anus"),
								new Item("large buttplug 6cm",0,0,0,0,0,0,0,40,"analSkills",1,"anus"),
								new Item("large buttplug 7cm",0,0,0,0,0,0,0,50,"analSkills",1,"anus"),
								new Item("very large buttplug 8cm",0,0,0,0,0,0,0,55,"analSkills",1,"anus"),
								new Item("very large buttplug 9cm",0,0,0,0,0,0,0,60,"analSkills",1,"anus"),
								new Item("largest buttplug 10cm",0,0,0,0,0,0,0,60,"analSkills",1,"anus"),
								new Item("small dildo",0,0,0,0,0,0,0,10,"blowjobSkills",1,"anus"),
								new Item("medium dildo",0,0,0,0,0,0,0,25,"blowjobSkills",1,"anus"),
								new Item("large dildo",0,0,0,0,0,0,0,30,"blowjobSkills",1,"anus"),
								new Item("short dildo",0,0,0,0,0,0,0,25,"blowjobSkills",1,"anus"),
								new Item("long dildo",0,0,0,0,0,0,0,100,"blowjobSkills",1,"anus"),
								new Item("monster dildo",0,0,0,0,0,0,0,100,"blowjobSkills",1,"anus")
							],
						/*foods:[	new Item("ginger roots",0,0,0,0,0,0,0,5,"urethralSkills",1),
								new Item("laxatifs",0,0,0,0,0,0,0,10,"urethralSkills",1),
								new Item("bananas",0,0,0,0,0,0,0,10,"urethralSkills",1),
								new Item("marshmallows",0,0,0,0,0,0,0,10,"urethralSkills",1),
								new Item("hormones",0,0,0,0,0,0,0,10,"urethralSkills",1),
								],*/
						whips:[	new Item("paddle",0,0,0,0,0,0,0,25,"painSkills",1,"hands"),
								new Item("snake whip",0,0,0,0,0,0,0,25,"painSkills",1,"hands"),
								new Item("lether",0,0,0,0,0,0,0,25,"painSkills",1,"hands"),
								new Item("horse whip",0,0,0,0,0,0,0,15,"painSkills",1,"hands"),
								new Item("flogger",0,0,0,0,0,0,0,15,"painSkills",1,"hands")
								],
						gags:[	new Item("mouthspreader",0,0,0,0,0,0,0,25,"painSkills",1,"mouth"),
								new Item("ballgag",0,0,0,0,0,0,0,25,"painSkills",1,"mouth"),
								new Item("penis gag",0,0,0,0,0,0,0,25,"painSkills",1,"mouth"),
								new Item("pacifier gag",0,0,0,0,0,0,0,15,"painSkills",1,"mouth")
								],
						chastity:[	new Item("long metal chastity cage",0,0,0,0,0,0,0,100,"denialSkills",1,"penis"),
									new Item("long plastic chastity cage",0,0,0,0,0,0,0,50,"denialSkills",1,"penis"),
									new Item("plastic chastity cage",0,0,0,0,0,0,0,100,"denialSkills",1,"penis"),
									new Item("metal chastity cage",0,0,0,0,0,0,0,100,"denialSkills",1,"penis"),
									new Item("small metal chastity cage",0,0,0,0,0,0,0,100,"denialSkills",1,"penis"),
									new Item("small plastic chastity cage",0,0,0,0,0,0,0,25,"denialSkills",1,"penis"),
									new Item("rubber spiked chastity cage",0,0,0,0,0,0,0,60,"denialSkills",1,"penis"),
									new Item("metal spiked chastity cage",0,0,0,0,0,0,0,100,"denialSkills",1,"penis"),
									new Item("chastity belt",0,0,0,0,0,0,0,150,"denialSkills",1,"penis"),
									new Item("high quality chastity belt",0,0,0,0,0,0,0,250,"denialSkills",1,"penis")
								],
						clothes:[	new Item("thong",0,0,0,0,0,0,0,10,"feminizationSkills",7,"underwear"),
									new Item("strings",0,0,0,0,0,0,0,20,"feminizationSkills",3,"underwear"),
									new Item("satin panties",0,0,0,0,0,0,0,20,"feminizationSkills",3,"underwear"),
									new Item("cotton panties",0,0,0,0,0,0,0,20,"feminizationSkills",7,"underwear"),
									new Item("satin boyshorts",0,0,0,0,0,0,0,20,"feminizationSkills",3,"underwear"),
									new Item("women boxers",0,0,0,0,0,0,0,20,"feminizationSkills",7,"underwear"),
									new Item("clipper bras",0,0,0,0,0,0,0,20,"feminizationSkills",3,"torso"),
									new Item("scratch bras",0,0,0,0,0,0,0,20,"feminizationSkills",3,"torso"),
									new Item("push up bras",0,0,0,0,0,0,0,20,"feminizationSkills",3,"torso"),
									new Item("satin bras",0,0,0,0,0,0,0,20,"feminizationSkills",3,"torso"),
									new Item("pink dress",0,0,0,0,0,0,0,50,"feminizationSkills",1,"torso"),
									new Item("nightie",0,0,0,0,0,0,0,10,"feminizationSkills",1,"torso"),
									new Item("satin nightie",0,0,0,0,0,0,0,10,"feminizationSkills",1,"torso"),
									//new Item("stockings",0,0,0,0,0,0,0,10,"feminizationSkills",3,"legs"),
									new Item("skirt",0,0,0,0,0,0,0,10,"feminizationSkills",1,"waist"),
									//new Item("wig",0,0,0,0,0,0,0,10,"feminizationSkills",1,"head"),
									new Item("big tampx",0,0,0,0,0,0,0,10,"feminizationSkills",10,"anus"),
									new Item("small tampx",0,0,0,0,0,0,0,10,"feminizationSkills",15,"anus"),
									new Item("medium tampx",0,0,0,0,0,0,0,10,"feminizationSkills",10,"anus"),
									new Item("kotox ultra",0,0,0,0,0,0,0,10,"feminizationSkills",10,"underwear"),
									new Item("kotox night",0,0,0,0,0,0,0,10,"feminizationSkills",10,"underwear"),
									new Item("kotox small",0,0,0,0,0,0,0,10,"feminizationSkills",10,"underwear"),
									new Item("balerinas",0,0,0,0,0,0,0,50,"feminizationSkills",10,"shoes"),
									new Item("3 inch heel",0,0,0,0,0,0,0,75,"feminizationSkills",10,"shoes"),
									new Item("6 inch heel",0,0,0,0,0,0,0,100,"feminizationSkills",10,"shoes")
									//new Item("dog collar",0,0,0,0,0,0,0,10,"feminizationSkills",1,"neck"),
									//new Item("makeup",0,0,0,0,0,0,0,10,"feminizationSkills",1,"face")
								]
						/*toys:[	new Item("rattle",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("shape box",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("circle play",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("rocking horse",0,0,0,0,0,0,0,100,"",1,"toy"),
								new Item("teddy",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("giant giraffe teddy",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("baby bottle",0,0,0,0,0,0,0,10,"",1,"toy"),
								new Item("pacifier",0,0,0,0,0,0,0,10,"",1,"toy")
							],
						miscelenous:[new Item("bonet",0,0,0,0,0,0,0,10,"",1,"head")]*/
						};
		
		this._coords=crds;
		this.currentMealType="normal";
		this._type="emptyRoom";
		this._name;
		this._subs=[];
		this._doms=[];
		this.renderRoom();
		this.stock=[];
	}
	
	get type()
	{
		return this._type;
	}
	
	get coords()
	{
		return this._coords;
	}
	
	set type(t)
	{
		this._type=t;
		this.renderRoom();
	}
	
	renderRoom()
	{
		/*for(var i = 0;i<(r.coords[1][0]/24)+1;i+=(winHeight/24))
			for(var j = (r.coords[0][1]/24);j<(r.coords[1][1]/24)+1;j++)
				t.terrainTab[(i*((winWidth+r.coords[1][0])/24))+(i-(r.coords[0][0]/24))].className="tile grass";
				console.log((i*((winWidth+r.coords[1][0])/24))+(i-(r.coords[0][0]/24)));*/

		for(let i = this._coords[0][0]; i<this._coords[1][0];i+=24)
			for(let j = this._coords[0][1]; j<this._coords[1][1];j+=24)
				switch(true)
				{
					case (this._type=="road"):
						ter.terrain[i/24][j/24].className="tile "+this._type+" unselectable";
						break;
					case (	(i==this._coords[0][0])||(i==this._coords[1][0]-24)||
							(j==this._coords[0][1])||(j==this._coords[1][1]-24)):
							ter.terrain[i/24][j/24].className="tile wall unselectable";
						break;
					default : 
						ter.terrain[i/24][j/24].className="tile "+this._type+" unselectable";
				}
	}
	
	
}
