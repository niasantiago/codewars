function openOrSenior(data){
    return data.map(([age, handicap]) => {
      if (age >= 55 && handicap > 7) {
        return "Senior";
      } else {
        return "Open";
      }
    });
  } 