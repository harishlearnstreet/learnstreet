// MINESWEEPER PROJECT
function count_mines(mines) {
	//count the no. of 'm' present in mines 
	// if m is 10 return true or false
    var count=0; 
    for (var i=0; i< 9;i++){ 
     for(var j=0; j< 9; j++){ 
        if (mines[i][j]=='m'){ 
            count++; 
    } 
} 
} 
     if (count<10){ 
     return true; 
     }else{ 
    return false; 
}
	
 }