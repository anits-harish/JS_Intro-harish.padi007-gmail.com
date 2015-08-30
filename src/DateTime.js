// Given a date in string format, return the day it corresponds to.

//var JSIntro = require("../../src/Serialization");
exports.GetDay = function(dateString){
	//Months and days in the month
	var months = {"January":31,"February":0,"March":31,"April":30,"May":31,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};
	var i=0,j=0,month;

	if(dateString==null || dateString==""){
		return;
	}
	//Read the month
	while(dateString[i]!=' '){
		i++;
	}
	month=dateString.slice(0,i);
	//If month exists
	if(months[month]){
		j=i+1;
	//Read the date
		while(dateString[j]!=','){
			j++;
		}
		date=dateString.slice(i+1,j);
	//Check for the extreme conditions
		if(month == "February"){
			if(date<=29 && date>0){
				return ParseNumber(date);
			}
		}
		else{
			if(date<=months[month] && date >0){
				return ParseNumber(date);
			}
		
		}

	}

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