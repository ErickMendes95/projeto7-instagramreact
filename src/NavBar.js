export default function NavBar() {
    return (
        <div class="container">
            <Logo/>
            <Pesquisa/>
            <Icones/>
        </div>
    )
}

function Logo(){
    return (
    <>
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>
    </>    
    )
}

function Pesquisa(){
  <>
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  </>
}

function Icones(){
    <>
    <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </>
}