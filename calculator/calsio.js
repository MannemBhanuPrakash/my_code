function num1()
{

	var t1=document.getElementById("n1").value
	
		if(t1==1)
	{
		document.getElementById("action").value+=t1
	}
}
function num2()
{

	var t1=document.getElementById("2").value
		if(t1==2)
	{
		document.getElementById("action").value+=t1
	}
}
function num3()
{

	var t1=document.getElementById("n3").value
		if(t1==3)
	{
		document.getElementById("action").value+=t1
	}
}
function num4()
{

	var t1=document.getElementById("n4").value
		if(t1==4)
	{
		document.getElementById("action").value+=t1
	}
}
function num5()
{

	var t1=document.getElementById("n5").value
		if(t1==5)
	{
		document.getElementById("action").value+=t1
	}
}
function num6()
{

	var t1=document.getElementById("n6").value
		if(t1==6)
	{
		document.getElementById("action").value+=t1
	}
}
function num7()
{

	var t1=document.getElementById("n7").value
		if(t1==7)
	{
		document.getElementById("action").value+=t1
	}
}
function num8()
{

	var t1=document.getElementById("n8").value
		if(t1==8)
	{
		document.getElementById("action").value+=t1
	}
}
function num9()
{

	var t1=document.getElementById("n9").value
		if(t1==9)
	{
		document.getElementById("action").value+=t1
	}
}
function num0()
{

	var t1=document.getElementById("0").value
		if(t1==0)
	{
		document.getElementById("action").value+=t1
	}
}
	
function add()
{
	
	var t1=document.getElementById("na").value
		if(t1=='+')
	{
		document.getElementById("action").value+=t1
	}
	
}
function sub()
{
	
	var t1=document.getElementById("ns").value
		if(t1=='-')
	{
		document.getElementById("action").value+=t1
	}
	
}
function mul()
{
	
	var t1=document.getElementById("nm").value
		if(t1=='*')
	{
		document.getElementById("action").value+=t1
	}
	
}
function div()
{
	
	var t1=document.getElementById("nd").value
		if(t1=='/')
	{
		document.getElementById("action").value+=t1
	}
	
}

function equal()
{
	
	var t1=document.getElementById("ne").value
		if(t1=='=')
	{
		var res=document.getElementById("action").value
		var res1=eval(res)
			document.getElementById("action").value=res1
	}
	
}
function erase()
{
	 var e=document.getElementById("del").value = ' '
	 
      document.getElementById("action").value=e
		  document.getElementById("del").setAttribute("value","clear")

}