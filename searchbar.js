const searchInput = document.querySelector("#search ")
console.log(searchInput)
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    const movies = document.querySelectorAll(".movie-container")
    movies.forEach(movie => {
        const title = movie.querySelector(".desc").textContent.toLowerCase()
        if (title.includes(value)) {
            movie.style.display = "block"
        } else {
            movie.style.display = "none"
        }
    })
})

const header = document.getElementById('header');
const images = ['https://www.starwarsnewsnet.com/wp-content/uploads/2021/11/FEAXvmoXEAoIWfE.jpg'
, 'https://pbs.twimg.com/media/E0KcbNcVEAIbSDT.jpg:large'
, 'https://pbs.twimg.com/media/EiV8RnBUMAAhZ0t?format=jpg&name=large'
,"https://media.comicbook.com/2015/11/banner-kylo-158585.jpg"]; // Array of image filenames
let index = 0;

header.style.transition = 'background-image 1s linear'; // Add a transition property to the header element

setInterval(() => {
  header.style.backgroundImage = ` url(${images[index]})`; // Set the background image

  index = (index + 1) % images.length; // Increment the index and wrap around to the beginning of the array
}, 5000); // Change the image every 5 seconds