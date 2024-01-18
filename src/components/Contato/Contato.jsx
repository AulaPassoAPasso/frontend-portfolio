import { useState } from "react";
import "./Contato.css";

export const Contato = ({categoria}) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      mensagem
    };

    try {
      await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => alert(res))

      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div id={categoria}>
        <div>
          <h2>Você pode me enviar uma mensagem! 👇</h2>
          <p>Preencha o seu nome, seu e-mail e escreva a mensagem que deseja enviar para mim. Logo quando eu puder, irei te responder.
            <br/><br/>Desde já, agradeço o seu contato!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="email">Seu e-mail:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="exemplo@gmail.com"
                />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                id="mensagem"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
    </div>
  );
}