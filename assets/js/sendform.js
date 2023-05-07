export default class SendForm{
    constructor(forms, srcmail, thanks){
        this.forms = document.querySelectorAll(forms)
        this.mail = srcmail
        this.thanks =  document.querySelector(thanks)
    }
    send(){
        this.forms.forEach(send => {
            send.onsubmit = async (e) => {
            e.preventDefault();
            console.log(e)
            let response = await fetch(`${this.mail}`, {
            method: 'POST',
            body: new FormData(send)
            });
    
            try{
                let result = await response.json()
                e.target.reset();
                this.thanks.style.display = 'flex'
            }catch(err){
                console.log(err)
            }
            
            }
        })
    }
}