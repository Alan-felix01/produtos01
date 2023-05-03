class Produto{
    constructor(nome,dataC,preco,descriçao){
    this.nome = nome ,
    this.dataC =dataC ,
    this.preco = preco ,
    this.descriçao =descriçao
    }
    mostrarDados() {
    return this.nome +" "+this.dataC+" "+this.preco+" "+this.descriçao
    }
}
 
class Destaques extends Produto{
    constructor(nome,dataC,preco,descriçao,imgDestaque){
    super(nome,dataC,preco,descriçao,imgDestaque);
    this.imgDestaque = imgDestaque;
    }
DestacarPr(){
    let Destaques = document.createElement("div");
    Destaques.className = "col-xl-2 zoom m-3"
    Destaques.id ="a";
    let image = document.createElement("img");
    image.className ="img-fluid";
    image.src = this.imgDestaque;
    image.alt = this.nome;
    let nome =document.createElement("h2");
    nome.textContent = this.nome;
    let descriçao = document.createElement("p");
    descriçao.textContent = this.descriçao;
    Destaques.appendChild(image);
    Destaques.appendChild(nome);
    Destaques.appendChild(descriçao);
    document.getElementById("listaDeProduto").appendChild(Destaques);
}
}
let produto01 = new Destaques("creatina da growth","15-01-2006","monohidratada","https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-monohidratada-250g-growth-supplements.png")
produto01.DestacarPr();
let produto02 = new Destaques("whey da growth","15-01-2006","hidrolisado","https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.png")
produto02.DestacarPr();
