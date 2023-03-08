const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rigby%2C%20Idaho?unitGroup=us&key=UWNXDNPLF8SD5EJW4E45VAM34&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp

}