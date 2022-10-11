let someValue;
function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!" ;
  } 
  else if (someValue >= 400 && someValue <= 2000){
    return "That will be twenty bucks."
  }
  else if (someValue > 2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (someValue >= 2500) {
    return "No can do."
  }
}

const cityName = "NYC";
function ternaryCheckCity(cityName){
  return (cityName === "NYC") ? "Ok, sounds good." : "No go." ;
}

const tipAmount = "generous";
function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case "generous" :
      return ("Thank you so much.");
    case "not as generous" :
      return ("Thank you.");
    default :
      return ("Bye.")
  } 
}