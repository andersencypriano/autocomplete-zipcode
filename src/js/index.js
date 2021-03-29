import '../css/style.scss';

//Select element submit
const button = document.querySelector("button[type='submit']");

// Create class AutoAddress
class AutoAddress {
    constructor(fieldzip) {
        this.fieldzip = document.querySelector(fieldzip)
        this.getZipCode(this.fieldzip);
    }

    //Get value of input
    getZipCode(zipcode) {
        button.addEventListener("click", e => {
            e.preventDefault();
            const cep = zipcode.value;
            this.conn(cep);
        });
        createFields();
    };

    //Request fetch and return JSON
    conn(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url)
            .then(res => res.json())
            .then(resp => this.createFields(resp))
            .catch(error => {
                console.log(error.message);
            });
    };

    //Method from create containers input-field with params
    createFields(data) {
        console.log(data)
       const containerFields = document.querySelector("#fields");
       containerFields.innerHTML = `
       <input type="text" class="validate" value="${data.logradouro}">
       <input type="text" class="validate" value="${data.bairro}">
       <input type="text" class="validate" value="${data.localidade}">
       <input type="text" class="validate" value="${data.uf}">
       `
    };
}

//Instance class with params
const form1 = new AutoAddress('#cep');