async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json()
        console.log(data);
        document.getElementById('rua').innerHTML = data.logradouro;
        document.getElementById('bairro').innerHTML = data.bairro;
        document.getElementById('uf').innerHTML = data.uf;
    }catch(error){
        alert(error.message);
    }
}

async function getPrevisao(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain`);
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = `<div>Previsão do tempo de acordo com a região: ${data.hourly.temperature_2m[0]}</div>`;
    }catch(error){
        alert(error.message);
    }
}