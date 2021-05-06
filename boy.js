class Boy
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0.5,
			density:1.2

			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x, y, 10,10);
		World.add(world, this.body);
		this.image = loadImage("Pluckingmangoes/boy.png");

	}
	display()
	{
			
			var boypos=this.body.position;		

			push()
			translate(boypos.x, boypos.y);
			imageMode(CENTER)
			//strokeWeight(3);
			//fill("red")
			image(this.image,0,0,this.r, this.r);
			pop()
			
			
			
	}

}