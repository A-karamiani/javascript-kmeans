function dofirst(){
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
	var data = new Array();
	
	var x1 = Math.floor((Math.random() * 700) + 1);;
	var y1 = Math.floor((Math.random() * 700) + 1);;
	
	var x2 = Math.floor((Math.random() * 700) + 1);;
	var y2 = Math.floor((Math.random() * 700) + 1);;
	
	var i= 1;
	while(i < 300){
		//canvas.fillStyle = 'blue';
		var j = Math.floor((Math.random() * 370) + 1);
		var z = Math.floor((Math.random() * 370) + 1);
		//canvas.fillRect(j , z ,5 , 5);
		i++;
		data[i] = new Array(j,z); 
	}
	
	var f=300;
	while(f < 600){
		//canvas.fillStyle = 'red';
		var j = Math.floor((Math.random() * 400) + 300);
		var z = Math.floor((Math.random() * 400) + 300);
		//canvas.fillRect(j , z ,5 , 5);
		f++;
		data[f] = new Array(j,z);
	}
	
	
	while(f < 900){
		//canvas.fillStyle = 'green';
		var j = Math.floor((Math.random() * 700) + 1);
		var z = Math.floor((Math.random() * 700) + 1);
		//canvas.fillRect(j , z ,5 , 5);
		f++;
		data[f] = new Array(j,z);
	}

	var t = 1;
	var myTimer = setInterval(function(){
		var a = 2;
		while(a <data.length-1){
			if((Math.sqrt(Math.pow(x1 - data[a][0],2) + Math.pow(y1 - data[a][1],2))) < (Math.sqrt(Math.pow(x2 - data[a][0],2) + Math.pow(y2 - data[a][1],2)))){
				data[a][2]='c1';
			}else{
				data[a][2]='c2';
			}
			a++;
		}
			
		var b = 2;
		var xc1=0, yc1=0, tc1 = 0;
		var xc2=0, yc2=0, tc2 = 0;
		
		while(b <data.length-1){
			if(data[b][2] == 'c1'){
				xc1 += data[b][0];
				yc1 += data[b][1];
				tc1++;
			}else{
				xc2 += data[b][0];
				yc2 += data[b][1];
				tc2++;
			}
			b++;
		}
		x1 = Math.floor(xc1/tc1);
		y1 = Math.floor(yc1/tc1);
		x2 = Math.floor(xc2/tc2);
		y2 = Math.floor(yc2/tc2);
		
		canvas.clearRect(0,0,700,700);
		t++;
		var n = 2;
		while(n < data.length-1){
			if(data[n][2] == 'c1'){
				canvas.fillStyle = 'blue';
				canvas.fillRect(data[n][0] , data[n][1] ,5 , 5);
			}else{
				canvas.fillStyle = 'red';
				canvas.fillRect(data[n][0] , data[n][1] ,5 , 5);
			}
			n++;
		}
		canvas.fillStyle = 'pink';
		canvas.fillRect(x1 , y1 ,20 , 20);
		canvas.fillStyle = 'green';
		canvas.fillRect(x2 , y2 ,20 , 20);
		
		if(t>100){
			clearInterval(myTimer);
		}

	},1000);
	
/*
	var t=1;
 	while(t<100){
		var a = 2;
		while(a <data.length-1){
			if((Math.sqrt(Math.pow(x1 - data[a][0],2) + Math.pow(y1 - data[a][1],2))) < (Math.sqrt(Math.pow(x2 - data[a][0],2) + Math.pow(y2 - data[a][1],2)))){
				data[a][2]='c1';
			}else{
				data[a][2]='c2';
			}
			a++;
		}
			
		var b = 2;
		var xc1=0, yc1=0, tc1 = 0;
		var xc2=0, yc2=0, tc2 = 0;
		
		while(b <data.length-1){
			if(data[b][2] == 'c1'){
				xc1 += data[b][0];
				yc1 += data[b][1];
				tc1++;
			}else{
				xc2 += data[b][0];
				yc2 += data[b][1];
				tc2++;
			}
			b++;
		}
		x1 = xc1/tc1;
		y1 = yc1/tc1;
		x2 = xc2/tc2;
		y2 = yc2/tc2;
		
		t++;
		var n = 2;
		while(n < 430){
			if(data[n][2] == 'c1'){
				canvas.fillStyle = 'blue';
				canvas.fillRect(data[n][0] , data[n][1] ,5 , 5);
			}else{
				canvas.fillStyle = 'red';
				canvas.fillRect(data[n][0] , data[n][1] ,5 , 5);
			}
			n++;
		}
	} */

}

window.addEventListener('load' , dofirst , false);