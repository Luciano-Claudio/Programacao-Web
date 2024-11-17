const cepInput = document.querySelector("input");
const searchBtn = document.querySelector("button");
const displayResult = document.querySelector(".result-container");

cepInput.addEventListener("input", () => {
    let cepValue = cepInput.value.replace(/\D/g, "");
    if (cepValue.length > 5) {
        cepValue = cepValue.slice(0, 5) + "-" + cepValue.slice(5, 8);
    }
    cepInput.value = cepValue;
});

searchBtn.addEventListener("click", () => {
    const cepQuery = cepInput.value.trim();

    if (cepQuery === "") {
        displayResult.innerHTML = "Por favor, preencha o campo!";
        displayResult.style.color = "red";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepQuery}/json/`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao realizar a requisição.");
            }
        })
        .then((cepData) => {
            if (cepData.erro) {
                displayResult.innerHTML = "CEP inválido ou não encontrado!";
                displayResult.style.color = "red";
            } else {
                displayResult.innerHTML = `
                    <p><strong>CEP:</strong> ${cepData.cep}</p>
                    <p><strong>Logradouro:</strong> ${cepData.logradouro || "Não informado"}</p>
                    <p><strong>Complemento:</strong> ${cepData.complemento || "Não informado"}</p>
                    <p><strong>Bairro:</strong> ${cepData.bairro || "Não informado"}</p>
                    <p><strong>Cidade:</strong> ${cepData.localidade || "Não informado"}</p>
                    <p><strong>Estado:</strong> ${cepData.uf || "Não informado"}</p>
                `;
                displayResult.style.color = "green";
            }
        })
        .catch((error) => {
            displayResult.innerHTML = "Erro ao buscar as informações do CEP!";
            displayResult.style.color = "red";
        });
});
