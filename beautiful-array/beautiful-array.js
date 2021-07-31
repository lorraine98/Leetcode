var beautifulArray = function(n) {
    arr = [1];
    while(arr.length < n) {
        let tmp = [];
        arr.forEach(x=> {
            if(x*2-1 <= n) {
                tmp.push(x*2-1);
            }
        })
        arr.forEach(x =>{
             if(x*2 <= n) {
                tmp.push(x*2);
            }
        })
        arr = tmp;
    }
    return arr
};