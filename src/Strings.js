exports.ReverseString = function(str){

	if(str!=null){
		var i=0;
		result=""
		while(str[i]!=null){
			result=str[i]+result;
			i++;
		}
		//util.print(result)
		return result;
	}
	return null

}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){

	li=[];

	if(str!=null && str!=""){
		var i=0;
		var firsname="";
		while(str[i]!=null){
			if(str[i]==","){
				firsname="";
				i++;
				while(str[i]!=";" && str[i]!=null){
					firsname=firsname+str[i];
					i++;
				}
		
				li.push(firsname)

			}

			i++;
			
		}
		
		return li;
	}
	if(str==null){
		return null;
	}
	return li;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){

	var result="";
	if( arrayOfStrings!=null){
		for( i in arrayOfStrings){
			result=result+arrayOfStrings[i]+".";
		}
		//util.print(result)
		return result;
	}
	else{
		return null;
	}
}

