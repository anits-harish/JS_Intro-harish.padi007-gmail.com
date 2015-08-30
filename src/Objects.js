exports.GetObjectPropertyNames = function(obj) {
	list=[];
	for(var key in obj) {
    	list.push(key);
    }
    return list;
}

exports.GetObjectPropertyValues = function(obj) {
	list=[];
	for(var key in obj) {
    	list.push(obj[key]);
	}
	return list;
}

