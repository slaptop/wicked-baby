class TimeManagement
{
	constructor()
	{
		this._subs=[];
		this._doms=[];
		this.day=0;
		this._currentDate="0/0/0";
		this._severalSlave=false;
		this.startDay();
	}
	
	startDay()
	{
		let curDay=this;
		
		this._currentDate=(++this.day%31)+"/"+Math.floor(this.day/31)+"/"+Math.floor(this.day/365);
		
		for(let i = 0;i<this._subs.length;i++)
		{
			console.log(this._subs[i].isPerformingAnInapropriateTask());
			if(	this._subs[i].isWearingAnInapropriateObject()	||
				this._subs[i].isPerformingAnInapropriateTask()	||
				evHan.rooms[this._subs[i]._currentRoom]._doms.length<1	||
				this._subs[i]._currentSkillLearning.length>3)
				this._subs[i].stopTraining();
			else this._subs[i].startTraining();
			if(this._subs[i]._isLearning)
				for(let j = 0;j<this._subs[i]._currentSkillLearning.length;j++)
					this._subs[i].training(this._subs[i]._currentSkillLearning[j]);
		}
		
		if(this.day%31==0)
		{
			bank.addInterests();
			for(let i = 0;i<this._subs.length;i++)
				bank.subMoney(-this._subs[i]._generatedIncome);
			for(let i = 0;i<this._doms.length;i++)
				bank.subMoney(this._doms[i]._salary);
		}
		this._dayTimeout=setTimeout(function(){curDay.startDay();},24000);
	}
}

let time=new TimeManagement();