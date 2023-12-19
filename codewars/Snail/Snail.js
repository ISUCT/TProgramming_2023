let snail = function(array) {
    if (!array.length) return [];
    const R = array.length, C = array[0].length;
    const seen = Array.from({length: R}, () => Array(C).fill(false));
    const dr = [0, 1, 0, -1], dc = [1, 0, -1, 0];
    let ans = [], r = 0, c = 0, di = 0;
    for (let _ = 0; _ < R * C; _++) {
        ans.push(array[r][c]);
        seen[r][c] = true;
        const cr = r + dr[di], cc = c + dc[di];
        if (0 <= cr && cr < R && 0 <= cc && cc < C && !seen[cr][cc]) {
            r = cr;
            c = cc;
        } else {
            di = (di + 1) % 4;
            r += dr[di];
            c += dc[di];
        }
    }
    return ans;
}