let arr = [1,3,2,1,3,5,13,2];

let findDuplicate = () => {
    let duplicate = false;
    let arr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                duplicate = true;
                break;
            }
        }
        if(duplicate){
            break;
        }else {
            duplicate = false;
            arr.push(arr[i]);
        }
    }
  
    return arr;
}

console.log(findDuplicate(arr));