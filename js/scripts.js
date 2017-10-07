var usersHeight = prompt("How tall is vour tree?");

function drawTree (treeHeight) {
        star = '';
        for (j=0; j<=treeHeight; j++){
            document.getElementById("tree").innerHTML = document.getElementById("tree").innerHTML + star + "<br>";
            star += '*';
    }
}

drawTree(usersHeight);