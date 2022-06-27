//------------------open side bar-----------------
$(".navList").hide();
let navWidth=$(".navBar").outerWidth();
$(".sideBar").css("left",`-${navWidth}px`)
$(".openIcon").click( function(){
    
    
  
   
    let leftout=$(".sideBar").css("left")

    if(leftout=="0px"){
     
        $(".sideBar").animate({left:`-${navWidth}px`},2000);
        $(".navList").hide(1000);
    }
   
    else{
      
    
        $(".sideBar").animate({left:`0px`},1500,function(){
            $(".navList").slideDown(1500);
        });
        
    }
})


//-----------------------------
let Url = "https://api.themoviedb.org/3/movie/now_playing?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1"
getMovies(Url);

//-------------search---------------------------------------
let searchInput = document.getElementById("search")
searchInput.addEventListener("keyup", function () {
    let searchMovie = searchInput.value
    if (searchMovie == "") {
        getMovies("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1fiDKiRvvLKPbSCeO_QM8S9LOOuHUh7-m59AfZVeO8hSltHsTC3wYYQYo")

    }
    else {
        console.log(searchMovie)
        Url = `https://api.themoviedb.org/3/search/movie?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1&include_adult=false&query=${searchMovie}`
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        getMovies(Url)
    }
})
//---------------search by word----------------------------
let searchByword=document.getElementById("searchByWord")
document.getElementById("moviesSide").innerHTML="helllo";

searchByword.addEventListener("keyup",async function(){
   

    let searchMovie=searchByword.value;
  let respon = await fetch(Url)
    let data = await respon.json()
    let movies = data.results;
    let temp="";
    console.log(searchMovie)
    for (let index = 0; index < movies.length; index++) {
        const element = movies[index];
        
        if (element.title?element.title:element.name.search(searchMovie)>0){
           
            temp += `<div class="movieItem col-md-3 m-4 position-relative">
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movieImge w-100" alt="">
       <div class="layer  text-white text-center pt-4 position-absolute">
       <h3 class="title mb-1">${element.name == undefined ? element.title : element.name}</h3>
        <p class="description my-1">${element.overview}</p>
       <p class="rate my-2">rate: ${element.vote_average}</p>
       <p class="releaseDate">${element.first_air_date == undefined ? element.release_date : element.first_air_date}</p>
       </div>
        </div>`
        }
        else{
            console.log("iam in if stat")
            temp = " No result"
        }
        
    }
    
    document.getElementById("moviesSide").innerHTML =temp

})



//------------nav list clicked------------------------
$('.navlink').click(function (event) {
    event.preventDefault();
    ;
});
$('#searchByWord').click(function (event) {
    event.preventDefault();
    ;
});

$("#Now-Playing").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    Url = " https://api.themoviedb.org/3/movie/now_playing?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1"
    getMovies()

})
$("#popular").click(function () {
    Url = " https://api.themoviedb.org/3/movie/popular?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1"
    getMovies()

    $('html, body').animate({
        scrollTop: 0
    }, 500);
})
$("#Top-Rated").click(function () {
    Url = " https://api.themoviedb.org/3/movie/top_rated?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1"
    getMovies()
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})
$("#UpComing").click(function () {

    Url = " https://api.themoviedb.org/3/movie/upcoming?api_key=73e844aa9e87aff3eda304558b2f7ce1&language=en-US&page=1"
    getMovies()
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})
$("#Trending").click(function () {
    Url = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1fiDKiRvvLKPbSCeO_QM8S9LOOuHUh7-m59AfZVeO8hSltHsTC3wYYQYo"
    getMovies()
    $('html, body').animate({
        scrollTop: 0
    }, 500);

})
$("#ContactUs").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
})

//------------side bar ------------------------------------
/*$(".nav-list").slideUp()
let sideWidth=$(".navBar").width();
console.log(sideWidth)
$(".navBar").css(`width`,`0px`)
$(".openIcon").click(function(){
   $(".nav-list").slideDown(2000);
  });
*/
//---------------------contact partation-------------------------
//---------------------------get user info ----------------------------------------------------
let userName = document.querySelector("#Name");
let userEmail = document.querySelector("#E-mail");

let userphone = document.querySelector("#phone");
let userAge = document.querySelector("#Age");
let userpassword = document.querySelector("#password");
let userREpassword = document.querySelector("#re-password");

//----------------------------- contact validation------------------------------------
userName.addEventListener("keyup", function () {

    validName();
})
userEmail.addEventListener("keyup", function () {

    validMail();
})
userphone.addEventListener("keyup", function () {

    validPhone();
})
userAge.addEventListener("keyup", function () {

    validAge();
})
userpassword.addEventListener("keyup", function () {

    validpass();
})
userREpassword.addEventListener("keyup", function () {

    validrepass();
})

//-------------------------getMovies()-------------------------------------------------------------  



async function getMovies() {
    let respon = await fetch(Url)


    let data = await respon.json()
    let movies = data.results
    console.log(data)
    let temp = ``;
    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
        temp += `<div class="movieItem col-md-3 m-4 position-relative">
     <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="movieImge w-100" alt="">
<div class="layer  text-white text-center pt-4 position-absolute">
<h3 class="title mb-1">${element.name == undefined ? element.title : element.name}</h3>
 <p class="description my-1">${element.overview}</p>
<p class="rate my-2">rate: ${element.vote_average}</p>
<p class="releaseDate">${element.first_air_date == undefined ? element.release_date : element.first_air_date}</p>
</div>
 </div>`


    }
    document.getElementById("moviesSide").innerHTML=temp;
   

}
//--------------validation functions----------------------------

function validName() {
    let reg = /^([a-zA-Z]{3,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;


    if (reg.test(userName.value)) {
        document.getElementById("nameError").innerHTML = ""

    }
    else {

        document.getElementById("nameError").innerHTML = "please enter correct name "


    }
} function validMail() {
    let reg = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (reg.test(userEmail.value)) {
        document.getElementById("mailError").innerHTML = ""

    }
    else {

        document.getElementById("mailError").innerHTML = "please enter correct name "


    }
} function validPhone() {
    let reg = /^01[0125][0-9]{8}$/;
    if (reg.test(userphone.value)) {
        document.getElementById("phoneError").innerHTML = ""

    }
    else {

        document.getElementById("phoneError").innerHTML = "please enter correct name "


    }
} function validAge() {
    let reg = /^(1[89]|[2-9]\d)$/;
    if (reg.test(userAge.value)) {
        document.getElementById("ageError").innerHTML = ""

    }
    else {

        document.getElementById("ageError").innerHTML = "please enter correct age 18-99 "


    }
} function validpass() {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(userpassword.value)) {
        document.getElementById("passError").innerHTML = ""

    }
    else {

        document.getElementById("passError").innerHTML = "please enter strong password 8 char ,1 lowercase,1 uppercase,1 number  "


    }
} function validrepass() {

    if (userpassword == userREpassword) {
        document.getElementById("rePassError").innerHTML = ""

    }
    else {

        document.getElementById("rePassError").innerHTML = "please enter the same password u entered "


    }
}