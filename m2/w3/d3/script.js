var mioOggetto = {}

/*axios.get('https://dummyjson.com/products/1').then(function(response){
   console.table(response.data);
   console.log(response);
}).catch(function(error){
    console.log(error)
});*/

//stampa 
axios.get('https://dummyjson.com/products/1').then(function(response){
   console.table(response.data);
   
   document.getElementById("id").innerText = response.data.id;
   document.getElementById("title").innerText = response.data.title;
   document.getElementById("description").innerText = response.data.description;
   document.getElementById("price").innerText = response.data.price;

   console.log(response);
}).catch(function(error){
    console.log(error)
});



axios.post('https://dummyjson.com/products/', {title:'Pixel 7 Pro', brand: 'Google'}).then(function(response){
    console.table(response.data);
    console.log(response);
}).catch(function(error){
    console.log(error)
});

axios.put('https://dummyjson.com/products/1', {title:'Iphone 13'}).then(function(response){
    console.table(response.data);
    console.log(response);
});
//////////////////



  var timer = document.getElementById('timer');

  window.addEventListener('DOMContentLoaded',function(){
    orologio();
  });

  function orologio() {
    var secondi = sessionStorage.getItem('secondi') || 0;
    intervallo = setInterval(function(){
        timer.innerHTML = `Tempo: ${secondi} secondi`;
        secondi++
        sessionStorage.setItem('secondi', secondi);
    },1000)
  }