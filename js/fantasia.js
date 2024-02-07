function criarProduto(nome, imagemSrc, descricao, preco) {
    var container = document.createElement("div");
    container.classList.add("container");

    var produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");

    var imagemDiv = document.createElement("div");
    imagemDiv.classList.add("imagem");

    var imagemProduto = document.createElement("img");
    imagemProduto.classList.add("imagem-produto");
    imagemProduto.src = imagemSrc;
    imagemProduto.alt = descricao;

    var informacoesDiv = document.createElement("div");
    informacoesDiv.classList.add("informacoes");

    var nomeProduto = document.createElement("div");
    nomeProduto.classList.add("nome-produto");
    nomeProduto.textContent = nome;

    var detalhesDiv = document.createElement("div");
    detalhesDiv.classList.add("detalhes");

    var precoParagrafo = document.createElement("p");
    precoParagrafo.textContent = "Preço: R$ " + preco;

    var link = document.createElement("a");
    link.href = "";

    var botao = document.createElement("button");
    botao.textContent = "Comprar";

    link.appendChild(botao);
    detalhesDiv.appendChild(precoParagrafo);
    detalhesDiv.appendChild(link);
    informacoesDiv.appendChild(nomeProduto);
    informacoesDiv.appendChild(detalhesDiv);
    imagemDiv.appendChild(imagemProduto);
    produtoDiv.appendChild(imagemDiv);
    produtoDiv.appendChild(informacoesDiv);
    container.appendChild(produtoDiv);

    return container;
}

var produtosContainer = document.getElementById("produtosContainer");

var novoProduto = criarProduto(
    "A Chave do Universo",
    "Imagens/livro-chave-universo.jpg",
    "A Chave do Universo",
    "79,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Fairies",
    "Imagens/livro-fairies.jpg",
    "Fairies",
    "79,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Odyssey",
    "Imagens/livro-odyssey.png",
    "Odyssey",
    "55,00"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "O Pergaminho Mágico",
    "Imagens/livro-petgaminho-magico.jpg",
    "O Pergaminho Mágico",
    "49,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "O Reino das Sombras",
    "Imagens/livro-reino-sombras.jpg",
    "O Reino das Sombras",
    "59,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Year 3000",
    "Imagens/livro-year-3000.png",
    "Year 3000",
    "39,99"
);
produtosContainer.appendChild(novoProduto);