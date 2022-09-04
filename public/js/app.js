// // get elements
const searchbar = document.getElementById('pro-search');

searchbar.onkeyup = () => {
    
    // get element
    const filter = searchbar.value.toUpperCase();
    const products = document.getElementById("product-list");
    const list = products.querySelectorAll(".list");

    for (let i = 0; i < list.length; i++) {
        const title = list[i].querySelector(".upper > a");
        const txtVal = title.textContent || title.innerText;

        if (txtVal.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }

}


