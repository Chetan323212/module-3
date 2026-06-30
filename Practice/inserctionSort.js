

function insertionSort(arr){


        for(let i = 1; i < arr.length; i++){
            let NIT = arr[i]
            let j = i - 1

            while(j>=0 &&  arr[j] > NIT){
                arr[j + 1]  = arr[j]
                j = j - 1 
                arr[j + 1] = NIT
            }
        }
}

let arr = [3 ,8 ,9 ,1]
insertionSort(arr)
console.log(arr);