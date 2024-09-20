function tallyCreator() {
  let count = {
    value: 0,
  };
  return {
    dispatch(action) {
      switch (action) {
        case "ADD":
          return count++;
        case "SUBTRACT":
          return count--;
        case "RESET":
          return (count = 0);
      }
    },
    getState() {
      console.log(count);
    },
  };
}

const tally = tallyCreator();
tally.dispatch("ADD");
tally.dispatch("ADD");
tally.dispatch("SUBTRACT");
tally.dispatch("RESET");
tally.getState();
