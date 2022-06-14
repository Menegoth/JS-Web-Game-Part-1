//create image function
function newImage(source, positionLeft, positionBottom) {
    let object = document.createElement("img");
    object.src = source;
    object.style.position = "fixed";
    object.style.left = positionLeft + "px";
    object.style.bottom = positionBottom + "px";
    document.body.append(object);
    return object;
}

function newItem(source, positionLeft, positionBottom) {
    let object = newImage(source, positionLeft, positionBottom);

    object.addEventListener("dblclick", function() {
        object.remove();
    });
}

//create images
newImage("./assets/green-character.gif", 100, 100);
newImage("./assets/pine-tree.png", 450, 200);
newImage("./assets/tree.png", 200, 300);
newImage("./assets/pillar.png", 350, 100);
newImage("./assets/crate.png", 150, 200);
newImage("./assets/well.png", 500, 425);

newItem("./assets/sword.png", 500, 405);
newItem("./assets/shield.png", 165, 185);
newItem("./assets/staff.png", 600, 100);
