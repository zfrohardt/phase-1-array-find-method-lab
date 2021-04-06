function superbowlWin(arr) {
    let obj = arr.find(callback);

    if (obj !== undefined) {
        return obj.year;
    }
}

function callback(element, index, arr) {
    return element.result === "W";
}