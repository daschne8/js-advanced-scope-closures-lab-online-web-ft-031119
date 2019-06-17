function produceDrivingRange(blockRange){
  return function(start,end){
    let difference = Math.abs(start-end)
    if (difference < blockRange) {
      let inRange = Math.abs(blockRange - difference)
      return ``
    }
  }
}
