class Terrain
{
	constructor()
	{
		this._terrain=[];
		this._tileSize=24;
		this.generate();
	}
	generate()
	{
		let tempT=[];
		for(let i = 0;i<(winW/this._tileSize);i++)
		{
			for(let j = 0;j<(winH/this._tileSize);j++)
			{
				let curTile=document.createElement('p');
				curTile.className="tile ground unselectable";
				curTile.style.marginLeft=i*24+"px";
				curTile.style.marginTop=j*24+"px";
				document.body.appendChild(curTile);
				tempT.push(curTile);
			}
			this._terrain.push(tempT);
			tempT=[];
		}
	}
	get terrain()
	{
		return this._terrain;
	}
	
	get tileSize()
	{
		return this._tileSize;
	}
}

let ter=new Terrain();