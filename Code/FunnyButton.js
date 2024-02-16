var ButtonDoc = document.getElementById("ButtonBar");

new MutationObserver(function(m){
   console.log(ButtonDoc.childElementCount);
})