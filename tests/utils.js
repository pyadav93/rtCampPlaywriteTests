export function checkSortedProducts(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
}

export function checkSortedPrice(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Compare string values directly
        if (+arr[i] > +arr[i - 1]) {
            return false; // Not sorted in descending order
        }
    }
    return true; // Sorted in descending order
}