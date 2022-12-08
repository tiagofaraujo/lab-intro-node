class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
add(item) {
      this.items.push(item)
    this.item.sort((a,b) => a-b)
    this.length++
  }

get(pos) {
  if(pos <=this.items.length){
    return this.items[pos]
  }else{
    throw new Error('OutOfBounds');
  } 
}

max() {
  let max = 0;
  for (i = 0; i < this.length; i++) {
    const maxVal = this.length[i];
    if (maxVal > max) {
      max = maxVal;
    }
      
     return max
}
throw new Error('EmptySortedList')
}

min() { 
  let min = 0;
  for (i = 0; i < this.length; i++) {
    const minVal = this.length[i];
    if (minVal < min) {
      min = minVal;
    }
    return min
  }
  throw new Error('EmptySortedList');
}

sum() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this.length[i]
  }
  return sum
}
avg() {
  sum = 0; 
  for (let i = 0; i < this.length; i++) {
    sum += this.length[i];
  };
  return sum/this.items.length;
}
}

module.exports = SortedList;
