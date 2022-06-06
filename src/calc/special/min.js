import {sum} from '../sum';

export function min(x, y){
  console.log("sum is ", sum(x, y));

  if(x < y)
    return x;
  else  
    return y;
}