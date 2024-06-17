function onLoad() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem('personal') === localStorage.getItem(localStorage.key(i))) {
            return (
                console.log('personal'),
                document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-heart title_icon'></i>",
                document.getElementById('item_1').innerHTML = "I am",
                document.getElementById('item_2').innerHTML = "I can")
        } else if (localStorage.getItem('giver') === localStorage.getItem(localStorage.key(i))) {
            return (console.log('giver'),
                document.getElementById('icon_wrapper').innerHTML = "<i class='fa-solid fa-hand-holding-hand title_icon'></i>",
                document.getElementById('item_1').innerHTML = "You are",
                document.getElementById('item_2').innerHTML = "You can")
        } else {
            console.log("options undefined")
        }
    }
};

let giveArr = [{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA1_199',
    dollar: 1,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA2_299',
    dollar: 2,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA3_199',
    dollar: 1,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA4_599',
    dollar: 5,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA1_399',
    dollar: 3,
    cent: 99
}];

let personalArr = [{
    title: 'STRONG',
    letter: 'S',
    affirmation: 'Strong enough to conquer the challenges in my life.',
    id: 'PA1_199',
    dollar: 1,
    cent: 99
},
{
    title: 'CARING',
    letter: 'C',
    affirmation: 'Caring beyond belief.',
    id: 'PA2_199',
    dollar: 1,
    cent: 99
},
{
    title: 'FRIENDS',
    letter: 'F',
    affirmation: 'Surrounded by wonderful loved ones.',
    id: 'PA3_499',
    dollar: 4,
    cent: 99
},
{
    title: 'PATIENT',
    letter: 'P',
    affirmation: 'Patiently assess my environment and respond in a way that is best for me.',
    id: 'PA4_599',
    dollar: 5,
    cent: 99
},
{
    title: 'DESERVING',
    letter: 'D',
    affirmation: 'Deserving of Love and Patience.',
    id: 'PA5_699',
    dollar: 6,
    cent: 99
}];

let bothArr = [{
    title: 'STRONG',
    letter: 'S',
    affirmation: 'Strong enough to conquer the challenges in my life.',
    id: 'PA1_199',
    dollar: 1,
    cent: 99
},
{
    title: 'CARING',
    letter: 'C',
    affirmation: 'Caring beyond belief.',
    id: 'PA2_199',
    dollar: 1,
    cent: 99
},
{
    title: 'FRIENDS',
    letter: 'F',
    affirmation: 'Surrounded by wonderful loved ones.',
    id: 'PA3_499',
    dollar: 4,
    cent: 99
},
{
    title: 'PATIENT',
    letter: 'P',
    affirmation: 'Patiently assess my environment and respond in a way that is best for me.',
    id: 'PA4_599',
    dollar: 5,
    cent: 99
},
{
    title: 'DESERVING',
    letter: 'D',
    affirmation: 'Deserving of Love and Patience.',
    id: 'PA5_699',
    dollar: 6,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA1_199',
    dollar: 1,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA2_299',
    dollar: 2,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA3_199',
    dollar: 1,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA4_599',
    dollar: 5,
    cent: 99
},
{
    title: '',
    letter: '',
    affirmation: '',
    id: 'GA1_399',
    dollar: 3,
    cent: 99
}];

let shop = document.getElementById('shop');

function shoppingCards() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem('personal') === localStorage.getItem(localStorage.key(i))) {

            return (shop.innerHTML = personalArr.map((x) => {
                let { title, letter, affirmation, id, dollar, cent } = x;
                return `
        <div id=product-id-${id} class="item">
            <h1 class="product-image">${letter}</h1>
            <div class="details">
                <h3>${title}</h3>
                <p>${affirmation}</p>
                <div class="price">
                    <h2>$ ${dollar}.${cent}</h2>
                    <div class="product-buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
            })
                .join(""))
        } else if (localStorage.getItem('giver') === localStorage.getItem(localStorage.key(i))) {
            return (shop.innerHTML = giveArr.map((x) => {
                let { title, letter, affirmation, id, dollar, cent } = x;
                return `
                <div id=product-id-${id} class="item">
                    <h1 class="product-image">${letter}</h1>
                    <div class="details">
                        <h3>${title}</h3>
                        <p>${affirmation}</p>
                        <div class="price">
                            <h2>$ ${dollar}.${cent}</h2>
                            <div class="product-buttons">
                                <i class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            })
                .join(""))
        } else {
            return (shop.innerHTML = bothArr.map((x) => {
                let { title, letter, affirmation, id, dollar, cent } = x;
                return `
                <div id=product-id-${id} class="item">
                    <h1 class="product-image">${letter}</h1>
                    <div class="details">
                        <h3>${title}</h3>
                        <p>${affirmation}</p>
                        <div class="price">
                            <h2>$ ${dollar}.${cent}</h2>
                            <div class="product-buttons">
                                <i class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            })
                .join(""));
        }
    }
    shoppingCards();
}