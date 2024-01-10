function mapify(arr , cb){
    for(let i = 0 ; i < arr.length ; i++) arr[i] = cb(arr[i]) ;
    return arr
}