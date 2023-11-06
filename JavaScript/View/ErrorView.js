"use strict";
//Start

function errorView(){
    app.innerHTML = /*HTML*/`
    <div id="errorView">
    <h1>En feil har oppstått.</h1>
    <h3>Ønsker å meddele at feilen kunne ha oppstått på grunn av noe som ikke ble lagt inn på rett måte.</h3>
    <h3>Her er en liste over hva som vanligvis er feil:</h3>
    <ul>
        <li>Nettstedet kan ha håndtert en verdi eller string feil.</li>
        <li>Noe har ikke blitt definert (null eller undefined).</li>
        <li>Kunne ikke finne quizen du så etter.</li>
        <li>Linken som ble lagt inn fungerer ikke.</li>
        <li>Noen gikk over streken og lagde en side for noe som egentlig ikke er nødvendig. <-- Gi skylden til The Snake</li>
    </ul>
    </div>
    <h3>Om du ønsker mer detaljert informasjon om hvor det gikk feil:<h3>
    <ol>
    <li>Gå til console (hold ctrl+shift+i).</li>
    <li>Du vil nå få en ny boks til høyre.</li>
    <li>Klikk på console.</li>
    </ol>
    `;
}

//End