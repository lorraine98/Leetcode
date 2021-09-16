var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    const modulo = BigInt(1000000007)
    let maxHeight = 0;
    let maxWidth = 0;
    
    horizontalCuts.sort((a,b) => a-b)
    verticalCuts.sort((a,b) => a-b)
    
    for(let i=0; i<horizontalCuts.length-1; i++){
        let diff = horizontalCuts[i+1] - horizontalCuts[i];
        if(maxHeight < diff) {
            maxHeight = diff;
        }
    }
    for(let i=0; i<verticalCuts.length-1; i++) {
        let diff = verticalCuts[i+1] - verticalCuts[i];
        if(maxWidth < diff) {
            maxWidth = diff;
        }
    }
    const horizontalToptoMargin = horizontalCuts[0] - 0;
    const horizontalBottomtoMargin = h - horizontalCuts[horizontalCuts.length -1];
    const maxHorizontal = horizontalToptoMargin - horizontalBottomtoMargin > 0 ? horizontalToptoMargin : horizontalBottomtoMargin;
    
    const verticalToptoMargin = verticalCuts[0] - 0;
    const verticalBottomtoMargin = w - verticalCuts[verticalCuts.length -1];
    const maxVertical = verticalToptoMargin - verticalBottomtoMargin > 0 ? verticalToptoMargin : verticalBottomtoMargin;
    
    const finalHeight = maxHeight - maxHorizontal > 0 ? maxHeight : maxHorizontal;
    const finalWidth = maxWidth - maxVertical > 0 ? maxWidth : maxVertical;
    
    return BigInt(finalHeight) * BigInt(finalWidth) % modulo;
};