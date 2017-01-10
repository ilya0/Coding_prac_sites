function main(n) {
    var N = n;


if(N%2!=0){
  return "Weird";
    }else if(N>=2&&N<=5){
    return "Not Weird";
        }else if(N>=6&&N<=20){
        return "Weird";
        }else if(N>=20){
        return "Not Weird";
        }else{
        return "this isn't suppose to happen";
        }




}


main(3);
