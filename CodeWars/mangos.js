function mango(quantity, price){
var total = 0;
var quantcount = quantity;
console.log("quantity is " +quantity);
console.log("price is " +price);


if(quantcount >= 3){
  console.log("test")

    while(quantcount>=3){
      console.log("while hit");
      total = total+2
      console.log("total is" +total);
      quantcount=quantcount-3;

    }

   total=total+quantcount;


}else{
   return quantcount*price
}

   return total*price

}

