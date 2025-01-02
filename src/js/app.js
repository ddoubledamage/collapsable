let collapsible = document.getElementsByClassName("collapse");

for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropDownContainer = this.nextElementSibling;
        if (dropDownContainer.classList.contains("visible")) {
            dropDownContainer.classList.remove("visible");
        } else {
            dropDownContainer.classList.add("visible");
        }
    })
}