class BankSystem
{
	constructor()
	{
		this._money=20000;
		this._investmentAccount=0;
		this.renderAccounts();
	}
	
	subMoney(mon)
	{
		let isPossible=false;
		if(isPossible=this.transactionIsPossible(mon))
			this._money-=mon;
		this.renderAccounts();
		return isPossible;
	}
	
	transactionIsPossible(mon)
	{
		return (this._money-mon)>0;
	}
	
	addInterests()
	{
		if(this._investmentAccount>0)
			this._investmentAccount+=Math.ceil(this._investmentAccount*0.05);
		this.renderAccounts();
	}
	
	addInvestment()
	{
		if(this.transactionIsPossible(1000))
		{
			this._money-=1000;
			this._investmentAccount+=1000;
		}
		this.renderAccounts();
	}
	
	subInvestment()
	{
		if((this._investmentAccount-1000)>0)
		{
			this._investmentAccount-=1000;
			this._money+=1000;
		}
		this.renderAccounts();
	}
	
	renderAccounts()
	{
		userint.topMenu.innerHTML="money: "+this._money+"$<br/>"
		userint.topMenu.innerHTML+="<p class='add'>+</p> investment: "+this._investmentAccount+"$<p class='sub'>-</p>"
	}
	
}

let bank=new BankSystem();