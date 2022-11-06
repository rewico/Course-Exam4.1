const elUl = document.getElementById("list");

const render = (data) => {
  data.forEach((element) => {
    let elLi = document.createElement("li");

    elLi.classList = "card mx-2 my-3";
    elLi.style.width = "17rem";

    elLi.innerHTML = `
    <div>
      <img
        src="${element.image}"
        class="card-img-top"
        alt="${element.title}"
        height="200"
      />
      <div class="card-body">
        <h5 class="card-title" style="height:144px">${element.title}</h5>
        <p class="card-text desc">${element.description}</p>
        <p class="card-text"><span>Price: </span>${element.price}</p>
        <i class="material-symbols-rounded d-block text-end">delete</i>
      </div>
  </div>`;

    elUl.appendChild(elLi);
  });
};

(async () => {
  const RESPONSE = await fetch("https://fakestoreapi.com/products");
  const DATA = await RESPONSE.json();
  render(DATA);
})();
