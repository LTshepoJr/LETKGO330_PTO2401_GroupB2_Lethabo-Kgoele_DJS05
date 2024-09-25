function tallyCreator() {
  let tallyArray = [];
  let count = {
    value: 0,
  };
  return {
    // method to add method to array
    subscribe(method) {
      tallyArray.push(method);
    },
    // method to remove method from array
    unsubscribe(method) {
      tallyArray = tallyArray.filter((tally) => tally !== method);
    },
    notify() {
      tallyArray.forEach((tally) => tally(count));
    },
    dispatch(action) {
      if (action === "ADD") {
        count.value++;
      } else if (action === "SUBTRACT") {
        count.value--;
      } else if (action === "RESET") {
        count.value = 0;
      }
      this.notify();
    },
    // logs out the current state
    getState() {
      console.log(count.value);
    },
  };
}
let tallyOne = tallyCreator();
tallyOne.getState();
tallyOne.dispatch("ADD");
tallyOne.dispatch("ADD");
tallyOne.getState();
tallyOne.dispatch("SUBTRACT");
tallyOne.getState();
tallyOne.dispatch("RESET");
tallyOne.getState();
