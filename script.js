document.addEventListener('DOMContentLoaded', ()=>{

    const URLapi = 'https://rickandmortyapi.com/api/episode';
    traerDatos();

    function traerDatos(){
        fetch(URLapi)
        .then(response => response.json())
        .then(data => {
           mostrarResultados(data.results);
           console.log(data.results);
            
        })
       
        .catch(error => {
            console.error("Error al buscar imágen:", error);
        });
       }
    

    let container = document.getElementById('contenedorEpi');
    const row = document.createElement('div');
    row.classList.add('row');
    
    function mostrarResultados(results){
        results.forEach(result => {
            let card = `
           <div class="col-md-4 mb-3">
               <div class="card h-100">
                   <div class="card-body" style="max-height: 250px">
                       <h5 class="card-title">${result.name}</h5>
                       <p class="card-text">${result.air_date}</p>
                       <p class="card-text">${result.episode}</p>
    
                   </div>
               </div>
           </div>
       `;
       row.innerHTML += card;
        });
       
    }
    container.appendChild(row);
    })