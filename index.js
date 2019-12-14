// Code your solution here

findMatching=(arr, string)=>{
    return arr.filter(name=>
        name.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(source, string){
    return source.filter(name=>
      name.toLowerCase().indexOf(string.toLowerCase()) ===0 )
}

function matchName(drivers, string){
   return drivers.filter(name=> 
    name.name===string)
}