/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const len = points.length;
    const dist = [];
    const graph = [...Array(len)].map((_, i) => i);
    let totalDist = 0;
    
    const find = (id) => {
        if(graph[id] === id) return id;
        graph[id] = find(graph[id]);
        return graph[id];
    }
    
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            const [xi, yi] = points[i];
            const [xj, yj] = points[j];
            const distance = Math.abs(xi - xj) + Math.abs(yi - yj);
            dist.push([i, j, distance]);
        }
    }
    
    dist.sort((a, b) => a[2] - b[2]);
    
    for(let [x, y, d] of dist) {
        const rootX = find(x);
        const rootY = find(y);
        if(rootX === rootY) continue;
        graph[rootY] = rootX;
        totalDist += d;
    }
    
    return totalDist;
};