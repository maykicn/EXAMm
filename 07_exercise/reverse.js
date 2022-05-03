function reverse(num){
    let rev = 0;
    let lastDigit;
    let flag=false;

    if(num<0){
        num= num*-1;
        flag = true
    }
    
    while(num != 0){
        lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num/10);
    }
    if(flag){
        rev = rev*-1;
    }
    
    console.log("Reverse number : "+rev);
    
}

reverse(1234);
reverse(100000000);
reverse(-321);
