import CarnavalContent from '../components/CarnavalContent';

function Carnaval2022() {
  const enredoContent2022 = [
    "Antes de mergulhar nas águas do tubarão é importante conhecer as terras de Mutambó, caminhando entre os canaviais, descansando à sombra dos laranjais, ouvindo histórias de uma cidade que já nasceu nobre pelas mãos de um Barão, o Jerônimo de Mesquita. E se quiser saber mais sobre as terras do Barão, faça como Pedro II, pegue o trem na parada Mutambó e aprecie o progresso da região.",
    "Mesquita, município da Baixada Fluminense, região metropolitana do Estado do Rio de Janeiro, emancipado em 1999, tem o início de sua história ligado ao período colonial, ao contato com os índios, em especial os “jacutingas”, assim chamados por usarem como adorno as penas de uma ave chamada “jacu”, comum na região.",
    "Suas terras fizeram parte de uma sesmaria que se estendia entre o rio Sarapuí e o sopé do Outeiro do Gericinó, cedidas a Gonçalo Aguiar.",
    "Muitos anos depois, num Brasil independente, em 1855, já em mãos de outros donos, a sesmaria, com benfeitorias de um engenho d’água na Cachoeira Pequena e um pequeno canavial, passa a ser administrada por Jerônimo de Mesquita (mais tarde Barão de Mesquita). Torna-se uma das maiores plantações de cana-de-açúcar de Iguaçú, onde foi construída a Fazenda da Cachoeira, região conhecida como Mutambó, devido à enorme quantidade dessa árvore na região. Tanto na Fazenda da Cachoeira, quanto na Fazenda São Mateus, também de propriedade do Barão de Mesquita, a produção de aguardente e açúcar foi intensa, bem sucedida.",
    "Vem o declínio da produção açucareira. A terra é levada à exaustão. Era preciso buscar outras alternativas.",
    "A estrada de ferro D.Pedro II, hoje Central do Brasil, chega à região.",
    "Em 1884, foi inaugurada uma parada de trem nas terras cedidas pelo Barão de Mesquita para a passagem dos trilhos, que recebeu o nome de Jerônimo de Mesquita, posteriormente Mesquita. Antes da inauguração oficial também chamada de Mutambó.",
    "Fazendas em fase de declínio, entre outros fatores, a abolição da escravatura, começam a investir em outros ramos.",
    "A citricultura surge como possibilidade.",
    "A região de Mesquita acompanha as mudanças. O espólio da antiga Fazenda Cachoeira foi dividido, transformando se em chácaras, sítios de cultivo e beneficiamento de laranjas, que daria um novo impulso à localidade.",
    "Parte das terras a leste da estrada de ferro é vendida a Alfredo Ludolf que, mais tarde, instalou na área uma imensa olaria.",
    "Por muitos anos, a paisagem de Mesquita foi composta por laranjais, olarias, poucas casas e pequenos comércios.",
    "Com o passar do tempo a população local cresceu, a produção de laranjas diminuiu e as terras de Mesquita foram loteadas, iniciando – se a construção de casas e demarcação de sítios, anos depois tornando – se o 5º Distrito do Município de Nova Iguaçu.",
    "Entre o final da década de 40 e início de 50, começam a se estabelecer em Mesquita fábricas que irão impulsionar a economia local. Destacaram–se a BRASFERRO e IBT, ambas metalúrgicas e a PUMAR, indústria de sombrinhas que se tornou a maior da América Latina.",
    "Como distrito de Nova Iguaçu, Mesquita ficou relegada ao abandono administrativo municipal durante anos, até que começa a despertar para suas próprias necessidades e, em maio de 1957, é realizada a primeira reunião pela emancipação. Uma tentativa que não deu certo, mesmo assim os ideais emancipalistas não se abateram.",
    "Na década de 90, com iniciativas concretas, movimento organizado, participação popular com realização de um plebiscito, partidos políticos, líderes pro emancipação e uma ferrenha batalha judicial, Mesquita finalmente foi elevada à categoria de cidade em 25 de setembro de 1999.",
    "Mesquita é o mais novo município do Estado do Rio de Janeiro, com população estimada em 177.016 habitantes. Está situado na faixa de médio e grande porte entre os municípios do Brasil. É composto por 17 bairros com extensão territorial de 41.169 km², segundo o IBGE.",
    "Apesar de algumas dificuldades, graças ao trabalho de sua gente, Mesquita é outro. Mais vivo, forte, capaz de traçar seus caminhos e caminhar com o progresso, com tudo que esse mundo novo nos oferece, sempre crescendo.",
    "Mesquita está no mundo. O mundo está em Mesquita. Mesquita está ligado, conectado. Bora lá, rastrear o “Tubarão” e conhecer sua história.",
    "Somente um “Tubarão” para espantar o marasmo!",
    "E tudo começa com as “peladas” dos operários da fábrica de telhas Ludolph & Ludolph, no século passado.",
    "Nos intervalos do trabalho com o barro e a tabatinga, os operários com o intuito de se divertir e espantar o marasmo, “batendo uma bola”, resolveram formar um time de futebol, que eles não poderiam imaginar, daria origem ao nosso prodigioso Mesquita Futebol Clube.",
    "Sua fundação data de 9 de maio de 1920, tempo em que Mesquita ainda estava subordinado a Nova Iguaçu.",
    "Na década de 40, pelas mãos de alguns dos seus dirigentes, o clube tem sua primeira sede na Rua da Cachoeira, atual Mr. Watkins.",
    "Durante a gestão de Luiz Guimarães, o clube se transfere para área na estrada Feliciano Sodré, em frente à linha férrea da Central do Brasil, onde está até hoje.",
    "Em 1958, Lenine Mazza, como presidente do Mesquita projeta sua nova sede.",
    "Em 1971, pelas mãos de Nielsen Louzada, o clube ganha dinamismo, aumento do quadro de associados, programação musical ampliada e o desafiante projeto de se construir um estádio próprio.",
    "Projeto concretizado, sonho realizado e o “Louzadão” como fica sendo conhecido pelos mesquitenses, se põe de pé.",
    "O clube começa a atuar defendendo suas cores, o preto e o branco, emocionando a torcida e se fazendo conhecer por sua energia, audácia, autoconfiança, foco, dinamismo e coragem para sempre avançar.",
    "Atributos que certamente observados por seus torcedores, que rendeu ao time o apelido de “Tubarão”, animal, que entre outros simbolismos, apresenta também tais características.",
    "Mesquita começa a competir em certames profissionais e amadores, conquistando a Copa Vale do Paraíba em 1976, Campeonato Estadual da Terceira Divisão em 1981, entre outras vitórias, em diferentes encontros.",
    "Em 1985, realizou campanha irretocável na Segunda Divisão do Campeonato Estadual, atuando entre os melhores.",
    "Em sua estreia na Primeira Divisão, alcança a oitava colocação, ficando à um empate com o Fluminense e uma vitória sobre o Botafogo.",
    "Mesquita, entre vitórias, empates e derrotas, teve uma trajetória positiva que serviu de inspiração para outros clubes da Baixada. Mostrou que tem valores como o time de jovens entre 17 e 22 anos que, em 2007, fez o clube retornar à Primeira Divisão Carioca.",
    "Hoje, está mais vivo do que nunca, preparando seus jovens jogadores para grandes atuações.",
    "O “Tubarão da Baixada” continua destacando o futebol, mas lança olhares atentos e ações sobre outros esportes, sobre o lazer, a cultura, o conforto e a segurança dos seus associados.",
    "Não quer esperar, quer agir para que as coisas aconteçam com criatividade e eficiência.",
    "Ele segue ativo na vida para evoluir e por estar em constante estado de evolução, se junta ao samba e faz acontecer na avenida a estreia do “Grêmio Recreativo Escola de Samba Tubarão de Mesquita”, sua nova criação.",
    "Mesquita Futebol Clube sempre pra frente e para o alto com bola na rede e samba no pé."
  ];

  const sambaContent2022 = `
    É TUBA...TUBA...É TUBARÃO         (
    O POVO SE AGITA E GRITA           (
    QUEM NÃO TEM BOLA NO PÉ E NEM SAMBA NA MÃO (
    PEIXE NÃO É NEM NADA EM MESQUITA          (BIS

    E TUDO COMEÇOU NO BARRO,
    NA RODA E NO CALOR DO FOGO:
    TIJOLO, TELHA, POTE, JARRO
    E O HOMEM PONDO A BOLA EM JOGO.
    NA ESCOLA DE OURO, QUE É BRANCA E É NEGRA
    QUEM NÃO DÁ COURO BEM CEDO SE ARRANCA;
    SE QUEM CHEGA E QUEM TRAZ TIA NEGA É DA PAZ,
    A RODA SE FAZ E TAMBÉM BOTA BANCA.

    NA MÃO E NO PÉ DIZENDO A QUE VEM       (
    MESQUITA NÃO É MELHOR DO QUE NINGUÉM   (
    É VILA QUE ROLA DO AMOR DE UM BARÃO     (
    COM SAMBA DE ESCOLA E COM BOLA NO CHÃO  (BIS

    OS SILVA E OS MAZZA NO MEU FUTEBOL
    SÃO RAIOS DE SOL ABRINDO O CAMINHO.
    NA RUA OU EM CASA, NUM SAMBA QUE ASSOMBRA. (ARRASA?)
    QUEM FAZ LUZ E SOMBRA É NELSOM CAVAQUINHO.
    PRA QUEM TEVE DICO, WALDIR E TAINHA,
    ROMILDO, DICRÓ E TONINHO AINDA TEM,
    MESQUITA É UMA FESTA DE PRAÇA E DE FEIRA
    QUE BRINCA NA BEIRA DA LINHA DO TREM.
  `;

  const desfileContent2022 = [
    "Em breve, fotos e vídeos do memorável desfile de 2022 do Grêmio Recreativo Escola de Samba Tubarão de Mesquita!",
    "Prepare-se para reviver os momentos de alegria e energia que a nossa escola levou para a avenida."
  ];

  return (
    <CarnavalContent
      year={2022}
      enredoTitle="Mesquita Futebol Clube - De Barão à Tubarão"
      enredoContent={enredoContent2022}
      sambaContent={sambaContent2022}
      sambaVideoUrl="https://www.youtube.com/embed/0JQkqXZNEJM" // Substitua pelo URL correto do YouTube
      desfileContent={desfileContent2022}
    />
  );
}

export default Carnaval2022;
