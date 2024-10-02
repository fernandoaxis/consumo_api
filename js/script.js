//1 - Instalação
console.log(axios);

//2 - Primeiro Request
const getData = async () => {
    try {
        // Fazendo a requisição para a API
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("Dados da API:", response.data); // Verificar no console se os dados estão corretos
        return response.data; // Retornar os dados da API
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        return []; // Retornar um array vazio em caso de erro
    }
};

//3 - Imprimindo dados da API
const printData = async () => {
    const container = document.querySelector("#user-container"); // Seleciona o container

    if (!container) { // Verificar se o container existe no DOM
        console.error("Elemento #user-container não encontrado.");
        return;
    }

    const data = await getData(); // Obter os dados da API

    data.forEach((user) => { // Iterar sobre os dados e criar elementos para cada item
        const div = document.createElement("div"); // Cria um div para cada usuário
        const nameElement = document.createElement("h2"); // Cria um h2 para o nome

        nameElement.textContent = `Name: ${user.name}`; // Atribui o nome do usuário
        div.appendChild(nameElement); // Adiciona o h2 ao div

        const emailElement = document.createElement("p"); // Cria um parágrafo para o email
        emailElement.textContent = `Email: ${user.email}`; // Atribui o email do usuário
        div.appendChild(emailElement); // Adiciona o parágrafo ao div

        container.appendChild(div); // Adiciona o div ao container
    });
}

// Chama a função para exibir os dados no container
printData();