/* ============================================
   CinemaHub — JavaScript Starter
   API Config + Helper Functions + TODO blocks
   ============================================ */

// ============================================
// API CONFIGURATION
// ============================================
const CONFIG = {
    API_KEY: 'def197fd36dd23cd1dae1280e65e2087',  // ⚠️ TMDB API Key
    BASE_URL: 'https://api.themoviedb.org/3',
    IMG_BASE: 'https://image.tmdb.org/t/p',
    POSTER_SIZE: 'w500',
    BACKDROP_SIZE: 'w1280',
    PROFILE_SIZE: 'w185',
};

// ============================================
// 💡 ПОДСКАЗКА: Как делать запросы к API
// ============================================
//
// Пример 1 — Получить популярные фильмы:
//
//   fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.results);  // массив фильмов
//     });
//
// Пример 2 — Поиск по названию:
//
//   fetch(`${CONFIG.BASE_URL}/search/multi?api_key=${CONFIG.API_KEY}&query=batman`)
//     .then(res => res.json())
//     .then(data => console.log(data.results));
//
// Пример 3 — Получить постер:
//
//   const posterURL = `${CONFIG.IMG_BASE}/${CONFIG.POSTER_SIZE}${movie.poster_path}`;
//   // → https://image.tmdb.org/t/p/w500/abc123.jpg
//
// ============================================

// ============================================
// ✍️ ПИШИ КОД НИЖЕ
// ============================================
// С этого момента всю логику (fetch, render, events) ты пишешь сам.
// Удачи! 🚀

// const PosterUrl = async (params) => {
//     const res = await fetch(`{CONFIG.IMG_BASE}/${CONFIG.POSTER_SIZE}/6yeVcxFR0j08vlv2OlL6zbewm4D.jpg`);
//     const data = await res.json();
//     console.log(data);
   
    
// }
// PosterUrl()

// const nameSearchin = async (params) => {
//     const res = await fetch(`${CONFIG.BASE_URL}/search/multi?api_key=${CONFIG.API_KEY}&query=batman`);
//     const data = await res.json();
//     console.log(data);
    
// }
// nameSearchin()
const favouriteMovie = document.querySelector('.favourite-movies');
const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('body')

const inputSearch = document.querySelector('.input-search')
let favorites = [];

const mainSection = document.querySelector('.main-section');
const logo = document.querySelector('.logo')


 const getJson = async (params) => {
    const res = await fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`);
    const data = await res.json();
    console.log(data);

    data.results.forEach(el => render(el))


    inputSearch.addEventListener('input', ()=>{
        mainSection.innerHTML = "";
        const arr = data.results.filter(el => el.title.includes(inputSearch.value) );
        arr.forEach(el =>{
            render(el)
        })
    })
    favouriteMovie.addEventListener('click', ()=>{
        mainSection.innerHTML= "";
        const arr = data.results.filter(el => favorites.includes(el.title));
        arr.forEach(el => renderFavourite(el))

})


    darkMode.addEventListener('click', ()=>{
        body.classList.toggle('white-mode')
    })

//     document.addEventListener('click', (el)=>{
//     const container = el.target.classList.contains('each-box');
//     if(!container) return;
//     const title = el.target.closest('.each-box');
//     const overview = data.results.filter(e => el.title === title.querySelector('h2').innerHTML);
//         showInn(overview);

    
// })
 }

 getJson()

 function renderFavourite(name){
    

        mainSection.insertAdjacentHTML('beforeend', 
            `
            <div class="each-box" style="overflow: hidden;position: relative; background-color: rgb(176, 178, 180);border-radius: 20px;">
            <div style="height: 300px;">
                <img style="width: 100%; object-fit: cover;height: 100%;" src="var 1.png" alt="">
            </div>
            <div style="padding: 20px;">
                <h2>${name.title}</h2>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <p>${name.release_date.slice(0, 4)}</p>
                    <p>${name.vote_average}</p>
                </div>
            </div>
            <div>Remove</div>
        </div>
            `
        )
 }

 function render(name){
    

        mainSection.insertAdjacentHTML('beforeend', 
            `
            <div class="each-box" style="overflow: hidden;position: relative; background-color: rgb(176, 178, 180);border-radius: 20px;">
            <div style="height: 300px;">
                <img style="width: 100%; object-fit: cover;height: 100%;" src="var 1.png" alt="">
            </div>
            <div style="padding: 20px;">
                <h2>${name.title}</h2>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <p>${name.release_date.slice(0, 4)}</p>
                    <p>${name.vote_average}</p>
                </div>
            </div>
            <div data="${name.title}" class="favorites" style="position: absolute;top: 10px;right: 10px;width: 25px;height: 25px;border: 1px black solid;"></div>
        </div>
            `
        )
 }
console.log('🎬 Задание WorldSkills CinemaHub запущено!');


document.addEventListener('click', (el)=>{
    const box = el.target.classList.contains('favorites');
    const title = el.target.closest('.each-box');
    if(!box) return;

    if(favorites.includes(title.querySelector('h2').innerHTML)){
        favorites = favorites.filter(el => el !== title.querySelector('h2').innerHTML);
        console.log(favorites);
        el.target.classList.remove('add-favourite')

    }
    else if(!favorites.includes(title.querySelector('h2').innerHTML)){
        el.target.classList.add('add-favourite')
    
    favorites.push(title.querySelector('h2').innerHTML);
    console.log(favorites);
    }
    

    
    
})

logo.addEventListener('click', ()=>{
    mainSection.innerHTML=""
    getJson()
})
// function showInn(names){
//     body.insertAdjacentHTML('beforeend', `

//         <div class="overview" style="display: flex;gap: 30px; width: 600px;background: gray;padding: 20px;border-radius: 10px;position: absolute;right: 500px;top: 250px;">
//         <div>
//             <img src="" alt="">
//         </div>
//         <div style="display: flex;flex-direction:column;gap: 10px   ;">
//             <h1>${names.title}</h1>
//         <span>Overview</span>
//         <p>${names.overview}</p>

//         </div>
        
//     </div>

//         `)
    
// }




// fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.results);  // массив фильмов
//     });