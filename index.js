function produceDrivingRange(blockRange){
  return function(start,end){
    return Math.abs(start-end) < blockRange
  }
}
