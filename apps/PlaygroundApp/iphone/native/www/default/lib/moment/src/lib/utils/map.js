
/* JavaScript content from lib/moment/src/lib/utils/map.js in folder common */
export default function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}
