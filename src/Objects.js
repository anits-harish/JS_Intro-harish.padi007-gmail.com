exports.GetObjectPropertyNames = function(obj) {
	list=[];
	if(obj!=null){
		for(var key in obj) {
    		list.push(key);
    	}
    	return list;
	}
	else{
		return null;
	}
	
}

exports.GetObjectPropertyValues = function(obj) {
	list=[];
	if(obj!=null){
	for(var key in obj) {
    	list.push(obj[key]);
	}
	return list;
}
else{
	return null;
}
}

