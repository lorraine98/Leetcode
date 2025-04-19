/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
];

// 칠하는 경우 : 스타트, 주변 dir의 스타트와 같은 숫자일 때

var floodFill = function(image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const isVisited = Array.from({ length: n }, () => Array(m).fill(false));

    const target = image[sr][sc];

    const fill = (r, c) => {
        for(const dir of dirs) {
            const nr = dir[0] + r;
            const nc = dir[1] + c;

            if(nr >= 0 && nc >= 0 && nr < m && nc < n && !isVisited[nr][nc] && image[nr][nc] === target) {
                image[nr][nc] = color;
                isVisited[nr][nc] = true;
                fill(nr, nc);
            }
        }
    }

    image[sr][sc] = color;
    isVisited[sr][sc] = true;
    fill(sr, sc);

    return image;
};