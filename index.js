function produceDrivingRange(blockRange){
  return function(start,end){
    let difference = Math.abs(start-end)
    let inRange = Math.abs(blockRange - difference)
    if (difference < blockRange) {
      return `within range by ${inRange}`
    } else {
      return `${inRange} blocks out of range`
    }
  }
}
