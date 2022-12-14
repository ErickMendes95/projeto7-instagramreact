import { useState } from "react"

const postagens =[
    {imagemUsuario: "assets/img/meowed.svg", usuario: "meowed", postagem: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", usuarioCurtida: "respondeai"},
    {imagemUsuario: "assets/img/barked.svg", usuario: "barked", postagem: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", usuarioCurtida: "adorable_animals"}
]

export default function Posts() {
    return (
        <div className="posts">
            {postagens.map((p) => (
                <div data-test="post" className="post">
                <Topo image={p.imagemUsuario} user={p.usuario}/>
                <ConteudoeFundo post={p.postagem} image={p.imagemCurtida} user={p.usuarioCurtida}/>
                </div>
                ))}
        </div>  
    )
    
}



function Topo({image, user}){
    return(
        
        <div className="topo">
              <div className="usuario">
                <img src={image} />
                {user}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
    )
}


function ConteudoeFundo({post, image, user}){

    function darLikeFoto() {
        if(nomeLike === "heart-outline"){
            setNomeLike("heart")
            setCorLike("#f00")
            numeroLike = Number(numeroLike.replace(/\./g, ""))
            numeroLike = numeroLike+1
            setNumeroLike(numeroLike.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

        }
    }

    let [numeroLike, setNumeroLike] = useState("101.523")
    function mudarNumeroLike(){
        if(nomeLike === "heart"){
            numeroLike = Number(numeroLike.replace(/\./g, ""))
            numeroLike = numeroLike-1
            setNumeroLike(numeroLike.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")) 
        } else if(nomeLike === "heart-outline"){
            numeroLike = Number(numeroLike.replace(/\./g, ""))
            numeroLike = numeroLike+1
            setNumeroLike(numeroLike.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
        }

    }

    const [nomeLike, setNomeLike] = useState("heart-outline")
    const [corLike, setCorLike] = useState("#000")
    function mudarLike(){
        if(nomeLike === "heart-outline"){
            setNomeLike("heart")
            setCorLike("#f00")
            mudarNumeroLike()
        } else if (nomeLike === "heart"){
            setNomeLike("heart-outline")
            setCorLike("#000")
            mudarNumeroLike()
        }
    }

    const [nomeBookmark, setNomeBookmark] = useState("bookmark-outline")
    const [corBookmark, setCorBookmark] = useState("#000")
    function mudarBookmark(){
        if(nomeBookmark === "bookmark-outline"){
            setNomeBookmark("bookmark")
            setCorBookmark("#fc0")
        } else if (nomeBookmark === "bookmark"){
            setNomeBookmark("bookmark-outline")
            setCorBookmark("#000")
        }
    }

    return(
        <>
        <div className="conteudo">
            <img data-test="post-image" src={post} onClick={darLikeFoto} />
        </div>
        
        <div className="fundo">
            <div className="acoes">
            <div>
                <ion-icon data-test="like-post" style={{color:corLike}} name={nomeLike} onClick={mudarLike}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon data-test="save-post" style={{color:corBookmark}} name={nomeBookmark} onClick={mudarBookmark}></ion-icon>
            </div>
        </div>

        <div className="curtidas">
          <img src={image} />
          <div className="texto">
            Curtido por <strong>{user}</strong> e <strong>outras <span data-test="likes-number">{numeroLike}</span> pessoas</strong>
          </div>
        </div>
        </div>
        </>
    )
}