

function mergeSort(arr){

    if(arr.length < 2){
        return arr
    }


    let mid = Math.floor(arr.length/2)

    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr) , mergeSort(rightArr))
}

function merge(leftArr , rightArr){
    const SortedArr = []

    while(leftArr.length > 0  && rightArr.length > 0){

        if(leftArr[0] <= rightArr[0]){
            SortedArr.push(leftArr.shift())
        }else{
            SortedArr.push(rightArr.shift())
        }
    }

    return [...SortedArr , ...leftArr , ...rightArr]
}

let arr = [-6, 20,-2, 4, 8 ]

console.log(mergeSort(arr));