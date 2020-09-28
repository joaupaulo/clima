
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
    
    
    }



