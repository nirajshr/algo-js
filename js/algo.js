function bstRotatedImpl(array, start, end, target) {
    debug("bstRotatedImpl(array, " + start + ", " + end + ", " + target + ")");
    var mid = parseInt(start + ( (end - start) / 2));
    
    if (array[mid] === target) return true;
    if (start >= end) return array[end] === target;
    
    // sorted part
    if (array[start] <= array[mid] && 
        target >= array[start] && target < array[mid]) {
        return bstRotatedImpl(array, start, mid, target);
    } 
    else if (array[mid] <= array[end] &&
        target > array[mid] && target <= array[end]) {
        return bstRotatedImpl(array, mid+1, end, target);    
    }
    
    // not sorted part
    if (array[mid] >= array[end] &&
        target > array[mid] && target <= array[end]) {
        return bstRotatedImpl(array, mid+1, end, target);        
    }
    else if (array[mid] <= array[start] &&
        target < array[mid] || target >= array[start]) {
        return bstRotatedImpl(array, start, mid, target);        
    }
    
    return false;
}

function bstRotated(array, target) {
    return bstRotatedImpl(array, 0, array.length - 1, target);
}
