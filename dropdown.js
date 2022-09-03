/**
 * Created by tringola on 30/08/2022.
 */
//create popper instance
function PopupInstance(starter,template,popupArrow) {
    var self = this;
    this.popup = document.createElement("DIV");
    this.popup.innerHTML = template.innerHTML;
    this.popup.setAttribute('role', 'dropdown');
    this.popup.classList.add('tooltip');
    this.popup.style.display ="none";
    //this.popup.setAttribute("show-popper", "");
    this.popupArrow = popupArrow;
    document.body.appendChild(self.popup);
    this.popperInstance = false;
    this.starter =starter;
    starter.addEventListener("click",function(){
        self.togglePopper();
    })
}

//destroy popper instance
PopupInstance.prototype.destroyInstance = function() {
    "use strict";
    var self =this;
    if (self.popperInstance) {
        self.popperInstance.destroy();
        self.popperInstance = null;
    }
};

//show and create popper
PopupInstance.prototype.showPopper = function() {
    "use strict";
    var self =this;
    if(self.popupArrow!==undefined){
        self.popupArrow.setAttribute("data-popper-arrow", "");
    }
    self.popup.setAttribute("show-popper", "");

    self.popup.style.display ="inline-block";
    self.popperInstance = new Popper(self.starter, self.popup, {
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
};

//hide and destroy popper instance
PopupInstance.prototype.hidePopper = function( ) {
    "use strict";
    var self =this;
    self.popup.removeAttribute("show-popper");
    self.popup.style.display ="none";
    if(self.popupArrow!==undefined){
        self.popupArrow.removeAttribute("data-popper-arrow");
    }
    self.destroyInstance();
};

//toggle show-popper attribute on popper to hide or show it with CSS
PopupInstance.prototype.togglePopper = function() {
    "use strict";
    var self =this;
    if (self.popup.hasAttribute("show-popper")) {
        self.hidePopper();
    } else {
        self.showPopper();
    }
};
//execute togglePopper function when clicking the popper reference/button
/* popperButton.addEventListener("click", function (e) {
 e.preventDefault();
 togglePopper();
 });*/