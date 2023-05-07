export default class Popup{
    constructor(btn = [], window, close){
        this.btn = document.querySelectorAll(btn)
        this.window = document.querySelectorAll(window)
        this.close = document.querySelectorAll(close)
    }
    closePopap(){
        this.close.forEach(closebtn => {
            closebtn.addEventListener('click', () => {
                this.window.forEach(windowClose => {
                    windowClose.style.display = 'none'
                })
                
            })
        })
        
    }
    show(){
        this.btn.forEach(showbtn => {
            showbtn.addEventListener('click', () => {
                this.window.forEach(windowShow => {
                    windowShow.style.display = 'flex'
                })
            })
        })
        
        this.closePopap()
    }
}