let options = null;

function personal_option() {
    if( options != 0){
        options = 0
    };

    return options;
};

function giver_option(){  
    if( options != 1){
        options = 1
    };

    return options;
};

function order() {
   if (options = 0){
        document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart'></i>";
        document.getElementById('item_1').innerHTML = "I am";
        document.getElementById('item_2').innerHTML = "I can";
    } else if (options = 1){
        document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand'></i>";
        document.getElementById('item_1').innerHTML = "You are";
        document.getElementById('item_2').innerHTML = "You can";
    } else {
        console.log("options undefined")
    };

    return console.log(options);
 };