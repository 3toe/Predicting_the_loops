for(var num = 0; num < 15; num++){
   console.log(num);
}

// Prediction:
// The whole numbers from 0 to 14 printed in the console, 1 number per line

for(var i = 1; i < 10; i+=2){
   if(i % 3 == 0){
       console.log(i);
   }
}

// Prediction:
// The numbers 3 and 9, each on its own line.

for(var j = 1; j <= 15; j++){
   if(j % 2 == 0){
       j+=2;
   }
   else if(j % 3 == 0){
       j++;
   }
   console.log(j);
}

// Prediction:
// The following numbers, each printed on their own line:
// 1, 4, 5, 8, 10, 11, 14, 16