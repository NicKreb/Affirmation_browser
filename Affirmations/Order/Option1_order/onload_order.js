function onLoad(){ 
    for (var i = 0; i < localStorage.length; i++)
{    if (localStorage.getItem('personal') === localStorage.getItem(localStorage.key(i))){
            return( 
            console.log('personal'),
            document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart title_icon'></i>",
            document.getElementById('item_1').innerHTML = "I am",
            document.getElementById('item_2').innerHTML = "I can")
        } else if (localStorage.getItem('giver') === localStorage.getItem(localStorage.key(i))){
            return (console.log('giver'),
            document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand title_icon'></i>",
            document.getElementById('item_1').innerHTML = "You are",
            document.getElementById('item_2').innerHTML = "You can")
        } else {
            console.log("options undefined")
        }}
    };