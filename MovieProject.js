const container = document.querySelector('.container')
const input = document.querySelector('.input')
const form = document.querySelector('.form')

const fetchData = ()=>{ 

     form.addEventListener('submit', async (e) => {
          e.preventDefault()
          let searchParam = input.value
          container.innerHTML = ''
          try{

           const response = await fetch(`http://www.omdbapi.com/?apikey=946d1af&s=${searchParam}`)
           const data = await response.json()
           console.log(data)
          
          
               data.Search.forEach((movie) => {
               console.log(movie)
               const card = document.createElement('div')
               card.classList.add('card')
               card.innerHTML = `
               <div class = "image"><img src="${movie.Poster}"/></div>
               <h2>Title: ${movie.Title} </h2>
               <p>Released: ${movie.Year} </p> 
               `
               container.appendChild(card)
             })}
          
          catch (error){
           console.log(error)
          }   
     })

     
}

fetchData()
