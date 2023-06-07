const parentContainer = document.querySelector('.ParentList')

document.addEventListener('click', function(e){
    const SubList = e.target.querySelector(".Sub-list")
    if(e.target.tagName === "LI")
    SubList.classList.toggle("hidden")
})

document.cookie = 'id = C-137; priority = high'

document.cookie = 'id = 0; name=WebTracker; priority=medium; secure=yes size=500'
