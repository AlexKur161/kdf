// function accordion (){

// }
const accordionWrap = document.querySelectorAll('.accordion')
const btnOpen = document.querySelectorAll('.accordion_open')

btnOpen.forEach(onAccClick);

function onAccClick(item) {
    item.addEventListener("click", function() {
        let curBtn = item;
        let accId = curBtn.getAttribute("data-acc");
        let currentAcc = document.querySelector(accId);

        
    
            accordionWrap.forEach(function(item) {
                item.classList.remove('active');
            });
            console.log(item)
            console.log(currentAcc)
            console.log(item === currentAcc)
            currentAcc.classList.toggle('active_acc');
        
    });
}