console.log('welcome to find weather.com');
let weather={
    apiKey:"30055f291e452324def60af427063dc8",
    fetchWeather:function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=30055f291e452324def60af427063dc8 ")
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        console.log("display weather finction working");
                const { name} = data;
                const {icon , description}= data.weather[0];
                const { temp , humidity }= data.main;
                const { speed}= data.wind;
                console.log(name,description,speed,temp);
                document.querySelector(".city").innerText="Weather in "+ name;
                document.querySelector(".temp").innerText= temp+"°C";
                document.querySelector(".humidity").innerText="Humidity:"+humidity;
                document.querySelector(".wind").innerText="Air Speed:"+ speed +"Km/h";
                document.querySelector(".description").innerText= description;
                document.querySelector(".icon").src="https://api.openweathermap.org/img/wn/"+ icon +".png";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click" ,function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup" , function(event) {
    if(event.key=="Enter"){
    weather.search();
}
})