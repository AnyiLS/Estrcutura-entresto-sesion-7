const handleShowCurrentBox = (box) => {
    document.querySelector(`.caja${box === 0 ? "" : box}`).style.display = "block"
}

const handleOptionCorrectShow = (className) =>
    document.querySelector(className).style.display = "block"

const handleChangeView = (number) =>
    window.location.href = `./index${number}.html`

const handleSaveCorrectQuestion = (number) => {
    const responses = JSON.parse(localStorage.getItem('responses'));

    if (!responses) {
        localStorage.setItem("responses", JSON.stringify([number]));
    } else {
        if(!responses.includes(number)) localStorage.setItem("responses", JSON.stringify([...responses, number]));
        
    }
}

const showBoxes = () => {
    const responses = JSON.parse(localStorage.getItem("responses"));

    if (responses) {
        responses.forEach((item) => {
            if (document.querySelector(`.caja${item - 1 === 0 ? "" : item - 1}`)) {
                document.querySelector(`.caja${item - 1 === 0 ? "" : item - 1}`)
                .style.display = "block";
            }
        })
    }
}

const handleCheckResults = () => {
    const responses = JSON.parse(localStorage.getItem("responses"))

    if (!responses) {
        localStorage.setItem("total", "0");
        window.location.href = "./index414.html"
    }
    else {
        localStorage.setItem("total", JSON.stringify(responses.length));

        if (responses.length > 8) window.location.href = "./index413.html"
        else window.location.href = "./index414.html"
    }
}