const alcance = ['Alcance','Adjacente','Curto','Médio','Longo'];
const tipo_dano = ['Tipo','Corte','Impacto','Perfuração','Estratégico'];
const tipo_item = ['Tipo de item','Equip. de Aventura','Arma Simples','Arma Marcial','Arma Exótica','Arma de Fogo','Munição','Armadura Leve','Armadura Pesada','Escudo',
'Alimentação','Alquímicos','Animais','Catalisadores','Esotéricos','Ferramentas','Item Mágico','Pergaminhos','Poções','Veículos','Venenos','Vestuário','Outro'];
const peso_item = ['Espaço por unidade','Não ocupa espaço','⅛','¼','½',1,2,3,4,5,6,7,8,9,10];

const kit = [104,65,70];

const weap_start = 0;
const weap_end = 41;
const armor_start = 45;
const armor_end = 57;

const equip = [
['Adaga',2,'T$ 2',5,'Esta faca afiada é usada por muitos habitantes adultos do Reinado, embora seja favorita de ladrões e assassinos, por ser facilmente escondida (fornece +5 em testes de Ladinagem para ocultá-la). Quando ataca com uma adaga, você pode usar sua Destreza em vez de Força nos testes de ataque. Uma adaga pode ser arremessada.',0,'d4',19,'x2',2,3,,],
['Espada Curta',2,'T$ 10',5,'O tipo mais comum de espada, usada por guardas ou como arma secundária de guer-reiros mais capazes. Mede entre 90 e 50cm.',0,'d6',19,'x2',1,3,,],
['Foice',2,'T$ 4',5,'Originalmente um instrumento agrícola, consiste de uma lâmina curva presa a um cabo de madeira. Uma arma tradicional de druidas.',0,'d6',20,'x3',1,1,,],
['Clava',2,'T$ 0',5,'Um pedaço de madeira empunhado conto arma, geralmente usado por bárbaros ou cria-turas brutais — ou corno arma improvisada, como um galho de árvore ou pedaço de mobília. Sendo fácil de conseguir, seu preço é zero.',0,'d6',20,'x2',1,2,,],
['Lança',2,'T$ 2',5,'Qualquer arma feita com uma haste de madeira e uma ponta afiada, natural ou metálica. Por sua facilidade de fabricação, é muito comum entre ores, kobolds, trogloditas e outras raças menos civili-zadas. Uma lança pode ser arremessada.',0,'d6',20,'x2',2,3,,],
['Maça',2,'T$ 12',5,'Bastão com um peso cheio de protube-râncias na ponta, a maça é usada por clérigos que fazem votos de não derramar sangue. De fato, um golpe de maça nem sempre derrama sangue, mas esmaga ossos.',0,'d8',20,'x2',1,2,,],
['Bordão',2,'T$ 0',6,'Um cajado apreciado por viajantes e camponeses por sua praticidade e fácil acesso (seu preço é zero). O bordão é urna arma dupla.','-2/-2','d6',20,'x2',1,2,,],
['Pique',2,'T$ 2',6,'Essencialmente uma lança muito longa. O pique é uma arma alongada.',0,'d8',20,'x2',1,3,,],
['Tacape',2,'T$ 0',6,'Versão maior e/ou com pregos de urna dava. Usado por bárbaros e humanoides bestiais, não é uma arma elegante, mas faz o serviço.',0,'d10',20,'x2',1,2,,],
['Azagaia',2,'T$ 1',5,'Uma lança leve e flexível, própria para arremesso. Pode ser usada como arma corpo a corpo, mas você sofre uma penalidade de -5 no teste de ataque.',0,'d6',20,'x2',3,3,,],
['Besta Leve',2,'T$ 35',5,'Um arco montado sobre uma coronha de madeira com um gatilho, a besta leve é uma arma que dispara virotes com grande po-tência. Recarregar uma besta leve é uma ação de movimento.',0,'d8',19,'x2',3,3,,],
['Funda',2,'T$ 0',5,'Uma simples tira de couro usada para arremessar pedras polidas. Na falta de munição ade-quada, pode disparar pedras comuns, mas o dano é reduzido em um passo. Recarregar uma funda é uma ação de movimento. Ao contrário de outras armas de disparo, você aplica sua Força a rolagens de dano com uma funda.',0,'d4',20,'x2',3,2,,],
['Arco Curto',2,'T$ 30',6,'Uma arma antiga e comum, este arco é usado primariamente como ferramenta de caça, embora seja usado como arma de guerra por milícias, bandidos e exércitos menos equipados. Pode ser usado montado. ',0,'d6',20,'x3',3,3,,],
['Machadinha',3,'T$ 6',5,'Ferramenta útil para cortar madeira e também inimigos. Uma machadinha pode ser arremessada.',0,'d6',20,'x3',2,1,,],
['Cimitarra',3,'T$ 15',5,'Espada com a lâmina curva e muito afiada. A cimitarra é uma arma ágil.',0,'d6',18,'x2',1,1,,],
['Espada Longa',3,'T$ 15',5,'Arma típica de soldados e guerreiros, esta espada de dois gumes tem lâmina reta medindo entre 80cm e 1m. ',0,'d8',19,'x2',1,1,,],
['Florete',3,'T$ 20',5,'A lâmina leve e fina desta espada torna a arma muito precisa. O florete é uma arma ágil.',0,'d6',18,'x2',1,3,,],
['Machado de Batalha',3,'T$ 10',5,'Adaptado do ma-chado de lenhador, este não é um instrumento para cone de árvores, mas sim urna arma capaz de causar ferimentos terríveis.',0,'d8',20,'x3',1,1,,],
['Mangual',3,'T$ 8',5,'Uma haste metálica ligada a uma corrente com uma esfera de aço na ponta, que pode se enroscar na arma do adversário. O mangual é uma arma versátil, fornecendo +2 em testes para desarmar.',0,'d8',20,'x2',1,2,,],
['Martelo de Guerra',3,'T$ 12',5,'Outra ferramenta adaptada para combate, esta é a arma favorita de quase todos os anões que não usam machados.',0,'d8',20,'x3',1,2,,],
['Picareta',3,'T$ 8',5,'Usada por mineradores, esta ferra-menta quebra pedras com facilidade. Imagine o que pode fazer com carne e osso!',0,'d6',20,'x4',1,3,,],
['Tridente',3,'T$ 15',5,'Uma lança com três pontas, favorita de povos marinhos e gladiadores e própria para pren-der as pernas do oponente. O tridente é urna arma versátil, fornecendo +2 em testes para derrubar. Um tridente pode ser arremessado.',0,'d8',20,'x2',2,3,,],
['Alabarda',3,'T$ 10',6,'Urna haste de madeira com 2m de comprimento e uma lâmina de machado na ponta. A alabarda é uma arma alongada.',0,'d10',20,'x3',1,1,,],
['Alfange',3,'T$ 75',6,'Uma versão maior da cimitarra, esta espada de lâmina larga e curva é bastante usada por guerreiros do Deserto da Perdição.',0,'2d4',18,'x2',1,1,,],
['Gadanho',3,'T$ 18',6,'Outra ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos. Foi criada para ceifar cereais, mas também pode ceifar vidas.',0,'2d4',20,'x4',1,1,,],
['Lança Montada',3,'T$ 10',6,'A lança montada é urna arma alongada. Se você estiver montado, pode usá-la com apenas uma mão. Além disso, quando usada numa investida montada, causa +2d8 pontos de dano (note que dados adicionais não são multiplica-dos em caso de acerto crítico).',0,'d8',20,'x3',1,3,,],
['Machado de Guerra',3,'T$ 20',6,'Este imenso machado com lâmina dupla é uma das armas mais perigosas que existem.',0,'d12',20,'x3',1,1,,],
['Espada Montante',3,'T$ 50',6,'Enorme e pesada, esta espada de 1,5m de comprimento é urna arma poderosa.',0,'2d6',19,'x2',1,1,,],
['Arco Longo',3,'T$ 100',6,'Este arco reforçado tem a al-tura de uma pessoa. Ao contrário da versão curta, é primariamente uma arma de guerra. Por ter urna puxada pesada, permite que você aplique sua Força às rolagens de dano (ao contrário de outras armas de disparo). Porém, um arco longo não pode ser usado se você estiver montado.',0,'d8',20,'x3',3,3,,],
['Besta Pesada',3,'T$ 50',6,'Versão maior e mais potente da besta leve. Recarregar uma besta pesada é uma ação padrão.',0,'d12',19,'x2',3,3,,],
['Chicote',4,'T$ 2',6,'Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. O chicote é uma arma ágil e versátil, fornecendo +2 em testes para derrubar ou desarmar.',0,'d3',20,'x2',1,1,,],
['Espada Bastarda (Uma Mão)',4,'T$ 35',5,'Maior e mais pesada que a espada longa, esta arma é tradicionalmente usada pelos cavaleiros de Bielefeld. A espada bastarda é urna arma adaptável. É muito grande para ser usada com urna só mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.',0,'d10',19,'x2',1,1,,],
['Espada Bastarda (Duas Mãos)',4,'T$ 35',5,'Maior e mais pesada que a espada longa, esta arma é tradicionalmente usada pelos cavaleiros de Bielefeld. A espada bastarda é urna arma adaptável. É muito grande para ser usada com urna só mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.',0,'d12',19,'x2',1,1,,],
['Katana (Uma Mão)',4,'T$ 100',5,'A espada tradicional do samurai tem lâmina levemente curva e apenas um gume. A katana é uma arma adaptável e ágil. É muito grande para ser empunhada com uma só mão sem treinamento especial; por isso, é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.',0,'d8',19,'x2',1,1,,],
['Katana (Duas Mãos)',4,'T$ 100',5,'A espada tradicional do samurai tem lâmina levemente curva e apenas um gume. A katana é uma arma adaptável e ágil. É muito grande para ser empunhada com uma só mão sem treinamento especial; por isso, é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.',0,'d10',19,'x2',1,1,,],
['Machado Anão',4,'T$ 30',5,'A arma preferida de onze entre dez guerreiros anões. Um machado anão é muito grande para ser usado com uma só mão sem treinamento especial; por isso é urna arma exótica. Ele pode ser usado como uma arma marcial de duas mãos.',0,'d10',20,'x3',1,1,,],
['Corrente de Espinhos',4,'T$ 23',6,'Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. A corrente de espinhos é uma arma ágil, dupla e versátil, fornecendo +2 em testes para derrubar ou desarmar.','-2/-2','2d4',19,'x2',1,1,,],
['Machado Táurico',4,'T$ 50',6,'Uma haste comprida com uma lâmina extremamente grossa na ponta, esta é uma arma ancestral dos minotauros. Um machado táurico é uma arma desbalanceada. Além disso, é muito grande para ser usado sem treinamento especial; por isso, é uma arma exótica.',0,'2d8',20,'x3',1,1,,],
['Rede',4,'T$ 20',5,'A rede tem pequenos dentes em sua tra-ma e uma corda para controlar os inimigos presos. Se você acertar um ataque com a rede, não causa dano. Em vez disso, a vítima fica enredada (deslocamento reduzido à metade, não pode correr nem fazer inves-tidas e sofre -2 na Defesa e em testes de ataque). Enquanto você estiver segurando a corda, sem-pre que a vítima se mover você pode fazer um teste de Força oposto contra ela como uma reação. Se você vencer, a vítima só pode se mover até o limite da corda (alcance curto). A vítima pode se soltar com uma ação completa e um teste de Força ou Acrobacia (CD 20). A rede tem 5 pontos de vida e, se rasgar, qualquer criatura enredada se solta automaticamente. A rede só pode ser usada contra criaturas no máximo uma categoria de tamanho maior que você.',0,'0',20,'x1',2,4,,],
['Pistola',5,'T$ 250',5,'A arma de fogo mais comum. Recarre-gar uma pistola é urna ação padrão.',0,'2d6',19,'x3',2,3,,],
['Mosquete',5,'T$ 500',6,'Uma arma de fogo de uso dificil, mas com poder devastador. Recarregar um mosquete é uma ação padrão.',0,'2d8',19,'x3',3,3,,],
['Virotes (20)',6,'T$ 2',5,'Uma aljava com 20 setas de madeira. Recarregar uma besta leve é uma ação de movimento; já recarregar uma besta pesada é uma ação padrão.',,,,,0,0,,],
['Pedras (20)',6,'T$ 0,5',5,'Um saco de couro com 20 pedras polidas. Recarregar uma funda com uma pedra de qualquer tipo é uma ação de movimento.',,,,,0,0,,],
['Flechas (20)',6,'T$ 1',5,'Uma aljava com 20 flechas, hastes de madeira com ponta metálica e penas para estabilizar.',,,,,0,0,,],
['Balas (20)',6,'T$ 20',5,'Uma bolsa com 20 balas (pequenas esferas de chumbo) e pólvora. Recarregar uma pistola ou um mosquete é uma ação padrão.',,,,,0,0,,],
['Armadura Acolchoada',7,'T$ 5',6,'Uma túnica almofadada feita em linho ou lã. É a armadura mais leve, mas protege o corpo, fornecendo +2 em Fortitude.',,,,,0,0,1,0],
['Armadura de Couro',7,'T$ 20',6,'O peitoral desta armadura é feito de couro curtido em óleo fervente, para ficar mais rígido, enquanto as demais partes são feitas de couro flexível.',,,,,0,0,2,0],
['Couro Batido',7,'T$ 35',6,'Versão mais pesada da armadura de couro, reforçada com rebites de metal.',,,,,0,0,3,-1],
['Gibão de Peles',7,'T$ 25',6,'Usada principalmente por bárbaros e selvagens, esta armadura é formada por várias camadas de peles e couro de animais.',,,,,0,0,4,-3],
['Couraça',7,'T$ 500',6,'A mais robustadas armaduras leves, formada por uma placa metálica que protege o peito e as costas, presa sobre um casaco de couro.',,,,,0,0,5,-4],
['Brunea',8,'T$ 50',9,'Colete de couro coberto com plaquetas de metal sobrepostas, como escamas de um peixe. Por ser barata de produzir, é a armadura mais utilizada no Reinado por soldados de infantaria e guardas de castelo.',,,,,0,0,5,-2],
['Cota de Malha',8,'T$ 150',9,'Longa veste de anéis metálicos interligados, formando uma malha flexível e resistente, que vai até os joelhos.',,,,,0,0,6,-2],
['Loriga Segmentada',8,'T$ 250',9,'Composta por tiras horizontais de metal, esta armadura pesada é muito utilizada por legionários do Império de Tauron.',,,,,0,0,7,-3],
['Meia Armadura',8,'T$ 600',9,'Uma cota de malha reforçada com placas de metal.',,,,,0,0,8,-4],
['Armadura Completa',8,'T$ 3000',9,'A mais forte e pesada das armaduras, formada por placas de metal forjadas e encaixadas de modo a cobrir o corpo inteiro. Inclui uma túnica acolchoada para ser usada sob as placas. Correias e fivelas distribuem o peso da armadura pelo corpo inteiro. Esta armadura precisa ser feita sob medida para cada usuário; um ferreiro cobra T$ 200 para adaptar uma armadura completaa um novo usuário.',,,,,0,0,10,-5],
['Escudo Leve',9,'T$ 5',5,'Tipicamente feito de madeira, este escudo é amarrado no antebraço, deixando a mão livre. O usuário pode carregar um objeto na mão do escudo, mas não manusear uma arma.',,,,,0,0,1,-1],
['Escudo Pesado',9,'T$ 15',6,'Normalmente feito de aço, este escudo é preso ao antebraço e também deve ser empunhado com firmeza, impedindo o usuário de usar aquela mão.',,,,,0,0,2,-2],
['Água Benta',1,'T$ 10',4,'Produzida com a magia Abençoar Alimentos, esta água sagrada é um poderoso recurso na luta contra o mal. Para usar a água benta, você gasta uma ação padrão e escolhe um morto-vivo, demônio ou diabo em alcance curto (a água benta é inofensiva contra outras criaturas). O alvo sofre 2d10 pontos de dano de luz (Reflexos CD Sab reduz à metade).',,,,,0,0,,],
['Algemas',1,'T$ 15',5,'Um par de algemas para criaturas Médias. Prender uma criatura que não esteja indefesa exige empunhar a algema, agarrar o alvo (veja “Manobras de Combate”, no Capítulo 5) e vencer um novo teste de agarrar contra ela. Você pode prender os dois pulsos da pessoa (–5 em testes que exijam o uso das mãos, impede conjuração) ou um dos pulsos dela em um objeto imóvel adjacente, caso haja, para impedir que ela se mova. Escapar das algemas exige uma ação completa e um teste de Acrobacia contra CD 30 ou Força (CD 25) — ou ter as chaves...',,,,,0,0,,],
['Arpéu',1,'T$ 5',5,'Um gancho de aço amarrado na ponta de uma corda para se fixar em muros, janelas, parapeitos de prédios... Prender um arpéu exige um teste de Pontaria (CD 15). Subir um muro com a ajuda de uma corda fornece +5 no teste de Atletismo.',,,,,0,0,,],
['Bandoleira de Poções',1,'T$ 20',5,'Um cinto de couro com bolsos que comportam pequenos frascos. Se você estiver vestindo uma bandoleira, pode sacar itens alquímicos e poções como uma ação livre.',,,,,0,0,,],
['Barraca',1,'T$ 10',5,'Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de Sobrevivência para acampar.',,,,,0,0,,],
['Corda',1,'T$ 1',5,'Um rolo com 10 metros de corda de cânhamo, o mesmo tipo usado em navios. Possui diversas utilidades: pode ajudar a descer um buraco ou muro (+5 em testes de Atletismo nessas situações), amarrar pessoas etc. Dar um nó firme ou especial (por exemplo, capaz de deslizar, se desfazer com um puxão etc.) exige um teste de Destreza (CD 15). Arrebentar a corda exige 2 pontos de dano de corte ou uma ação padrão e um teste de Força (CD 20).',,,,,0,0,,],
['Espelho',1,'T$ 10',5,'Além de garantir que você esteja apresentável, este pequeno espelho de metal polido possui diversas utilidades, como observar cantos e fazer sinais de luz.',,,,,0,0,,],
['Lampião',1,'T$ 7',5,'Um cilindro com uma alça e duas portinholas. Uma chama alimentada por óleo é acesa dentro do cilindro e uma das portinholas aberta deixa a luz sair. Acender um lampião é uma ação padrão e sua luz ilumina um raio com alcance médio. Um frasco de óleo (veja abaixo) dura uma cena.',,,,,0,0,,],
['Mochila',1,'T$ 2',1,'Uma bolsa de lona com tiras para ser carregada nas costas.',,,,,0,0,,],
['Mochila de Aventureiro',1,'T$ 50',1,'Feita de couro resistente, esta mochila é repleta de bolsos para prender equipamento. Vestir uma mochila de aventureiro aumenta sua capacidade de carga em 2 espaços (ela própria não gasta um espaço).',,,,,0,0,,],
['Óleo',1,'T$ 0,1',4,'Um frasco com óleo inflamável para lampião. Você pode atirar o frasco em uma criatura em alcance curto. Se ela sofrer dano de fogo até o fim do seu próximo turno, sofre 1d6 pontos de dano adicional e fica em chamas.',,,,,0,0,,],
['Organizador de Pergaminhos',1,'T$ 25',5,'Um estojo de madeira ou couro rígido. Se você estiver vestindo um organizador de pergaminhos, pode sacar pergaminhos como uma ação livre.',,,,,0,0,,],
['Pé de Cabra',1,'T$ 2',5,'Esta barra de ferro fornece +5 em testes de Força para abrir portas, janelas e baús fechados. Um pé de cabra pode ser usado como arma, com as estatísticas de uma clava.',,,,,0,0,,],
['Saco de Dormir',1,'T$ 1',5,'Um colchão com uma coberta fina o bastante para ser enrolada e amarrada, é especialmente útil para aventureiros, que nunca sabem onde vão passar a noite. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM (veja página 106).',,,,,0,0,,],
['Símbolo Sagrado',1,'T$ 5',5,'Um medalhão de madeira ou metal com o símbolo de uma divindade. Você precisa estar vestindo (normalmente com uma corrente ao redor do pescoço) ou empunhando um símbolo sagrado para usar qualquer poder concedido.',,,,,0,0,,],
['Tocha',1,'T$ 0,1',5,'Um bastão de madeira com algum combustível na ponta (geralmente trapos embebidos em parafina). Acender uma tocha é uma ação padrão. Ela ilumina um raio com alcance curto e dura uma cena. Pode ser usada como uma arma simples leve (dano 1d4 de impacto mais 1 de fogo, crítico x2).',,,,,0,0,,],
['Vara de Madeira (3m)',1,'T$ 0,2',5,'Uma haste com 3m de comprimento. Útil para alcançar pontos distantes, mas frágil demais para servir como arma.',,,,,0,0,,],
['Alaúde Élfico',15,'T$ 300',5,'Feito com madeira de alta qualidade e manufatura delicada, este alaúde gera notas vívidas e emocionantes. Enquanto empunha este item, você pode usar a habilidade Inspiração como uma ação de movimento. Conta como um instrumento musical.',,,,,0,0,,],
['Coleção de Livros',15,'T$ 75',5,'Uma pequena coleção de tomos e tratados sobre um assunto. Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido quando o item é comprado ou fabricado).',,,,,0,0,,],
['Equipamento de Viagem',15,'T$ 10',5,'Um saco de lona com pederneira (pedra para fazer fogo), panelas e talheres para cozinhar, anzól  e linha para pescar, uma pequena pá e outras ferramentas úteis para sobreviver nos ermos. Um personagem sem este item sofre –5 em testes de Sobrevivência para fazer um acampamento. Não inclui saco de dormir.',,,,,0,0,,],
['Estojo de Disfarces',15,'T$ 50',5,'Um conjunto de cosméticos, tintas para cabelo e algumas próteses simples (como bigodes e narizes falsos). Um personagem sem este item sofre –5 em testes de Enganação para disfarce.',,,,,0,0,,],
['Flauta Mística',15,'T$ 150',5,'Um instrumento delicado, repleto de runas e pequenas gemas místicas. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1. Conta como um instrumento musical.',,,,,0,0,,],
['Gazua',15,'T$ 5',5,'Uma barra fina de ferro, com a ponta torta ou em forma de gancho. Um personagem sem este item sofre –5 em testes de Ladinagem para abrir fechaduras.',,,,,0,0,,],
['Instrumento de Ofício',15,'T$ 30',5,'Existe uma versão deste item para cada perícia de Ofício. Por exemplo, martelo, pregos e serrote para Ofício (carpinteiro), pergaminhos em branco, tinta e pena para Ofício (escriba) e assim por diante. Um personagem sem os instrumentos de seu Ofício sofre –5 nessa perícia.',,,,,0,0,,],
['Instrumento Musical',15,'T$ 35',5,'Um instrumento típico, como um bandolim, flauta ou lira. \n• Você precisa empunhar um instrumento musical com as duas mãos para receber seus benefícios e para usar Músicas de Bardo (veja a página 45).\n• Instrumentos musicais podem ser usados como esotéricos por bardos (permitindo que lance magias usando a mão que empunha o instrumento).\n• Instrumentos musicais podem receber melhorias de ferramentas (contam como itens ligados a Atuação) e de esotéricos (mas afetam apenas magias lançadas por bardos).',,,,,0,0,,],
['Luneta',15,'T$ 100',5,'Este instrumento valioso consiste de um cilindro metálico com duas lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além.',,,,,0,0,,],
['Maleta de Medicamentos',15,'T$ 50',5,'Caixa de madeira com ervas, unguentos, bandagens e outros materiais úteis. Um personagem sem este item sofre –5 em Cura.',,,,,0,0,,],
['Sela',15,'T$ 20',5,'Uma peça de couro e pelego colocada sobre o lombo da montaria, sobre a qual o cavaleiro se senta. Inclui arreios para conduzir o animal. Um personagem montado em uma montaria sem sela sofre –5 em testes de Cavalgar. Usada no animal, a sela não ocupa espaço de carga do personagem.',,,,,0,0,,],
['Tambor das Profundezas',15,'T$ 80',5,'Um instrumento típico de anões de Doherimm, capaz de sons graves e retumbantes. Enquanto empunha este item, o alcance da habilidade Inspiração e de qualquer Música de Bardo é dobrado. Conta como um instrumento musical.',,,,,0,0,,],
['Andrajos',21,'T$ 1',1,'Roupas típicas de um aldeão. Incluem camisa larga e calças soltas ou blusa e saia. Não inclui botas — os mais pobres andam descalços. Impõe –2 em perícias baseadas em Carisma contra pessoas que se importam com classe social.',,,,,0,0,,],
['Bandana',21,'T$ 5',5,'Um lenço tipicamente usado por bandidos e piratas. Fornece +1 em Intimidação.',,,,,0,0,,],
['Botas Reforçadas',21,'T$ 20',5,'Grossas e resistentes, estas botas de cano alto protegem contra perigos do terreno. Aumentam seu deslocamento em +1,5m se ele for reduzido por terreno difícil (após a redução).',,,,,0,0,,],
['Camisa Bufante',21,'T$ 25',5,'Blusa colorida, com mangas e golas longas e encrespadas. Fornece +1 em Atuação.',,,,,0,0,,],
['Capa Esvoaçante',21,'T$ 25',5,'Favorita entre heróis ousados, esta capa de seda produz movimentos amplos e chamativos, que fornecem +1 em Enganação.',,,,,0,0,,],
['Capa Pesada',21,'T$ 15',5,'Uma capa de couro grossa e resistente. Protege e aquece o corpo, fornecendo +1 em Fortitude.',,,,,0,0,,],
['Casaco Longo',21,'T$ 20',5,'Feito de peles ou couro grosso forrado com lã, e impermeabilizado com óleo, este casaco é quente e pesado. Fornece +5 em testes de Fortitude para resistir a efeitos de frio, mas impõe penalidade de armadura de –2.',,,,,0,0,,],
['Chapéu Arcano',21,'T$ 50',5,'Com pinturas e bordados de símbolos místicos, este chapéu pontudo ajuda a canalizar energias mágicas. Ele fornece +1 ponto de mana, mas apenas se você possuir a habilidade de classe Caminho do Arcanista.',,,,,0,0,,],
['Engeite de Elmo',21,'T$ 15',5,'Um adorno chamativo, como crina de cavalo, plumas, asas ou um totem de animal. Fornece resistência a medo +2.',,,,,0,0,,],
['Farrapos de Ermitão',21,'T$ 1',5,'Trapos e “adornados” com plantas e raízes. Uma pessoa vestindo farrapos de ermitão não parece muito civilizada, e sofre –2 em Diplomacia e em testes de Investigação para interrogar. Entretanto, recebe +2 em Adestramento.',,,,,0,0,,],
['Gorro de Ervas',21,'T$ 75',5,'Formado por duas camadas de tecido, este chapéu é preenchido com ervas preparadas para auxiliar a concentração do usuário. Fornece +1 em Vontade.',,,,,0,0,,],
['Luva de Pelica',21,'T$ 5',5,'Estas luvas delicadas preservam o tato e impedem que o suor deixe os dedos escorregadios. Fornecem +1 em Ladinagem.',,,,,0,0,,],
['Manopla',21,'T$ 10',5,'Luva metálica que permite socos mais perigosos — o dano de seus ataques desarmados torna-se letal. Uma manopla conta como uma arma para receber melhorias e encantos para usá-los em seus ataques desarmados.',,,,,0,0,,],
['Manto Camuflado',21,'T$ 12',5,'Um manto camuflado é feito para um tipo de terreno específico (veja a habilidade Explorador, na página 51). Por exemplo, um manto camuflado para floresta pode ser verde e marrom e coberto de folhas, enquanto um manto urbano pode ser cinza ou negro. Usar um manto camuflado no terreno correto fornece +2 em Furtividade.',,,,,0,0,,],
['Manto Eclesiástico',21,'T$ 20',5,'Um manto típico de igrejas e templos. Fornece +1 em Religião.',,,,,0,0,,],
['Robe de Mago',21,'T$ 50',5,'Um manto longo, adornado com temas arcanos. Fornece +1 em Misticismo.',,,,,0,0,,],
['Sapatos de Camurça',21,'T$ 8',5,'Leves e resistentes, aprimoram o equilíbrio e a firmeza dos pés, fornecendo +1 em Acrobacia.',,,,,0,0,,],
['Tabardo',21,'T$ 10',5,'Uma peça de tecido usada como um colete, cobrindo o peito e as costas. Geralmente ostenta a heráldica de um reino, igreja, casa nobre ou ordem de cavaleiros. Fornece +1 em Diplomacia.',,,,,0,0,,],
['Traje de Viajante',21,'T$ 10',1,'Inclui botas, calças ou saias, cinto, camisa de linho e capa com capuz. A roupa padrão de aventureiros.',,,,,0,0,,],
['Veste de Seda',21,'T$ 25',5,'Roupas de luxo, feitas sob medida e adequadas à nobreza e realeza. Inclui algumas joias, como aneis e colares. Em certos ambientes (um baile, um salão de palácio), um personagem que não esteja vestindo este item sofre –5 em perícias baseadas em Carisma.',,,,,0,0,,],
['Veste da Corte',21,'T$ 100',5,'Esta roupa leve e elegante deixa seus movimentos os mais livres possíveis. Fornece +1 em Reflexos.',,,,,0,0,,],
['Bolsa de Pó',14,'T$ 300',5,'Uma bolsa com pó multicolorido, fabricado a partir das pétalas trituradas de flores que nascem apenas na Pondsmânia. Quando lança uma magia de encantamento ou ilusão, você recebe +2 PM para gastar em aprimoramentos.',,,,,0,0,,],
['Cajado Arcano',14,'T$ 1000',6,'Um cajado típico, feito de madeira de boa qualidade e entalhado com runas. O limite de PM que você pode gastar em magias arcanas e a CD para resistir a elas aumentam em +1. Para fornecer seus benefícios, um cajado precisa ser empunhado com as duas mãos. Ele pode ser usado como arma, com as estatísticas de um bordão.',,,,,0,0,,],
['Cetro Elemental',14,'T$ 750',5,'Este cetro de madeira ou metal possui uma pedra preciosa em sua ponta. De acordo com a pedra, ele será afinado a um tipo de dano: esmeralda (ácido), topázio (eletricidade), rubi (fogo), safira (frio). Quando lança uma magia que causa dano do tipo do cetro, o dano da magia aumenta em um dado do mesmo tipo.',,,,,0,0,,],
['Costela de Lich',14,'T$ 300',5,'Esta varinha é feita a partir do osso de um morto-vivo. Suas magias causam +1d6 pontos de dano de trevas. Se estiver empunhando esta varinha você não recupera PV por efeitos mágicos de cura.',,,,,0,0,,],
['Dedo de Ente',14,'T$ 200',5,'Uma varinha feita a partir da madeira de uma árvore senciente. Sempre que lançar uma magia, role 1d4. Com um resultado 4, você recupera 1 PM.',,,,,0,0,,],
['Luva de Ferro',14,'T$ 150',5,'Um conjunto de dedais interligados por correntes. Suas magias arcanas pessoais que concedem bônus na Defesa ou em testes de resistências têm esse bônus aumentado em +1.',,,,,0,0,,],
['Medalhão de Prata',14,'T$ 750',5,'Gravado com uma runa pessoal do conjurador, este medalhão de prata diminui em –1 PM o custo de magias de alcance pessoal.',,,,,0,0,,],
['Orbe Cirstalina',14,'T$ 750',5,'Esta esfera perfeita concentra seu poder mágico. O limite de PM que você pode gastar em magias arcanas aumenta em +1.',,,,,0,0,,],
['Tomo Hermético',14,'T$ 1500',5,'Um livro de tratados que aumentam a sua compreensão sobre uma escola de magia específica. A CD para resistir a suas magias arcanas dessa escola aumenta em +2.',,,,,0,0,,],
['Varinha Arcana',14,'T$ 100',5,'Uma varinha típica, feita de madeira de boa qualidade e entalhada com runas. A CD para resistir a suas magias arcanas aumenta em +1.',,,,,0,0,,],
['Ácido',11,'T$ 10',4,'Frasco de vidro contendo um ácido alquímico altamente corrosivo. Para usar o ácido, você gasta uma ação padrão e escolhe uma criatura em alcance curto. Essa criatura sofre 2d4 pontos de dano de ácido (Reflexos CD Des reduz à metade).',,,,,0,0,,],
['Bálsamo Restaurador',11,'T$ 10',4,'Uma pasta verde e fedorenta, feita de ervas medicinais. Esfregar essa pasta em um ferimento é uma ação completa e recupera 2d4 pontos de vida.',,,,,0,0,,],
['Bomba',11,'T$ 50',4,'Uma granada rudimentar. Para usar a bomba, você precisa empunhá-la, gastar uma ação de movimento para acender seu pavio e então uma ação padrão para arremessá-la em um ponto em alcance curto. Criaturas a até 3m desse ponto sofrem 6d6 pontos de dano de impacto (Reflexos CD Des reduz à metade).',,,,,0,0,,],
['Cosmético',11,'T$ 30',4,'Perfume ou maquiagem. Aplicar um cosmético é uma ação completa e fornece +2 em testes de perícias baseadas em Carisma até o fim da cena.',,,,,0,0,,],
['Elixir do Amor',11,'T$ 100',4,'Um humanoide que beba este líquido adocicado fica apaixonado pela primeira criatura que enxergar (condição enfeitiçado; Vontade CD Car anula). O efeito dura 1d3 dias.',,,,,0,0,,],
['Essência de Mana',11,'T$ 50',4,'Esta poção feita de ervas raras e compostos alquímicos recupera energia pessoal. Beber a essência de mana é uma ação padrão e recupera 1d4 pontos de mana.',,,,,0,0,,],
['Fogo Alquímico',11,'T$ 10',4,'Frasco de cerâmica contendo uma substância que entra em combustão em contato com o ar. Para usar o fogo alquímico, você gasta uma ação padrão e escolhe uma criatura em alcance curto. Essa criatura sofre 1d6 pontos de dano de fogo e fica em chamas. Um teste de Reflexos (CD Des) reduz o dano à metade e evita as chamas.',,,,,0,0,,],
['Pó do Desaparecimento',11,'T$ 100',4,'Uma criatura ou objeto coberto por este pó torna-se invisível (como em Invisibilidade) por 2d6 rodadas. O usuário não sabe quando a invisibilidade vai terminar.',,,,,0,0,,],
['Baga-de-fogo',13,'T$ 15',4,'Pequeno fruto vermelho, apreciado por seu sabor picante. Usado como catalisador, adiciona +1d6 de dano de fogo a magias.',,,,,0,0,,],
['Dente-de-dragão',13,'T$ 30',4,'Uma flor comum em regiões montanhosas, especialmente nas Sanguinárias, possui formato parecido com uma presa de monstro. Suas propriedades místicas aumentam o dano de magias em um dado do mesmo tipo.',,,,,0,0,,],
['Essência Abissal',13,'T$ 150',4,'Um líquido espesso, produzido através do sangue de criaturas demoníacas. Aumenta o dano de fogo de magias em um passo.',,,,,0,0,,],
['Líquen Lílás',13,'T$ 15',4,'Esta planta estranha tem aspecto cristalino, e cresce em abundância na região das Uivantes. Adiciona +1d6 de dano de frio a magias.',,,,,0,0,,],
['Musgo Púrpura',13,'T$ 15',4,'Encontrado em florestas fechadas, esse fungo cintilante possui propriedades que fornecem +2 na CD de magias de ilusão.',,,,,0,0,,],
['Ossos de Monstro',13,'T$ 15',4,'Pequenas falanges de criaturas monstruosas, tratadas com óleos alquímicos. Fornece +2 na CD de magias de necromancia.',,,,,0,0,,],
['Pó de Cristal',13,'T$ 30',4,'Uma pitada de pó de algum mineral cristalino puro, como quartzo ou topázio. Suas propriedades diminuem o custo de magias de encantamento em –1 PM.',,,,,0,0,,],
['Pó de Giz',13,'T$ 30',4,'Calcário esmagado em pó, uma substância comum que, usada como catalisador, diminui o custo de magias de convocação em –1 PM.',,,,,0,0,,],
['Saco de Sal',13,'T$ 15',4,'Um pequeno saco de couro com sal marinho. Fornece +2 na CD de magias de abjuração.',,,,,0,0,,],
['Seixo da Âmbar',13,'T$ 30',4,'Essa “gema” feita de seiva de árvore fossilizada diminui o custo de magias de transmutação em –1 PM.',,,,,0,0,,],
['Terra de Cemitério',13,'T$ 15',4,'Um punhado de terra cinzenta, colhida à noite de um cemitério. Adiciona +1d6 de dano de trevas a magias.',,,,,0,0,,],
['Beladona',20,'T$ 1500',4,'Planta extremamente tóxica que afeta o sistema nervoso da vítima. Ingestão, vítima fica paralisada (lenta) por 3 rodadas. A CD para fabricar e para resistir a este veneno aumenta em +5.',,,,,0,0,,],
['Bruma Sonolenta',20,'T$ 150',4,'Um gás sonífero. Inalação, vítima fica inconsciente (enjoada por 1 rodada).',,,,,0,0,,],
['Cicuta',20,'T$ 60',4,'Planta cuja ingestão pode causar náusea, dores e até morte. Ingestão, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV).',,,,,0,0,,],
['Essência de Sombra',20,'T$ 100',4,'Produzido a partir de compostos alquímicos que canalizam energia de trevas. Contato, vítima fica debilitada (fraca).',,,,,0,0,,],
['Névoa Tóxica',20,'T$ 30',4,'Este gás verde queima e corrói a pele e os pulmões. Inalação, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV).',,,,,0,0,,],
['Peçonha Comum',20,'T$ 15',4,'Veneno típico, extraído de animais ou plantas tóxicas. Contato, perde 1d12 PV.',,,,,0,0,,],
['Peçonha Concentrada',20,'T$ 90',4,'Dose concentrada da peçonha comum. Contato, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV).',,,,,0,0,,],
['Peçonha Potente',20,'T$ 600',4,'Veneno poderoso, extraído de animais ou plantas perigosos. Contato, perde 2d12 PV por rodada durante 3 rodadas (perde 2d12 PV).',,,,,0,0,,],
['Pó de Lich',20,'T$ 3000',4,'Veneno letal, usado para assassinar alvos poderosos. Ingestão, perde 4d12 PV por rodada durante 5 rodadas (perde 4d12 PV). A CD para fabricar e para resistir a este veneno aumenta em +5.',,,,,0,0,,],
['Riso de Nimb',20,'T$ 150',4,'Este gás púrpura faz a vítima rir descontroladamente e agir de forma caótica. Inalação, vítima fica confusa (confusa por 1 rodada).',,,,,0,0,,],
['Batata Valkariana',10,'T$ 2',4,'Batatas cortadas em tiras e mergulhadas em óleo fervente. Gordurentas e pouco nutritivas, são o tipo de prato que só é servido numa metrópole como Valkaria. Apesar disso, são uma unanimidade! Gostosas, deixam qualquer um empolgado para realizar façanhas. Você recebe +1d6 num único teste a sua escolha realizado nesse dia.',,,,,0,0,,],
['Bebida Comum',10,'T$ 0,1',4,'Uma caneca cheia da bebida mais comum no local, geralmente cerveja.',,,,,0,0,,],
['Gorad Quente',10,'T$ 18',4,'Gorad e leite, servidos quentes. Não tem erro. O gorad ativa o cérebro, fornecendo +2 PM temporários.',,,,,0,0,,],
['Macarrão de Yuvalin',10,'T$ 6',4,'Yuvalin é uma cidade mineradora em Zakharov, na fronteira com as Montanhas Uivantes. Seus habitantes criaram este prato reforçado (macarrão, bacon e creme de leite!) para encarar suas árduas jornadas de trabalho nas minas. Delicioso, o prato se espalhou por outras cidades e reinos. Você recebe +5 PV temporários.',,,,,0,0,,],
['Prato do Aventureiro',10,'T$ 1',4,'Um cozido de galinha com legumes, esta é uma refeição simples, mas nutritiva. Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de vida em +1 por nível.',,,,,0,0,,],
['Ração de Viagem (por dia)',10,'T$ 0,5',4,'Própria para viagens, uma porção desta ração alimenta uma pessoa por um dia. É feita de alimentos conservados, como carne defumada, frutas secas, pão, queijo e biscoitos. Se mantida seca dura bastante, mas quando molhada se estraga em 24 horas.',,,,,0,0,,],
['Refeição Comum',10,'T$ 0,3',4,'Uma refeição típica inclui pão, queijo, cozido de carne ou galinha com legumes e uma caneca de bebida.',,,,,0,0,,],
['Sopa de Peixe',10,'T$ 1',4,'Um cozido de peixe com verduras. É um prato humilde, mas garante um descanso relaxante. Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de mana em +1 por nível.',,,,,0,0,,],
['Alforjes',12,'T$ 30',1,'Sacos de couro feitos para serem presos em uma sela. Permitem que um parceiro montaria carregue até 10 espaços de item para você.',,,,,0,0,,],
['Cão de Caça',12,'T$ 150',1,'Este cachorro valente e leal pode ser usado como parceiro perseguidor por personagens treinados em Adestramento ou montaria por personagens Pequenos e Minúsculos.',,,,,0,0,,],
['Cavalo',12,'T$ 75',1,'A montaria mais comum no Reinado. Pode ser usado como parceiro montaria (veja a página 262). Cavalos sem treinamento se assustam facilmente, sendo necessário um teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',,,,,0,0,,],
['Cavalo de Guerra',12,'T$ 400',1,'A montaria mais comum no Reinado. Pode ser usado como parceiro montaria (veja a página 262). Cavalos de guerra não se assustam facilmente, sendo desnecessário um teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',,,,,0,0,,],
['Pônei',12,'T$ 5',1,'A montaria mais comum entre raças Pequenas. Pode ser usado como parceiro montaria (veja a página 262). Pôneis sem treinamento se assustam facilmente, sendo necessário um teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',,,,,0,0,,],
['Pônei de Guerra',12,'T$ 30',1,'A montaria mais comum entre raças Pequenas. Pode ser usado como parceiro montaria (veja a página 262). Pôneis de guerra não se assustam facilmente, sendo desnecessário um teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',,,,,0,0,,],
['Trobo',12,'T$ 60',1,'Estas enormes aves, também chamadas de pássaros-touros, são parecidas com avestruzes com chifres, couro e cascos. Não têm asas. Possuem poucas penas, que servem apenas como ornamento. Muito dóceis, trobos são usados em áreas rurais como animais de carga e tração, mas também podem ser usados como montaria (veja a página 262).',,,,,0,0,,],
['Balão Goblin',19,'T$ 200',1,'Feito de imensas bolsas de couro e outros tecidos remendados, com uma gôndola parecida com um grande cesto, o balão goblin é um engenho tecnológico sem igual em Arton. Um balão tem tamanho Enorme, deslocamento voo 12m, Defesa 5 (+ Des do baloeiro), 100 PV e pode carregar até 8 criaturas Médias ou 160 espaços. Ao contrário do que possa parecer, quedas de balões raramente são fatais. Quando o balão perde mais da metade de seus PV, começa a perder ar e flutua lentamente na direção do solo. Cada ocupante sofre 4d6 pontos de dano de impacto (Ref CD 15 reduz à metade). Um balão só cai de forma perigosa caso perca todos os seus PV. Neste caso, os ocupantes sofrem dano normal pela queda, de acordo com a altura. Remendar um balão em pleno voo exige uma ação completa e um teste de Ofício (artesanato) contra CD 15. Se você passar no teste, recupera 1d8 PV do balão.',,,,,0,0,,],
['Carroça',19,'T$ 30',1,'Veículo de duas ou quatro rodas, aberto, normalmente usado para transportar cargas pesadas. É puxada por dois cavalos ou um trobo. Inclui os arreios necessários para controlar os animais. Uma carroça tem tamanho Grande, deslocamento 9m, Defesa 8 (+ Des do condutor), 50 PV e pode carregar até 4 criaturas Médias ou 80 espaços.',,,,,0,0,,],
['Carruagem',19,'T$ 200',1,'Veículo de quatro rodas, capaz de transportar até quatro pessoas em uma cabine fechada, mais dois condutores do lado de fora. É puxada por dois cavalos ou um trobo. Inclui os arreios necessários para controlar os animais. Tem as mesmas estatísticas de uma carroça, mas fornece cobertura leve a seus passageiros.',,,,,0,0,,],
['Canoa',19,'T$ 50',1,'Construída a partir de um único tronco de árvore, é a mais simples das embarcações.',,,,,0,0,,],
['Veleiro',19,'T$ 10000',1,'Com três mastros, é o típico navio de viagem, muito popular entre mercadores.',,,,,0,0,,]];