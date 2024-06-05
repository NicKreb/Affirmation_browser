//local storage

localStorage.setItem('options', 'all');

let options = localStorage.getItem('options')

const option1 = document.getElementById('option1').addEventListener('click', function(){
        localStorage.removeItem('options'),
        localStorage.removeItem('giver');
        window.localStorage.setItem('personal', 'true');
});

const option2 = document.getElementById('option2').addEventListener('click', function(){
    localStorage.removeItem('options')
    localStorage.removeItem('personal')
    window.localStorage.setItem('giver', 'true');
});
