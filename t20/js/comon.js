const rd = ['Ácido', 'Eletricidade', 'Fogo', 'Frio', 'Luz', 'Trevas', 'Mágico'];

const raca = ['raça','Anão','Dahllan','Elfo','Goblin','Golem','Humano','Hynne','Kliren','Lefou','Medusa','Minotauro','Osteon','Qareen','Sereia/Tritão','Sílfide','Suraggel: Aggelus','Suraggel: Sulfure','Trog','Meio-Orc','Orc','Tabrachi','Ogro','Bugbear','Hobgoblin','Centauro','Gnoll','Kallyanach','Kaijin','Kappa','Mashin','Nezumi','Tengu','Minauro','Kobolts','Harpia','Ceratops','Pteros','Velocis','Voracis','Yidishan','Moreau','Elfo-do-Mar','Nagah','Finntroll'];

const origem = ['origem','Acólito','Amigo dos Animais','Amnésico','Aristocrata','Artesão','Artista','Assistente de Laboratório','Batedor','Capanga','Charlatão','Circense','Criminoso','Curandeiro','Eremita','Escravo','Estudioso','Fazendeiro','Forasteiro','Gladiador','Guarda','Herdeiro','Herói Camponês','Marujo','Mateiro','Membro de Guilda','Mercador','Minerador','Nômade','Pivete','Refugiado','Seguidor','Selvagem','Soldado','Taverneiro','Trabalhador','Agricultor Sambur','Amazona de Hippion','Amoque Púrpura','Anão de Armas','Andarilho Ubaneri','Aprendiz de Dragoeiro','Aprendiz de Drogadora','Aristocrata Dai’zenshi','Armeiro Armado','Aspirante a Herói','Assistente Forense','Bandoleiro da Fortaleza','Barão Arruinado','Catador da Cidade Velha','Cativo das Fadas','Competidor do Circuito','Cosmopolita','Cria da Favela','Criado pelas Voracis','De Outro Mundo','Descendente Colleniano','Desertor da Supremacia','Duplo Feérico','Duyshidakk Infiltrado','Emissário Ubaner','Escudeiro da Luz','Escudeiro Solitário','Estandarte Vivo','Estudante da Academia','Estudante do Colégio Real','Explorador de Ruínas','Filhote da Revoada','Futura Lenda','Ginete de Tumarkhân','Grumete Pirata','Guardião Glacial','Iniciado dos Caça-Monstros','Insurgente Tapistano','Irmão sem Esporas','Legionário','Lenhador de Tollon','Liricista de Lenórienn','Membro do Principado','Nitamuraniano','Nobre Zakharoviano','Nômade Sar-Allan','Pescador Parrudo','Plebeu Arcano','Prisioneiro das Catacumbas','Procurado: Vivo ou Morto','Profeta do Akzath','Querido Filho','Rebelde Agitador','Receptador das Nuvens','Recruta Arcano','Recruta da Fênix','Sábio Matemático','Selvagem Sanguinário','Sucateiro de Batalhas','Tamalu','Tocado pela Dama Altiva','Tocado pelo Indomável','Tradicionalista Svalano','Trapaceiro Ahleniense','Turista da Academia','Um com os Kami'];

const classe = ['classe','Arcanista','Bárbaro','Bardo','Bucaneiro','Caçador','Cavaleiro','Clérigo','Druida','Guerreiro','Inventor','Ladino','Lutador','Miragem','Místico','Nobre','Paladino','Samurai'];

const divindade = ['divindade','Aharadak','Allihanna','Arsenal','Azgher','Hyninn','Kallyadranoch','Khalmyr','Lena','Lin-Wu','Marah','Megalokk','Nimb','Oceano','Sszzaas','Tanna-Toh','Tenebra','Thwor','Thyatis','Valkaria','Wynna','O Bem','O Mal','O Panteão'];

const peso_item = ['Espaço por unidade','Não ocupa espaço','⅛','¼','½',1,2,3,4,5,6,7,8,9,10];
var peso = '<option value="" disabled selected>Espaço por unidade</option>';
var pesos = ['Espaço por unidade'];
for(var i=1;i<peso_item.length;i++){
 var str = i>1?((i<5?' de':'') + ' espaço' + (i>5?'s':'')):'';
 peso += '<option value="'+i+'">'+peso_item[i]+str+'</option>'
 pesos.push(peso_item[i]+str);
}

const tipo_item = ['Tipo de item','Equip. de Aventura','Arma Simples','Arma Marcial','Arma Exótica','Arma de Fogo','Munição','Armadura Leve','Armadura Pesada','Escudo',
'Alimentação','Alquímicos','Animais','Catalisadores','Esotéricos','Ferramentas','Item Mágico','Pergaminhos','Poções','Veículos','Venenos','Vestuário','Outro'];