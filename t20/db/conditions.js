const cond = {
'Selecione um efeito':'disabled','Geral':'disabled','Tamanho':-1,'Deslocamento':[],'Pontos de Vida':0,'Pontos de Mana':0,'CD Magias':0,'Habilidades':'disabled','Força':0,'Destreza':0,'Constituição':0,'Inteligência':0,'Sabedoria':0,'Carisma':0,'Combate':'disabled','Ataques':0,'Dano':0,'Defesa (outros)':0,'Armadura (bonus)':0,'Armadura (penalidade)':0,'Escudo (bonus)':0,'Escudo (penalidade)':0,'Redução de Dano':'disabled','RD (todas)':0,'Ácido':0,'Eletricidade':0,'Fogo':0,'Frio':0,'Luz':0,'Trevas':0,'Mágico':0,'Perícias':'disabled','Perícias (todas)':0,'Acrobacia':0,'Adestramento':0,'Atletismo':0,'Atuação':0,'Cavalgar':0,'Conhecimento':0,'Cura':0,'Diplomacia':0,'Enganação':0,'Fortitude':0,'Furtividade':0,'Guerra':0,'Iniciativa':0,'Intimidação':0,'Intuição':0,'Investigação':0,'Jogatina':0,'Ladinagem':0,'Luta':0,'Misticismo':0,'Nobreza':0,'Percepção':0,'Pilotagem':0,'Pontaria':0,'Reflexos':0,'Religião':0,'Sobrevivência':0,'Vontade':0
}

const conditions = [
['Abalado','Medo','O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.',{'Perícias (todas)':-2}],
['Agarrado','Movimento','O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.',{'Ataques':-2,}],
['Alquebrado','Mental','O custo em pontos de mana das habilidades do personagem aumenta em +1.',{}],
['Apavorado','Medo','O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.',{'Perícias (todas)':-5,}],
['Atordoado','Mental','O personagem fica desprevenido e não pode fazer ações.',{}],
['Caído','','Deitado no chão. O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições).',{'Luta':-5,'Deslocamento':'reduzido para 1,5m'}],
['Cego','Sentidos','O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.',{'Acrobacia':-5,'Atletismo':-5,'Cavalgar':-5,'Furtividade':-5,'Iniciativa':-5,'Ladinagem':-5,'Luta':-5,'Pilotagem':-5,'Pontaria':-5,'Reflexos':-5,}],
['Confuso','Mental','O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.',{}],
['Debilitado','','O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.',{'Acrobacia':-5,'Atletismo':-5,'Cavalgar':-5,'Constituição':-5,'Destreza':-5,'Força':-5,'Fotitude':-5,'Furtividade':-5,'Iniciativa':-5,'Ladinagem':-5,'Luta':-5,'Pilotagem':-5,'Pontaria':-5,'Reflexos':-5,}],
['Desprevenido','','Despreparado para reagir. O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa ver.',{'Defesa':-5,'Reflexos':-5,}],
['Doente','Metabolismo','Sob efeito de uma doença.',{}],
['Em Chamas','','O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.',{}],
['Enfeitiçado','Mental','O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.',{}],
['Enjoado','Metabolismo','O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro). Metabolismo.',{}],
['Enredado','Movimento','O personagem fica lento, vulnerável e sofre –2 em testes de ataque.',{'Ataques':-2,}],
['Envenenado','Veneno','O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). A descrição do veneno determina a duração dele (casa nada seja dito, a condição dura pela cena).',{}],
['Esmorecido','Mental','O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.',{'Adestramento':-5,'Atuação':-5,'Carisma':-5,'Conhecimento':-5,'Cura':-5,'Diplomacia':-5,'Enganação':-5,'Guerra':-5,'Inteligência':-5,'Intimidação':-5,'Intuição':-5,'Investigação':-5,'Jogatina':-5,'Misticismo':-5,'Nobreza':-5,'Percepção':-5,'Religião':-5,'Sabedoria':-5,'Sobrevivência':-5,'Vontade':-5,}],
['Exausto','Cansaço','O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.',{}],
['Fascinado','Mental','Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.',{'Percepção':-5,}],
['Fatigado','Cansaço','O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.',{}],
['Fraco','','O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.',{'Acrobacia':-2,'Atletismo':-2,'Cavalgar':-2,'Constituição':-2,'Destreza':-2,'Força':-2,'Fotitude':-2,'Furtividade':-2,'Iniciativa':-2,'Ladinagem':-2,'Luta':-2,'Pilotagem':-2,'Pontaria':-2,'Reflexos':-2,}],
['Frustrado','Mental','O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.',{'Adestramento':-2,'Atuação':-2,'Carisma':-2,'Conhecimento':-2,'Cura':-2,'Diplomacia':-2,'Enganação':-2,'Guerra':-2,'Inteligência':-2,'Intimidação':-2,'Intuição':-2,'Investigação':-2,'Jogatina':-2,'Misticismo':-2,'Nobreza':-2,'Percepção':-2,'Religião':-2,'Sabedoria':-2,'Sobrevivência':-2,'Vontade':-2,}],
['Imóvel','Movimento','Todas as formas de deslocamento do personagem são reduzidas a 0m.',{'Deslocamento':'reduzido para 0m (imóvel)',}],
['Inconsciente','','O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.',{}],
['Indefeso','','O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.',{'Defesa':-10,}],
['Lento','Movimento','Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.',{'Deslocamento':'reduzido pela metade'}],
['Ofuscado','Sentidos','O personagem sofre –2 em testes de ataque e de Percepção.',{'Ataques':-2,'Percepção':-2,}],
['Paralisado','Movimento','O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais.',{}],
['Pasmo','Mental','O personagem não pode fazer ações.',{}],
['Petrificado','Metamorfose','O personagem fica inconsciente e recebe redução de dano 8.',{'RD':8,}],
['Sangrando','','No início de seus turnos, o personagem deve fazer um teste de Constituição (CD 15). Se passar, estabiliza e remove essa condição. Se falhar, perde 1d6 pontos de vida e continua sangrando.',{}],
['Sobrecarregado','Movimento','O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido –3m. Para remover essa condição, reduza o peso carregado em itens.',{'Defesa':-5,'Deslocamento':'reduzido em 3m',}],
['Surdo','Sentidos','O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.',{'Iniciativa':-5,}],
['Surpreendido','','Não ciente de seus inimigos. O personagem fica desprevenido e não pode fazer ações.',{}],
['Vulnerável','','O personagem sofre –2 na Defesa.',{'Defesa':-2,}]
]