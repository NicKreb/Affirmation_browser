//local storage

localStorage.setItem('options', 'all');

let options = localStorage.getItem('options')

const option1 = document.getElementById('option1').addEventListener('click', function(){
    window.localStorage.setItem('options', 'personal');
});

const option2 = document.getElementById('option2').addEventListener('click', function(){
    window.localStorage.setItem('options', 'give');
});
