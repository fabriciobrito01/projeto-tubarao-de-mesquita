// pages/Carnaval2024.jsx
import CarnavalContent from '../components/CarnavalContent'; // Verifique o caminho real para o seu projeto
import presidenteDeHonra from "../assets/desfile24/desfile24-presidentedehonraealegoria.jpg";

function Carnaval2024() {
  const enredoContent2024 = [
    "Água, substância essencial para a vida humana, não só biológica, mas também social.",
    "Está por toda parte. Compõe os oceanos, mares, rios riachos, nascentes, poços. É a parte da seiva das plantas, do líquido dos frutos, de nosso sangue e suor. Como vapor, espalha-se na atmosfera e gera nuvens, granizo, geleira. Por ser a única substância que pode ser encontrada na natureza nos estados líquido, sólido e gasoso, isso faz dela também uma substância única no Planeta.",
    "Tanto as águas marinhas (oceanos e mares) e as continentais (rios, lagos e geleiras) são importantes para a sobrevivência da vida na Terra.",
    "Próximo a rios e mares muitas cidades foram erguidas. Rios foram responsáveis pela construção e desenvolvimento das primeiras civilizações que marcaram o mundo. A proximidade com os rios possibilitava o encontro com áreas extremamente férteis, o que atendia às necessidades daqueles que buscavam um lugar para fincar raízes, aproveitando o curso da água e seguindo o curso da vida.",
    "Esse precioso líquido, de valor social, cultural e ambiental tem seu uso intensificado com a urbanização, aumento da população e a industrialização, sobretudo a partir do Século XVIII com a primeira Revolução Industrial que simboliza um novo patamar alcançado no desenvolvimento da civilização humana. É nesse momento que esse líquido tão importante para a vida passa a ser chamado “recurso hídrico”.",
    "É desse líquido precioso e dos nossos rios que tanto nos alimentam, encantam e orgulham pela capacidade de levar em seu leito, ao outro, o bem maior, a água, que nós da Baixada Fluminense, da Tubarão de Mesquita queremos falar, cantar, porque fazem parte de nós.",
    "Rios que desde tempos idos, dividem generosamente suas águas com o “irmão maior” – o Rio de Janeiro, mesmo correndo o risco de provocar carência entre seus não menos importantes irmãos baixadenses.",
    "Contar a história, falar dos caminhos e descaminhos dos nossos rios, da nossa água, não só a que chega até as nossas torneiras, ou não, mas também da água e seus simbolismos, da água que está presente em todas as fases da humanidade, da água que precisamos cuidar, preservar para não faltar, pelo bem de todos nós é mostrar que a Baixada Fluminense fez e faz história, tem vida e qualidade.",
  ];

  const sambaContent2024 = `
OS RIOS VÃO DE VENCIDA;
AS PEDRAS FICAM NO FUNDO.
A ÁGUA É QUE MOVE ESSA VIDA;
A VIDA É QUE MOVE ESSE MUNDO.
DESDE A GOTA QUE BATIZA ATÉ A LAGRIMA DO FIM,
A GENTE SE REALIZA ENTRE O QUE É BOM E É RUIM.
CHORO DE TEIMA É PIRRAÇA, CAMA DE ORVALHO É CHAPÉU,
ÁGUA QUE QUEIMA É CACHAÇA, CHUVA QUE CAI VEM DO CÉU.
                                      (Ô, BÊNÇAO)

BÊNÇÃO QUE JORRA DA BICA,   (
DAS MÃOS DE IARA E DE OXUM, ( (OXUM)
QUE OXALÁ PURIFICA           (
É NOSSO BEM MAIS COMUM.     (BIS

AS NOSSAS VIDAS E VILAS, NEM SEMPRE TRANQUILAS,
CRESCERAM AO REDOR
DOS CURSOS DE UMA NASCENTE
QUE PUXA A CORRENTE DE UM RIO MAIOR.
SE A MEMÓRIA NÃO ME ESCAPA, NAS ONDAS QUE VÃO E QUE VÊM,
ATÉ OS ARCOS DA LAPA ROLARAM ÁGUA TAMBÉM.
NO TEMPO DO IMPERADOR,
HOUVE ALGUEM QUE LANCOU O MAIOR DESAFIO.
A ENGENHARIA PROPÔS E DEPOIS CONSTRUIU O SONHADO DESVIO.
E A CADA NOVO PODER, FOI SE ALARGANDO O FAVOR,
QUE FEZ O POVO SOFRER, QUASE MORRER DE CALOR.

SÁBIO É QUEM ACREDITA         (
NO QUE É MELHOR PARA SI.     (
SOU TUBARÃO DE MESQUITA:     (
O MEU LUGAR É AQUI.           (BIS
  `;

  // Para o desfile, passamos a imagem diretamente como um elemento JSX
  const desfileContent2024 = <img src={presidenteDeHonra} alt="Presidente de Honra e alegoria do Carnaval 2024" />;

  return (
    <CarnavalContent
      year={2024}
      enredoTitle="A água de nossos rios desagua num rio maior"
      enredoContent={enredoContent2024}
      sambaContent={sambaContent2024}
      sambaVideoUrl="https://www.youtube.com/embed/w1vEIsmmWOM" // Verifique se este é o ID correto para o vídeo de 2024
      desfileContent={desfileContent2024}
    />
  );
}

export default Carnaval2024;