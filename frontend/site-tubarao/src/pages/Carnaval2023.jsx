// Carnaval2023.jsx
import CarnavalContent from '../components/CarnavalContent';
import rainha from "../assets/desfile23/desfile23-rainha.jpg";

function Carnaval2023() {
  const enredoContent2023 = [
    "A história da Baixada Fluminense pode ser contada desde a presença dos índios na região ou da formação das freguesias.",
    "Porém, como marco inicial da Baixada colocamos, aqui, a manhã do dia 30 de abril de 1854, quando na antiga freguesia de Nossa Senhora da Guia de Pacobaíba, atual Magé, foi que o apito da locomotiva “ Baronesa” soou pela primeira vez.",
    "Estava inaugurada a 1ª estrada de ferro do Brasil por Irineu Evangelista de Souza, o Barão de Mauá, com a ilustre presença de D. Pedro II.",
    "A chegada dos trens mudou o perfil da região, antes voltada para o transporte fluvial e os portos. A ferrovia se tornou o símbolo das mudanças urbanas e econômicas.",
    "E assim, nos trilhos da história a Baixada se fez, perfumada pelos laranjais que se estendiam ao longo da ferrovia.",
    "Hoje, a Baixada com mais de três milhões de habitantes cresceu tendo que lidar com problemas de infraestrutura como falta de saneamento e as marcas de violência.",
    "Mas sempre reage. É pra cima! É pro alto! Não se abate e luta pela melhoria da qualidade de vida da região tanto social quanto culturalmente.",
    "Faz das artes seu caminho, seu escudo contra a ignorância e tira delas sua força para impulsionar o desenvolvimento de sua gente.",
    "Arte é vida. A Baixada vive! Nela pulsa um coração criativo, vibrante, ávido para mostrar seu valor, sua capacidade, o seu fazer, a sua alegria.",
    "A Baixada tem o que comemorar, tem do que se orgulhar. Belezas naturais, relíquias históricas, diversos centros culturais que abrigam teatros, bibliotecas, cineclubes. Personalidades do mundo artísticos são geradas no seu seio, conhecidas dentro e fora do país e principalmente o orgulho maior “gente que faz”, aqueles que estão na linha de frente, agindo, criando com competência e coragem oportunidades para que os baixadenses possam revelar seu rico panorama cultural.",
    "É esse rico panorama cultural, é a Baixada produzindo e consumindo sonhos, se nutrindo pela arte que o G.R.E.S Tubarão de Mesquita vai apresentar.",
    "Dos seus 13 municípios, muita coisa para mostrar, porém o tempo voa e, por isso, reunidos pontos relevantes de cada um, vamos pintar uma grande aquarela com alegria para celebrar os vários movimentos culturais da Baixada. Mostrar que ela tem educação e cultura.",
    "Caso todos queiram saber mais sobre a região, sigam os trilhos da antiga Baronesa. Viagem mais lenta, porém com surpreendentes descobertas ao longo da estrada.",
    `negrito:Não busques com egoísmo
somente as coisas formosas:
-olha que há flores no abismo!
-olha que há espinhos nas rosas!
                        (SERGIO FONSECA)`
  ];

  const sambaContent2023 = `
A BAIXADA SE LEVANTA        (
PRA MOSTRAR COMO É QUE É    (
QUE SE CONTA E QUE SE CANTA (
E SE FAZ SAMBA NO PÉ.       ( BIS

MEU ESTANDARTE LEVA O SAMBA A TODA PARTE
E FAZ DELE A OITAVA ARTE COM MEU SONHO DE CETIM:
PALAVRA, ESPAÇO, CORPO, SOM, VOLUME E TELA
TÊM MAIS COR NA PASSARELA QUE SE ABRE PARA MIM.
O POVO E A TERRA SÃO MOTIVOS DE MEUS TEMAS;
A RAZÃO DE MEUS POEMAS CORRE O CHÃO, O CÉU E O MAR...
SOU PRETO E BRANCO, COM NUANCES DE DOURADO.
VIM DOS CAMPOS DO PASSADO, TRAGO EM MIM O MEU LUGAR.

DO APITO DE UM TREM AO APITO DO SAMBA,             (
MINHA ESCOLA TAMBÉM EVOLUI PRA CARAMBA:           (
NELA SAI QUEM NÃO TEM DOR NA MÃO, PERNA BAMBA;     (
QUANDO VAI, QUANDO VEM, ELA É CORDA E EU, CAÇAMBA. 
(BIS
(MAS EU SOU

BATUQUEIRO, SOU PAPA-GOIABA DA PERIFERIA
QUE DÁ ASA E ABA A QUALQUER FANTASIA,
NA LUTA SE ACABA E É O REI DA FOLIA.
COM GARRA E SEM JUBA HÁ EM MIM UM LEÃO
E UM GATO NA TUBA DO MEU CORAÇÃO.
SE HÁ QUEM NÃO SUBA COM MEDO DE CHÃO,
NINGUÉM MAIS DERRUBA O MEU TUBARÃO.
  `;

  // Para o desfile, passamos a imagem diretamente.
  // O componente CarnavalContent saberá como renderizá-la.
  const desfileContent2023 = <img src={rainha} alt="Rainha de Bateria do Carnaval 2023" />;


  return (
    <CarnavalContent
      year={2023}
      enredoTitle="Levanta Baixada! Samba sua arte!"
      enredoContent={enredoContent2023}
      sambaContent={sambaContent2023}
      sambaVideoUrl="https://www.youtube.com/embed/mb4exq-fmLs" // Substitua pelo ID real do YouTube do seu vídeo
      desfileContent={desfileContent2023}
    />
  );
}

export default Carnaval2023;
