function getGCD(n1,n2){
   while(n1%n2 != 0){
        let rem = n1 % n2;
        n1 = n2;
        n2 = rem;
   }

   let gcd = n2;
   return gcd
}


console.log(getGCD(20, 28))