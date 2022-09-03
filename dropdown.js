/**
 * Created by tringola on 30/08/2022.
 */
//create popper instance
function PopupInstance(starter,template,type, event) {
    var self = this;
    self.type = type;
    this.popup = document.createElement("DIV");
    this.popup.innerHTML = template.innerHTML;
    this.popup.setAttribute('role', 'dropdown');
    this.popup.classList.add('tooltip');
    this.popup.style.display ="none";
    //this.popup.setAttribute("show-popper", "");
    document.body.appendChild(self.popup);
    this.popperInstance = false;
    this.starter =starter;
    document.addEventListener("click",function(e){
        if(e.target===starter){
            self.togglePopper();
        }
        else if(e.target!==starter && e.target!==self.popup){
            self.hidePopper();
        }

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

    self.popup.setAttribute("show-popper", "");

    self.popup.style.display ="inline-block";
var modifier = {};
var placement="";

    if(self.type==='dropdown'){
        placement = "bottom";
        modifiers = {
            offset:  {
                enable:true,
                    offset: '0,8'
            }
        };
    }
    else if(self.type==='tooltip'){
        placement = "top";
            modifiers= {

                offset:  {
                    enable:true,
                    offset: '0,8'
                }
            }
    }

    else if(self.type==='popup'){
        placement = "auto";
            modifiers= {
                offset:  {
                    enable:true,
                    offset: '0,8'
                },
                flip:{
                    behavior:[ "left", "right","top", "bottom"]
                }
            }
    }

    self.popperInstance = new Popper(self.starter, self.popup, {
        placement: placement, //preferred placement of popper
        modifiers
    });

};

//hide and destroy popper instance
PopupInstance.prototype.hidePopper = function( ) {
    "use strict";
    var self =this;
    self.popup.removeAttribute("show-popper");
    self.popup.style.display ="none";

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