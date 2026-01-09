document.getElementById("scroll").addEventListener("click", function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
    });
});

let posts = [];
let currentIndex = 0;

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await response.json();
        showCard(currentIndex);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function showCard(index) {
    const container = document.getElementById("card-container");

    const post = posts[index];
    container.innerHTML = `
        <div class="card">
            <h5>Post ID: ${post.id}</h5>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % posts.length;
    showCard(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + posts.length) % posts.length;
    showCard(currentIndex);
});

fetchData();
