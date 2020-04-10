
window.onload = () => {
  displayStores();
}

function displayStores() {
  // stores.map(function(store, index))
  for(var store of stores){
    console.log(store);
  }
}