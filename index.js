produceDrivingRange(distance){
  return function(start,end){
    return Math.abs(start-end) < distance
  }
}
