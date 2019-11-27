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
	localStorage.setItem("load","type: "+test.type +"    "+"target: "+test.target+"    "+"time: "+test.time);
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
	 a.push("type: "+test.type +"target: "+test.target+"time: "+test.time);
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
	localStorage.clear();
	
},1000000);
