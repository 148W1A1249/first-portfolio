var card = [
    {
        img:'./assets/images/food_search.png',
        title:'Food Search',
        language:'Html, Css, Bootstrap, Javascript',
        back:'https://portfolio-myself-beaware.netlify.app/',
        link:'https://food-search-myself-beaware.netlify.app/',
    },
    {
        img:'./assets/images/news.png',
        title:'Daily News',
        language:'Html, Css, Bootstrap, Javascript',
        back:'https://portfolio-myself-beaware.netlify.app/',
        link:'https://new-york-times-myself-beaware.netlify.app/',
    },
    {
        img:'./assets/images/catbreeds.png',
        title:'Cat Breeds',
        language:'Html, Css, Bootstrap, Javascript',
        back:'https://portfolio-myself-beaware.netlify.app/',
        link:'https://cat-breeds-myself-beaware.netlify.app/',
    },
]
var projects = document.querySelector('#projects');
let card_output='';
card.forEach(obj => {
    card_output +=`
    <div class="col-md-4 mt-3">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${obj.img}" alt="Card image cap" height="150px">
        <div class="card-body" style="height:200px">
            <h5 class="card-title">${obj.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Languages: ${obj.language}</h6>            
            <a href="${obj.back}" class="card-link">Go Home</a>
            <a href="${obj.link}" class="card-link">Check Work</a>
        </div>
        </div>
    </div>
    `       
});
projects.innerHTML= card_output;



