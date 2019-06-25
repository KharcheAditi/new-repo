var express=require('express');
var app= express();

function add(a,b){
	return a+b;
};
var addcontroller=function(request,response){
	var result= add(10,20);
	response.send("Addtion of 10 and 20 is "+result);
	
	
};
	app.get('/add',addcontroller);
	app.listen(8080,function(){
		console.log("runnig on 8080")
		
	})
