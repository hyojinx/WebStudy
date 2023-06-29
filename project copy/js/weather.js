const weather = $('#weather span').first();
const city = $('#weather span').last();
const API_KEY='55bc30618850b501ff1f35127689562c';

navigator.geolocation.getCurrentPosition(geoOk,geoErr);
function geoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data);
        let todayWeather=data.weather[0].main;
        let weimg='sunny.jpg';
        if(todayWeather=='Clouds'){
            weimg='cloud1.jpg';
        }
        else if(todayWeather=='Rain'){
            weimg='rainny.jpg';
        }
        $('#weather').prepend(`<img src="img/${weimg}" alt="weather" style="width:30px;height:30px;">`);
        city.text(data.name);
        weather.text(`${data.weather[0].main}/${data.main.temp}℃`);
    });

}
function geoErr(){
    alert("can't find you.NO weather info");
}