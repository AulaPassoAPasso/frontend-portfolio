import imagemDev from "../imagens/grapy-software-developer-coding-with-two-monitors.png"
import iconeGithub from "../imagens/icons8-github-50.png"
import iconeLinkedin from "../imagens/icons8-linkedin-50.png"

function App() {

  return (
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao meu portfólio.
        </p>

        <p>
          Meu nome é <span>Fulano</span> e eu sou um desenvolvedor web
        </p>

        <div id="redes-sociais">
          <a href="#">
            <img src={iconeGithub} alt="" srcset="" />
          </a>
          <a href="#">
            <img src={iconeLinkedin} alt="" srcset="" />
          </a>
        </div>

        <a href="#sobreMim">
          <button>Conheça mais sobre mim</button>
        </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev} />
      </section>
    </main>
  )
}

export default App
