window.onLoad = function(){
 function order() {
    let options = localStorage.getItem('options');

    if (Object.keys(localStorage())){
        return (document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart title_icon'></i>",
        document.getElementById('item_1').innerHTML = "I am",
        document.getElementById('item_2').innerHTML = "I can");
     } else if (options.value === 1){
        return (document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand title_icon'></i>",
        document.getElementById('item_1').innerHTML = "You are",
        document.getElementById('item_2').innerHTML = "You can");
     } else {
         console.log("options undefined")
     };
  }

  order();
};