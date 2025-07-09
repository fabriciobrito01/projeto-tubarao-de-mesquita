// pages/Carnaval2025.jsx
import CarnavalContent from '../components/CarnavalContent'; // Ajuste o caminho conforme a estrutura real do seu projeto

function Carnaval2025() {
  const enredoContent2025 = [
    "A Baixada Fluminense está no mundo, viva, antenada e também se pergunta:",
    "negrito:“Meio ambiente, o que estamos fazendo com ele?”", // Usando o prefixo "negrito:" para aplicar o estilo <pre>
    "É preciso refletir sobre a degradação ambiental, chamar a atenção para o desrespeito à natureza.",
    "Somos parte integrante do meio ambiente e não é de hoje que a situação mostra que mudanças de atitudes, de hábitos e comportamentos são necessários e urgentes.",
    "“A vida constitui uma enorme teia entrelaçada e somos um dos seus fios. A consequência dos nossos atos, recaem sobre nós”",
    "É preciso despertar para o grande desafio: criar uma sociedade ambientalmente sustentável, onde as necessidades e aspirações das gerações atuais não diminua suas próprias chances e das gerações futuras de ter uma vida saudável, justa, capaz de crescer sem danos à natureza.",
    "Sustentabilidade é a palavra-chave.",
    "Como uma comunidade que está sempre ligada na melhoria da qualidade de vida de seus cidadãos, a Baixada Fluminense não pode deixar de unir forças para “cuidar da Terra”, a casa de nós todos.",
    "A Escola de Samba Tubarão de Mesquita, como boa mesquitense que é, reconhece que a hora é agora, que o tempo urge, que a questão é séria e que através da sua arte, do seu canto pode “aproveitar” (cantando, dançando, batucando) para ajudar, de forma leve e criativa, na conscientização de que “não basta saber” o que deve ser feito, é preciso “agir”.",
    "Agir oferecendo aos cidadãos mesquitenses a oportunidade de engajamento na causa, incentivando a cidadania ambiental, estimulando a responsabilidade e a participação individual e coletiva para a transformação local, para a melhoria do nosso município.",
    "Com trabalho, leveza, arte, cultura acreditamos poder nos tornar uma escola, uma cidade sustentável, capaz de promover, cultivar, respeitar e favorecer a sustentabilidade, sensibilizando o indivíduo, a coletividade o “olhar em volta”, “cuidar da sua parte” e que com isso também estará contribuindo para um mundo melhor.",
    "A Tubarão de Mesquita quer que seu canto em defesa do planeta ressoe dentro e além, muito além de suas fronteiras.",
    "Vem com a Tubarão!!!",
  ];

  const sambaContent2025 = `
NUM CLAMOR A CADA UM DE NOS
MINHA ESCOLA ERGUE A VOZ
PARA O MUNDO INTEIRO OUVIR
ANDAM DETURPANDO A REALIDADE
MAS SUSTENTABILIDADE E CRESCER SEM DESTRUIR
ENTÃO UM FLORESTEIRO LENDÁRIO
EM UM GRITO SOLITARIO, PRENUNCIA AS TRAGÉDIAS ATUAIS
A GANÂNCIA HUMANA EXPLORAVA ALÉM DO NECESSÁRIO OS RECURSOS NATURAIS
CADÊ A ARARA AZUL, SUMIU O LOBO GUARÁ E SE A ÁGUA SECAR
NO CHÃO QUE O GANHA PÃO VEM DA SEMENTE.
NA CONTA DE QUEM VAI FICAR
O SOFRIMENTO QUE MALTRATA NOSSA GENTE

SONHEI QUE O BRASIL VOLTOU A SER ALDEIA   (
ONDE O HOMEM SO COLHE AQUILO QUE SEMEIA   (
E PREVALECIA O SENTIMENTO                 (
DE GRATIDÃO À TERRA PELO SEU SUSTENTO     (BIS 

A MISSÃO É PROTEGER
FAZER FLORESCER O DEVER DE PRESERVAR
JÁ NÃO BASTA MAIS SABER
TEM QUE DEFENDER, SE PRECISO LUTAR
É HORA DE FAZER UM JURAMENTO
QUE O DESENVOLVIMENTO
NÃO SERÁ COM SACRIFÍCIO AMBIENTAL
DÁ PRA IMPULSIONAR A ECONOMIA, TER TECNOLOGIA
VEJA O EXEMPLO DO MEU CARNAVAL
QUE USA, REÚSA, REMONTA, PINTA, BORDA E APRONTA
COM RESPONSABILIDADE SOCIAL

NO MAR DA DEGRADAÇÃO                   (
RESISTE VALENTE, O MEU TUBARÃO         (
VEM DA BAIXADA UM OLHAR DE ESPERANÇA   (
QUE A VIDA SEJA SEMPRE A MAIOR HERANÇA (BIS 
  `;

  // Se você tiver uma imagem para o desfile de 2025, importe-a e passe-a aqui:
  // import imagemDesfile2025 from "../assets/desfile25/sua-imagem.jpg";
  const desfileContent2025 = (
    // <img src={imagemDesfile2025} alt="Desfile do Carnaval 2025" />
    <p>Conteúdo do desfile de 2025 em breve!</p> // Placeholder caso não haja imagem ainda
  );

  return (
    <CarnavalContent
      year={2025}
      enredoTitle="Repensa, reflita, recicla, vem na onda da sustentabilidade com a Tubarão de Mesquita"
      enredoContent={enredoContent2025}
      sambaContent={sambaContent2025}
      sambaVideoUrl="https://www.youtube.com/embed/T6RX4ln_HwY" // Confirme o ID do vídeo do YouTube para 2025
      desfileContent={desfileContent2025}
    />
  );
}

export default Carnaval2025;