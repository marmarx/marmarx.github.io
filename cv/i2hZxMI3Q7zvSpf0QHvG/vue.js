Vue.createApp({
  data: () => ({
    base:{
      name:'Marco Martins',
      phone:'+55 16 98815 0642', //'&#43;&#53;&#53;&#32;&#49;&#54;&#32;&#57;&#32;&#56;&#56;&#49;&#53;&#32;&#48;&#54;&#52;&#50',
      email:'marcoftmartins@gmail.com', //'&#109;&#97;&#114;&#99;&#111;&#102;&#116;&#109;&#97;&#114;&#116;&#105;&#110;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109',
      github:'marmarx',
      linkedin:'marco-martins-b35a02286'
    },
    locale:'en',
    locales:{en:'English',pt:'Português'},
    location:{
      en:'Vitória/ES, Brazil',
      pt:'Vitória/ES, Brasil'
    },
    headings:{
      en:{idioms:'Languages',skills:'Skills',intro:'Intro',edu:'Education',exp:'Professional Experience',courses:'Courses and Certifications',results:'Achievements',activities:'Activities'},
      pt:{idioms:'Idiomas',skills:'Habilidades',intro:'Intro',edu:'Formação',exp:'Experiência Profissional',courses:'Courses and Certifications',results:'Principais Resultados',activities:'Atividades'}
    },
    intro:{
      en:'I love to learn new things while brainstorming through tinkering (aka "thinkering"). I\'d rather spend my time creating and making stuff (physical or digital), I just ain\'t got the charisma to be a maker on YouTuber.',
      pt:'Adoro aprender coisas novas enquanto faço brainstorming por meio de "tinkering" (também conhecido como "thinkering"). Prefiro passar meu tempo criando e fazendo coisas (físicas ou digitais), só não tenho carisma para ser um criador no YouTuber.'
    },
    languages:{
      en:[
        {name:'Portuguese',details:'primary',level:'100'},
        {name:'English - C2',details:'',level:'90'},
        {name:'German - B2',details:'',level:'65'},
        {name:'Spanish - A2',details:'',level:'25'},
        {name:'Italian - A1',details:'',level:'15'}
      ],
      pt:[
        {name:'Português',details:'primária',level:'100'},
        {name:'Inglês - C2',details:'',level:'90'},
        {name:'Alemão - B2',details:'',level:'65'},
        {name:'Espanhol - A2',details:'',level:'25'},
        {name:'Italiano - A1',details:'',level:'15'}
      ]
    },
    skills:{
      en:[
        {name:'MS Office',details:'Word, Excel + Vba, Powerpoint, Project, Access, Power BI',level:'90'},
        {name:'Google Docs',details:'Docs, Sheets + Scripts, Slides, Forms',level:'100'},
        {name:'Adobe',details:'PDF, Fireworks, InDesign',level:'90'},
        {name:'Canva Design',details:'',level:'100'},
        {name:'Autodesk AutoCAD',details:'',level:'80'},
        {name:'ESRI ArcGIS',details:'',level:'60'},
        {name:'Google Maps',details:'Earth, MyMaps, Maps platform API',level:'60'},
        {name:'Frontend',details:'HTML 5, CSS 3, Javascript, Vue 3',level:'70'},
        {name:'Backend',details:'PHP, Javascript, MongoDB Atlas, Node.js',level:'75'},
        {name:'WordPress.org',details:'',level:'100'},
        {name:'AI',details:'Google Gemini, ChatGPT 4, Claude',level:'90'},
        {name:'Arduino ESP Environment',details:'',level:'80'},
        {name:'DJI Drones',details:'',level:'100'},
        {name:'Agile Management',details:'PDCA, Scrum, Kanban',level:'90'}
      ],
      pt:[
        {name:'MS Office',details:'Word, Excel + Vba, Powerpoint, Project, Access, Power BI',level:'90'},
        {name:'Google Docs',details:'Docs, Sheets + Scripts, Slides, Forms',level:'100'},
        {name:'Adobe',details:'PDF, Fireworks, InDesign',level:'90'},
        {name:'Canva Design',details:'',level:'100'},
        {name:'Autodesk AutoCAD',details:'',level:'80'},
        {name:'ESRI ArcGIS',details:'',level:'60'},
        {name:'Google Maps',details:'Earth, MyMaps, Maps platform API',level:'60'},
        {name:'Frontend',details:'HTML 5, CSS 3, Javascript, Vue 3',level:'70'},
        {name:'Backend',details:'PHP, Javascript, MongoDB Atlas, Node.js',level:'75'},
        {name:'WordPress.org',details:'',level:'100'},
        {name:'Inteligência Artificial',details:'Google Gemini, ChatGPT 4, Claude',level:'90'},
        {name:'Arduino ESP',details:'',level:'80'},
        {name:'Drones DJI',details:'',level:'100'},
        {name:'Gerenciamento Ágil',details:'PDCA, Scrum, Kanban',level:'90'}
      ]
    },
    education:{
      en:[
        {name:'Bachelor Degree Engineering and Environmental Science',details:'Feb 2007 to Dec 2012 - EESC/USP, São Carlos/SP, Brazil'},
        {name:'Junior Researcher - Bioproduction of Methane and Hydrogen',details:'Mar 2010 to Oct 2012 - LPB/EESC/USP, São Carlos/SP, Brazil'},
        {name:'Academic Exchange - Sustainable Sciences - CAPES/Unibral',details:'Apr 2011 to Feb 2012 - Leuphana Univesität, Lüneburg/NI, Germany'}
      ],
      pt:[
        {name:'Bacharelado em Engenharia Ambiental',details:'Fev 2007 a Dez 2012 - EESC/USP, São Carlos/SP, Brasil'},
        {name:'Pesquisador Júnior - Bioprodução de Metano e Hidrogênio',details:'Mar 2010 a Out 2012 - LPB/EESC/USP, São Carlos/SP, Brasil'},
        {name:'Intercâmbio Acadêmico - Ciências Sustentáveis - CAPES/Unibral',details:'Abr 2011 a Fev 2012 - Leuphana Univesität, Lüneburg/NI, Alemanha'}
      ]
    },
    experiences:{
      en:[
        {name:'Volunteer - Phoenix Social Project',details:'Mar 2010 to Nov 2012 - Phoenix-USP Student Group, São Carlos/SP, Brazil'},
        {name:'Volunteer - Rondon Project',details:'Jan 2011 - Ministry of Defense, Federal Government, Brazil'},
        {name:'Intern - Water Treatment System Designer',details:'Mar 2012 to Dec 2012 - Hidrosan Engineering S/A, São Carlos/SP, Brazil'},
        {name:'Partner - CFO, Project Manager, and Salles Represensative',details:'May 2013 to Aug 2018 - Genos Environmental Consulting LTDA ME, São Carlos/SP, Brazil'},
        {name:'Freelancer - Airbnb Community Expert - Customer Support, Conflict Resolution, and AI training',details:'May 2018 to Jul 2024 - Directly OnDemand Inc, San Francisco, USA'}
      ],
      pt:[
        {name:'Voluntário - Projeto Social Fênix',details:'Mar 2010 a Nov 2012 - Grupo Estudantil Fênix-USP, São Carlos/SP, Brasil'},
        {name:'Voluntário - Projeto Rondon',details:'Jan 2011 - Ministério da Defesa, Governo Federal, Brasil'},
        {name:'Estagiário - Projetista Sistema de Tratamento',details:'Mar 2012 a Dez 2012 - Hidrosan Engenharia S/A, São Carlos/SP, Brasil'},
        {name:'Sócio - Gestor de Projetos, Representante de Vendas e CFO',details:'Mai 2013 a Ago 2018 - Genos Consultoria Ambiental LTDA ME, São Carlos/SP, Brasil'},
        {name:'Freelancer - Airbnb Community Expert - Atendimento ao cliente, resolução de conflitos, e treinamento de IA',details:'Mai 2018 a Jul 2024 - Directly OnDemand Inc, São Francisco, USA'}
      ]
    },
    courses:{
      en:[
        {name:'HTML 5, CSS 3, Javascript, PHP',details:'2016 to 2017 - W3Schools'},
        {name:'JavaScript: from first steps to professional',details:'2024 - Frontend Masters'},
        {name:'JavaScript: the hard parts v2',details:'2024 - Frontend Masters'},
        {name:'The hard parts of asynchronous JavaScript',details:'2024 - Frontend Masters'},
        {name:'The hard parts of functional JavaScript',details:'2024 - Frontend Masters'},
        {name:'Node.js and MongoDB Atlas integrated to Google Gemini',details:'2024 - Alura'},
        {name:'Frontend responsiveness, DOM manipulation, and React.js',details:'2025 - Alura'},
        {name:'Vue.js 3 Fundamentals',details:'Ongoing - Frontend Masters'},
        {name:'The hard parts of servers & Node.js',details:'Ongoing - Frontend Masters'}
      ],
      pt:[
        {name:'HTML 5, CSS 3, Javascript, PHP',details:'2016 a 2017 - W3Schools'},
        {name:'JavaScript: dos primeiros passos ao profissional',details:'2024 - Frontend Masters'},
        {name:'JavaScript: the hard parts v2',details:'2024 - Frontend Masters'},
        {name:'The hard parts of asynchronous JavaScript',details:'2024 - Frontend Masters'},
        {name:'The hard parts of functional JavaScript',details:'2024 - Frontend Masters'},
        {name:'Node.js e MongoDB Atlas integrado ao Google Gemini',details:'2024 - Alura'},
        {name:'Responsividade de Frontend, manipulação do DOM e React.js',details:'2025 - Alura'},
        {name:'Fundamentos de Vue.js 3',details:'Em andamento - Frontend Masters'},
        {name:'The hard parts of servers & Node.js',details:'Em andamento - Frontend Masters'}
      ]
    },
    achievements:{
      en:[
        {name:'Basic Design of a Waste Flow Regulation Tank',span:'for Foz do Brasil WTP in Limeira/SP (2012)'},
        {name:'Environmental studies and licensing',span:'of the Mercedes Benz SA manufacturing unit in Iracemápolis/SP (2014)'},
        {name:'Development of Solid Waste Management Plans',span:'for Polypack Laboratório de Ensaios LTDA (2014), and for the municipalities of Pirassununga/SP (2014 to 2015) and Redenção da Serra/SP (2015 to 2018)',
        details:[
          {subhead:'Contextualization',text:'preliminary data collection about the municipality, such as population growth, socioeconomic profile, land use, climate, topography, hydrography, and local legislation'},
          {subhead:'Diagnosis',text:'data analysis on solid waste, including infrastructure, sanitation services, waste qualification and quantification, irregular disposal areas, and generating centers'},
          {subhead:'Prognosis',text:'projections of growth, waste generation, and demand for sanitation services, development of scenarios, and assessment of impacts for each scenario'},
          {subhead:'Planning',text:'definition of guidelines and strategies focused on environmental education, reduction, reuse, and recycling, with financial analysis, budgeting, goals, and schedule'},
          {subhead:'Public Consultations',text:'project presentation and gathering of public contributions throughout the process'}
        ]},
        {name:'Audit of the solid waste management system',span:' for Embraer SA (2015)'},
        {name:'Development of Urban Mobility Plans',span:'for the municipalities of Monte Alto/SP (2015), Registro/SP (2015), Ilha Solteira/SP (2016), and Porto Feliz/SP (2016 to 2017)',
        details:[
          {subhead:'Contextualization',text:'preliminary data collection about the municipality, including population data, socioeconomic profile, land use, climate, topography, and local legislation'},
          {subhead:'Diagnosis',text:'detailed data collection and analysis, including infrastructure, transportation, road quality, connectivity, flows and desire lines, accessibility, and mobility potential'},
          {subhead:'Prognosis',text:'growth projections and transportation demands, with future scenarios and assessment of their impacts'},
          {subhead:'Planning',text:'creation of strategies and guidelines to prioritize sustainable transportation, including financial analysis, budgeting, goals, and schedule'},
          {subhead:'Public Consultations',text:'project presentation and gathering of public contributions throughout the process'}
        ]},
        {name:'Development of Public Transportation Plans',span:'for the municipalities of Monte Alto/SP (2016) and Registro/SP (2018)',
        details:[
          {subhead:'Contextualization',text:'preliminary data collection about the municipality, including population data, socioeconomic profile, land use, climate, topography, and local legislation'},
          {subhead:'Diagnosis',text:'detailed data collection and analysis, including public transportation infrastructure, flow and desire lines, accessibility, and boarding and alighting surveys'},
          {subhead:'Prognosis',text:'growth projections and public transportation demands, with future scenarios and impact assessments'},
          {subhead:'Planning',text:'design of routes, schedules, itineraries, and transportation technology, including financial and risk analysis, as well as education and communication guidelines'},
          {subhead:'Public Consultations',text:'project presentation and gathering of public contributions throughout the process'}
        ]},
        {name:'Static website design and programming (full-stack)',span:'for Genos Consultoria Ambiental LTDA ME (2017)'},
        {name:'Urban Perimeter Expansion and Strategic Environmental Assessments',span:'of the city of Água Comprida/MG (2017)'},
        {name:'Environmental monitoring of the Rio Itapocu course setting',span:'in the city of Barra Velha/SC (2017 to 2018)'},
        {name:'DETRAN fundraising Road Safety Project',span:'for the municipality of Monte Alto/SP (2018)'},
        {name:'Technical, Economic, Financial, and Environmental Feasibility Study of the Technological Innovation Center',span:'in the city of Registro/SP (2018)'},
        {name:'Strategic and operational support for Airbnb platform clients',span:'\n2018 to 2024 - Directly OnDemand Inc, San Francisco/CA, USA\n85,113 cases resolved with CSAT 99% and NPS 82',
        details:[
          {subhead:'',text:'Improvement of listings (description, images, rules)'},
          {subhead:'',text:'Strategies for managing calendars and pricing'},
          {subhead:'',text:'Management of payments and booking deadlines'},
          {subhead:'',text:'User education on platform use and compliance with policies and regulations'},
          {subhead:'',text:'Mediation and resolution of conflicts, including discrimination and extenuating circumstances'},
          {subhead:'',text:'Assistance in critical situations, such as humanitarian crises and natural disasters'},
          {subhead:'',text:'Fraud identification and prevention'},
          {subhead:'',text:'Personalized advice and support in various situations'},
          {subhead:'',text:'AI training focused on customer support'}
        ]}
      ],
      pt:[
        {name:'Projeto Básico de um Tanque de Regularização de Vazão de resíduos',span:'para a ETA Foz do Brasil em Limeira/SP (2012)'},
        {name:'Estudos e licenciamento ambiental',span:'da unidade fabril da Mercedes Benz SA em Iracemápolis/SP (2014)'},
        {name:'Elaboração de Planos de Gestão de Resíduos Sólidos',span:'da Polypack Laboratório de Ensaios LTDA (2014), e para os municípios de Pirassununga/SP (2014 a 2015) e Redenção da Serra/SP (2015 a 2018)',
        details:[
          {subhead:'Contextualização',text:'levantamento de informações preliminares sobre o município, como evolução populacional, perfil socioeconômico, uso do solo, clima, relevo, hidrografia e legislações locais'},
          {subhead:'Diagnóstico',text:'análise de dados sobre resíduos sólidos, incluindo infraestrutura, serviços de saneamento, qualificação e quantificação de resíduos, áreas de descarte irregular e polos geradores'},
          {subhead:'Prognóstico',text:'projeção do crescimento, geração e demanda de serviços de saneamento, elaboração de cenários, e avaliação de impactos de cada cenário'},
          {subhead:'Planejamento',text:'definição de diretrizes e estratégias focadas em educação ambiental, redução, reuso e reciclagem, com análise financeira, orçamentária, metas e cronograma'},
          {subhead:'Consultas Públicas',text:'apresentação do trabalho e coleta de contribuições da população ao longo do processo'}
        ]},
        {name:'Auditoria do sistema de gestão de resíduos sólidos',span:' da Embraer SA (2015)'},
        {name:'Elaboração de Planos de Mobilidade Urbana',span:'para os municípios de Monte Alto/SP (2015), Registro/SP (2015), Ilha Solteira/SP (2016), Porto Feliz/SP (2016 a 2017)',
        details:[
          {subhead:'Contextualização',text:'levantamento de informações preliminares sobre o município, incluindo dados populacionais, perfil socioeconômico, uso do solo, clima, relevo e legislações locais'},
          {subhead:'Diagnóstico',text:'coleta e análise detalhada de dados, incluindo infraestrutura, transporte, qualidade das vias, conectividade, fluxos e linhas de desejo, acessibilidade e vocação para mobilidade'},
          {subhead:'Prognóstico',text:'projeções de crescimento e demandas de transporte, com cenários futuros e avaliação de seus impactos'},
          {subhead:'Planejamento',text:'criação de estratégias e diretrizes para priorizar transporte sustentável, incluindo análise financeira, orçamentária, metas e cronograma'},
          {subhead:'Consultas Públicas',text:'apresentação do trabalho e coleta de contribuições da população ao longo do processo'}
        ]},
        {name:'Elaboração de Planos de Transporte Coletivo',span:'para os municípios de Monte Alto/SP (2016) e Registro/SP (2018)',
        details:[
          {subhead:'Contextualização',text:'levantamento de informações preliminares sobre o município, incluindo dados populacionais, perfil socioeconômico, uso do solo, clima, relevo e legislações locais'},
          {subhead:'Diagnóstico',text:'coleta e análise detalhada de dados, incluindo infraestrutura de transporte coletivo, fluxos e linhas de desejo, acessibilidade e pesquisa sobe-e-desce'},
          {subhead:'Prognóstico',text:'projeções de crescimento e demandas pelo transporte coletivo, com cenários futuros e avaliação de seus impactos'},
          {subhead:'Planejamento',text:'projeto de linhas, horários, itinerários e tecnologia de transporte, incluindo análise financeira e de risco, além de diretrizes de educação e comunicação'},
          {subhead:'Consultas Públicas',text:'apresentação do trabalho e coleta de contribuições da população ao longo do processo'}
        ]},
        {name:'Webdesign e programação de website (fullstack)',span:'para Genos Consultoria Ambiental LTDA ME (2017)'},
        {name:'Ampliação do Perímetro Urbano e Avaliação Ambiental Estratégica',span:'da cidade de Água Comprida/MG (2017)'},
        {name:'Monitoramento ambiental das obras de fixação do Rio Itapocu',span:'da cidade de Barra Velha/SC (2017 a 2018)'},
        {name:'Projeto de Segurança Viária para angariamento de verbas DETRAN/SP',span:'para o município de Monte Alto/SP (2018)'},
        {name:'Estudo de Viabilidade Técnica, Econômica, Financeira e Ambiental do Centro de Inovação Tecnológica',span:'da cidade de Registro/SP (2018)'},
        {name:'Suporte estratégico e operacional à clientes da plataforma Airbnb',span:'\n2018 a 2024 - Directly OnDemand Inc, San Francisco/CA, USA\n85.113 casos resolvidos com CSAT 99% e NPS 82',
        details:[
          {subhead:'',text:'Aperfeiçoamento de anúncios (descrição, imagens, regras)'},
          {subhead:'',text:'Estratégias de gerenciamento de calendários e preços'},
          {subhead:'',text:'Gerenciamento de pagamentos e prazos de reservas'},
          {subhead:'',text:'Educação de usuários para uso da plataforma e conformidade com políticas e legislações'},
          {subhead:'',text:'Mediação e resolução de conflitos, incluindo discriminação e circunstâncias atenuantes'},
          {subhead:'',text:'Assistência em situações críticas, como crises humanitárias e desastres naturais'},
          {subhead:'',text:'Identificação e combate a fraudes'},
          {subhead:'',text:'Aconselhamento e suporte personalizado em diversas situações'},
          {subhead:'',text:'Treinamento de IA com foco ao atendimento ao consumidor'}
        ]}
      ]
    }
  }),
  computed:{},
  methods:{changeLang(){
    this.locale = event.target.value;
    document.querySelector('html').setAttribute('lang',this.locale==='en'?'en-US':'pt-BR')
  }},
  watch:{}
}).mount('#app');
