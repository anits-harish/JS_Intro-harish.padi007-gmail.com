var JSIntro = require("../../src/Serialization");
exports.ParseNumber = function(str){

	var i=0,num=0,ptr=-1,negative=false;
	numbers={"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0}
	if(str==null || str ==""){
		return null;
	}
	else{
		//Read till the end of the string
		while(str[i]!=null){
			if(str[i]<=9 && str[i]>=0){
				num=num*10+numbers[str[i]];
			}			
			else if(str[i]=="." && ptr==-1){
				ptr=i;
			}
			else if(str[0]=="-"){
				if(negative==false){
					negative=true;
				}
				else{
					return ""
				}
			}
			else{
				return "";
			}
			i++;
		}
		//To get the floating point number
		if(ptr!=-1){
			power=(i-ptr);
			w="1000000000";
			num=num/JSIntro.ParseNumber(w.slice(0,power))
		}
		//To get the negative number
		if(negative){
			return -1*num
		}
		return num;
	}
	//If the given Input is Number then return the number itself
	return str;

}

exports.ConvertNumberToString = function(num){

	var str="";
	var flag=false;
	
	if(JSIntro.ParseNumber(str+num)){
	//	util.print(num)
	//Check if the number is negative
		if (num<0){
			num=-1*num;
			flag=true;
		}


			while(num>0){
				str=num%10+str;
				num=Math.floor(num/10);
			}
			if(flag){
				str="-"+str;
			}
			return str;
		}
		
	else{
		return "";
	}
}

exports.ParseDate = function(str){


	var months = {"January":31,"February":0,"March":31,"April":30,"May":31,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};
	var monthNumberMap={"January":0,"February":1,"March":2,"April":3,"May":4,"June":5,"July":6,"August":7,"September":8,"October":9,"November":10,"December":11};
	var i=0,j=0,month,date,year;
	
	if(dateString==null){
		return null;
	}

	while(dateString[i]!=' '){
		i++;
	}
	month=dateString.slice(0,i);

	if(months[month]){
		j=i+1;
	
		while(dateString[j]!=' '){
			j++;
		}
		date=dateString.slice(i+1,j);
		
		i=j;
		while(dateString[j]!=null){
			j++;
		}
		year = dateString.slice(i+1,j);

	//	util.print(month,date,year);
		if(month == "February"){
			if(date<=29 && date>0){
				var d=Date(year,monthNumberMap[month],date);
				
				return d;
			}
			else{
				return null;
			}
		}
		else{
			if(date<=months[month] && date >0){
				var d=new Date(year,monthNumberMap[month],date);
				
				return d;
			}
			else{
				return null;
			}
		
		}

	}
	else{
		return null;
	}
}

exports.ConvertDateToString = function(dateValue){

return dateString.toString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){

	list=[]
	var i = 0,j=0;
	if(typeof(str)=="string"){
		
		while(str[i]!=null){
			num="";
			j=i;
			while(str[i]!="," && str[i]!=null){
				i++;
			}

			num=str.slice(j,i);
			i++;
			
			list.push(JSIntro.ParseNumber(num))
		//	util.print(num+"\n")
		}
		return list;
	}
	else{
		
		return list;
	}

}

exports.ConvertArrayOfNumbersToString = function(obj){

var str="";
if(obj instanceof Array){

for (i in obj){

	str=str+ConvertNumberToString(obj[i])+",";
	

	}
	}
return str.slice(0,-1)

}


exports.ConvertStringToObject = function(str){


	while(str[IndexForSerilization]==" "){
		IndexForSerilization++;
	}

	if(str[IndexForSerilization]=='{'){

		return dict(str);
	}
	else if(str[IndexForSerilization]=='['){
		return array(str)
	}
	else{
		return null;
	}



}

exports.ConvertObjectToString = function(obj){

var result="";
	
	if(obj instanceof Array){
		result=ArrayToString(obj)
		return result;
	}
	else if (obj instanceof Object){
		result=ObjectToString(obj)
		return result;
	}
	else{
		return null;
	}


}


function ArrayToString(str){
	var result="["
	for(i in str){
		if(str[i] instanceof Array){
			result=result+ArrayToString(str[i])
		}
		else if (str[i] instanceof Object){
			result=result+ObjectToString(str[i])
		}
		else{
			
			result=result+str[i];
		}
		result=result+","
	}
	
	result=result.slice(0,-1)+"]"
	return result
//	util.print(result)
}

function ObjectToString(str){

	var result="{";
	 
	for (i in str){
		key=i;
		value="";
		//result=result+key;


		if(str[i] instanceof Array){
			value=ArrayToString(str[i])
		}
		else if (str[i] instanceof Object){
			value=ObjectToString(str[i])
		}
		else{
			
			value=str[i];
		}
		result=result+key+":"+value+",";
	
	}
	result=result.slice(0,-1)+"}"
//	util.print(result)
	return result;

}




function ConvertNumberToString(num){

	var str="";
	var flag=false;
//	util.print(num)
	if(robo.ParseNumber(str+num)){
		
	//Check if the number is negative
		if(num==0){
			return "0";
		}

		if (num<0){
			num=-1*num;
			flag=true;
		}


			while(num>0){
				str=num%10+str;
				num=Math.floor(num/10);
			}
			if(flag){
				str="-"+str;
			}
		//	util.print(num)
			return str;
		}
		
	else{
		return "";
	}
}




function dict(str){

	IndexForSerilization++;
 	var dictnoary={};
	//Trim spaces
	while(str[IndexForSerilization]==" "){
		IndexForSerilization++;
	}
	//At begining there should always be a key
	var key=0;
	var keyis="";
	var valueis="";
	//Read till the end of the object
	while(str[IndexForSerilization]!="}"){
		//Eleminate the spaces.
		while(str[IndexForSerilization]==" "){
				IndexForSerilization++;
			}
			//Key should always be string and if we get the key change the flag key to "1"
			if(str[IndexForSerilization]=='"' && key==0){
				
				keyis=ParseString(str)
				util.print("KEY: "+keyis+"\n")
				key=1;
			}
			else if(str[IndexForSerilization]==":" && key==1){
				IndexForSerilization++;
				//Remove the spaces
				while(str[IndexForSerilization]==" "){
					IndexForSerilization++;
				}
				//	Get the value if it is string
				if(str[IndexForSerilization]=='"'){
					valueis=ParseString(str)
				//We get the key value pair.
					key=0;
			
				}
				//Get the value if it is Array
				else if(str[IndexForSerilization]=='['){
					valueis=array(str)
					key=0;
					

				}
				//Get the value if it is object
				else if(str[IndexForSerilization]=='{'){
					valueis=dict(str)
					util.print("Dict VALUE: "+valueis+" \n")
					key=0
				}
				//Get the value if it is Number
				else if(str[IndexForSerilization]<="9" && str[IndexForSerilization]>="0"){
					index=IndexForSerilization;
					while(str[IndexForSerilization]!=" "){
						IndexForSerilization++;
					}
					valueis=ParseNumber(str.slice(index,IndexForSerilization))
					key=0;

				}
				else{
					if(str.substr(IndexForSerilization,4)=="true"){
						valueis=true
					}
					else if(str.substr(IndexForSerilization,4)=="null"){
						valueis=null
					}
					else if(str.substr(IndexForSerilization,5)=="false"){
						valueis=false
					}
					else
					{
						return null;
					}
					key=0;
				}

				if(keyis!==""){
					util.print(keyis+" : "+valueis+"\n")
			dictnoary[keyis]=valueis;
				}
				else
				{
					return null;
				}
			
		
			key=0;
		}
		else if(str[IndexForSerilization]=="," && key==0) {
			
			util.print(valueis+"\n")
		//	dictnoary[keyis]=valueis;
		}
		else if(str[IndexForSerilization]=="}" && key==0) {
			
			return dictnoary;
		//	dictnoary[keyis]=valueis;
		}
		else{
		//	util.print("Something wrong: "+str[IndexForSerilization]+"\n")
			
			return null;
			
		}
		IndexForSerilization++;
		
		
	}

	return dictnoary;


}

function array(str){

	li=[]
	IndexForSerilization++;
	//Trim spaces
	while(str[IndexForSerilization]==" "){
		IndexForSerilization++;
	}
	while(str[IndexForSerilization]!="]"){
		while(str[IndexForSerilization]==" "){
				IndexForSerilization++;
			}
	
			if(str[IndexForSerilization]=='"'){
				
				Value=ParseString(str)
			
				li.push(Value)
			}

			else if(str[IndexForSerilization]=='['){
					li.push(array(str))
				}
				//Get the value if it is object
				else if(str[IndexForSerilization]=='{'){
					li.push(dict(str))
				}
				//Get the value if it is Number
				else if(str[IndexForSerilization]<="9" && str[IndexForSerilization]>="0"){
					index=IndexForSerilization;
			
					while(str[IndexForSerilization]<="9" && str[IndexForSerilization]>="0"){
						IndexForSerilization++;
					}

					Value=ParseNumber(str.slice(index,IndexForSerilization))
				
				IndexForSerilization--;
					li.push(Value)

				}
				else if(str[IndexForSerilization]==","){
					//IndexForSerilization++;
			//		util.print("Comma") do nothing
				}
				
				else{
					if(str.substr(IndexForSerilization,4)=="true"){
						
						li.push(true)
						IndexForSerilization=IndexForSerilization+4;
					}
					else if(str.substr(IndexForSerilization,4)=="null"){
						li.push(null)
						IndexForSerilization=IndexForSerilization+4;
					}
					else if(str.substr(IndexForSerilization,5)=="false"){
						li.push(false)
						IndexForSerilization=IndexForSerilization+5;
					}
					else
					{
						util.print("FSDXVCSDFSDFSDF")
						return null;
					}
				}

				IndexForSerilization++;
				//util.print(str[IndexForSerilization]+"\n")
			//util.print(li)

	}
//util.print(li)
return li
	


}




function ParseString(str){
	//util.print(str);
	var key="";
	IndexForSerilization++;
	while(str[IndexForSerilization]!='"'){
		key=key+str[IndexForSerilization];
		IndexForSerilization++;
	}
	return key;
}



function ParseNumber(str){

	var i=0,num=0,ptr=-1,negative=false;
	numbers={"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0}
	if(str==null || str ==""){
		return null;
	}
	else{
		//Read till the end of the string
		while(str[i]!=null){
			if(str[i]<=9 && str[i]>=0){
				num=num*10+numbers[str[i]];
			}			
			else if(str[i]=="." && ptr==-1){
				ptr=i;
			}
			else if(str[0]=="-"){
				if(negative==false){
					negative=true;
				}
				else{
					return ""
				}
			}
			else{
				return null;
			}
			i++;
		}
		//To get the floating point number
		if(ptr!=-1){
			power=(i-ptr);
			w="1000000000";
			num=num/JSIntro.ParseNumber(w.slice(0,power))
		}
		//To get the negative number
		if(negative){
			return -1*num
		}
		util.print("\n"+"Number: "+num+"\n")
		return num;
	}
	//If the given Input is Number then return the number itself
	return str;

}



//This is till the serilization;
