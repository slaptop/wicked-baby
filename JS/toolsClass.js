class ToolsBox
{
	constructor()
	{
		this.coordsArray;
		this.res;
	}
	
	makeCoords(beginX,beginY,endX,endY)
	{
		this.coordsArray = this.setCoordsArray(beginX,beginY,endX,endY);
		/*if((beginX>endX)&&(beginY>endY))
		{
			this.swap(0,0);
			this.swap(1,1);
		}*/
		let wasUsed=false;
		if(!((beginX<endX)&&(beginY<endY)))
			switch(true)
			{
				case ((beginX>endX)&&(beginY>endY)):
					this.swap(0,0);
					this.swap(1,1);
					wasUsed=true;
					break;
				case (!wasUsed&&(beginY<endY)):
					this.swap(1,1);
					this.swap(0,0);
					this.swap(1,1);
					wasUsed=true;
					break;
				case ((beginX<endX)&&!wasUsed):
					this.swap(0,0);
					this.swap(1,1);
					this.swap(0,0);
					wasUsed=true;
					break;
			}
		return this.coordsArray;
	}
	
	setCoordsArray(beginX,beginY,endX,endY)
	{
		return [[beginX,beginY],
				[endX,	endY]];
	}
	
	swap(a,b)
	{
		let tmp=this.coordsArray[0][a];
		this.coordsArray[0][a]=this.coordsArray[1][b];
		this.coordsArray[1][b]=tmp;
	}
}
let tools = new ToolsBox();