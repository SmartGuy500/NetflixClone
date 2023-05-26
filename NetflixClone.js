const parentContainer = document.querySelector('.ParentList')

document.addEventListener('click', function(e){
    const SubList = e.target.querySelector(".Sub-list")
    if(e.target.tagName === "LI")
    SubList.classList.toggle("hidden")
})

