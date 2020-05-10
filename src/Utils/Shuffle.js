/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function Shuffle(a) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default Shuffle;
