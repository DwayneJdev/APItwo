let input = document.getElementById('input').value
let search = document.getElementById('btnSearch');
let output = document.querySelector('.output')

search.addEventListener('click', goodFetch)

let apiKey = "Zp6OCuyLxv4JnA5DMiK6F053mVAjcMBO";
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=20`
//   searchUrl.concat(input)
//let searchUrl= `${url}?&api_key=${apiKey}&rating=pg&q=dogs&limit=15`

 
function goodFetch(g) {
       g.preventDefault();
       
    fetch(url)
    .then(function (results) {
        console.log(results)
        return results.json();
    })
    .then(function (json) {
        console.log(json);
        
          displayGif(json);
    })
}

 let displayGif = (content) => {

     console.log(content)
     content.data.forEach(function(obj) {
         console.log(obj.images.downsize.url)
     })
    //  let outputs = document.createElement('img');
    //   outputs.src = content.data[0].images.downsized.url;
    //  output.appendChild(outputs)
    
 }

// function displayGif(json) {
//     console.log('displayGif', json)
//     console.log(json.data[])

// }
