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

var produtosContainer = document.getElementById("produtosContainer" );

var novoProduto = criarProduto(
    "A Chave do Universo",
    "Imagens/livro-chave-universo.jpg",
    "A Chave do Universo",
    "79,90"
);
produtosContainer.appendChild(novoProduto);


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
    "A Princesa do Shodo",
    "Imagens/livro-yukihiro-mizuki.png",
    "A Princesa do Shodo",
    "37,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Cantares da Alma",
    "Imagens/livro-cantares.jpg",
    "SCantares da Alma",
    "49,90"
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
    "Codido X",
    "Imagens/livro-codx.jpg",
    "Codido X",
    "29,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Cosmic Guardians",
    "Imagens/livro-cosmic-guardians.jpg",
    "Cosmic Guardians",
    "42,90"
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
    "Ecos do Silêncio",
    "Imagens/livro-ecos-silencio.jpg",
    "Ecos do Silêncio",
    "54,99"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Etermia",
    "Imagens/livro-etermia.jpg",
    "Etermia",
    "37,90"
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
    "Forsaken",
    "Imagens/livro-forsaken.jpg",
    "Forsaken",
    "37,90"
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
    "Isis Amara",
    "Imagens/livro-isis-amara.png",
    "Isis Amara",
    "99,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Luccas Silva",
    "Imagens/livro-luccas-silva.png",
    "Luccas Silva",
    "56,99"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Nocturne",
    "Imagens/livro-nocturne.jpg",
    "Nocturne",
    "37,90"
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
    "POWER",
    "Imagens/livro-power.jpg",
    "POWER",
    "37,90"
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
    "Reflexos da Aurora",
    "Imagens/livro-reflexos-aurora.jpg",
    "Reflexos da Aurora",
    "20,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Samuel Martel",
    "Imagens/livro-samuel-martel.png",
    "Samuel Martel",
    "49,90"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Segredos do Passado",
    "Imagens/livro-segredos-passado.jpg",
    "Segredos do Passado",
    "42,50"
);
produtosContainer.appendChild(novoProduto);

var novoProduto = criarProduto(
    "Sussurros do Crepúsculo",
    "Imagens/livro-sussurros.jpg",
    "sussurros do Crepusculo",
    "37,90"
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

var novoProduto = criarProduto(
    "Year 3000",
    "Imagens/livro-year-3000.png",
    "Year 3000",
    "39,99"
);
produtosContainer.appendChild(novoProduto);