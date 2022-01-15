var SnapshotArray = function(length) {
    this.arr = [];
    this.snapMap = new Map();
    this.snapCnt = 0;
};

SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val;
};

SnapshotArray.prototype.snap = function() {
    this.snapCnt++;
    let snap_id = this.snapCnt-1;
    let snapshot = [...this.arr];
    this.snapMap.set(snap_id, snapshot);
    return snap_id; 
};

SnapshotArray.prototype.get = function(index, snap_id) {
    const snapshotArr = this.snapMap.get(snap_id);
    return snapshotArr[index] === undefined ? null : snapshotArr[index];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */