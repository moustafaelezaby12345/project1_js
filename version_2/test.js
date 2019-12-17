function interaction(type,target,time)//function templete for the interactions
{
	this.type=type;
	this.target=target;
	this.time=time;
}
//interaction of load 
window.onload=function(e){  
var test=new interaction(e.type,e.target,new Date());
if(!localStorage.getItem("load"))
	localStorage.setItem("load","type: "+test.type +" "+"target: "+test.target+"    "+"time: "+test.time);
else
{
	 var a=Array(localStorage.getItem("load"));
	 a.push("type: "+test.type +"target: "+test.target+"time: "+test.time);
	localStorage.setItem("load",a);
}
	
}

var arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//array of chars
var text1 = document.getElementById('text');
var div=document.getElementById('div');
var btn1 = document.getElementById('btn');
var img1=document.getElementById('image1');
 var r;
 //interaction when click button generate
btn1.addEventListener("click",function(e){
var test=new interaction(e.type,e.target,new Date());
if(!localStorage.getItem("generate"))
	localStorage.setItem("generate","type"+test.type+"    " +"target"+test.target+"    "+"time"+test.time);
else
{
	 var a=Array(localStorage.getItem("generate"));
	 a.push("type: "+test.type +"    "+"target: "+test.target+"    "+"time: "+test.time);
	localStorage.setItem("generate",a);
}
	
	 var index=new Array(text1.value);//array to store random numbers=>its count=the value in the textbox
	div.textContent="";
	//store indexes (random numburs)
	for(var x=0;x<text1.value;x++)
	{
		 r=Math.floor(Math.random()*26);
		 while(index.indexOf(r)!=-1)
                {
                    r=Math.floor(Math.random()*26);
                }
				
		index[x]=r;	
	}
	//create buttons
	for(var c=0;c<text1.value;c++)
    {
		var  item=document.createElement("button");
	   var text_of_item=document.createTextNode(arr[index[c]]);
	   item.appendChild(text_of_item);
	   div.appendChild(item); 
	  
    }
});
// show image according to button click
div.addEventListener("click",function(e){
	var test=new interaction(e.type,e.target,new Date());
if(!localStorage.getItem("click"+e.target.textContent))
	localStorage.setItem("click"+e.target.textContent,"type"+test.type +"target"+test.target+"time"+test.time);
else
{
	 var a=Array(localStorage.getItem("click"+e.target.textContent));
	 a.push("type: "+test.type +"target: "+test.target+"time: "+test.time+"<br>");
	localStorage.setItem("click"+e.target.textContent,a);
}
    e.target.setAttribute("style","background:red;");
	img1.src=e.target.textContent.toLowerCase()+".PNG";
	img1.setAttribute("style","border:3px solid");
});
//on unload interaction
window.onunload=function(e){
	var test=new interaction(e.type,e.target,new Date());
if(!localStorage.getItem("unload"))
	localStorage.setItem("unload","type"+test.type +"target"+test.target+"time"+test.time);
else
{
	 var a=Array(localStorage.getItem("unload"));
	 a.push("type: "+test.type +"    "+"target: "+test.target+"    "+"time: "+test.time);
	localStorage.setItem("unload",a);
}
    
}
//clear local storage after that time
setInterval(function(){
	
if(localStorage.length!=0)
{
	
var x=JSON.stringify({"load":localStorage['load'],"generate":localStorage['generate'],"clickA":localStorage['clickA'],"clickB":localStorage['clickB'],"clickC":localStorage['clickC'],
"clickD":localStorage['clickD'],"clickE":localStorage['clickE'],"clickF":localStorage['clickF'],"clickG":localStorage['clickG'],"clickH":localStorage['clickH'],
"clickI":localStorage['clickI'],"clickJ":localStorage['clickJ'],"clickK":localStorage['clickK'],"clickL":localStorage['clickL'],"clickM":localStorage['clickM'],
"clickN":localStorage['clickN'],"clickO":localStorage['clickO'],"clickP":localStorage['clickP'],"clickQ":localStorage['clickQ'],"clickR":localStorage['clickR'],
"clickS":localStorage['clickS'],"clickT":localStorage['clickT'],"clickU":localStorage['clickU'],"clickV":localStorage['clickV'],"clickW":localStorage['clickW'],
"clickX":localStorage['clickX'],"clickY":localStorage['clickY'],"clickZ":localStorage['clickZ'],"unload":localStorage['unload']});
$.ajax({
	"type":"POST",
	"url":"test2.php",
	"data":{"val":x},
	"success":function(response){
		console.log(response.text);
		localStorage.clear();
	}
});
	/*
	//Code with javascript
      var req=new XMLHttpRequest();
      req.onreadystatechange=function()
    {

	if(req.status==200&&req.readyState==4)
	{
		console.log(req.responseText);
		localStorage.clear();
		
	}

}
req.open("POST","test2.php",true);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

var x=JSON.stringify({"load":localStorage['load'],"generate":localStorage['generate'],"clickA":localStorage['clickA'],"clickB":localStorage['clickB'],"clickC":localStorage['clickC'],
"clickD":localStorage['clickD'],"clickE":localStorage['clickE'],"clickF":localStorage['clickF'],"clickG":localStorage['clickG'],"clickH":localStorage['clickH'],
"clickI":localStorage['clickI'],"clickJ":localStorage['clickJ'],"clickK":localStorage['clickK'],"clickL":localStorage['clickL'],"clickM":localStorage['clickM'],
"clickN":localStorage['clickN'],"clickO":localStorage['clickO'],"clickP":localStorage['clickP'],"clickQ":localStorage['clickQ'],"clickR":localStorage['clickR'],
"clickS":localStorage['clickS'],"clickT":localStorage['clickT'],"clickU":localStorage['clickU'],"clickV":localStorage['clickV'],"clickW":localStorage['clickW'],
"clickX":localStorage['clickX'],"clickY":localStorage['clickY'],"clickZ":localStorage['clickZ'],"unload":localStorage['unload']});
req.send("val="+x);
*/
	}
	
},10000);
function show()
{
	var b=document.getElementById("hid");
	b.setAttribute("style","display:block;");
	var my=document.getElementById("result");

$.ajax({
	"type":"GET",
	"url":"test3.php",
	"success":function(response){
		my.innerHTML=response;
	}
});
/*
//Code with javascript
var req=new XMLHttpRequest();
req.onreadystatechange=function()
{
var my=document.getElementById("result");
	if(req.status==200&&req.readyState==4)
	{
		
	my.innerHTML=req.responseText;
		
	}

}
req.open("GET","test3.php",true);
req.send();
*/
}
