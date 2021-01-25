const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const fetchURL = "https://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json";
const imgURL = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

const fetchData = (cb) => {
    fetch(fetchURL, requestOptions)
        .then(response => response.text())
        .then(result => cb(result))
        .catch(error => console.log('error', error));
};

const renderData = (valuesArray) => {
    valuesArray = JSON.parse(valuesArray);
    valuesArray = Object.values(valuesArray.data);
    for (let i of valuesArray) {
        var card = document.createElement("DIV");
        card.innerHTML = "<div class='card' id='card'><img src =" + imgURL + i.id + '_0.jpg' + " alt = 'LOL hero' class= 'cardImg' /><div class='cardText flex'><b class='cardTextTitle' id='name'>" + i.name + "</b><p class='' id='description'>" + i.blurb + "</p><button class='btn cardBtn' onclick='openModal(`" + i.id + "`, `" + i.title + "`, `" + i.blurb + "`, `" + i.tags + "`)'>Saber Más</button></div></div>"
        document.getElementById('cardMap').append(card);
    }
};

const openModal = (name, title, text, tags) => {
    var modal = document.createElement("DIV");
    modal.innerHTML = "<div class='modal flex' id='tempModal'><img class='modalImg' src=" + imgURL + name + "_0.jpg alt='LOL hero'><span onclick='closeModal()' class='modalCloseIcon'>&#10006;</span><div class='modalText flex'><div><b class='modalTextTitle'>" + name + "</b><p class='modalTextSubtitle'> " + title + " </p></div><p class=''>" + text + "</p><b>Tags:</b><p>" + tags + " </p><button class='btn cardBtn modalBtn'>Juega ahora</button></div></div>"
    document.getElementById('modal').append(modal);
};

const closeModal = () => {
    document.getElementById('tempModal').remove();
};

