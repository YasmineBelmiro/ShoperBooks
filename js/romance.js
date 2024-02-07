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
    "Amor Eterno",
    "Imagens/livro-amor-eterno.jpg",
    "Amor Eterno",
    "31,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Amor Inesperado",
    "Imagens/livro-amor-inesperado.png",
    "Amor Inesperado",
    "29,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Destinos Cruzados",
    "Imagens/livro-destinos-cruzados.jpg",
    "Destinos Cruzados",
    "79,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Intertwined Hearts",
    "Imagens/livro-coracoes-entrelacados.jpg",
    "Intertwined Hearts",
    "23,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Paixão Noturna",
    "Imagens/livro-paixao-noturna.png",
    "Paixão Noturna",
    "33,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Segredos do Passado",
    "Imagens/livro-segredos-passado.jpg",
    "Segredos do Passado",
    "42,50"
);
produtosContainer.appendChild(novoProduto);