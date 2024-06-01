//local storage

var options = 0;
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

option1.onClick = function personal_option(options){
    if( options === 1 ){
        return options = 0, console.log(options);
    } else { 
        return options = 1, console.log(options)
    };
};

option2.onClick = function giver_option(options){ 
    if ( options === 0){
        return options = 1, console.log(options);
    } else {
        return  options = 0, console.log(options);
    };
};

let order_list = document.getElementById('order_list');

order_list.onLoad = function order(options) {

    if (options === 0){
        return (document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart title_icon'></i>",
        document.getElementById('item_1').innerHTML = "I am",
        document.getElementById('item_2').innerHTML = "I can");
     } else if (options === 1){
        return (document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand title_icon'></i>",
        document.getElementById('item_1').innerHTML = "You are",
        document.getElementById('item_2').innerHTML = "You can");
     } else {
         console.log("options undefined")
     };
 
     return console.log(options);
  };