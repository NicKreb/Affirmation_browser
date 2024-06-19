let giveArr = [{
    title: 'Loved',
    letter: 'L',
    summary: 'loved by all...',
    affirmation: 'loved by all your friends and loved ones, who are lucky to have you.',
    id: 'GA1_199',
    dollar: 1,
    cent: 99
},
{
    title: 'Enriching',
    letter: 'E',
    summary: 'enriching to...',
    affirmation: 'enriching to those who are lucky to be in your presence.',
    id: 'GA2_299',
    dollar: 2,
    cent: 99
},
{
    title: 'Interesting',
    letter: 'I',
    summary: 'interesting to...',
    affirmation: 'interesting to those who listen to your stories and ideas, you are looked up to by many.',
    id: 'GA3_199',
    dollar: 1,
    cent: 99
},
{
    title: 'Soft',
    letter: 'S',
    summary: 'allowed to...',
    affirmation: 'allowed to let yourself be soft, you do not need to stay strong and struggle all the time. It is ok to let go.',
    id: 'GA4_599',
    dollar: 5,
    cent: 99
},
{
    title: 'Strong',
    letter: 'St',
    summary: 'strong enough...',
    affirmation: 'strong enough to overcome any challenges in your path, you will eventually overcome all your odds in time.',
    id: 'GA5_399',
    dollar: 3,
    cent: 99
},
{
    title: 'Comforting',
    letter: 'C',
    summary: 'comforting when...',
    affirmation: 'comforting when you aid and show up to all your loved ones that ask of your help.',
    id: 'GA6_199',
    dollar: 1,
    cent: 99
},
{
    title: 'Brilliant',
    letter: 'B',
    summary: 'brilliant and...',
    affirmation: 'brilliant and intelligent beyond recognition.',
    id: 'GA7_599',
    dollar: 5,
    cent: 99
},
{
    title: 'Friend',
    letter: 'F',
    summary: 'a good...',
    affirmation: 'a good friend that I am lucky to have in my life.',
    id: 'GA8_399',
    dollar: 3,
    cent: 99
}];

let personalArr = [{
    title: 'STRONG',
    letter: 'S',
    summary: 'Strong enough...',
    affirmation: 'Strong enough to conquer the challenges in my life.',
    id: 'PA1_199',
    dollar: 1,
    cent: 99
},
{
    title: 'CARING',
    letter: 'C',
    summary: 'Caring beyond...',
    affirmation: 'Caring beyond belief.',
    id: 'PA2_199',
    dollar: 1,
    cent: 99
},
{
    title: 'FRIENDS',
    letter: 'F',
    summary: 'Surrounded by...',
    affirmation: 'Surrounded by wonderful loved ones.',
    id: 'PA3_499',
    dollar: 4,
    cent: 99
},
{
    title: 'PATIENT',
    letter: 'P',
    summary: 'Patiently asses...',
    affirmation: 'Patiently assess my environment and respond in a way that is best for me.',
    id: 'PA4_599',
    dollar: 5,
    cent: 99
},
{
    title: 'DESERVING',
    letter: 'D',
    summary: 'Deserving of...',
    affirmation: 'Deserving of Love and Patience.',
    id: 'PA5_699',
    dollar: 6,
    cent: 99
},
{
    title: 'LUCKY',
    letter: 'L',
    summary: 'My loved ones...',
    affirmation: 'My loved ones feel lucky to have me in their lives',
    id: 'PA6_889',
    dollar: 8,
    cent: 89
},
{
    title: 'RELAX',
    letter: 'R',
    summary: 'Relax so that...',
    affirmation: 'Relax so that I can recover, rather than burn myself out trying to survive.',
    id: '',
    dollar: 6,
    cent: 89
},
{
    title: 'FORGIVE',
    letter: 'F',
    summary: 'forgive myself...',
    affirmation: 'forgive myself for my mistakes, and recognize I am human and it is ok to stumble while I work towards my goals',
    id: '',
    dollar: 6,
    cent: 89
}];

let shop = document.getElementById('shop');

function shoppingCards() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem('personal') === localStorage.getItem(localStorage.key(i))) {

            return (shop.innerHTML = personalArr.map((x) => {
                let { title, letter, summary, id, dollar, cent } = x;
                return `
        <div id="product-id-${id}" class="item">
            <h1 class="product-image">${letter}</h1>
            <div class="details">
                <h3 class="item-title">${title}</h3>
                <p>${summary}</p>
                <div class="price">
                    <h2>$ ${dollar}.${cent}</h2>
                    <div class="product-buttons">
                    <i class="fa-solid fa-cart-plus"></i>
                        <div id=${id} class="quantity"></div>
                    </div>
                </div>
            </div>
        </div>
        `
            })
                .join(""))
        } else if (localStorage.getItem('giver') === localStorage.getItem(localStorage.key(i))) {
            return (shop.innerHTML = giveArr.map((x) => {
                let { title, letter, summary, id, dollar, cent } = x;
                return `
                <div id=product-id-${id} class="item">
                    <h1 class="product-image">${letter}</h1>
                    <div class="details">
                        <h3>${title}</h3>
                        <p>${summary}</p>
                        <div class="price">
                            <h2>$ ${dollar}.${cent}</h2>
                            <div class="product-buttons">
                            <i class="fa-solid fa-cart-plus"></i>
                                <div id=${id} class="quantity"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
                .join(""))
        } else if (localStorage.getItem('options') === localStorage.getItem(localStorage.key(i))) {
            return (shop.innerHTML = bothArr.map((x) => {
                let { title, letter, summary, id, dollar, cent } = x;
                return `
                <div id=product-id-${id} class="item">
                    <h1 class="product-image">${letter}</h1>
                    <div class="details">
                        <h3>${title}</h3>
                        <p>${summary}</p>
                        <div class="price">
                            <h2>$ ${dollar}.${cent}</h2>
                            <div class="product-buttons">
                                <i class="fa-solid fa-cart-plus"></i>
                                <div id=${id} class="quantity"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
                .join(""));
        }
    }
}

shoppingCards();