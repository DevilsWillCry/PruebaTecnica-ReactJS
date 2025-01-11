// processArray
export function processArray(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    const arrayModified = arr.map((num) => {
        if( num %  2 == 0){
            return num*2;
        }
        else{
            return num*3;
        }
    })

    return arrayModified;
}

