var calcEquation = function(equations, values, queries) {
    const calcMap = new Map();
    equations.flat().forEach(key => !calcMap.has(key) && calcMap.set(key, new Map()));
    
    equations.forEach((equation, idx) => {
        const [numerator, denominator] = equation;
        calcMap.get(numerator).set(denominator, values[idx]);
        calcMap.get(denominator).set(numerator, 1/values[idx]);
    });
    
    for(const [first, firstMap] of calcMap) {
        for(const [second, fstDivSec] of firstMap) {
            const secondMap = calcMap.get(second);
            for(const [third, secDivTrd] of secondMap) {
                const thirdMap = calcMap.get(third);
                const fstDivTrd = fstDivSec*secDivTrd;
                firstMap.set(third, fstDivTrd);
                thirdMap.set(first, 1/fstDivTrd);
            }
        }
    }
    
    return queries.map(query => {
        const [numerator, denominator] = query;
        return calcMap.get(numerator)?.get(denominator) ?? -1;
    });
    
};