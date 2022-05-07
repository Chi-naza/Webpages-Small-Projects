const changeElement = (c) => document.querySelector(c);


changeElement(".open").addEventListener("click", () => {
     changeElement(".nav-list").classList.add("active")
});


changeElement(".close").addEventListener("click", () => {
    changeElement(".nav-list").classList.remove("active")
});

