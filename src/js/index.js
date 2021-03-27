import '../css/style.scss';

const button = document.querySelector("button[type='submit']");

class AutoAddress {
    constructor (fieldzip) {
        this.fieldzip = document.getElementById(fieldzip);
        this.getZipCode ();
    }

    getZipCode () {
        button.addEventListener("click", e => {
            e.preventDefault();
            const cep = this.fieldzip.value;
            this.conn(cep);
        });
    } 
    conn (cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url)
        .then(res => res.json())
        .then(resp => console.log(resp))
    }
}


const formulario = new AutoAddress('cep');



