const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

const loader = document.querySelector(".loader");


$('.loader').hide();

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    $('.loader').show();
    promise
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            $('.loader').hide();
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.className = "doggo-image"
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}

document.querySelector(".add-doggos").addEventListener("click", addNewDoggo);