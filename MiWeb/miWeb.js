let buttons = {
    es: document.querySelector('#es'),
    cat: document.querySelector('#cat'),
    en: document.querySelector('#en')
}

let content = document.querySelectorAll('.trans')

// Comprova si hi ha un idioma guardat al localStorage i canvia l'idioma
if (localStorage.getItem("idiomas")) {
    if (localStorage.getItem("idiomas") == "es") setLanguage("es")
    else if (localStorage.getItem("idiomas") == "en") setLanguage("en")
} else localStorage.setItem("idiomas", "cat")

// Canvia l'idioma al clicar un botó
es.addEventListener("click", () => {
    setLanguage("es")
})
cat.addEventListener("click", () => {
    setLanguage("cat")
})
en.addEventListener("click", () => {
    setLanguage("en")
})

// Funció que canvia l'idioma
function setLanguage(idiomas) {
    // Canvio els textos de la pàgina
    for (let i = 0; i < content.length; i++) {
        content[i].textContent = copy[idiomas][i]
    }
    // Recorro l'objecte que guarda els buttons per afegir/treure la classe "active"
    for (const key in buttons) {
        if (key == idiomas) buttons[key].classList.add("active") // buttons.cat <--> buttons["cat"]
        else buttons[key].classList.remove("active")
    }

    // Guardo l'idioma actual
    localStorage.setItem("idiomas", idiomas)
}

let tema = document.querySelector('#tema')

// Comprovo si al local storage hi ha un tema guardat
if(localStorage.getItem("tema")) {
    if (localStorage.getItem("tema") == "dark") setTema("dark")
} else localStorage.setItem("tema", "light")

// Canvio el tema al clicar el botó
tema.addEventListener("click", () => {
    if (localStorage.getItem("tema") == "light") setTema("dark")
    else setTema("light")
})

// Funció que canvia el tema
function setTema(newTema) {
    if (newTema == "dark") {
        document.querySelector("link[rel='stylesheet']").href = "dark.css"
        tema.innerText = "🌞"
        console.log("holaaaaa");
        
        localStorage.setItem("tema", "dark")
    } else {
        document.querySelector("link[rel='stylesheet']").href = "light.css"
        tema.innerText = "🌚"
        localStorage.setItem("tema", "light")
    }
}