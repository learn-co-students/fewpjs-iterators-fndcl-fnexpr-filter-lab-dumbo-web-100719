// Code your solution here
findMatching = (drivers, string) =>{
    let matchingDrivers = drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase())
    return matchingDrivers 
}

function fuzzyMatch(drivers, string){
    let matchingDrivers = drivers.filter(driver => 
        driver[0] === string[0])
    return matchingDrivers
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string) 
}