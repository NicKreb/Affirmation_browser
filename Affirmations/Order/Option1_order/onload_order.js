let options = localStorage.getItem('options');

window.onLoad = function(){

function order() {
    if (localStorage.getItem('personal') === 'true'){
        console.log('goodbye')
        document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart title_icon'></i>",
        document.getElementById('item_1').innerHTML = "I am",
        document.getElementById('item_2').innerHTML = "I can"
      } else if (localStorage.getItem('giver') === 'true'){
         console.log('hello') 
        document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand title_icon'></i>",
        document.getElementById('item_1').innerHTML = "You are",
        document.getElementById('item_2').innerHTML = "You can"
     } else {
         console.log("options undefined")
     }
    };
    order();
  }