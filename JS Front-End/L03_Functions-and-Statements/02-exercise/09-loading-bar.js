function visualizeLoadingBar(n) {
    const progress = n / 10;
    const barLength = 10;
    let bar = "[";
  
    for (let i = 0; i < barLength; i++) {
      if (i < progress) {
        bar += "%";
      } else {
        bar += ".";
      }
    }
  
    bar += "]";
    const percentage = progress * 10;
  
    if (percentage < 100) {
      console.log(`${percentage}% ${bar}`);
      console.log("Still loading...");
    } else {
      console.log("100% Complete!");
      console.log(bar);
    }
  }
  