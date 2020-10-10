class Bitmap {

	constructor(width,height,index,frames,pixels) {
		this.width=width;
		this.height=height;
	
		if(frames===undefined) this.frames=1; else this.frames=frames;
	
		if(pixels===undefined) {
			this.pixels=new Array(width*height*this.frames);
			for(let i=0;i<width*height*this.frames;i++) { 
				this.pixels[i]=index;
			}
		} else {
			this.pixel=pixels;
		}
	}

	drawPoint(frame,x,y,index) {
		this.pixels[x+y*this.width+frame*this.width*this.height]=index;
	}

}

