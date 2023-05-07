export default function scroll(){
    window.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('.move-center')
    anchors.forEach( anchor =>{
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
        })
    })
    })
})
}