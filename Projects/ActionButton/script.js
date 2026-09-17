

const tabs = document.querySelectorAll(".tab")

tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        tabs.forEach(function (item) {
            item.classList.remove("active")
        })
        tab.classList.add("active")
    })
})