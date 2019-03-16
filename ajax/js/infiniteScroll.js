const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(element, index) => {
            let parName = document.createElement('p');
            let parID = document.createElement('p');
            let parURL = document.createElement('p');

            let start = document.createElement('p');
            let end = document.createElement('p');

            parName.innerText = `NAME: ${element.name}`;
            parID.innerText = `ID: ${element.id}`;
            parURL.innerText = `URL: ${element.website}`;
            start.innerText = index + '.............................'

            document.body.appendChild(divider);
            document.body.appendChild(parName);
            document.body.appendChild(parID);
            document.body.appendChild(parURL);


        });
    })
    .catch(error => console.log(error));

}

getData();

window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        getData();
    }
        
}