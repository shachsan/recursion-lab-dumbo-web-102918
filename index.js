// Code your solution here!

function printString(myString){
    console.log(myString[0]);
    if(myString.length>1){
        let subString=myString.substring(1)
        printString(subString);
    }else{
        return;
    }
}

function reverseString(myString){
    if(myString===''){
        return '';
    }else{
        return reverseString(myString.substring(1)) + myString.charAt(0)
    }

}

function isPalindrome(str){
    if (str===''||str.length===1){
        return true;
    }else if(str[0]===str.charAt(str.length-1)){
        return isPalindrome(str.substring(1,str.length-1))
    }else{
        return false;
    }
}

// isPalindrome('jjdf')

function addUpTo(arr, i){
   if(i){
       return arr[i]+addUpTo(arr, --i)
   }else{
       return arr[i]
   }
}

// addUpTo([4,2,9,5,7], 3)

// function maxOf(arr, max=0){
//     // let maxEle;
//     if(arr.length===1 && arr[0]>max){
//         return arr[0];
//     }else if(arr.length===1 && arr[0]< max){
//         return max;
//     }
//     if(arr[0]>=arr[1] && arr[0]>max){
//        maxEle=arr[0]
//     }else if(arr[0]<arr[1] && arr[1]>max){
//         maxEle=arr[1]
//     }
//         let newArr=arr.slice(1)
//         maxOf(newArr, maxEle)
    
// }

// maxOf([2,6,8,7,5])

function maxOf(arr){
    if(arr.length>1){
        let newArr=arr.slice(1)
        return Math.max(arr[0], maxOf(newArr))
    }else{
        return arr[0]
    }
}

function includesNumber(arr, num){
    if(arr.length===1 && arr[0]!==num){
        return false;
    }
    
    if(arr[0]===num){
        return true;
    }else{
        let newArr=arr.slice(1)
        return includesNumber(newArr,num)
    }
}