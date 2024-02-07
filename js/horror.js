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
    "A Mansão",
    "Imagens/livro-a-mansao.jpg",
    "A Mansão",
    "79,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "A Marca",
    "Imagens/livro-a-marca.jpg",
    "A Marca",
    "90,00"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Cemitério",
    "Imagens/livro-cemiterio.jpg",
    "Cemitério",
    "29,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Vamp",
    "Imagens/livro-vamp.jpg",
    "Vamp",
    "58,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "The Mistery of the Hospital",
    "Imagens/livro-mistery-hospital.jpg",
    "The Mistery of the Hospital",
    "89,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "The Neighbor",
    "Imagens/livro-the-neighbor.jpg",
    "The Neighbor",
    "42,50"
);
produtosContainer.appendChild(novoProduto);