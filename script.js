
    const itens = document.getElementById("buscar");
    itens.addEventListener('keypress',buscarelemento);
    
    function buscarelemento(evt) {
        if(evt.keyCode == 13) {
    search(itens.value)
    
        }
    }
    
    
    function search(query) {
        fetch(`http://api.weatherstack.com/current?access_key=60f1f56fffb996b85dd246675797eb0c&query=${query}`).then( r => {
            return r.json();
        }).then(newhtml)
    
    
    }
    
    
    function newhtml(r) {
        console.log(r)
    let local = document.querySelector(".local");
    local.innerHTML = `<h3>${r.location.name},${r.location.region}</h3>`
    let umidade = document.querySelector(".umidade");
    umidade.innerHTML = `<h5> Umidade de ${r.current.humidity}%</h5>` ;
    let temperatura = document.querySelector(".temperatura");
    temperatura.innerHTML = `<h1> ${r.current.temperature}°c </h1>`;
    let data = document.querySelector(".data");
    data.innerHTML  =  `<h3> ${r.current.observation_time}</h3>`
    let img = document.querySelector(".ico")
    img.innerHTML = `<img src=${r.current.weather_icons}></img>`
    
}



