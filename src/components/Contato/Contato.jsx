import { useState } from "react";
import "./Contato.css";

export const Contato = ({categoria}) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onSubmit({ nome, email, mensagem });
      setNome('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div id={categoria}>
        <h2>Você pode me enviar uma mensagem! 👇</h2>
        <p>Preencha o seu nome, seu e-mail e escreva a mensagem que deseja enviar para mim. Logo quando eu puder, irei te responder.
          <br/><br/>Desde já, agradeço o seu contato!
        </p>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={handleSubmit}
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
            onChange={handleSubmit}
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
            onChange={handleSubmit}
            required
            />
        </div>
        <button type="submit">Enviar</button>
        </form>
    </div>
  );
}