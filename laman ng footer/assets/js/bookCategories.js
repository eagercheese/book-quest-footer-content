const books = document.querySelectorAll(".category-books");

books.forEach((a) => {
    a.addEventListener("mouseenter", () => {
        const img = a.querySelector(".category-books-img");
        a.style.transitionDuration = "0.3s"
        a.style.transform = "scale(1.1)"
    })

    a.addEventListener("mouseleave", () => {
        const img = a.querySelector(".category-books-img");
        a.style.transform = "scale(1)"
    })
})