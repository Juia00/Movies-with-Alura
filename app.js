
function pesquisar(){
    let section=document.getElementById("resultadose");
    
    let campoPesquisa= document.getElementById("campo-pesquisa").value;

    if(campoPesquisa==""){
        section.innerHTML= "<p>Nenhum filme foi encontrado</p>";
            return
    }
    
    campoPesquisa=campoPesquisa.toLowerCase();

    let resultados="";
    let titulo="";
    let descricao="";
    

    for(let dado of dados) {
        titulo=dado.titulo.toLowerCase();
        descricao=dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)){
            resultados+=`
            <div class="resultado">
                    <div class="imgcapa">
                        <img src="${dado.imagem} " alt="Capa filme Carol">
                    </div>
                <h2> 
                    <abbr title="Carol"><a href="${dado.link}" target="_blank"> ${dado.titulo} </a></abbr>
                </h2>
                <p>${dado.descricao}  </p> 
            </div>
            `; 
        }
    }

    if(!resultados){
            resultados="<p>Nenhum filme foi encontrado</p>";
    }

    section.innerHTML=resultados
}

