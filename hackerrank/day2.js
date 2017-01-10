function totalCost(mealCost,tipPercentage,taxPercentage){
    var total = ((mealCost*(tipPercentage/100))+(mealCost+(taxPercentage/100))+mealCost);

        return "The total meal cost is " +total+ " dollars";
}
