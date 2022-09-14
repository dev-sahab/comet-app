// // get elements
const searchbar = document.getElementById('pro-search');

if (searchbar) {
    searchbar.onkeyup = () => {
    
        // get element
        const filter = searchbar.value.toUpperCase();
        const products = document.getElementById("product-list");
        const list = products.querySelectorAll(".list");
    
        for (let i = 0; i < list.length; i++) {
            const title = list[i].querySelector(".upper > a");
            const txtVal = title.textContent || title.innerText;
    
            // if (txtVal.toUpperCase().indexOf(filter) > -1) {
            //     list[i].style.display = "";
            // } else {
            //     list[i].style.display = "none";
            // }
            
            if (txtVal.toUpperCase().includes(filter)) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            }
            console.log(txtVal.toUpperCase().includes(filter));
        }
    
    }
    
}

// product feature img
const pro_img_show = document.querySelector('.feature-img-show');
const pro_img_field = document.getElementById('feature_img_field');

if (pro_img_field) {
    
    pro_img_show.onclick = () => {
        pro_img_field.click();
    }

    pro_img_field.onchange = (e) => {
        const imgLink = URL.createObjectURL(e.target.files[0]);
        pro_img_show.src = imgLink
    }

}

// POPUP

// get elements
const popup = document.getElementById('popup');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const delete_btn = document.querySelectorAll('.btn-delete');

// open popup

delete_btn.forEach(item => {
    const conf_delete = item.nextElementSibling;
    item.onclick = (e) => {
        popup.classList.add('open-popup')
        // close popup
        no.onclick = () => {
            popup.classList.remove('open-popup')
        }
        // delete 
        yes.onclick = () => {
            conf_delete.click();
        }
    }
})



$('.cm-product-table').DataTable();


