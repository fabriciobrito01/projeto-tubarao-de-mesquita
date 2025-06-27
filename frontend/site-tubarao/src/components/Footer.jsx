import { Link } from "react-router-dom";
import logoTubarao from '../assets/logo-tubarao.svg';
import telefone from '../assets/telephone-svgrepo-com.svg';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg';

function Footer() {
    return (
        <>
            <style>
                {`
          .footer {
            background: #222;
            color: #fff;
            text-align: center;
            padding: 2rem 0 1.2rem 0;
            overflow: hidden;
          }
          .footer .logo-tubarao {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 2.5rem;
            width: 100%;
          }
          .footer .logo-tubarao img {
            height: 115px;
            max-width: 90vw;
            margin: 0 auto;
            display: block;
            object-fit: contain;
          }
          .footer .footer-links-rows {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            margin: 0.7rem 0 0 0;
            width: 100%;
          }
          .footer .footer-links-row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2.2rem;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }
          .footer .footer-links-row a {
            color: #CB910F;
            font-family: 'Lexend', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            text-decoration: underline;
            transition: color 0.2s;
            padding: 0.3rem 0.7rem;
            border-radius: 4px;
            display: inline-block;
            text-align: center;
            min-width: 90px;
          }
          .footer .footer-links-row a:hover {
            color: #fff;
            background: #CB910F22;
          }
          .footer .Telefone,
          .footer .Whatsapp {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
            margin-top: 1rem;
          }
          .footer .Whatsapp {
            margin-top: 0.2rem;
          }
          .footer .Whatsapp img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
          }
          .footer .Telefone img {
            width: 23px;
            height: 23px;
            filter: brightness(0) invert(1);
          }
          .footer .Telefone p,
          .footer .Whatsapp p {
            margin: 0;
            font-size: 1rem;
            color: #fff;
            font-family: 'Lexend', sans-serif;
            font-weight: 500;
          }
          .footer .footer-text {
            margin-top: 1.5rem;
            font-size: 0.8rem;
          }
          @media (max-width: 600px) {
            .footer .footer-links-row {
              gap: 0.7rem;
              max-width: 98vw;
              min-width: 0;
            }
            .footer .footer-links-row a {
              min-width: 0;
              font-size: 0.95rem;
              padding: 0.3rem 0.3rem;
            }
          }
        `}
            </style>
            <footer className="footer">
                <div>
                    <div className="logo-tubarao">
                        <Link to="/">
                            <img src={logoTubarao} alt="Logo" />
                        </Link>
                    </div>
                    <div className="footer-links-rows">
                        <div className="footer-links-row">
                            <Link to="/">Home</Link>
                            <Link to="/institutotubarao">Instituto</Link>
                            <Link to="/cadastro">Cadastro</Link>
                        </div>
                        <div className="footer-links-row">
                            <Link to="/tubarao/historia">História</Link>
                            <Link to="/tubarao/fichatecnica">Ficha Técnica</Link>
                            <Link to="/noticias">Notícias</Link>
                        </div>
                    </div>
                </div>
                <div className="Telefone">
                    <img src={telefone} alt="Telefone" />
                    <p>(21) 97448-3335</p>
                </div>
                <div className="Whatsapp">
                    <img src={whatsapp} alt="WhatsApp" />
                    <p>(21) 97448-3335</p>
                </div>
                <div className="footer-text">
                    <p>&copy; {new Date().getFullYear()} Tubarão de Mesquita. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;