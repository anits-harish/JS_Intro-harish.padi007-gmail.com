exports.SumOfArray = function(arrayOfNums){

	var i=0,sum=0;
	while(arrayOfNums[i]!=null){
		sum=sum+arrayOfNums[i];
		i++;
	}
	return sum;;


}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

function sortNumber(a,b){
	//this is done so as to sort the negative numbers in the array.
   return a - b;
}

exports.SumOfUniqueNumbers = function(arrayOfNums){

	arrayOfNums.sort(sortNumber);
	var i=0;
	a=arrayOfNums[0];
	sum=0;
	//after sorting compare the adjacent elements and if they are same no need to add.

	while(arrayOfNums[i]!=null && arrayOfNums[i+1]!=null)
	{
		if(a!=arrayOfNums[i+1])
		{
			sum=sum+arrayOfNums;
			a=arrayOfNums[i+1];
		}
		i++;
	}
	return sum+a;

}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.


//Function to check the dimension of the matrix are equal
Array.prototype.checkDimension = function() {
	
	var lengthOfEachColumns = this.length;
    for(var i=0;i<lengthOfEachColumns;i++){
		
			if(this[i].length!=lengthOfEachColumns)
			{
				return false;
			}
		}
		return true;
};

exports.SumOfDiagonalCells = function(array2d){
	
	var lengthOfEachColumns = array2d.length;
	var sum = 0;
	if(array2d instanceof Array)
	{
		//If array is not a proper matrix or having uneven rows and columns

		if(array2d.checkDimension()){
			for (var i = 0;i<lengthOfEachColumns;i++)
			{
				sum=sum+array2d[i][i];
			}
			return sum;
		}
		else{
			return;
		}
	}
	else{
		return;
	}
	

}
