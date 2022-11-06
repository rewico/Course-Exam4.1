const elUl = document.getElementById("list");

const render = (data) => {
  data.forEach((element) => {
    let elLi = document.createElement("li");

    elLi.className = "card mx-2 my-3";
    elLi.style.width = "17rem";
    elLi.dataset.id = element.id;

    elLi.innerHTML = `
    <div>
      <img
        src="${element.image}"
        class="card-img-top p-1"
        alt="${element.title}"
        height="200"
      />
      <div class="card-body">
        <h5 class="card-title mb-3">${element.title}</h5>
        <p class="card-text desc mb-2">${element.description}</p>
        <p class="card-text"><span>Price: </span>${element.price}$</p>
        <div class="d-flex justify-content-end">
          <i class="material-symbols-rounded">delete</i>
        </div>
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

const seperate = (evt) => {
  if (evt.target.matches("i")) {
    if (confirm("Are you sure to delete?")) {
      (async () => {
        try {
          const RESPONSE = await fetch(
            `https://fakestoreapi.com/products/${
              evt.target.closest("li").dataset.id
            }`,
            {
              method: "DELETE",
            }
          );
          const DATA = await RESPONSE.json();
          if (DATA) {
            evt.target.closest("li").remove();
            alert("Successfully deleted!");
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
};

elUl.addEventListener("click", seperate);
