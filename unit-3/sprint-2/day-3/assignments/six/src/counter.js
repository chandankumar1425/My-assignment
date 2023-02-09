class Counter {
  // Write your code here
  // Initially value = 0
  // Complete this Counter class as per the problem statement
  constructor(){
    this.value = 0
  }

  getValue(){
    return this.value
  }

  addValue(add){

    return this.value+=add

  }
  reduceValue(subs){

    return this.value-=subs;

  }

  resetValue(){

    return this.value = 0

  }
}

// Do not change this
export default Counter;