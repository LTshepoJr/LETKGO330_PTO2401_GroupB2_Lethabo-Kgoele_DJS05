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
//created another method to be added at the tally array as a notification when dispatch is called
tallyOne.subscribe((count1) => {
  console.log(`TallyKeeper:`, count1);
});
tallyOne.dispatch("ADD");
tallyOne.dispatch("SUBTRACT");
tallyOne.dispatch("SUBTRACT");
tallyOne.dispatch("SUBTRACT");
tallyOne.dispatch("SUBTRACT");
tallyOne.getState();
