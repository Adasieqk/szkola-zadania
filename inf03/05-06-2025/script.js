const $ = (selector) => document.querySelector(selector);

$("#button").addEventListener("click", () => {
    const file = $("#file").files[0];
    const number = $("#number").value;
    const type = $("input[name='paper']:checked").value;

    if (!file || !number) return alert("Prześlij plik i liczbę kopii!");

    const price = number * ((type === "błyszczący") ? 1.5 : 2);

    const img = document.createElement("img");
    img.src = file.name;
    const p1 = document.createElement("p");
    p1.textContent = `Liczba kopii: ${number}`;
    const p2 = document.createElement("p");
    p2.textContent = `Cena: ${price}`;

    $("#cart").appendChild(img);
    $("#cart").appendChild(p1);
    $("#cart").appendChild(p2);
})