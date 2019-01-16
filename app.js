document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault()
    let x = document.getElementById("input").value;
    console.log(x);
    let reqBody = {
        input: x,
        length: x.length
    }
    console.log(reqBody);
    // axios.post("/input", {
    //     input: x,
    //     length: 10
    // })
    fetch('/api/input', {
        method: "POST",
        header: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: x
    })
    .then(function(response) {
        console.log(response);
    })
    .catch( function (error) {
        console.log(error);
    });
});