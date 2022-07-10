/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let answer = 0;
    
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    boxTypes.forEach(type => {
        const [box, unit] = type;
        if(truckSize >= box) {
            answer += box * unit;
            truckSize -= box;
        }
        else {
            answer += truckSize * unit;
            truckSize = 0;
        }
    });
    
    return answer;
};