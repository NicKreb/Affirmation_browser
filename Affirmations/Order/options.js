//local storage
const option1 = document.getElementById('option1').addEventListener('click', function(){
        localStorage.removeItem('options'),
        localStorage.removeItem('giver'),
        window.localStorage.setItem('personal', 'true');
});

const option2 = document.getElementById('option2').addEventListener('click', function(){
    localStorage.removeItem('options'),
    localStorage.removeItem('personal'),
    window.localStorage.setItem('giver', 'true');
});

const menu = document.getElementById('menu').addEventListener('click', function(){
    localStorage.removeItem('personal'),
    localStorage.removeItem('giver'),
    window.localStorage.setItem('options', 'all');
});