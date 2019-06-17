function produceDrivingRange(blockRange){
  return function(start,end){
    const difference = Math.abs(start-end)
    const inRange = Math.abs(blockRange - difference)
    if (difference < blockRange) {
      return `within range by ${inRange}`
    } else {
      return `${inRange} blocks out of range`
    }
  }
}
