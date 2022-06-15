const runSignUp = () => {
    const form = document.getElementById("main-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(e.values); // {name: "Andrii", email: "mmm@g.com"}
    });
}

whenDomReady(runSignUp);