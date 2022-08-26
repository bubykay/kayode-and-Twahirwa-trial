function catAndMouse(x, y, z) {
    let catAplace = Math.abs(z - x);
    let catBplace = Math.abs(z - y);
    if (catAplace < catBplace) {
        return "Cat A";
    } else if (catBplace < catAplace) {
        return "Cat B";
    } else {
        return "Mouse C";
    }

}
