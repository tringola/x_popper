/**
 * Created by tringola on 30/08/2022.
 */
function Accordion(target){

}

const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach(function(acc){acc.addEventListener("click", toggleAcc)} );

function toggleAcc() {
    // remove active class from all items exept the current item (this)
    accItems.forEach(function(item){item !== this ? item.classList.remove("accordion__item--active") : null});


    // toggle active class on current item
    if (!this.classList.contains("accordion__item--active")) {
        this.classList.toggle("accordion__item--active");
    }
}