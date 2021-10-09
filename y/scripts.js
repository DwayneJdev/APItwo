
let search = document.getElementById('btnSearch');
let output = document.querySelector('.output')

search.addEventListener('click', goodFetch)

let apiKey = "Zp6OCuyLxv4JnA5DMiK6F053mVAjcMBO";
let url = `https://api.giphy.com/v1/gifs/search`
 



 
function goodFetch(g) {
       g.preventDefault();
let input = document.getElementById('input').value.trim()
       let searchUrl= `${url}?&api_key=${apiKey}&rating=pg&q=${input}&limit=40`
    
       fetch(searchUrl)
    .then(function (results) {
        console.log(results)
        return results.json();
    })
    .then(function (json) {
        console.log(json);
        console.log(input)
          displayGif(json);
    })
}

 let displayGif = (content) => {
     while (output.firstChild) {
         output.removeChild(output.firstChild)
     }

     console.log(content)
     let gifs= content.data
     gifs.forEach(function(gif) {
         console.log(gif.images.fixed_width.url)
         let outputs = document.createElement('img');
       outputs.src = gif.images.fixed_width.url;
      output.appendChild(outputs)

        document.querySelector('#input').value=''
     })
    //  let outputs = document.createElement('img');
    //   outputs.src = content.data[0].images.downsized.url;
    //  output.appendChild(outputs)
    
 }

// function displayGif(json) {
//     console.log('displayGif', json)
//     console.log(json.data[])

// }
