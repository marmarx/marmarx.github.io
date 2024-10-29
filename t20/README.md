# marmarx.github.io/t20

Tarefas pendentes:


Tarefas canceladas:
- adicionar log de alterações feitas pelo usuário >> motivo: não há necessidade
- adicionar suporte para retro-gerenciamento de: armas/armaduras e equipamentos >> motivo: pode confundir o usuário

<b>Histórico de versões:</b>

v1.6
- adicionado suporte para criar magias personalizadas
- adicionado suporte para filtrar e personalizar magias existentes
- adicionado itens mágicos: armas, armaduras, escudos, e acessórios
- lista de armas e armaduras foram separadas em duas listas distintas
- adicionado a opção de usar **negrito** (*) e _itálico_ (_)
- correção de bugs e outros melhoramentos menores

v1.5.8
- adicionado suporte para imprimir/exportar em PDF
- layout de impressão editável criado e revisado
- correção de bugs e outros melhoramentos menores

v1.5.6
- adicionado Web Worker para reduzir tempo de carregamento da página na montagem de listas de seleção e listas de magias e poderes
- adicionado suporte para filtrar e personalizar poderes existentes

v1.5.5
- adicionada a possibilidade de usar o teclado de dados para definir rolagens de ataque
- correção de bugs e outros melhoramentos menores

v1.5.3
- adicionada a possibilidade de rolar dados diretamente nos marcadores de vida e mana - útil quando se estiver tomando Essência de Mana ou recebendo Curar Ferimentos
- melhoramentos na função de rolagem de dados (reduzido tempo de execusão)
- correção de bugs e outros melhoramentos menores

v1.5
- adicionada os modificadores "rra" (reroll above) e "rrb" (reroll below) no teclado e rolagens de dados - para habilidades como Destruidor de Guerreiros
- adicionado suporte para inserir poderes personalizados
- adicionada seleção de ação para ataques e tempo de recarga de armas
- adicionado regexp em todos os inputs para evitar injeção de código
- correção de comportamento sobreposto do teclado
- correção de bugs e outros melhoramentos menores

v1.4
- adicionados dicas iniciais de uso para usuários novos
- alteração da classe de valores de dados explodidos (serão mostrados em verde agora)
- PV e PM serão calculados automaticamente mediante a alteração de foco entre inputs
- adicionado suporte para escolha livre de perícia utilizada para atacar - Bardos precisam atacar com atuação :)
- correção do modo noturno na alteração do plano fundo (correção de bug)
- correção de outros bugs e outros melhoramentos menores

v1.3
- criado banco de dados para equipamentos, armas e armaduras
- adicionado suporte para navegar, filtrar e selecionar equipamentos, armas e armaduras do banco criado
- automatização da condição/estado de sobrecarga e aumento do tamanho do inventário por meio da adição de mochilas e alforjes
- adicionado uma imagem de fundo
- correção de bugs e outros melhoramentos menores

v1.2
- simplificação das funções relacionadas à criação de ataques
- marcador de PVs e PMs movido para sessão de rolagens - os marcadores devem estar disponíveis a qualquer momento, independente da sessão em que o usuário se encontre
- correção de bug ao filtrar poderes

v1.1
- adicionado suporte para criar, editar e gerenciar condições personalizadas pelo usuário - Druidas ficarão felizes com forma selvagem automática :)

v1.0
- adicionada seção de condições
- adicionado um marcador de PVs e PMs em condições
- listadas as condições básicas e suporte para ativar condições individualmente << Minimum Viable Product (MVP) >>

v0.9
- adicionada seção de equipamento
- adicionado suporte para criar, editar e gerenciar equipamentos
- adicionado cálculo e gestão de carga

v0.8
- adicionada seção de combate
- adicionado suporte para criar, editar e gerenciar ataques
- adicionado suporte para gerenciar estatísticas de defesa
- alterado o rolador de dados para marcar críticos conforme a margem de ameaça do ataque/arma

v0.7
- criado banco de dados de poderes (classes, raças, origens e gerais)
- adicionadas seção de talentos
- adicionado suporte para pesquisar, adicionar e remover talentos

v0.6
- adicionada seção de habilidades (for, des, con, int, sab, car)
- adicionado suporte para editar e gerenciar estatísticas de habilidades
- adicionado um rolador digital de dados, incluindo os seguintes modificadores de rolagem: '!' (explosão), 'kh' (keep high), 'kl' (keep low), 'eh' (eliminate high), 'el' (eliminate low), '#' (rolagens paralelas), críticos positivos e negativos serão marcados

v0.5
- criado banco de dados de magias
- adicionadas seção de magias
- adicionado suporte para pesquisar, adicionar e remover magias << propósito inicial deste projeto >>

v0.4
- adicionadas as seções de personagem, anotações e de configuração

v0.3
- produzida a borda T20 para elementos HTML (deu muito trabalho fazer ela cooperar com o CSS e produzir elementos responsivos)

v0.2
- adicionado suporte para salvar (automático), carregar, exportar e importar personagens

v0.1
- projeto criado
- adicionadas as seções de personagem, anotações e de configuração

Observações: muitas coisas aconteceram nesse projeto, fui iniciar histórico de alterações apenas por volta de v0.8, então carece de detalhes :)

-------------------------------------------------

Personal notes:
> manifest.json 'scope' must:
  - contain the full URL, for example: https://marmarx.github.io/t20/
  - match 'id' and 'start_url', for example: /t20/
> HTML 'serviceWorker' handler 'scope' and 'url' under mist match manifest.json 'start_url', for example: /t20/sw.js and /t20/
> sw.js 'cache_resources' must list the full path to each file, the scope doesn't seem to reduce file paths in any way, for example: /t20/ for index.html and /t20/src/favicon.png for favicon
