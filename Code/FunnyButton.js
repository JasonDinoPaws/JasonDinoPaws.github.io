var ButtonDoc = document.getElementById("ButtonBar");

ButtonDoc.addEventListener("DOWNodeInserted", function(e){
    alert(String(e))
})