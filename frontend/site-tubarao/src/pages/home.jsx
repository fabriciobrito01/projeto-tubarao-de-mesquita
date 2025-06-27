import { useState } from "react";
import backgroudImage from "../assets/batismo-casaisebandeiras.jpg";
import locationSvg from "../assets/location-svgrepo-com.svg";
import mailSvg from "../assets/mail-svgrepo-com.svg";
import Button1 from "../components/Button1";

function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleEnviar(e) {
    e.preventDefault();
    const destinatario = "contato@tubaraodemesquita.com.br"; // Troque pelo seu email
    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  }

  return (
    <>
      <style>
        {`
          .sobre-nós {
            background-image: url(${backgroudImage});
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 565px;
            }

          .sobre-nós h2 {
            text-align: left;
            padding: 0.5rem;
            }

          .sobre-nós h3 {
            display: flex;
            align-items: center;
            text-align: left;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 1rem;
            }

          .sobre-nós p {
            text-align: left;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 300;
            padding-top: 0rem;
            }

          .sobre-nós hr {
            width: 100%;
            height: 0.05rem;
            margin: 0.5rem 0;
            }

          .sobre-nós img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
            margin-right: 0.5rem;
            }

          .sobre-nós .overlay {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            padding-top: 0.4rem;
            }

          .form-contato {
            display: flex;
            flex-direction: column;
            align-items: left;
            padding-left: 1rem;
            }

          .form-contato input,
          .form-contato textarea {
            width: 70%;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: 'Inter', sans-serif;
            }

          .form-contato textarea {
            height: 100px;
            }

          .form-contato button {
            display: block;
            margin: 2rem auto 0 auto;
            align-items: center;
            justify-content: center;
            width: 70%;
            padding: 0.5rem 1rem;
          }
          
        `}
      </style>
      <div>
        <h1>Bem-vindo à Home!</h1>
        <p>Esta é a página inicial do seu projeto React.</p>

        <div className="sobre-nós">
          <div className="overlay">
            <h2>SOBRE NÓS</h2>
            <hr />
            <div className="quadra"></div>
              <h3><img src={locationSvg} alt="icone de localização" />Quadra Tubarão de Mesquita</h3>
              <p>Estr. Feliciano Sodré, 2325 - Centro, Mesquita - RJ, 26553-000</p>
            <div className="barracao"></div>
              <h3><img src={locationSvg} alt="icone de localização" />Barracao Tubarão de Mesquita</h3>
              <p>Rua Prefeito José Montes Paixão, 1265 - Centro, Mesquita - RJ, 26553-160</p>
            <div className="email"></div>
              <h3><img src={mailSvg} alt="icone de email" />Entre em contato conosco</h3>
              <form className="form-contato" onSubmit={handleEnviar}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Sua mensagem"
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  rows={4}
                  required
                />
                <Button1 type="submit">Enviar email</Button1>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;