import '../css/style.scss';

//Select element submit
const button = document.querySelector("button[type='submit']");

// Create class AutoAddress
class AutoAddress {
    constructor(fieldzip, options) {
        this.fieldzip = document.getElementById(fieldzip);
        this.options = options;

        this.getZipCode(this.fieldzip);
    }

    //Get value of input
    getZipCode(zipcode) {
        button.addEventListener("click", e => {
            e.preventDefault();
            const cep = zipcode.value;
            this.conn(cep);
        });
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
        console.log(data);
    };
}

//Instance class with params
const form1 = new AutoAddress('cep', {
    campos: {
        cep: true,
        logadouro: true,
        bairro: true,
        localidade: true,
        uf: true,
        ibge: true,
        gia: true,
        ddd: true,
        siafi: true,
    }
});