function weekNumbersToWords (numberOfTheDay){

    let index  = numberOfTheDay.length;
    wordsOfTheWeek = [];    
    do{
        switch(numberOfTheDay[index]){
            case 1:
                wordsOfTheWeek.push('Monday')
                break;
            case 2:
                wordsOfTheWeek.push('Tuesday')
                break;
            case 3:
                wordsOfTheWeek.push('Wednesday')
                break;
            case 4:
                wordsOfTheWeek.push('Thursday')
                break;
            case 5:
                wordsOfTheWeek.push('Friday')
                break;
            case 6:
                wordsOfTheWeek.push('Saturday')
                break;  
            case 7:
                wordsOfTheWeek.push('Sunday')
                break;              
        }
        index-=1;
        
    }while(index>=0)


    // numberOfTheDays = ['aykut'];
    // numberOfTheDays.pop();
    // console.log(numberOfTheDays.length)
    wordsOfTheWeek.reverse();
   console.log(wordsOfTheWeek.toString())
   
}

weekNumbersToWords([1,4,6,3,2]);