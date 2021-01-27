async function request(cidade) {
    try {
        var response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cidade + '&appid=d4ee1a18806ab9ba3bc5d5c01d36f2c0');

        console.log(response.status);


        if(response.status === 200){
            const data = await response.json();
            const weather = data['weather'][0];
            const main = weather['main'];

            pegarMain(main);
            pegarGrausCovertido(data.main.temp - 273.15);
        }else if(response.status === 404){
            alert("Cidade não existe");
        }else if(response.status === 400){
            alert("Não foi possivel fazer a solicitação");
        }

    } catch (error) {
        alert(error);
    }
}





