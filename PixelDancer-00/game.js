let fps=60;
let canvas;
let ctx;



function main() {


	let display=document.getElementById("display");
	
	let image=new Image();
	image.src="dos_8x8_font_green.png";

	image.onload=function() {

		let canvas=document.createElement("canvas");
		let ctx=canvas.getContext("2d");

		canvas.width=image.width;
		canvas.height=image.height;

		ctx.drawImage(image,0,0);

		let imgData=ctx.getImageData(0,0,canvas.width,canvas.height);

		let html="";
		
		for(let i=0;imgData.data.length;i+=4) {
		
			let r=imgData.data[i+0];
			let g=imgData.data[i+1];
			let b=imgData.data[i+2];
			let a=imgData.data[i+3];

			let bit=0;

			if(r || g || b) {
				bit=1;
			}

			html+=bit+",";

			if(i%8==0) html+="<br>";

			if(i%64==0) html+="<br>";
			
		}


		display.innerHTML=html;

	}

}



main();
