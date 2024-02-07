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
    "Cantares da Alma",
    "Imagens/livro-cantares.jpg",
    "SCantares da Alma",
    "49,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Ecos do Silêncio",
    "Imagens/livro-ecos-silencio.jpg",
    "Ecos do Silêncio",
    "54,99"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Reflexos da Aurora",
    "Imagens/livro-reflexos-aurora.jpg",
    "Reflexos da Aurora",
    "20,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Sussurros do Crepúsculo",
    "Imagens/livro-sussurros.jpg",
    "sussurros do Crepusculo",
    "37,90"
);
produtosContainer.appendChild(novoProduto);

