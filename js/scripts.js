var usersHeight = prompt("How tall is vour tree?");

function drawTree (treeHeight) {
        star = '';
        for (i=0; i<=treeHeight; i++){
            document.getElementById("tree").innerHTML += star + "<br>";
            star += '*';
    }
}

drawTree(usersHeight);

