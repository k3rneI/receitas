// Lista das receitas do site
var receitas = {
    lasanha: {
        nome: "Lasanha à bolonhesa",
        tempo: "60 minutos",
        dificuldade: "Média",
        imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["500 g de carne moída", "1 pacote de massa para lasanha", "1 molho de tomate", "300 g de queijo", "200 g de presunto", "1 cebola e 2 dentes de alho"],
        preparo: ["Refogue a cebola e o alho.", "Adicione a carne moída e deixe cozinhar.", "Coloque o molho de tomate e misture.", "Monte camadas de massa, molho, queijo e presunto.", "Leve ao forno por aproximadamente 30 minutos."]
    },
    panqueca: {
        nome: "Panquecas fofinhas",
        tempo: "20 minutos",
        dificuldade: "Fácil",
        imagem: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["1 xícara de farinha de trigo", "1 xícara de leite", "1 ovo", "1 colher de açúcar", "1 colher de fermento"],
        preparo: ["Misture todos os ingredientes em uma tigela.", "Aqueça uma frigideira untada.", "Coloque um pouco da massa na frigideira.", "Quando dourar, vire a panqueca.", "Repita o processo com o restante da massa."]
    },
    brigadeiro: {
        nome: "Brigadeiro tradicional",
        tempo: "25 minutos",
        dificuldade: "Fácil",
        imagem: "https://images.unsplash.com/photo-1548907040-4d42bfc2c14b?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["1 lata de leite condensado", "3 colheres de chocolate em pó", "1 colher de manteiga", "Chocolate granulado"],
        preparo: ["Coloque o leite condensado, o chocolate e a manteiga em uma panela.", "Misture em fogo baixo.", "Mexa até desgrudar do fundo da panela.", "Espere esfriar e faça pequenas bolinhas.", "Passe as bolinhas no chocolate granulado."]
    }
};

// Descobre qual receita foi escolhida
var parametros = new URLSearchParams(window.location.search);
var id = parametros.get("id");
var receita = receitas[id];

// Mostra os dados da receita na página
if (receita) {
    document.getElementById("detalhes").innerHTML = `
        <h1>${receita.nome}</h1>
        <p><strong>Tempo de preparo:</strong> ${receita.tempo}</p>
        <p><strong>Dificuldade:</strong> ${receita.dificuldade}</p>
        <img src="${receita.imagem}" alt="${receita.nome}">
        <h2>Ingredientes</h2>
        <ul>${receita.ingredientes.map(function(item) { return "<li>" + item + "</li>"; }).join("")}</ul>
        <h2>Modo de preparo</h2>
        <ol>${receita.preparo.map(function(item) { return "<li>" + item + "</li>"; }).join("")}</ol>
    `;
} else {
    document.getElementById("detalhes").innerHTML = "<h1>Receita não encontrada</h1>";
}

// Adiciona comentários na página
var formulario = document.getElementById("form-comentario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var comentario = document.getElementById("comentario").value;

    document.getElementById("comentarios").innerHTML += `
        <div class="card p-3 mb-2">
            <strong>${nome}</strong>
            <p class="mb-0">${comentario}</p>
        </div>
    `;

    formulario.reset();
});
