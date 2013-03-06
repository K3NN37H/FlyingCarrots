var a,b,c = 0;

function addition(){
	a= Math.floor((Math.random()*50)+1);
	b= Math.floor((Math.random()*50)+1);

	var answer = prompt("What is the answer for"+ a +" + " + b + " ?")

	if ( answer == a + b){
	 return true;
	}
	else {
	 return false;
	}
}

function subtraction(){
    a= Math.floor((Math.random()*100)+1);
    b= Math.floor((Math.random()*100)+1);
    var answer = prompt("What is the answer for"+ a +" - " + b + " ?")
    if (answer == a - b){
        return true;
    }
    else{
        return false;
    }
}

function multiplication(){
    a= Math.floor((Math.random()*10)+1);
    b= Math.floor((Math.random()*10)+1);
    var answer = prompt("What is the answer for"+ a +" × " + b + " ?")
    if (answer == a * b){
        return true;
    }
    else{
        return false;
    }
}


function division(){
    a= Math.floor((Math.random()*10)+1);
    b= Math.floor((Math.random()*10)+1);
    c = a * b
    
    var answer = prompt( "What is the answer for"+ c +" ÷ " + a + " ?")
    if (answer == b){
        return true;
    }
    else{
        return false;
    }
}