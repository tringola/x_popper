/**
 * Created by tringola on 30/08/2022.
 */
//create popper instance
function createInstance(starter,template,type) {
let create= {
    destroyInstance : function(popperInstance) {
        if (popperInstance) {
            popperInstance.destroy();
            popperInstance = null;
        }
    },
    showPopper : function(popperPopup) {
        popperPopup.setAttribute("show-popper", "");
        //popperArrow.setAttribute("data-popper-arrow", "");
        createInstance();
    },
    hidePopper : function(popperPopup) {
        popperPopup.removeAttribute("show-popper");
      //  popperArrow.removeAttribute("data-popper-arrow");
        create.destroyInstance();
    },
    togglePopper : function(popperPopup) {
        if (popperPopup.hasAttribute("show-popper")) {
            create.hidePopper();
        } else {
            create.showPopper();
        }
    }
};
    let popup = document.createElement("DIV");
    popup.innerHTML = template.innerHTML;
    popup.setAttribute('role', 'dropdown');
    popup.classList.add('tooltip');
    popup.style.display ="none";
    document.body.appendChild(popup);
    starter.addEventListener('click', function(){
        create.togglePopper(popup);
    });
    let popperInstance = new Popper(starter, popup, {
        placement: "auto", //preferred placement of popper
        modifiers: [
            {
                name: "offset", //offsets popper from the reference/button
                options: {
                    offset: [0, 8]
                }
            },
            {
                name: "flip", //flips popper with allowed placements
                options: {
                    allowedAutoPlacements: ["right", "left", "top", "bottom"],
                    rootBoundary: "viewport"
                }
            }
        ]
    });
}

//destroy popper instance
function destroyInstance() {
    if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
    }
}

//show and create popper
function showPopper() {
    popperPopup.setAttribute("show-popper", "");
    popperArrow.setAttribute("data-popper-arrow", "");
    createInstance();
}

//hide and destroy popper instance
function hidePopper() {
    popperPopup.removeAttribute("show-popper");
    popperArrow.removeAttribute("data-popper-arrow");
    destroyInstance();
}

//toggle show-popper attribute on popper to hide or show it with CSS
function togglePopper() {
    if (popperPopup.hasAttribute("show-popper")) {
        hidePopper();
    } else {
        showPopper();
    }
}
//execute togglePopper function when clicking the popper reference/button
/* popperButton.addEventListener("click", function (e) {
 e.preventDefault();
 togglePopper();
 });*/