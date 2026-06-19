/* ============================================
   ROTINA FOCADA — Dados dos Módulos e Aulas
   ============================================
   Estrutura completa do curso.
   Para adicionar links de vídeo: edite videoUrl em cada aula.
   ============================================ */

const COURSE_DATA = {
  title: "Rotina Focada",
  modules: [
    /* =========================================
       MÓDULO 01 — PRINCÍPIOS
       ========================================= */
    {
      id: 1,
      number: "01",
      emoji: "🌸",
      title: "Princípios",
      tagline: "Construção de princípios",
      description: "Você vai aprender a mudar sua relação com a rotina e a criar fundamentos sólidos para transformar cada dia em progresso real.",
      lessons: [
        {
          id: "1-1",
          number: 1,
          title: "Entender isso te fará querer ter uma rotina focada",
          tagline: "O ponto de virada que muda tudo",
          videoUrl: "https://www.youtube.com/embed/EiIV-ccYMlA",
          summary: "Antes de qualquer técnica ou ferramenta, é preciso entender por que uma rotina focada funciona — e por que sem ela, mesmo a melhor agenda do mundo desmorona. Esta aula muda sua percepção sobre o que é, de fato, ter foco.",
          content: `
            <div class="callout-soft">🩷 <strong>As pessoas bem-sucedidas sabem aonde querem ir na vida e têm um plano para chegar lá.</strong></div>

            <h3 class="lesson-h3">Onde você quer estar daqui 10 anos?</h3>
            <p>Considere sua condição em cada uma destas áreas:</p>

            <div class="reflect-grid">
              <div class="reflect-card">
                <div class="reflect-icon">💰</div>
                <div class="reflect-title">Financeira</div>
                <p>Quanto gostaria de estar ganhando?</p>
              </div>
              <div class="reflect-card">
                <div class="reflect-icon">👑</div>
                <div class="reflect-title">Carreira</div>
                <p>Quais são seus objetivos profissionais? Qual trabalho gostaria de ter?</p>
              </div>
              <div class="reflect-card">
                <div class="reflect-icon">🦋</div>
                <div class="reflect-title">Família</div>
                <p>Em que gostaria que seu relacionamento com seu marido fosse diferente? Como gostaria de passar o tempo livre juntos?</p>
              </div>
              <div class="reflect-card">
                <div class="reflect-icon">🏡</div>
                <div class="reflect-title">Estilo de vida</div>
                <p>Onde gostaria de morar? Como seria a sua casa?</p>
              </div>
              <div class="reflect-card reflect-card-wide">
                <div class="reflect-icon">✨</div>
                <div class="reflect-title">Condição espiritual</div>
                <p>Em que seu relacionamento com Deus seria diferente do que é agora? Quais hábitos não fariam mais parte da sua vida?</p>
              </div>
            </div>

            <h3 class="lesson-h3">Nunca subestime o poder de sonhar ✨💭</h3>
            <p>Crescemos através de sonhos grandes — <strong>todas as pessoas de grande sucesso são grandes sonhadores</strong>.</p>
            <p>Alguns de nós deixam esses sonhos morrerem. Outros os nutrem e os protegem, cuidam deles em meio aos dias maus até trazê-los para o sol e a luz.</p>

            <p>Os sonhos são importantes, mas <strong>não são suficientes</strong> para mudar a sua vida. Precisamos de um <em>Plano de ação</em> a fim de chegar ao destino desejado.</p>

            <div class="callout">Um sonho sem um plano é apenas um desejo.</div>

            <p>Você precisa de um <strong>mapa de estrada específico</strong>, que te leve de onde está atualmente para:</p>
            <ul class="goals-list">
              <li>💛 A <strong>liberdade</strong> em suas finanças</li>
              <li>🦋 A <strong>satisfação</strong> na vida de sua família</li>
              <li>👑 O <strong>sucesso</strong> em sua carreira</li>
              <li>✨ A <strong>intimidade</strong> com Deus</li>
            </ul>
          `,
          insights: [
            "Pessoas bem-sucedidas sabem aonde querem ir — e têm um plano para chegar lá.",
            "Sonhos grandes movem grandes mudanças. Não deixe os seus morrerem.",
            "Um sonho sem plano é apenas um desejo.",
            "Você precisa de um mapa específico para sair de onde está e chegar onde sonha."
          ],
          quote: "Um sonho sem um plano é apenas um desejo.",
          exercises: [
            {
              title: "Escreva sua visão de 10 anos",
              body: "Pegue uma folha e responda, em até 1 página, como seria sua vida daqui a 10 anos nas 5 áreas: financeira, carreira, família, estilo de vida e espiritual. Não filtre — sonhe grande."
            },
            {
              title: "Desenhe o mapa do destino",
              body: "Para cada área da sua visão, escreva: 'Onde estou hoje' vs. 'Onde quero estar em 10 anos'. Olhe a distância entre os dois pontos. Esse é o seu mapa."
            },
            {
              title: "Defina a primeira parada do mapa",
              body: "Qual é o próximo passo concreto, dos próximos 90 dias, que te aproxima dessa visão? Escreva e coloque em um lugar visível."
            }
          ],
          diagram: "principios-virada",
          materials: [
            {
              icon: "📄",
              name: "PDF da aula",
              meta: "Material completo para download",
              url: "materiais/aula-01.pdf"
            },
            {
              icon: "🖨️",
              name: "Versão para imprimir",
              meta: "Visualizar online",
              url: "materiais/aula-01.html"
            }
          ]
        },
        {
          id: "1-2",
          number: 2,
          title: "Ajuste seu cérebro para ser disciplinado e aplicar",
          tagline: "Disciplina não é força — é arquitetura",
          videoUrl: "",
          summary: "A disciplina que dura não vem de motivação. Vem de pequenos ajustes no ambiente e na forma como você se vê. Aqui você aprende a criar as condições para que a ação certa seja a mais fácil.",
          insights: [
            "Disciplina é o resultado de decisões menores tomadas antes do momento do esforço.",
            "Seu cérebro economiza energia automatizando rotinas — use isso a seu favor.",
            "Identidade dirige comportamento: você age como a pessoa que acredita ser.",
            "Reduzir atrito é mais poderoso do que aumentar força de vontade."
          ],
          quote: "Você não sobe ao nível das suas metas. Você desce ao nível dos seus sistemas.",
          exercises: [
            {
              title: "Redesenhe seu ambiente",
              body: "Liste 3 objetos ou apps que ficam no seu campo de visão e que sabotam seu foco. Mova-os para fora do alcance imediato hoje mesmo."
            },
            {
              title: "Crie uma frase de identidade",
              body: "Complete: 'Eu sou uma pessoa que ___'. Use o verbo que sustenta o hábito que você quer construir. Leia esta frase toda manhã por 7 dias."
            },
            {
              title: "Defina o gatilho-âncora",
              body: "Escolha um hábito que você já faz todo dia (escovar os dentes, fazer café). Coloque ao lado dele a primeira ação da sua rotina focada — para ancorar o novo no antigo."
            }
          ],
          diagram: "ajuste-cerebro"
        },
        {
          id: "1-3",
          number: 3,
          title: "Como colher resultados reais na sua rotina",
          tagline: "Da ação ao resultado mensurável",
          videoUrl: "",
          summary: "Trabalhar muito não é o mesmo que colher resultados. Esta aula te mostra a ponte entre execução diária e progresso visível — para que seu esforço apareça no espelho da realidade.",
          insights: [
            "Resultado real é o que sobra depois do barulho — números, entregas, presença.",
            "Toda rotina precisa de um termômetro: o que não se mede, se ilude.",
            "Resultados se acumulam por consistência, não por intensidade.",
            "A maioria desiste no platô — onde os resultados já estão sendo construídos, mas ainda invisíveis."
          ],
          quote: "Confie no processo, mas verifique os números.",
          exercises: [
            {
              title: "Defina seu indicador-chave da semana",
              body: "Escolha UM número que, se subir, prova que a semana valeu. Pode ser: páginas lidas, blocos de foco, clientes contatados, peso levantado."
            },
            {
              title: "Crie um ritual de revisão semanal",
              body: "Reserve 30 min no domingo para olhar o número da semana e perguntar: o que funcionou? o que vou ajustar?"
            },
            {
              title: "Estabeleça a meta dos 90 dias",
              body: "Onde esse número precisa estar daqui a 12 semanas? Escreva e fixe em um lugar visível."
            }
          ],
          diagram: "colher-resultados"
        },
        {
          id: "1-4",
          number: 4,
          title: "Como escolher o projeto que mudará seus resultados",
          tagline: "A escolha que define o ano",
          videoUrl: "",
          summary: "Você não precisa fazer tudo. Precisa escolher bem. Esta aula te ensina a identificar O projeto certo — aquele que, se for executado, move todas as outras áreas da sua vida.",
          insights: [
            "O projeto certo é aquele que destrava outros 3 ou 4 quando concluído.",
            "Boas oportunidades distraem das melhores oportunidades.",
            "Foco é dizer 'não' a coisas boas para proteger as essenciais.",
            "Um projeto sem prazo é apenas um desejo bem vestido."
          ],
          quote: "Se tudo é prioridade, nada é.",
          exercises: [
            {
              title: "Liste seus 5 projetos atuais",
              body: "Escreva os 5 projetos que estão na sua cabeça agora — pessoais e profissionais. Olhe para a lista inteira antes de continuar."
            },
            {
              title: "Aplique a pergunta do desbloqueio",
              body: "Para cada um, pergunte: se eu concluir este projeto, quais outros se tornam mais fáceis ou desnecessários? Marque o que mais desbloqueia."
            },
            {
              title: "Defina o projeto único do trimestre",
              body: "Escolha UM. Pausa, adia ou delega os outros. Escreva: 'Nos próximos 90 dias, meu projeto é ___.' Assine."
            }
          ],
          diagram: "projeto-certo"
        }
      ]
    },
    /* =========================================
       MÓDULO 02 — ROTINAS
       ========================================= */
    {
      id: 2,
      number: "02",
      emoji: "🕰️",
      title: "Rotinas",
      tagline: "Frameworks da Rotina Focada",
      description: "Conheça a metodologia que amplia a compreensão, a retenção e a aplicação da sua produtividade.",
      lessons: [
        {
          id: "2-1",
          number: 1,
          title: "Maturação ativa",
          tagline: "Deixe as ideias amadurecerem trabalhando",
          videoUrl: "",
          summary: "Maturação ativa é a técnica de plantar uma ideia, um problema ou um conteúdo na mente e voltar a ele em ciclos. É como o cérebro forma conexões profundas — e não no esforço bruto de uma sessão só.",
          insights: [
            "O cérebro continua processando informação mesmo quando você está em outra coisa.",
            "Voltar ao mesmo conteúdo em dias diferentes aumenta retenção em até 5x.",
            "Pequenos intervalos entre estudos são mais eficazes que sessões longas.",
            "A maturação acontece no descanso — não pule essa parte."
          ],
          quote: "Você não precisa entender tudo hoje. Precisa voltar amanhã.",
          exercises: [
            {
              title: "Escolha um tema-âncora",
              body: "Selecione um assunto que você quer dominar nos próximos 30 dias. Vai ser seu campo de maturação ativa."
            },
            {
              title: "Defina os ciclos de contato",
              body: "Programe 4 momentos da semana para voltar a esse tema: leitura, reflexão escrita, conversa sobre ele, aplicação prática."
            },
            {
              title: "Crie sua caixa de ideias mornas",
              body: "Toda vez que pensar algo sobre o tema fora dos blocos, anote em um caderno ou app. Volte e revise semanalmente."
            }
          ],
          diagram: "maturacao-ativa"
        },
        {
          id: "2-2",
          number: 2,
          title: "Como fazer blocos de foco",
          tagline: "A unidade básica da rotina focada",
          videoUrl: "",
          summary: "O bloco de foco é o tijolo da sua rotina. Aprenda a estruturar sessões protegidas de 60 a 90 minutos onde você entrega mais do que muitas pessoas entregam em um dia inteiro de trabalho.",
          insights: [
            "Um bloco de foco real tem início, meio e fim definidos — sem 'só olhar o celular'.",
            "Trabalho profundo de 90 min equivale a 4 horas de trabalho disperso.",
            "Cada bloco precisa de UM objetivo concreto, escrito antes de começar.",
            "O fim do bloco é tão importante quanto o começo: marca um pequeno descanso."
          ],
          quote: "Profundidade vence pressa. Sempre.",
          exercises: [
            {
              title: "Defina sua janela sagrada",
              body: "Escolha 1 horário fixo no dia que você protegerá com sua vida. De preferência o horário em que sua energia é mais alta."
            },
            {
              title: "Crie o ritual de entrada",
              body: "Escreva 3 ações que você fará SEMPRE antes do bloco: ex. apagar notificações, colocar fone, escrever o objetivo do bloco em uma folha."
            },
            {
              title: "Execute um bloco-piloto hoje",
              body: "Faça hoje 1 bloco de 60 minutos sem distrações. Ao final, escreva 1 frase sobre como foi e o que você entregou."
            }
          ],
          diagram: "blocos-foco"
        },
        {
          id: "2-3",
          number: 3,
          title: "Como criar um sistema de anotações funcional",
          tagline: "Anotar não é guardar — é pensar",
          videoUrl: "",
          summary: "Quem anota tudo, lembra de nada. Esta aula te ensina a anotar de forma que cada ideia tenha um lugar e seja recuperável quando você precisar dela. Anotação funcional é a base do conhecimento aplicado.",
          insights: [
            "Anotar com as próprias palavras força entendimento — copiar é só ilusão.",
            "Um bom sistema tem entrada, processamento e saída — não só caixa de entrada.",
            "Conexões entre anotações criam o efeito composto do conhecimento.",
            "Revisar 1 anotação por dia vale mais do que adicionar 10 novas."
          ],
          quote: "Suas anotações deveriam ser mais inteligentes do que sua memória.",
          exercises: [
            {
              title: "Escolha UM lugar para anotar",
              body: "Notion, caderno físico, app — não importa. Importa ter UM. Por uma semana, todas as anotações vão para lá."
            },
            {
              title: "Crie 3 caixas simples",
              body: "Crie 3 seções: 'Inbox' (entrada bruta), 'Em processo' (ideias que estou refinando), 'Repertório' (conceitos prontos para consultar)."
            },
            {
              title: "Revise no fim do dia",
              body: "Por 7 dias, gaste 5 minutos no fim do dia movendo anotações da Inbox para as outras caixas. É aí que o sistema vira sistema."
            }
          ],
          diagram: "anotacoes-sistema"
        },
        {
          id: "2-4",
          number: 4,
          title: "Como colocar o conhecimento em prática",
          tagline: "Da teoria à transformação",
          videoUrl: "",
          summary: "Saber muito e não aplicar é a doença mais comum do estudante moderno. Aqui você aprende o protocolo simples para transformar conteúdo em ação — para que o que você estuda hoje mude algo amanhã.",
          insights: [
            "Conhecimento não aplicado em 72 horas tende a desaparecer.",
            "Aplicar mal é mil vezes melhor do que não aplicar.",
            "Toda aula precisa terminar com uma pergunta: 'o que faço com isso?'.",
            "Ensine o que aprendeu — é a forma mais rápida de fixar."
          ],
          quote: "O conhecimento não é poder. O conhecimento aplicado é poder.",
          exercises: [
            {
              title: "Adote a regra do '1 por aula'",
              body: "A cada aula que assistir, escolha 1 ação concreta para fazer nas próximas 72 horas. Escreva e cumpra."
            },
            {
              title: "Crie um diário de aplicação",
              body: "Para cada conteúdo importante, anote: o que aprendi, como apliquei, qual foi o resultado. Em 30 dias você terá um manual prático seu."
            },
            {
              title: "Compartilhe o aprendizado",
              body: "Conte para 1 pessoa hoje o que aprendeu nesta aula. Explicar consolida — e te força a entender de verdade."
            }
          ],
          diagram: "pratica-aplicacao"
        }
      ]
    },
    /* =========================================
       MÓDULO 03 — PROJETOS E METAS
       ========================================= */
    {
      id: 3,
      number: "03",
      emoji: "🎯",
      title: "Projetos e Metas",
      tagline: "Transformando ideias soltas em planos concretos",
      description: "Conecte ideias e perceba padrões em diferentes áreas da sua vida.",
      lessons: [
        {
          id: "3-1",
          number: 1,
          title: "Transformando ideias soltas em planos concretos",
          tagline: "Da nuvem ao papel",
          videoUrl: "",
          summary: "Toda grande conquista começa como uma ideia vaga. Esta aula te ensina o caminho de transformar 'um dia eu quero' em 'esta semana eu faço' — o método para tirar planos da imaginação e colocar no calendário.",
          insights: [
            "Ideias vivem na névoa enquanto não têm prazo nem próximo passo.",
            "Todo plano concreto responde a: O quê, Por quê, Quando, Como medir.",
            "Reduzir o plano à próxima ação possível elimina 90% da paralisia.",
            "Escrever o plano à mão, ao menos uma vez, ativa partes do cérebro que o digital não ativa."
          ],
          quote: "Um plano ruim no papel vale mais do que um plano perfeito na cabeça.",
          exercises: [
            {
              title: "Liste suas ideias soltas",
              body: "Pegue uma folha em branco e despeje todas as ideias e desejos que você carrega há meses. Sem filtro, sem ordem."
            },
            {
              title: "Aplique o filtro dos 4 quadrantes",
              body: "Marque cada ideia: importante x não importante / fácil x difícil. As 'importantes e fáceis' viram seu plano de 30 dias."
            },
            {
              title: "Escreva a próxima ação física",
              body: "Para cada ideia escolhida, defina a primeira ação concreta — algo que você pode fazer em até 15 minutos. Faça uma agora."
            }
          ],
          diagram: "ideias-concretas"
        },
        {
          id: "3-2",
          number: 2,
          title: "Percebendo padrões em diferentes áreas",
          tagline: "Você é um sistema só",
          videoUrl: "",
          summary: "Sua saúde, suas finanças, seus relacionamentos e sua carreira estão conectados. Esta aula te ensina a enxergar padrões que se repetem em diferentes áreas — e a resolver na raiz, não no sintoma.",
          insights: [
            "O mesmo bloqueio aparece travestido em áreas diferentes.",
            "Se você procrastina em uma área, provavelmente procrastina em três.",
            "Forças também se repetem — você tem padrões de excelência transferíveis.",
            "Olhar suas áreas de uma vez te dá clareza que olhar uma a uma esconde."
          ],
          quote: "A vida não tem áreas. Quem tem áreas é a sua planilha.",
          exercises: [
            {
              title: "Mapeie as 6 áreas",
              body: "Liste: saúde, dinheiro, trabalho, relacionamentos, espiritualidade, lazer. Dê uma nota de 0 a 10 para cada."
            },
            {
              title: "Encontre o padrão repetido",
              body: "Olhe as 2 áreas com pior nota. O que elas têm em comum? É o mesmo comportamento, a mesma crença, a mesma falta?"
            },
            {
              title: "Defina a alavanca cruzada",
              body: "Escolha UMA mudança que, se você fizer, impacta pelo menos 3 áreas. Aposte nessa alavanca nos próximos 30 dias."
            }
          ],
          diagram: "padroes-areas"
        },
        {
          id: "3-3",
          number: 3,
          title: "Definindo mini tarefas rumo ao seu objetivo",
          tagline: "Decomposição: a arte do passo possível",
          videoUrl: "",
          summary: "Objetivos grandes paralisam. Mini tarefas executam. Esta aula te ensina a quebrar qualquer meta em pedaços tão pequenos que se torna impossível não começar.",
          insights: [
            "Se a tarefa leva mais de 1 hora, ela ainda não foi bem quebrada.",
            "O cérebro evita o ambíguo e abraça o específico.",
            "Mini tarefas geram micro-vitórias — e micro-vitórias alimentam o ciclo.",
            "Uma boa mini tarefa começa com um verbo e termina com um resultado visível."
          ],
          quote: "Não dá para escalar a montanha. Dá para subir o próximo degrau.",
          exercises: [
            {
              title: "Escolha um objetivo grande",
              body: "Pegue uma meta dos próximos 90 dias. Algo que parece grande, distante, intimidador."
            },
            {
              title: "Quebre até virar tarefa de 1 hora",
              body: "Reduza esse objetivo em sub-objetivos, depois em ações semanais, depois em tarefas diárias. Pare quando cada tarefa couber em 1h."
            },
            {
              title: "Faça a primeira mini tarefa hoje",
              body: "Não amanhã. Hoje. Antes do fim do dia. Marque a vitória — mesmo pequena, ela conta."
            }
          ],
          diagram: "mini-tarefas"
        }
      ]
    },
    /* =========================================
       MÓDULO 04 — PLANEJAMENTO
       ========================================= */
    {
      id: 4,
      number: "04",
      emoji: "📓",
      title: "Planejamento",
      tagline: "Criando e Sustentando o Hábito",
      description: "Agora é hora de manter a constância e blindar o processo contra distrações.",
      lessons: [
        {
          id: "4-1",
          number: 1,
          title: "Como sustentar hábitos saudáveis e produtivos",
          tagline: "Da semana ao ano: a fórmula da constância",
          videoUrl: "",
          summary: "Começar é fácil. Sustentar é arte. Esta aula te dá os mecanismos para que um hábito sobreviva à fase mais perigosa — a quarta semana, quando a novidade acaba e a realidade aparece.",
          insights: [
            "Hábito sobrevive à motivação porque vira identidade.",
            "Em vez de 'não posso falhar', adote 'nunca falho duas vezes seguidas'.",
            "Medir cria consciência — consciência cria correção.",
            "A constância imperfeita vence a perfeição instável."
          ],
          quote: "O hábito que dura é o que sobrevive a um dia ruim.",
          exercises: [
            {
              title: "Defina seu hábito mínimo viável",
              body: "Reduza seu hábito ao mínimo absurdo: 5 minutos de leitura, 1 página escrita, 10 flexões. Tão pequeno que você ri."
            },
            {
              title: "Crie um habit tracker visível",
              body: "Use uma folha, um quadro, um app. Marque um X todo dia que cumprir. O X importa mais do que o tempo."
            },
            {
              title: "Aplique a regra dos 2 dias",
              body: "Se falhar 1 dia, volte no dia seguinte sem culpa. Falhar 2 dias seguidos é o que destrói o hábito — proteja-se disso."
            }
          ],
          diagram: "habitos-sustentar"
        },
        {
          id: "4-2",
          number: 2,
          title: "Desvicie do celular",
          tagline: "Recupere a sua atenção da palma da sua mão",
          videoUrl: "",
          summary: "O celular é a maior força anti-rotina-focada da nossa geração. Esta aula te dá o protocolo passo a passo para reconquistar sua atenção sem precisar virar eremita digital.",
          insights: [
            "Cada notificação é um pequeno sequestro do seu córtex pré-frontal.",
            "Dopamina fácil treina o cérebro a fugir do esforço.",
            "Reduzir uso de celular em 1h por dia equivale a recuperar 365h por ano.",
            "O problema não é o aparelho — é como ele está configurado."
          ],
          quote: "Quem controla seu telefone, controla sua atenção. Quem controla sua atenção, controla sua vida.",
          exercises: [
            {
              title: "Faça a faxina das notificações",
              body: "Desligue HOJE todas as notificações que não sejam ligações, mensagens diretas de pessoas reais e calendário. Sem exceção."
            },
            {
              title: "Crie zonas livres de celular",
              body: "Defina 2 ambientes onde o celular não entra: ex. mesa de jantar e cabeceira da cama. Coloque um carregador longe."
            },
            {
              title: "Aplique a regra da 1ª hora",
              body: "Na primeira hora do dia, sem celular. Vai parecer eterno no começo. Em 2 semanas vai parecer libertador."
            }
          ],
          diagram: "desvicie-celular"
        },
        {
          id: "4-3",
          number: 3,
          title: "Protocolo ARR para ter constância",
          tagline: "Aceitar, Resetar, Retomar",
          videoUrl: "",
          summary: "O que separa quem termina o ano com hábitos vivos de quem terminou com hábitos mortos é o que faz depois do tropeço. O Protocolo ARR é o método curto e simples para nunca mais abandonar um hábito por causa de uma queda.",
          insights: [
            "A queda não é o problema. A reação à queda é.",
            "Aceitar reduz a culpa — e culpa é o que mais alimenta o ciclo de auto-sabotagem.",
            "Resetar é tirar a moralidade da equação: errar não te define.",
            "Retomar tem que ser fácil — por isso o mínimo viável existe."
          ],
          quote: "Cair é humano. Levantar no mesmo dia é treino.",
          exercises: [
            {
              title: "ACEITAR: escreva sua frase de aceitação",
              body: "Crie uma frase curta para se dizer quando falhar. Ex: 'Falhei hoje. Faz parte. Não me define.' Repita em voz alta."
            },
            {
              title: "RESETAR: defina seu ritual de reset",
              body: "Escolha uma ação simbólica que marca o reset: respirar fundo 3 vezes, beber um copo d'água, lavar o rosto. É o seu botão de reinício."
            },
            {
              title: "RETOMAR: planeje a versão mínima do retorno",
              body: "Defina o que você fará no dia seguinte ao tropeço — sempre a versão mais leve. O objetivo é só voltar à esteira."
            }
          ],
          diagram: "protocolo-arr"
        }
      ]
    },
    /* =========================================
       MÓDULO 05 — ESTUDOS E LEITURAS
       ========================================= */
    {
      id: 5,
      number: "05",
      emoji: "📚",
      title: "Estudos e Leituras",
      tagline: "Ferramentas Potencializadoras",
      description: "Neste último módulo, você aprende a estruturar sistemas e usar ferramentas que potencializam o aprendizado a longo prazo.",
      lessons: [
        {
          id: "5-1",
          number: 1,
          title: "O sistema de armazenamento: Caixas de Repertório (Notion)",
          tagline: "Onde o conhecimento mora e cresce",
          videoUrl: "",
          summary: "Aqui você aprende a montar no Notion um sistema de Caixas de Repertório — o lugar onde tudo que você aprende vira ativo recuperável. É a sua segunda memória, organizada por tema e pronta para ser consultada quando precisar.",
          insights: [
            "Sua segunda memória precisa estar mais bem organizada que a primeira.",
            "Caixas funcionam por afinidade temática, não por ordem cronológica.",
            "Tudo que entra precisa ter título, tag e link para outras caixas relacionadas.",
            "O sistema vale pelo que você consulta, não pelo que você guarda."
          ],
          quote: "Anotar é fácil. Reencontrar é o desafio.",
          exercises: [
            {
              title: "Crie sua estrutura inicial no Notion",
              body: "Monte 4 caixas-mãe: Pessoal, Trabalho, Estudos, Inspirações. Dentro de cada uma, sub-caixas por tema."
            },
            {
              title: "Estabeleça o protocolo de entrada",
              body: "Toda nova nota precisa ter: título descritivo, 1-3 tags, fonte (livro, aula, conversa) e 1 frase de aplicação."
            },
            {
              title: "Defina a rotina de manutenção",
              body: "Reserve 15 min por semana para reorganizar as caixas, adicionar links cruzados e arquivar o que não serve mais."
            }
          ],
          diagram: "caixas-repertorio"
        },
        {
          id: "5-2",
          number: 2,
          title: "Como eu uso IA para estudar",
          tagline: "Seu copiloto de aprendizado",
          videoUrl: "",
          summary: "A IA pode dobrar sua velocidade de aprendizado — se usada com método. Nesta aula você descobre como transformar ferramentas como ChatGPT e Claude em professores particulares disponíveis 24h, e como evitar o erro de virar consumidora passiva.",
          insights: [
            "A IA é um espelho: te devolve o nível dos seus prompts.",
            "Use IA para te explicar com analogias, criar resumos, gerar perguntas.",
            "Pergunte 'me explique como se eu tivesse 12 anos' — funciona melhor do que parece.",
            "Cuidado com aceitar respostas — desafie, peça contra-argumentos, verifique fontes."
          ],
          quote: "A IA não pensa por você. Ela pensa com você — se você souber conversar.",
          exercises: [
            {
              title: "Crie seu prompt-base de estudos",
              body: "Escreva um prompt-modelo que você vai reusar: 'Sou estudante de [tema]. Quero entender [conceito]. Me explique com analogias do dia a dia e me faça 3 perguntas no fim.'"
            },
            {
              title: "Use a IA para gerar perguntas-armadilha",
              body: "Após estudar um conceito, peça à IA: 'Crie 5 perguntas difíceis sobre [tema] que testam se entendi de verdade.' Tente responder antes de ver a explicação."
            },
            {
              title: "Faça a comparação dupla",
              body: "Em assuntos importantes, pergunte a mesma coisa para 2 IAs diferentes. Compare. As diferenças revelam nuances que você nunca veria."
            }
          ],
          diagram: "ia-estudos"
        },
        {
          id: "5-3",
          number: 3,
          title: "Como fazer um diário",
          tagline: "A prática mais subestimada que existe",
          videoUrl: "",
          summary: "Diário não é desabafo. Diário é pensar com clareza. Esta aula te ensina o método para que 10 minutos por dia escrevendo virem o seu maior ativo de auto-conhecimento — e de tomada de decisão.",
          insights: [
            "Escrever organiza o que pensar embaralha.",
            "Reler o diário do mês passado revela padrões invisíveis no momento.",
            "Um diário sem perguntas vira lista de queixas.",
            "Não importa ter dia bonito — importa ter dia anotado."
          ],
          quote: "Quem se conhece, decide melhor. Quem se conhece de verdade, escreveu.",
          exercises: [
            {
              title: "Adote 3 perguntas fixas",
              body: "Toda noite, responda: 1) O que aprendi hoje? 2) Pelo que sou grata? 3) Qual é a prioridade de amanhã?"
            },
            {
              title: "Crie a página da semana",
              body: "Aos domingos, em 1 página, escreva: vitórias, lições, áreas a ajustar. Vire o ritual mais importante da sua semana."
            },
            {
              title: "Releia uma vez por mês",
              body: "No último dia do mês, leia tudo que escreveu. Anote padrões que percebeu. É aqui que o diário paga todo o esforço."
            }
          ],
          diagram: "diario-pratica"
        }
      ]
    },
    /* =========================================
       MÓDULO 06 — SISTEMA ROTINA FOCADA
       ========================================= */
    {
      id: 6,
      number: "06",
      emoji: "🗂️",
      title: "Sistema Rotina Focada",
      tagline: "O mesmo sistema que eu uso no dia a dia",
      description: "Você recebe acesso ao meu sistema completo no Notion — literalmente o mesmo que uso todos os dias para gerenciar o método, com seções de Princípios e Projetos, Rotina Objetiva, Rotina Eficaz, Estudos e Leituras, Habit Tracker, Finanças Pessoais, Rotina Alimentar e muito mais.",
      lessons: [
        {
          id: "6-1",
          number: 1,
          title: "Sistema completo no Notion pronto para usar",
          tagline: "Você recebe a chave da casa",
          videoUrl: "",
          summary: "Esta aula te entrega o template completo do Notion — o mesmo que sustenta minha rotina hoje. Aqui eu te mostro a estrutura, como duplicar, como adaptar e como começar a usar nas próximas 24 horas.",
          insights: [
            "Sistema pronto te economiza meses de tentativa e erro.",
            "Antes de personalizar, use 7 dias como está. Sinta o método primeiro.",
            "Cada página tem propósito — não delete sem entender o que faz.",
            "O sistema vira seu segundo cérebro só quando você usa todos os dias."
          ],
          quote: "Não é o aplicativo que faz a rotina. É a rotina que dá vida ao aplicativo.",
          exercises: [
            {
              title: "Duplique o template",
              body: "Acesse o link compartilhado, clique em 'Duplicar' e mande para o seu workspace pessoal. Marque a página como favorita."
            },
            {
              title: "Faça o tour das 5 áreas-chave",
              body: "Abra cada seção principal e leia o card 'Como usar esta área'. Não personalize nada ainda — só conheça."
            },
            {
              title: "Preencha apenas a área 'Princípios'",
              body: "Antes de usar o sistema todo, escreva no card 'Princípios' suas frases-âncora. Isso vai guiar tudo o resto."
            }
          ],
          diagram: "sistema-notion"
        },
        {
          id: "6-2",
          number: 2,
          title: "Organização por áreas: rotinas, metas, estudos, finanças e mais",
          tagline: "Tudo no mesmo lugar — finalmente",
          videoUrl: "",
          summary: "Aqui eu te guio por cada uma das áreas do sistema: como abrir, como atualizar, como conectar uma com a outra. Você sai desta aula sabendo onde cada coisa fica e como manter o sistema vivo.",
          insights: [
            "Áreas se conversam — uma meta vira projeto, vira tarefa, vira bloco de foco.",
            "Atualizar 5 min por dia mantém o sistema vivo; deixar uma semana o mata.",
            "O Notion não precisa ser bonito. Precisa ser usado.",
            "Tudo que você acessa toda semana precisa estar a 2 cliques de distância."
          ],
          quote: "Organização não é estética. É facilidade de encontrar.",
          exercises: [
            {
              title: "Configure o dashboard principal",
              body: "Personalize a página inicial com os atalhos das 5 áreas que você mais acessa. Esconda o que você não usa."
            },
            {
              title: "Insira sua primeira meta",
              body: "Abra a área 'Metas' e insira uma meta dos próximos 90 dias usando o template. Preencha todos os campos."
            },
            {
              title: "Conecte meta → projeto → tarefa",
              body: "Crie um projeto vinculado a essa meta e quebre em 3 tarefas concretas. Veja a magia das relações funcionando."
            }
          ],
          diagram: "areas-organizadas"
        },
        {
          id: "6-3",
          number: 3,
          title: "Habit Tracker integrado para acompanhar sua constância",
          tagline: "Veja sua constância virar gráfico",
          videoUrl: "",
          summary: "O Habit Tracker é o coração do sistema. Aqui você aprende a configurar, marcar hábitos, ler o calendário e usar os relatórios automáticos para tomar decisões. Você vai amar ver a constância virando linha.",
          insights: [
            "Ver a constância marcada é viciante — no melhor sentido possível.",
            "Falhar 1 dia não importa; ver os padrões importa.",
            "O tracker revela hábitos que você acha que faz, mas não faz.",
            "Use no máximo 5 hábitos por vez — mais do que isso pulveriza o foco."
          ],
          quote: "Não dá para melhorar o que não se mede. Mas só se mede o que importa.",
          exercises: [
            {
              title: "Escolha seus 3-5 hábitos-âncora",
              body: "Selecione os hábitos que, se cumpridos, sustentam todas as outras áreas. Não adicione mais de 5."
            },
            {
              title: "Configure o tracker",
              body: "Insira os hábitos no template, defina a frequência (diária, dias específicos, semanal) e a meta da semana."
            },
            {
              title: "Marque por 14 dias seguidos",
              body: "Por 2 semanas, marque o tracker antes de dormir. Sem julgar — só observar. No fim, releia os padrões."
            }
          ],
          diagram: "habit-tracker"
        },
        {
          id: "6-4",
          number: 4,
          title: "Roteiro de 4 semanas para implementar o método",
          tagline: "Seu plano de pouso",
          videoUrl: "",
          summary: "Esta é a aula final: o roteiro semana a semana para você sair daqui e implementar o método na vida real. 4 semanas, 4 focos, 4 entregas. Quando terminar, a Rotina Focada vai estar funcionando — não na teoria, mas na sua rotina.",
          insights: [
            "Implementação faseada vence implementação total — porque sobrevive.",
            "Cada semana tem UM foco principal — sem isso, você dilui.",
            "Marcos semanais protegem contra o efeito 'comecei tudo, terminei nada'.",
            "Na semana 4, você não tem mais um método — você tem um jeito de viver."
          ],
          quote: "Você não precisa de 90 dias para mudar. Precisa de 4 semanas honestas.",
          exercises: [
            {
              title: "SEMANA 1: Princípios e Limpeza",
              body: "Defina seus princípios. Faça a limpeza digital (notificações, ambiente). Configure o Notion básico. Sem perfeição."
            },
            {
              title: "SEMANA 2: Blocos de Foco e Tracker",
              body: "Insira 1 bloco de foco por dia. Configure o Habit Tracker com 3 hábitos. Comece o diário noturno simples (3 perguntas)."
            },
            {
              title: "SEMANA 3: Projeto Único e Revisão",
              body: "Escolha o projeto único do trimestre. Quebre em mini tarefas. Faça sua primeira revisão semanal de domingo."
            },
            {
              title: "SEMANA 4: Sustentação e Ajustes",
              body: "Aplique o Protocolo ARR onde tropeçou. Ajuste o que não funcionou. Comemore o que já é rotina. Renove o ciclo."
            }
          ],
          diagram: "roteiro-4-semanas"
        }
      ]
    }
  ]
};

/* ============================================
   BÔNUS — Conteúdos extras da plataforma
   ============================================ */

const BONUS_DATA = {
  bonuses: [
    {
      id: "estudos-milionarios",
      emoji: "📖",
      title: "Método de Estudos Milionários",
      tagline: "Aprenda mais em menos tempo",
      description: "Um método milionário para transformar seus estudos, fazendo com que você aprenda cada vez mais e em cada vez menos tempo.",
      gradient: "linear-gradient(135deg, #4a5fc1, #7c3aed)",
      type: "framework"
    },
    {
      id: "produtividade-negocio",
      emoji: "💼",
      title: "Produtividade para o seu Negócio",
      tagline: "Os segredos por trás da minha produtividade",
      description: "Descubra os segredos por trás da minha produtividade voltada para o mundo dos negócios.",
      gradient: "linear-gradient(135deg, #6b3e26, #8b5a3c)",
      type: "framework"
    },
    {
      id: "checklist-habitos",
      emoji: "✅",
      title: "Checklist de Hábitos de Sucesso",
      tagline: "Hábitos que constroem uma máquina de prosperar",
      description: "Um checklist completo de hábitos para você se tornar uma máquina de prosperar em todas as áreas da sua vida.",
      gradient: "linear-gradient(135deg, #4a7c3a, #6b9f4a)",
      type: "checklist"
    },
    {
      id: "neurociencia",
      emoji: "🧬",
      title: "Produtividade Através da Neurociência",
      tagline: "Reprograme o cérebro contra distrações",
      description: "O método neurocientífico que reprograma o seu cérebro para agir e cria uma rotina blindada contra distrações.",
      gradient: "linear-gradient(135deg, #b54a8a, #c2528b)",
      type: "framework"
    },
    {
      id: "biblioteca-rf",
      emoji: "📚",
      title: "Biblioteca RF",
      tagline: "Todas as minhas indicações organizadas",
      description: "Acesso completo a todas as minhas indicações de livros organizadas por categoria.",
      gradient: "linear-gradient(135deg, #b45a2a, #c2410c)",
      type: "library"
    },
    {
      id: "curadoria-livros",
      emoji: "📕",
      title: "Curadoria de Livros",
      tagline: "Aprendizados resumidos e prontos pra aplicar",
      description: "Meus principais aprendizados de cada livro, resumidos e prontos para você aplicar.",
      gradient: "linear-gradient(135deg, #8b2a2a, #a83838)",
      type: "books"
    },
    {
      id: "desafio-27-dias",
      emoji: "🔥",
      title: "Desafio: 27 Dias de Rotina Intencional",
      tagline: "Construa uma rotina com propósito e consistência",
      description: "Um desafio prático de 27 dias para você construir uma rotina com propósito e consistência.",
      gradient: "linear-gradient(135deg, #e8770c, #ff8c42)",
      type: "schedule"
    },
    {
      id: "biblioteca-antiprocrastinacao",
      emoji: "⚡",
      title: "Biblioteca Anti Procrastinação",
      tagline: "Áudios, PDFs, mapas e protocolos pra parar de procrastinar",
      description: "Acesso vitalício a 36 conteúdos sobre foco, disciplina e produtividade — organizados por categoria.",
      gradient: "linear-gradient(135deg, #1a1a1a, #ff5000)",
      externalUrl: "biblioteca_antiprocrastinacao.html"
    }
  ],

  // CONTEÚDO COMPLETO DE CADA BÔNUS
  content: {
    "estudos-milionarios": {
      intro: "Estudar não é sobre passar horas com o livro aberto. É sobre o que fica retido depois que você fecha. Este método é o que eu uso para absorver conteúdos densos em uma fração do tempo — e que está por trás dos meus melhores aprendizados.",
      sections: [
        {
          title: "Os 4 pilares do método",
          icon: "🧠",
          items: [
            { label: "Maturação ativa", text: "Volte ao mesmo conteúdo em dias diferentes. O cérebro forma conexões profundas no intervalo, não no esforço." },
            { label: "Anotação com as próprias palavras", text: "Copiar gera ilusão. Reescrever com suas palavras força entendimento. Anote como se fosse ensinar." },
            { label: "Aplicação em 72 horas", text: "Conhecimento não aplicado em 3 dias evapora. Toda nova aula precisa virar UMA ação concreta." },
            { label: "Ensino imediato", text: "Conte para alguém o que aprendeu ainda hoje. Ensinar consolida e revela o que você ainda não entendeu." }
          ]
        },
        {
          title: "A rotina ideal de estudo",
          icon: "📚",
          items: [
            { label: "Bloco de 60-90 minutos", text: "Sem celular, sem notificações. Um único material por vez. Comece com leitura ativa." },
            { label: "Pausa estratégica", text: "5 minutos longe da tela. Anda, bebe água, respira. Não pega o celular." },
            { label: "Bloco de aprofundamento", text: "Volte ao mesmo tema, agora produzindo (resumo, anotação, exemplo). Aqui o conhecimento se fixa." },
            { label: "Revisão noturna de 10 min", text: "Antes de dormir, releia 2x o que aprendeu. O cérebro consolida no sono." }
          ]
        }
      ],
      highlights: [
        { type: "pink", text: "Quem aprende mais não estuda mais — estuda diferente." },
        { type: "yellow", text: "Conhecimento sem aplicação é só decoração mental." }
      ],
      closing: "💎 O método milionário não é mágico — é metódico. Faça 30 dias e você nunca mais vai estudar do mesmo jeito."
    },

    "produtividade-negocio": {
      intro: "Produtividade em negócios não é fazer mais coisas. É fazer as coisas que realmente movem o ponteiro do faturamento. Este é o framework que eu uso para gerenciar meu negócio sem cair na armadilha da ocupação constante.",
      sections: [
        {
          title: "Os 3 princípios não-negociáveis",
          icon: "🎯",
          items: [
            { label: "Receita > Ocupação", text: "Toda terça eu pergunto: o que eu fiz essa semana que VAI gerar receita nos próximos 90 dias? Se a resposta é nada, a semana foi de ocupação, não trabalho." },
            { label: "Decisões > Reuniões", text: "Reunião sem decisão é roubo de tempo. Toda reunião que eu marco tem um objetivo escrito antes — ou ela não acontece." },
            { label: "Sistemas > Esforço", text: "Se eu faço uma coisa 3 vezes, vira sistema, automação ou delegação. Esforço repetido é desperdício de capacidade." }
          ]
        },
        {
          title: "A semana ideal de uma mulher de negócio",
          icon: "📅",
          items: [
            { label: "Segunda — Planejamento", text: "1h definindo as 3 prioridades da semana. Sem isso, a semana acontece sem você." },
            { label: "Terça, Quarta, Quinta — Execução profunda", text: "Manhãs blindadas para trabalho profundo. Reuniões só após 14h." },
            { label: "Sexta — Revisão e ajuste", text: "1h olhando o que avançou e o que ficou. Aprender da semana é o que faz a próxima ser melhor." },
            { label: "Sábado e Domingo — Recuperação", text: "Sem trabalho. Sério. Negócio não aguenta dono cansado." }
          ]
        }
      ],
      highlights: [
        { type: "pink", text: "Empresária que não descansa, empresa que não cresce." },
        { type: "yellow", text: "A pergunta certa: 'o que MOVE meu negócio' — não 'o que tenho que fazer'." }
      ],
      closing: "✨ Produtividade real é silenciosa. Aparece nos resultados, não no número de tarefas riscadas. Foco no que MOVE."
    },

    "checklist-habitos": {
      intro: "Esta é a lista de hábitos que eu acompanho na minha rotina. Não precisa fazer todos. Escolha 3-5 que mais ressoam com você AGORA. Quando virarem automáticos, adicione mais. A constância vence a perfeição.",
      categories: [
        {
          name: "Hábitos de manhã",
          icon: "🌅",
          items: [
            "Acordar no mesmo horário todos os dias (até nos fins de semana)",
            "1 copo de água com limão antes do café",
            "5 minutos de silêncio antes de pegar o celular",
            "10 minutos de leitura (Bíblia ou livro de sabedoria)",
            "Escrever 3 prioridades do dia",
            "Movimento físico (alongamento, caminhada ou exercício)"
          ]
        },
        {
          name: "Hábitos de foco",
          icon: "🎯",
          items: [
            "1 bloco de foco profundo por dia (mínimo 60 min)",
            "Celular em modo avião durante o bloco",
            "Desligar notificações desnecessárias",
            "Lista das 3 prioridades do dia escrita à mão",
            "Pomodoro de 25/5 quando a energia cai",
            "Não pegar o celular nos primeiros 30 min do dia"
          ]
        },
        {
          name: "Hábitos de corpo",
          icon: "💪",
          items: [
            "Movimentar o corpo 5x por semana (mínimo 20 min)",
            "Beber 2L de água ao longo do dia",
            "Dormir antes das 23h",
            "Café da manhã com proteína",
            "Sol no rosto por 10 min nas primeiras horas do dia",
            "Caminhar após uma das refeições"
          ]
        },
        {
          name: "Hábitos de mente",
          icon: "🧠",
          items: [
            "Diário noturno (3 perguntas: aprendi, gratidão, prioridade)",
            "Revisão semanal aos domingos (30 min)",
            "Habit tracker visível e atualizado",
            "Meditar ou orar por 10 minutos",
            "Sem redes sociais nos primeiros 60 min do dia",
            "Livro/conteúdo formativo todo dia (10 min mínimo)"
          ]
        },
        {
          name: "Hábitos de relações",
          icon: "🤍",
          items: [
            "Tempo de qualidade sem celular com a família",
            "Mandar mensagem de carinho para 1 pessoa por semana",
            "Telefonar (não mensagem) para alguém querido toda semana",
            "Almoço ou jantar sem distrações",
            "Agradecer alguém explicitamente uma vez por dia",
            "Marcar encontro presencial 1x por mês com amiga próxima"
          ]
        }
      ],
      closing: "✨ Não tente fazer todos de uma vez. Comece com 3. Cumpra por 21 dias. Depois adicione mais 2. Em 90 dias você terá 9 hábitos rodando — e uma vida diferente."
    },

    "neurociencia": {
      intro: "Seu cérebro foi feito para sobreviver — não para focar 8 horas seguidas. A boa notícia é que ele é plástico: você pode reprogramá-lo. Aqui estão as descobertas da neurociência que mudam de verdade a forma como você atua no dia a dia.",
      sections: [
        {
          title: "Como o cérebro funciona (resumido)",
          icon: "🧬",
          items: [
            { label: "Córtex pré-frontal", text: "É a sua área de foco, decisão e autocontrole. É a parte que mais cansa e a primeira a 'desligar' quando você está estressada ou com pouco sono." },
            { label: "Sistema límbico", text: "É o seu modo automático: emoção, impulso, fuga do desconforto. É ele que te puxa para o celular sem você nem perceber." },
            { label: "Dopamina", text: "Não é a 'molécula do prazer' — é a molécula da BUSCA. Cada notificação dispara uma micro-dose. Por isso o celular vicia." }
          ]
        },
        {
          title: "5 práticas baseadas em neurociência",
          icon: "⚡",
          items: [
            { label: "1. Manhã sem dopamina barata", text: "Os primeiros 30 minutos sem celular preservam seu córtex pré-frontal para o resto do dia. Você decide o que sua atenção vai consumir." },
            { label: "2. Blocos de 90 minutos", text: "É o ciclo natural do cérebro (chamado ciclo ultradiano). Trabalhar 90 min + pausar 20 min é MAIS produtivo que trabalhar 4h direto." },
            { label: "3. Pausas com movimento", text: "Andar 5 minutos entre blocos reseta o cérebro. Pausa olhando celular NÃO conta — é só mais estímulo." },
            { label: "4. Sono é a hora do trabalho cerebral", text: "Durante o sono profundo, o cérebro consolida tudo que você aprendeu. Sono ruim = aprendizado perdido." },
            { label: "5. Ambiente físico programa a mente", text: "Ver o celular já cansa o cérebro (sim, só ver). Deixe-o em outro cômodo durante o foco. O esforço de 'não pegar' consome energia mental." }
          ]
        }
      ],
      highlights: [
        { type: "pink", text: "Foco não é força — é arquitetura cerebral." },
        { type: "yellow", text: "Cada notificação que você desliga é um pedacinho do seu cérebro que você recupera." }
      ],
      closing: "🧠 A neurociência não inventou o autocontrole — ela só explicou por que ele é difícil. Conhecer como o cérebro funciona é o primeiro passo para trabalhar COM ele, não CONTRA ele."
    },

    "biblioteca-rf": {
      intro: "Esta é a minha biblioteca completa — todos os livros que eu indico, organizados por categoria. Não precisa ler todos de uma vez. Escolha UM por mês. Em 12 meses você terá um repertório que pouca gente tem.",
      categories: [
        {
          name: "🩷 Sabedoria & Espiritualidade",
          books: [
            { title: "Os Segredos de Salomão", author: "Robert Jeffress", link: "https://www.amazon.com.br/dp/B087KBVZSH?linkCode=ssc&tag=onamzand030b7-20&creativeASIN=B087KBVZSH" },
            { title: "Bíblia de Estudo", author: "Edição Almeida", link: "https://www.amazon.com.br/dp/B00JP3C5VU?linkCode=ssc&tag=onamzand030b7-20&creativeASIN=B00JP3C5VU" }
          ]
        },
        {
          name: "🎯 Foco & Produtividade",
          books: [
            { title: "Em breve — mais indicações", author: "Andressa Guimarães", link: "https://www.amazon.com.br/shop/andressaguimaaraes/list/OJBFF594I8M4" }
          ]
        },
        {
          name: "💼 Negócios & Carreira",
          books: [
            { title: "Em breve — mais indicações", author: "Andressa Guimarães", link: "https://www.amazon.com.br/shop/andressaguimaaraes/list/OJBFF594I8M4" }
          ]
        },
        {
          name: "🧠 Hábitos & Mente",
          books: [
            { title: "Em breve — mais indicações", author: "Andressa Guimarães", link: "https://www.amazon.com.br/shop/andressaguimaaraes/list/OJBFF594I8M4" }
          ]
        }
      ],
      closing: "📚 Ver minha lista completa e sempre atualizada na Amazon: amazon.com.br/shop/andressaguimaaraes"
    },

    "curadoria-livros": {
      intro: "Aqui você encontra os principais aprendizados que tirei de cada livro — resumidos, com frases que me marcaram em destaque e prontos para você aplicar. Considere isto um atalho para acessar o melhor de cada leitura.",
      books: [
        {
          title: "Os Segredos de Salomão",
          author: "Robert Jeffress",
          cover: "https://m.media-amazon.com/images/P/B087KBVZSH.01._SCLZZZZZZZ_.jpg",
          fallbackColor: "#7a2a08",
          fallbackTitle: "Os Segredos\nde Salomão",
          amazonLink: "https://www.amazon.com.br/dp/B087KBVZSH?linkCode=ssc&tag=onamzand030b7-20&creativeASIN=B087KBVZSH",
          why: "Salomão escreveu Provérbios para ensinar princípios práticos de sabedoria — e este livro mergulha em como aplicar essa sabedoria milenar nas decisões da vida moderna. É a base espiritual e prática do método.",
          quote: "A sabedoria de Salomão não está apenas no que ele sabia — mas no que ele escolheu não fazer.",
          excerpt: "O sucesso verdadeiro não está em conquistar o mundo, mas em saber priorizar o que realmente importa. Salomão ensina que sabedoria começa onde a pressa termina.",
          highlights: [
            { type: "pink", text: "Sabedoria começa onde a pressa termina." },
            { type: "yellow", text: "O que você prioriza hoje desenha quem você será amanhã." }
          ]
        },
        {
          title: "Bíblia de Estudo",
          author: "Edição Almeida",
          cover: "https://m.media-amazon.com/images/P/B00JP3C5VU.01._SCLZZZZZZZ_.jpg",
          fallbackColor: "#5c3a1e",
          fallbackTitle: "Bíblia\nde Estudo",
          amazonLink: "https://www.amazon.com.br/dp/B00JP3C5VU?linkCode=ssc&tag=onamzand030b7-20&creativeASIN=B00JP3C5VU",
          why: "Toda rotina precisa de uma âncora. A leitura diária da Bíblia é o que sustenta o foco quando tudo ao redor confunde. Esta edição de estudo traz notas explicativas que tornam a leitura uma experiência de aprendizado profundo.",
          quote: "Ensina-nos a contar os nossos dias, de tal maneira que alcancemos coração sábio. — Salmos 90:12",
          excerpt: "Mais do que um livro religioso, a Bíblia é o manual de princípios mais antigo e mais aplicado do mundo. Cada capítulo é uma aula sobre identidade, propósito, disciplina, relacionamento e foco.",
          highlights: [
            { type: "pink", text: "Ensina-nos a contar os nossos dias para que alcancemos coração sábio." },
            { type: "yellow", text: "A leitura diária da Palavra é o que sustenta o foco quando tudo confunde." }
          ]
        }
      ],
      closing: "💡 Dica da Andressa: lê 10 páginas por dia, sem pressa. Anota uma frase que te marcou. Em 30 dias, você terá lido um livro inteiro e construído um repertório próprio."
    },

    "desafio-27-dias": {
      intro: "27 dias para reconstruir sua rotina do zero — com propósito e intenção em cada escolha. Cada dia tem UMA tarefa simples. Não pule. Não acelere. A magia está em fazer um por vez, com presença total. Marque cada dia que você completa.",
      weeks: [
        {
          number: 1,
          title: "Fundação · Conhecer a si mesma",
          tagline: "Antes de mudar, é preciso enxergar",
          days: [
            { day: 1, title: "Mapeie seu dia atual", action: "Anote a cada 2h o que está fazendo. No fim, marque: F (foco), R (rotina), D (dispersão)." },
            { day: 2, title: "Identifique seus 3 ladrões de tempo", action: "Quais são as 3 maiores fontes de distração da sua semana? Escreva os nomes." },
            { day: 3, title: "Visão clara", action: "Escreva: como seria seu dia perfeito? Detalhe. Esse é o seu norte." },
            { day: 4, title: "Defina seu porquê maior", action: "Em uma frase: por que você quer construir uma rotina intencional? Cole na geladeira." },
            { day: 5, title: "Escolha 1 princípio inegociável", action: "Defina UMA regra sua para a vida toda. Ex: 'Eu não pego o celular antes das 8h.'" },
            { day: 6, title: "Faxina física", action: "Organize o ambiente onde você mais passa tempo. Tire o desnecessário. Espaço externo = clareza interna." },
            { day: 7, title: "Faxina digital", action: "Desligue notificações desnecessárias. Apague 3 apps que sugam seu tempo. Reinicia." }
          ]
        },
        {
          number: 2,
          title: "Construção · Implementar a rotina",
          tagline: "Os tijolos do dia ideal",
          days: [
            { day: 8, title: "Rotina matinal", action: "Faça hoje a rotina matinal completa (silêncio + leitura + corpo + intenção)." },
            { day: 9, title: "Primeiro bloco de foco", action: "1 bloco de 60 min de trabalho profundo. Sem celular. Sem interrupção." },
            { day: 10, title: "Habit tracker", action: "Configure um tracker de 3 hábitos visíveis. Marque hoje." },
            { day: 11, title: "Diário noturno", action: "Comece hoje. 3 perguntas: aprendi, gratidão, prioridade de amanhã." },
            { day: 12, title: "Caixa de Repertório", action: "Crie sua estrutura no Notion ou caderno. Comece a anotar ideias num só lugar." },
            { day: 13, title: "Bloco da manhã", action: "Faça seu bloco de foco na PRIMEIRA hora útil do dia. Energia alta = entrega alta." },
            { day: 14, title: "Revisão da semana 2", action: "30 min: o que funcionou? O que ajustar? Comemora o que já virou rotina." }
          ]
        },
        {
          number: 3,
          title: "Profundidade · Foco em UMA coisa",
          tagline: "Escolher é avançar",
          days: [
            { day: 15, title: "Projeto único", action: "Escolha O PROJETO dos próximos 90 dias. Pausa os outros sem culpa." },
            { day: 16, title: "Mini tarefas", action: "Decomponha o projeto em tarefas de até 1h. Liste a primeira semana." },
            { day: 17, title: "Primeira execução", action: "Faça a primeira mini tarefa HOJE. Sem desculpas." },
            { day: 18, title: "Conheça o ARR", action: "Estude Aceitar, Resetar, Retomar. Escreva sua frase de aceitação." },
            { day: 19, title: "Mapa de áreas", action: "6 áreas da vida — dê nota 0 a 10. Veja o padrão." },
            { day: 20, title: "Aplicação", action: "Reveja UMA aula do curso. Escolha 1 ação para fazer em 72h." },
            { day: 21, title: "Revisão da semana 3", action: "Comemora as vitórias e olhe para o que vem na última semana." }
          ]
        },
        {
          number: 4,
          title: "Consolidação · Rotina viva",
          tagline: "Transformar prática em identidade",
          days: [
            { day: 22, title: "Identidade", action: "Escreva: 'Sou uma pessoa que ___'. Use o verbo do hábito que você quer SER." },
            { day: 23, title: "Manhã profunda", action: "Faça a rotina matinal completa SEM atalhos. Sente o efeito do dia completo." },
            { day: 24, title: "Domingo intencional", action: "Defina os 30 min de revisão de domingo como SAGRADO." },
            { day: 25, title: "Conexão", action: "Conte para alguém sobre os 27 dias. Compartilhar consolida." },
            { day: 26, title: "Ajustes finais", action: "O que ainda atrapalha? Resolva HOJE. Não deixa para depois." },
            { day: 27, title: "Celebração", action: "Olha os 27 dias. Tire um print do tracker. Comemore. Você é OUTRA pessoa." }
          ]
        }
      ],
      closing: "🔥 27 dias depois, você não tem só uma rotina nova — você tem uma identidade nova. A pessoa que começou no dia 1 não é a mesma que termina no dia 27. E a vida que vem depois é diferente."
    }
  }
};

/* ============================================
   DIAGRAMAS SVG ESTILO LÁPIS
   ============================================ */

const DIAGRAMS = {
  "principios-virada": `
    <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <defs>
        <filter id="rough1"><feTurbulence baseFrequency="0.04" numOctaves="2" /><feDisplacementMap in="SourceGraphic" scale="1.5"/></filter>
      </defs>
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round" filter="url(#rough1)">
        <!-- Linha do tempo -->
        <line x1="60" y1="280" x2="640" y2="280" />
        <line x1="640" y1="280" x2="630" y2="272" />
        <line x1="640" y1="280" x2="630" y2="288" />
        <!-- Antes (caos) -->
        <circle cx="160" cy="200" r="55" />
        <path d="M 130 180 Q 145 195 135 215 Q 155 205 165 220 Q 175 210 190 215" stroke-width="1.5"/>
        <path d="M 135 200 Q 150 195 165 200" stroke-width="1.5"/>
        <path d="M 145 215 Q 160 220 175 210" stroke-width="1.5"/>
        <!-- Ponto de virada -->
        <circle cx="350" cy="200" r="35" stroke="#c2410c" stroke-width="3"/>
        <path d="M 335 195 L 350 210 L 370 188" stroke="#c2410c" stroke-width="3" stroke-linejoin="round"/>
        <!-- Depois (foco) -->
        <circle cx="540" cy="200" r="55" stroke="#c2410c"/>
        <circle cx="540" cy="200" r="35" stroke="#c2410c" stroke-width="1.5"/>
        <circle cx="540" cy="200" r="15" stroke="#c2410c"/>
        <circle cx="540" cy="200" r="5" fill="#c2410c" stroke="none"/>
        <!-- Setas -->
        <path d="M 220 200 Q 270 180 305 200" stroke-width="1.5"/>
        <path d="M 305 200 L 295 195 M 305 200 L 295 205"/>
        <path d="M 390 200 Q 450 180 480 200" stroke-width="1.5"/>
        <path d="M 480 200 L 470 195 M 480 200 L 470 205"/>
      </g>
      <text x="160" y="320" text-anchor="middle" font-size="22" fill="#5c4a36">dispersão</text>
      <text x="350" y="320" text-anchor="middle" font-size="22" fill="#c2410c">a virada</text>
      <text x="540" y="320" text-anchor="middle" font-size="22" fill="#c2410c">foco</text>
      <text x="350" y="80" text-anchor="middle" font-size="28" fill="#2a1f15">o momento que muda tudo</text>
    </svg>
  `,

  "ajuste-cerebro": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Cérebro -->
        <path d="M 350 80 Q 280 80 260 130 Q 235 145 245 180 Q 230 215 270 230 Q 285 260 330 255 Q 350 270 370 255 Q 415 260 430 230 Q 470 215 455 180 Q 465 145 440 130 Q 420 80 350 80 Z" />
        <path d="M 350 100 Q 350 200 350 250" stroke-width="1.2"/>
        <path d="M 290 140 Q 310 160 295 180 Q 315 200 295 220" stroke-width="1.2"/>
        <path d="M 410 140 Q 390 160 405 180 Q 385 200 405 220" stroke-width="1.2"/>
        <!-- Três pilares -->
        <rect x="100" y="290" width="120" height="50" rx="6" stroke="#c2410c"/>
        <rect x="290" y="290" width="120" height="50" rx="6" stroke="#c2410c"/>
        <rect x="480" y="290" width="120" height="50" rx="6" stroke="#c2410c"/>
        <!-- Linhas conectando -->
        <path d="M 300 270 L 160 290" stroke-width="1.5" stroke-dasharray="4 4"/>
        <path d="M 350 270 L 350 290" stroke-width="1.5" stroke-dasharray="4 4"/>
        <path d="M 400 270 L 540 290" stroke-width="1.5" stroke-dasharray="4 4"/>
      </g>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">arquitetura da disciplina</text>
      <text x="160" y="320" text-anchor="middle" font-size="20" fill="#c2410c">ambiente</text>
      <text x="350" y="320" text-anchor="middle" font-size="20" fill="#c2410c">identidade</text>
      <text x="540" y="320" text-anchor="middle" font-size="20" fill="#c2410c">gatilho</text>
    </svg>
  `,

  "colher-resultados": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Solo -->
        <line x1="60" y1="280" x2="640" y2="280" />
        <line x1="60" y1="285" x2="640" y2="285" stroke-width="1"/>
        <!-- Sementes -->
        <ellipse cx="120" cy="290" rx="6" ry="3" fill="#5c4a36"/>
        <ellipse cx="170" cy="290" rx="6" ry="3" fill="#5c4a36"/>
        <ellipse cx="220" cy="290" rx="6" ry="3" fill="#5c4a36"/>
        <!-- Broto pequeno -->
        <path d="M 320 280 L 320 250" stroke-width="2"/>
        <path d="M 320 260 Q 310 255 305 245" />
        <path d="M 320 270 Q 330 265 335 255" />
        <!-- Planta média -->
        <path d="M 440 280 L 440 220" stroke-width="2"/>
        <path d="M 440 240 Q 420 230 415 215" />
        <path d="M 440 250 Q 460 245 470 230" />
        <path d="M 440 225 Q 425 215 420 200" />
        <!-- Árvore com frutos -->
        <path d="M 580 280 L 580 180" stroke-width="3"/>
        <circle cx="560" cy="160" r="22" stroke="#c2410c"/>
        <circle cx="600" cy="160" r="22" stroke="#c2410c"/>
        <circle cx="580" cy="140" r="22" stroke="#c2410c"/>
        <circle cx="565" cy="175" r="5" fill="#c2410c" stroke="none"/>
        <circle cx="595" cy="170" r="5" fill="#c2410c" stroke="none"/>
        <circle cx="580" cy="155" r="5" fill="#c2410c" stroke="none"/>
        <!-- Setas do tempo -->
        <path d="M 160 320 Q 350 340 580 320" stroke-width="1.5"/>
        <path d="M 580 320 L 570 314 M 580 320 L 570 327"/>
      </g>
      <text x="170" y="220" text-anchor="middle" font-size="20" fill="#5c4a36">semear</text>
      <text x="320" y="220" text-anchor="middle" font-size="20" fill="#5c4a36">brotar</text>
      <text x="440" y="190" text-anchor="middle" font-size="20" fill="#5c4a36">crescer</text>
      <text x="580" y="115" text-anchor="middle" font-size="20" fill="#c2410c">colher</text>
      <text x="350" y="360" text-anchor="middle" font-size="22" fill="#2a1f15">consistência ao longo do tempo</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">resultados acumulam — não explodem</text>
    </svg>
  `,

  "projeto-certo": `
    <svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Vários círculos pequenos -->
        <circle cx="120" cy="120" r="35"/>
        <circle cx="220" cy="80" r="32"/>
        <circle cx="200" cy="180" r="28"/>
        <circle cx="100" cy="240" r="30"/>
        <circle cx="220" cy="280" r="34"/>
        <!-- Setas convergindo -->
        <path d="M 150 130 Q 250 180 350 200" stroke-width="1.5"/>
        <path d="M 240 100 Q 290 150 350 195" stroke-width="1.5"/>
        <path d="M 225 180 Q 280 195 345 200" stroke-width="1.5"/>
        <path d="M 130 240 Q 240 220 350 210" stroke-width="1.5"/>
        <path d="M 250 270 Q 300 240 355 215" stroke-width="1.5"/>
        <!-- Projeto central -->
        <circle cx="430" cy="200" r="65" stroke="#c2410c" stroke-width="3"/>
        <circle cx="430" cy="200" r="50" stroke="#c2410c" stroke-width="1.5"/>
        <!-- Estrela dentro -->
        <path d="M 430 175 L 437 195 L 458 195 L 442 207 L 448 227 L 430 215 L 412 227 L 418 207 L 402 195 L 423 195 Z" fill="#c2410c" stroke="none"/>
        <!-- Raios saindo do projeto -->
        <path d="M 500 180 Q 560 160 620 150" stroke-width="2" stroke="#c2410c"/>
        <path d="M 510 200 Q 570 200 620 200" stroke-width="2" stroke="#c2410c"/>
        <path d="M 500 220 Q 560 240 620 250" stroke-width="2" stroke="#c2410c"/>
        <!-- Resultados (estrelas/check) -->
        <path d="M 615 140 L 625 150 L 645 130" stroke="#c2410c" stroke-width="3"/>
        <path d="M 615 195 L 625 205 L 645 185" stroke="#c2410c" stroke-width="3"/>
        <path d="M 615 250 L 625 260 L 645 240" stroke="#c2410c" stroke-width="3"/>
      </g>
      <text x="160" y="350" text-anchor="middle" font-size="22" fill="#5c4a36">muitos projetos</text>
      <text x="430" y="305" text-anchor="middle" font-size="22" fill="#c2410c">o projeto certo</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">escolha que destrava tudo</text>
    </svg>
  `,

  "maturacao-ativa": `
    <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Vaso/semente inicial -->
        <ellipse cx="350" cy="280" rx="40" ry="12"/>
        <path d="M 320 280 L 330 320 L 370 320 L 380 280"/>
        <!-- Espiral de tempo crescendo -->
        <path d="M 350 270 Q 320 240 350 220 Q 400 200 360 170 Q 290 150 340 110 Q 430 90 360 50" stroke="#c2410c" stroke-width="2.5"/>
        <!-- Folhas em pontos do espiral -->
        <ellipse cx="335" cy="240" rx="8" ry="14" transform="rotate(-30 335 240)" stroke="#c2410c"/>
        <ellipse cx="385" cy="200" rx="8" ry="14" transform="rotate(50 385 200)" stroke="#c2410c"/>
        <ellipse cx="320" cy="160" rx="10" ry="16" transform="rotate(-50 320 160)" stroke="#c2410c"/>
        <ellipse cx="390" cy="120" rx="10" ry="18" transform="rotate(60 390 120)" stroke="#c2410c"/>
        <!-- Marcadores dia/semana -->
        <text x="180" y="240" font-size="22" fill="#5c4a36">dia 1</text>
        <text x="180" y="180" font-size="22" fill="#5c4a36">dia 3</text>
        <text x="180" y="120" font-size="22" fill="#5c4a36">dia 7</text>
        <text x="180" y="60" font-size="22" fill="#5c4a36">dia 14</text>
        <line x1="240" y1="234" x2="320" y2="240" stroke-dasharray="3 3" stroke-width="1.2"/>
        <line x1="240" y1="174" x2="370" y2="200" stroke-dasharray="3 3" stroke-width="1.2"/>
        <line x1="240" y1="114" x2="310" y2="160" stroke-dasharray="3 3" stroke-width="1.2"/>
        <line x1="240" y1="54" x2="380" y2="115" stroke-dasharray="3 3" stroke-width="1.2"/>
      </g>
      <text x="500" y="60" text-anchor="middle" font-size="24" fill="#c2410c">a ideia</text>
      <text x="500" y="85" text-anchor="middle" font-size="24" fill="#c2410c">cresce</text>
      <text x="500" y="110" text-anchor="middle" font-size="24" fill="#c2410c">em ciclos</text>
    </svg>
  `,

  "blocos-foco": `
    <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Eixo do tempo -->
        <line x1="60" y1="240" x2="640" y2="240"/>
        <!-- Bloco de foco grande -->
        <rect x="100" y="120" width="180" height="120" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="190" y="170" text-anchor="middle" font-size="20" fill="#c2410c">FOCO</text>
        <text x="190" y="200" text-anchor="middle" font-size="22" fill="#c2410c">90 min</text>
        <!-- Pausa -->
        <rect x="300" y="190" width="60" height="50" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="330" y="220" text-anchor="middle" font-size="14" fill="#5c4a36">pausa</text>
        <!-- Bloco de foco 2 -->
        <rect x="380" y="120" width="180" height="120" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="470" y="170" text-anchor="middle" font-size="20" fill="#c2410c">FOCO</text>
        <text x="470" y="200" text-anchor="middle" font-size="22" fill="#c2410c">90 min</text>
        <!-- Pausa final -->
        <rect x="580" y="190" width="50" height="50" stroke-width="1.5" stroke-dasharray="3 3"/>
        <!-- Marcadores -->
        <line x1="100" y1="240" x2="100" y2="250"/>
        <line x1="280" y1="240" x2="280" y2="250"/>
        <line x1="380" y1="240" x2="380" y2="250"/>
        <line x1="560" y1="240" x2="560" y2="250"/>
        <!-- Ritual entrada e saída -->
        <circle cx="80" cy="290" r="18" stroke-width="1.5"/>
        <text x="80" y="296" text-anchor="middle" font-size="18" fill="#5c4a36">⏰</text>
        <path d="M 95 290 L 110 290" stroke-width="1.5"/>
        <text x="160" y="295" font-size="18" fill="#5c4a36">ritual de entrada</text>
        <circle cx="500" cy="290" r="18" stroke-width="1.5"/>
        <text x="500" y="296" text-anchor="middle" font-size="18" fill="#5c4a36">✓</text>
        <path d="M 485 290 L 470 290" stroke-width="1.5"/>
        <text x="380" y="295" text-anchor="end" font-size="18" fill="#5c4a36">ritual de saída</text>
      </g>
      <text x="350" y="60" text-anchor="middle" font-size="26" fill="#2a1f15">a unidade do trabalho profundo</text>
    </svg>
  `,

  "anotacoes-sistema": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- 3 caixas -->
        <rect x="60" y="120" width="160" height="180" rx="6"/>
        <rect x="270" y="120" width="160" height="180" rx="6" stroke="#c2410c"/>
        <rect x="480" y="120" width="160" height="180" rx="6"/>
        <!-- Linhas dentro das caixas -->
        <line x1="80" y1="170" x2="200" y2="170" stroke-width="1"/>
        <line x1="80" y1="185" x2="190" y2="185" stroke-width="1"/>
        <line x1="80" y1="200" x2="195" y2="200" stroke-width="1"/>
        <line x1="80" y1="215" x2="180" y2="215" stroke-width="1"/>
        <line x1="290" y1="170" x2="410" y2="170" stroke-width="1"/>
        <line x1="290" y1="185" x2="400" y2="185" stroke-width="1"/>
        <line x1="290" y1="200" x2="395" y2="200" stroke-width="1"/>
        <line x1="500" y1="170" x2="620" y2="170" stroke-width="1"/>
        <line x1="500" y1="185" x2="610" y2="185" stroke-width="1"/>
        <line x1="500" y1="200" x2="615" y2="200" stroke-width="1"/>
        <!-- Setas entre caixas -->
        <path d="M 220 200 L 265 200" stroke-width="2"/>
        <path d="M 265 200 L 255 195 M 265 200 L 255 205"/>
        <path d="M 430 200 L 475 200" stroke-width="2"/>
        <path d="M 475 200 L 465 195 M 475 200 L 465 205"/>
        <!-- Funil/destilação -->
        <path d="M 350 240 L 350 280" stroke-width="1.5" stroke-dasharray="3 3"/>
      </g>
      <text x="140" y="105" text-anchor="middle" font-size="22" fill="#5c4a36">INBOX</text>
      <text x="350" y="105" text-anchor="middle" font-size="22" fill="#c2410c">EM PROCESSO</text>
      <text x="560" y="105" text-anchor="middle" font-size="22" fill="#5c4a36">REPERTÓRIO</text>
      <text x="140" y="335" text-anchor="middle" font-size="18" fill="#8a7559">entrada bruta</text>
      <text x="350" y="335" text-anchor="middle" font-size="18" fill="#8a7559">refinamento</text>
      <text x="560" y="335" text-anchor="middle" font-size="18" fill="#8a7559">consulta rápida</text>
      <text x="350" y="60" text-anchor="middle" font-size="26" fill="#2a1f15">o caminho de uma ideia</text>
    </svg>
  `,

  "pratica-aplicacao": `
    <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Livro -->
        <rect x="80" y="130" width="140" height="100" rx="4"/>
        <line x1="150" y1="130" x2="150" y2="230" stroke-width="1.5"/>
        <line x1="95" y1="155" x2="140" y2="155" stroke-width="1"/>
        <line x1="95" y1="170" x2="138" y2="170" stroke-width="1"/>
        <line x1="95" y1="185" x2="142" y2="185" stroke-width="1"/>
        <line x1="160" y1="155" x2="205" y2="155" stroke-width="1"/>
        <line x1="160" y1="170" x2="200" y2="170" stroke-width="1"/>
        <line x1="160" y1="185" x2="203" y2="185" stroke-width="1"/>
        <!-- Seta -->
        <path d="M 235 180 L 295 180" stroke-width="2.5"/>
        <path d="M 295 180 L 285 173 M 295 180 L 285 187"/>
        <text x="265" y="170" text-anchor="middle" font-size="18" fill="#c2410c">72h</text>
        <!-- Pergunta -->
        <rect x="305" y="150" width="100" height="60" rx="30" stroke="#c2410c"/>
        <text x="355" y="190" text-anchor="middle" font-size="36" fill="#c2410c">?</text>
        <!-- Seta -->
        <path d="M 420 180 L 480 180" stroke-width="2.5"/>
        <path d="M 480 180 L 470 173 M 480 180 L 470 187"/>
        <!-- Ação -->
        <circle cx="540" cy="180" r="55" stroke="#c2410c" stroke-width="3"/>
        <path d="M 510 180 L 535 205 L 575 165" stroke="#c2410c" stroke-width="4"/>
      </g>
      <text x="150" y="270" text-anchor="middle" font-size="22" fill="#5c4a36">aprender</text>
      <text x="355" y="270" text-anchor="middle" font-size="22" fill="#c2410c">o que faço com isso?</text>
      <text x="540" y="270" text-anchor="middle" font-size="22" fill="#c2410c">aplicar</text>
      <text x="350" y="60" text-anchor="middle" font-size="26" fill="#2a1f15">da teoria à transformação</text>
    </svg>
  `,

  "ideias-concretas": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Nuvem com ideias soltas -->
        <path d="M 100 100 Q 80 70 110 60 Q 130 30 170 50 Q 220 30 240 70 Q 280 80 260 110 Q 280 140 240 145 Q 220 165 180 150 Q 140 165 120 140 Q 80 135 100 100 Z" stroke-width="2"/>
        <text x="180" y="100" text-anchor="middle" font-size="18" fill="#5c4a36" font-style="italic">um dia eu quero...</text>
        <!-- Seta -->
        <path d="M 280 200 Q 350 220 420 200" stroke-width="2.5"/>
        <path d="M 420 200 L 408 195 M 420 200 L 410 207"/>
        <text x="350" y="185" text-anchor="middle" font-size="20" fill="#c2410c">decompor</text>
        <!-- Checklist concreto -->
        <rect x="430" y="80" width="220" height="200" rx="6" stroke="#c2410c"/>
        <line x1="450" y1="120" x2="630" y2="120" stroke="#c2410c"/>
        <rect x="450" y="135" width="14" height="14" stroke-width="1.5"/>
        <rect x="450" y="160" width="14" height="14" stroke-width="1.5"/>
        <rect x="450" y="185" width="14" height="14" stroke-width="1.5"/>
        <rect x="450" y="210" width="14" height="14" stroke-width="1.5"/>
        <rect x="450" y="235" width="14" height="14" stroke-width="1.5"/>
        <line x1="475" y1="142" x2="615" y2="142" stroke-width="1"/>
        <line x1="475" y1="167" x2="600" y2="167" stroke-width="1"/>
        <line x1="475" y1="192" x2="610" y2="192" stroke-width="1"/>
        <line x1="475" y1="217" x2="595" y2="217" stroke-width="1"/>
        <line x1="475" y1="242" x2="605" y2="242" stroke-width="1"/>
        <text x="540" y="112" text-anchor="middle" font-size="20" fill="#c2410c">plano concreto</text>
      </g>
      <text x="350" y="335" text-anchor="middle" font-size="26" fill="#2a1f15">o caminho da ideia ao plano</text>
    </svg>
  `,

  "padroes-areas": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Hexágono central -->
        <path d="M 350 180 L 280 180 L 245 220 L 280 260 L 350 260 L 385 220 Z" stroke="#c2410c" stroke-width="3"/>
        <text x="315" y="225" text-anchor="middle" font-size="18" fill="#c2410c">VOCÊ</text>
        <!-- 6 áreas em volta -->
        <circle cx="180" cy="100" r="50"/>
        <circle cx="450" cy="100" r="50"/>
        <circle cx="100" cy="220" r="50"/>
        <circle cx="530" cy="220" r="50"/>
        <circle cx="200" cy="340" r="50"/>
        <circle cx="450" cy="340" r="50"/>
        <!-- Linhas conectando -->
        <line x1="220" y1="135" x2="280" y2="190" stroke-dasharray="3 3"/>
        <line x1="420" y1="135" x2="370" y2="190" stroke-dasharray="3 3"/>
        <line x1="145" y1="225" x2="245" y2="220" stroke-dasharray="3 3"/>
        <line x1="485" y1="225" x2="385" y2="220" stroke-dasharray="3 3"/>
        <line x1="230" y1="310" x2="290" y2="260" stroke-dasharray="3 3"/>
        <line x1="420" y1="310" x2="360" y2="260" stroke-dasharray="3 3"/>
      </g>
      <text x="180" y="105" text-anchor="middle" font-size="16" fill="#5c4a36">saúde</text>
      <text x="450" y="105" text-anchor="middle" font-size="16" fill="#5c4a36">dinheiro</text>
      <text x="100" y="225" text-anchor="middle" font-size="16" fill="#5c4a36">trabalho</text>
      <text x="530" y="225" text-anchor="middle" font-size="16" fill="#5c4a36">relações</text>
      <text x="200" y="345" text-anchor="middle" font-size="16" fill="#5c4a36">espírito</text>
      <text x="450" y="345" text-anchor="middle" font-size="16" fill="#5c4a36">lazer</text>
      <text x="350" y="50" text-anchor="middle" font-size="24" fill="#2a1f15">tudo se conecta</text>
    </svg>
  `,

  "mini-tarefas": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Montanha grande -->
        <path d="M 80 320 L 200 100 L 320 320 Z" stroke-width="2.5"/>
        <line x1="200" y1="100" x2="200" y2="90"/>
        <path d="M 195 92 Q 200 75 210 80 Q 215 70 220 85" fill="none"/>
        <text x="200" y="200" text-anchor="middle" font-size="18" fill="#5c4a36">objetivo</text>
        <text x="200" y="220" text-anchor="middle" font-size="18" fill="#5c4a36">grande</text>
        <!-- Seta -->
        <path d="M 340 220 L 400 220" stroke-width="2.5"/>
        <path d="M 400 220 L 390 213 M 400 220 L 390 227"/>
        <!-- Escadinha -->
        <rect x="430" y="280" width="40" height="40" stroke="#c2410c" stroke-width="2"/>
        <rect x="470" y="240" width="40" height="80" stroke="#c2410c" stroke-width="2"/>
        <rect x="510" y="200" width="40" height="120" stroke="#c2410c" stroke-width="2"/>
        <rect x="550" y="160" width="40" height="160" stroke="#c2410c" stroke-width="2"/>
        <rect x="590" y="120" width="40" height="200" stroke="#c2410c" stroke-width="2"/>
        <!-- Bandeira no topo -->
        <line x1="610" y1="120" x2="610" y2="90" stroke="#c2410c" stroke-width="2"/>
        <path d="M 610 92 L 635 100 L 610 108 Z" fill="#c2410c" stroke="#c2410c"/>
      </g>
      <text x="510" y="345" text-anchor="middle" font-size="20" fill="#c2410c">mini tarefas</text>
      <text x="510" y="365" text-anchor="middle" font-size="16" fill="#5c4a36">um degrau de cada vez</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">decompor é executar</text>
    </svg>
  `,

  "habitos-sustentar": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Calendário 28 dias -->
        <g transform="translate(80, 100)">
          <rect width="540" height="200" rx="8" stroke-width="2"/>
          <line x1="0" y1="40" x2="540" y2="40"/>
          <text x="270" y="28" text-anchor="middle" font-size="18" fill="#c2410c">28 dias</text>
        </g>
        <!-- 4 semanas x 7 dias -->
      </g>
      <g stroke="#5c4a36" stroke-width="1.5" fill="none" stroke-linecap="round">
        ${Array.from({length: 28}, (_, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const x = 100 + col * 70;
          const y = 160 + row * 35;
          const completed = ![6, 12, 20].includes(i);
          return completed
            ? `<g transform="translate(${x}, ${y})"><circle r="11" stroke="#c2410c" fill="rgba(194,65,12,0.15)"/><path d="M -5 0 L -1 5 L 6 -5" stroke="#c2410c" stroke-width="2"/></g>`
            : `<circle cx="${x}" cy="${y}" r="11" stroke-dasharray="3 2"/>`;
        }).join('')}
      </g>
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <text x="350" y="340" text-anchor="middle" font-size="22" fill="#c2410c">25 de 28 ✓</text>
        <text x="350" y="362" text-anchor="middle" font-size="18" fill="#5c4a36">constância imperfeita vence perfeição instável</text>
      </g>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">o hábito visível dura</text>
    </svg>
  `,

  "desvicie-celular": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Celular -->
        <rect x="280" y="80" width="140" height="240" rx="20" stroke-width="2.5"/>
        <line x1="320" y1="105" x2="380" y2="105"/>
        <circle cx="350" cy="300" r="10"/>
        <!-- Notificações explosivas (riscadas) -->
        <g stroke="#c2410c" stroke-width="2">
          <path d="M 100 130 L 260 150" stroke-dasharray="4 4"/>
          <path d="M 110 175 L 265 185" stroke-dasharray="4 4"/>
          <path d="M 90 220 L 260 220" stroke-dasharray="4 4"/>
          <path d="M 105 265 L 265 250" stroke-dasharray="4 4"/>
          <!-- X grande -->
          <path d="M 60 100 L 130 250" stroke-width="3"/>
          <path d="M 130 100 L 60 250" stroke-width="3"/>
        </g>
        <!-- Cérebro tranquilo do outro lado -->
        <g transform="translate(500, 130)">
          <path d="M 50 0 Q 0 0 -10 40 Q -30 50 -20 80 Q -30 110 10 120 Q 25 145 60 140 Q 95 145 110 120 Q 145 110 135 80 Q 150 50 130 40 Q 120 0 70 0 Q 60 0 50 0 Z" stroke-width="2"/>
          <path d="M 60 30 Q 60 110 60 130" stroke-width="1.2"/>
          <path d="M 30 60 Q 45 75 35 95" stroke-width="1.2"/>
          <path d="M 90 60 Q 75 75 85 95" stroke-width="1.2"/>
        </g>
      </g>
      <text x="120" y="60" text-anchor="middle" font-size="22" fill="#c2410c">notificações</text>
      <text x="120" y="320" text-anchor="middle" font-size="18" fill="#5c4a36">desligar tudo</text>
      <text x="570" y="305" text-anchor="middle" font-size="22" fill="#c2410c">foco recuperado</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">de volta para você mesma</text>
    </svg>
  `,

  "protocolo-arr": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- 3 círculos do protocolo -->
        <circle cx="150" cy="190" r="70" stroke="#c2410c" stroke-width="3"/>
        <circle cx="350" cy="190" r="70" stroke="#c2410c" stroke-width="3"/>
        <circle cx="550" cy="190" r="70" stroke="#c2410c" stroke-width="3"/>
        <!-- Letras grandes -->
        <text x="150" y="205" text-anchor="middle" font-size="60" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">A</text>
        <text x="350" y="205" text-anchor="middle" font-size="60" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">R</text>
        <text x="550" y="205" text-anchor="middle" font-size="60" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">R</text>
        <!-- Setas circulares conectando -->
        <path d="M 220 190 Q 270 160 280 190" stroke-width="2"/>
        <path d="M 280 190 L 270 184 M 280 190 L 272 198"/>
        <path d="M 420 190 Q 470 160 480 190" stroke-width="2"/>
        <path d="M 480 190 L 470 184 M 480 190 L 472 198"/>
        <!-- Volta -->
        <path d="M 555 265 Q 350 320 145 265" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M 145 265 L 155 260 M 145 265 L 155 270"/>
      </g>
      <text x="150" y="305" text-anchor="middle" font-size="22" fill="#5c4a36">ACEITAR</text>
      <text x="350" y="305" text-anchor="middle" font-size="22" fill="#5c4a36">RESETAR</text>
      <text x="550" y="305" text-anchor="middle" font-size="22" fill="#5c4a36">RETOMAR</text>
      <text x="150" y="328" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">sem culpa</text>
      <text x="350" y="328" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">sem julgamento</text>
      <text x="550" y="328" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">no dia seguinte</text>
      <text x="350" y="365" text-anchor="middle" font-size="18" fill="#c2410c">ciclo da constância</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">o que fazer depois da queda</text>
    </svg>
  `,

  "caixas-repertorio": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- 4 caixas/gavetas empilhadas -->
        <g transform="translate(100, 100)">
          <rect width="220" height="55" rx="4" fill="rgba(194,65,12,0.04)" stroke-width="2"/>
          <circle cx="190" cy="27" r="5"/>
          <circle cx="200" cy="27" r="5"/>
          <line x1="20" y1="27" x2="170" y2="27" stroke-width="1"/>
        </g>
        <g transform="translate(100, 165)">
          <rect width="220" height="55" rx="4" fill="rgba(194,65,12,0.04)" stroke-width="2"/>
          <circle cx="190" cy="27" r="5"/>
          <circle cx="200" cy="27" r="5"/>
          <line x1="20" y1="27" x2="170" y2="27" stroke-width="1"/>
        </g>
        <g transform="translate(100, 230)">
          <rect width="220" height="55" rx="4" fill="rgba(194,65,12,0.04)" stroke-width="2"/>
          <circle cx="190" cy="27" r="5"/>
          <circle cx="200" cy="27" r="5"/>
          <line x1="20" y1="27" x2="170" y2="27" stroke-width="1"/>
        </g>
        <g transform="translate(100, 295)">
          <rect width="220" height="55" rx="4" fill="rgba(194,65,12,0.04)" stroke-width="2"/>
          <circle cx="190" cy="27" r="5"/>
          <circle cx="200" cy="27" r="5"/>
          <line x1="20" y1="27" x2="170" y2="27" stroke-width="1"/>
        </g>
        <!-- Lupa/busca -->
        <circle cx="500" cy="200" r="60" stroke="#c2410c" stroke-width="3"/>
        <line x1="545" y1="245" x2="595" y2="295" stroke="#c2410c" stroke-width="6" stroke-linecap="round"/>
        <text x="500" y="195" text-anchor="middle" font-size="22" fill="#c2410c">consulta</text>
        <text x="500" y="220" text-anchor="middle" font-size="22" fill="#c2410c">rápida</text>
        <!-- Seta caixas -> lupa -->
        <path d="M 325 195 Q 380 195 435 195" stroke-width="2" stroke-dasharray="3 3"/>
      </g>
      <text x="210" y="135" text-anchor="middle" font-size="18" fill="#5c4a36">pessoal</text>
      <text x="210" y="200" text-anchor="middle" font-size="18" fill="#5c4a36">trabalho</text>
      <text x="210" y="265" text-anchor="middle" font-size="18" fill="#5c4a36">estudos</text>
      <text x="210" y="330" text-anchor="middle" font-size="18" fill="#5c4a36">inspirações</text>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">sua segunda memória organizada</text>
    </svg>
  `,

  "ia-estudos": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Pessoa estudando -->
        <circle cx="150" cy="130" r="30"/>
        <path d="M 130 160 L 130 230 L 170 230 L 170 160 Z" stroke-width="2"/>
        <line x1="130" y1="180" x2="100" y2="220"/>
        <line x1="170" y1="180" x2="195" y2="200"/>
        <rect x="190" y="195" width="50" height="35" rx="3"/>
        <!-- Balão pergunta -->
        <path d="M 230 130 Q 270 110 320 120 Q 360 110 350 150 Q 340 175 290 170 L 270 185 L 275 170 Q 235 165 230 130 Z" stroke="#c2410c" stroke-width="2"/>
        <text x="295" y="148" text-anchor="middle" font-size="26" fill="#c2410c">?</text>
        <!-- IA (robô estilizado) -->
        <g transform="translate(450, 100)">
          <rect width="120" height="100" rx="14" stroke-width="2.5"/>
          <circle cx="35" cy="40" r="10"/>
          <circle cx="85" cy="40" r="10"/>
          <circle cx="35" cy="40" r="3" fill="#c2410c" stroke="#c2410c"/>
          <circle cx="85" cy="40" r="3" fill="#c2410c" stroke="#c2410c"/>
          <path d="M 35 70 Q 60 85 85 70"/>
          <line x1="60" y1="0" x2="60" y2="-15" stroke-width="2"/>
          <circle cx="60" cy="-20" r="5" fill="#c2410c" stroke="#c2410c"/>
        </g>
        <!-- Resposta -->
        <path d="M 440 240 Q 470 240 510 250 Q 560 245 570 270 Q 575 295 540 295 L 510 295 L 495 310 L 500 295 Q 455 295 440 270 Z" stroke="#c2410c" stroke-width="2"/>
        <text x="510" y="278" text-anchor="middle" font-size="18" fill="#c2410c">analogia</text>
        <!-- Setas trocando -->
        <path d="M 360 170 Q 410 170 440 160" stroke-width="2"/>
        <path d="M 440 160 L 430 156 M 440 160 L 432 167"/>
        <path d="M 510 220 Q 460 240 410 250" stroke-width="2"/>
        <path d="M 410 250 L 420 245 M 410 250 L 420 257"/>
      </g>
      <text x="150" y="270" text-anchor="middle" font-size="20" fill="#5c4a36">você</text>
      <text x="510" y="345" text-anchor="middle" font-size="20" fill="#5c4a36">copiloto de aprendizado</text>
      <text x="350" y="55" text-anchor="middle" font-size="26" fill="#2a1f15">diálogo que ensina</text>
    </svg>
  `,

  "diario-pratica": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Caderno aberto -->
        <rect x="120" y="100" width="460" height="240" rx="6" stroke-width="2.5"/>
        <line x1="350" y1="100" x2="350" y2="340" stroke-width="2"/>
        <!-- Linhas página esquerda -->
        <line x1="145" y1="140" x2="325" y2="140" stroke-width="1" stroke="#c2410c"/>
        <text x="235" y="135" text-anchor="middle" font-size="18" fill="#c2410c">hoje aprendi...</text>
        <line x1="145" y1="170" x2="320" y2="170" stroke-width="1"/>
        <line x1="145" y1="190" x2="325" y2="190" stroke-width="1"/>
        <line x1="145" y1="210" x2="315" y2="210" stroke-width="1"/>
        <line x1="145" y1="240" x2="325" y2="240" stroke-width="1" stroke="#c2410c"/>
        <text x="235" y="235" text-anchor="middle" font-size="18" fill="#c2410c">grata por...</text>
        <line x1="145" y1="270" x2="320" y2="270" stroke-width="1"/>
        <line x1="145" y1="290" x2="325" y2="290" stroke-width="1"/>
        <line x1="145" y1="310" x2="315" y2="310" stroke-width="1"/>
        <!-- Linhas página direita -->
        <line x1="375" y1="140" x2="555" y2="140" stroke-width="1" stroke="#c2410c"/>
        <text x="465" y="135" text-anchor="middle" font-size="18" fill="#c2410c">amanhã farei...</text>
        <line x1="375" y1="170" x2="555" y2="170" stroke-width="1"/>
        <line x1="375" y1="190" x2="550" y2="190" stroke-width="1"/>
        <line x1="375" y1="210" x2="555" y2="210" stroke-width="1"/>
        <line x1="375" y1="230" x2="545" y2="230" stroke-width="1"/>
        <!-- Estrelas/decoração -->
        <path d="M 540 290 L 545 300 L 555 302 L 547 309 L 549 320 L 540 314 L 531 320 L 533 309 L 525 302 L 535 300 Z" fill="rgba(194,65,12,0.2)" stroke="#c2410c"/>
        <!-- Caneta -->
        <g transform="translate(580, 280) rotate(30)">
          <rect width="80" height="14" rx="4" stroke-width="2"/>
          <path d="M -10 7 L 0 0 L 0 14 Z" stroke-width="2"/>
        </g>
      </g>
      <text x="350" y="60" text-anchor="middle" font-size="26" fill="#2a1f15">três perguntas, dez minutos</text>
    </svg>
  `,

  "sistema-notion": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Dashboard principal -->
        <rect x="80" y="80" width="540" height="240" rx="10" stroke-width="2.5"/>
        <line x1="80" y1="125" x2="620" y2="125" stroke-width="2"/>
        <text x="350" y="113" text-anchor="middle" font-size="20" fill="#c2410c">Sistema Rotina Focada</text>
        <!-- Mini cards de áreas -->
        <g transform="translate(110, 150)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">princípios</text>
        </g>
        <g transform="translate(250, 150)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">metas</text>
        </g>
        <g transform="translate(390, 150)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">rotinas</text>
        </g>
        <g transform="translate(110, 235)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">estudos</text>
        </g>
        <g transform="translate(250, 235)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">finanças</text>
        </g>
        <g transform="translate(390, 235)">
          <rect width="120" height="70" rx="8" stroke="#c2410c" stroke-width="2" fill="rgba(194,65,12,0.06)"/>
          <text x="60" y="40" text-anchor="middle" font-size="16" fill="#5c4a36">tracker</text>
        </g>
        <!-- Chave -->
        <g transform="translate(530, 170)">
          <circle cx="20" cy="20" r="15" stroke-width="2.5"/>
          <line x1="35" y1="20" x2="80" y2="20" stroke-width="3"/>
          <line x1="70" y1="20" x2="70" y2="32" stroke-width="3"/>
          <line x1="80" y1="20" x2="80" y2="38" stroke-width="3"/>
        </g>
      </g>
      <text x="350" y="50" text-anchor="middle" font-size="26" fill="#2a1f15">tudo no mesmo lugar</text>
      <text x="350" y="355" text-anchor="middle" font-size="20" fill="#c2410c">a chave da casa é sua</text>
    </svg>
  `,

  "areas-organizadas": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Cadeia: meta -> projeto -> tarefa -->
        <rect x="80" y="160" width="140" height="80" rx="10" stroke="#c2410c" stroke-width="2.5" fill="rgba(194,65,12,0.05)"/>
        <text x="150" y="195" text-anchor="middle" font-size="22" fill="#c2410c">META</text>
        <text x="150" y="220" text-anchor="middle" font-size="14" fill="#8a7559">90 dias</text>

        <path d="M 225 200 L 275 200" stroke-width="2.5"/>
        <path d="M 275 200 L 265 195 M 275 200 L 265 205"/>

        <rect x="280" y="160" width="140" height="80" rx="10" stroke="#c2410c" stroke-width="2.5" fill="rgba(194,65,12,0.05)"/>
        <text x="350" y="195" text-anchor="middle" font-size="22" fill="#c2410c">PROJETO</text>
        <text x="350" y="220" text-anchor="middle" font-size="14" fill="#8a7559">30 dias</text>

        <path d="M 425 200 L 475 200" stroke-width="2.5"/>
        <path d="M 475 200 L 465 195 M 475 200 L 465 205"/>

        <rect x="480" y="160" width="140" height="80" rx="10" stroke="#c2410c" stroke-width="2.5" fill="rgba(194,65,12,0.05)"/>
        <text x="550" y="195" text-anchor="middle" font-size="22" fill="#c2410c">TAREFA</text>
        <text x="550" y="220" text-anchor="middle" font-size="14" fill="#8a7559">hoje</text>

        <!-- Linhas pontilhadas conectando áreas -->
        <line x1="150" y1="260" x2="150" y2="310" stroke-dasharray="3 3" stroke-width="1.5"/>
        <line x1="350" y1="260" x2="350" y2="310" stroke-dasharray="3 3" stroke-width="1.5"/>
        <line x1="550" y1="260" x2="550" y2="310" stroke-dasharray="3 3" stroke-width="1.5"/>
        <circle cx="150" cy="320" r="6" fill="#5c4a36" stroke="none"/>
        <circle cx="350" cy="320" r="6" fill="#5c4a36" stroke="none"/>
        <circle cx="550" cy="320" r="6" fill="#5c4a36" stroke="none"/>
        <line x1="150" y1="320" x2="550" y2="320"/>
      </g>
      <text x="350" y="345" text-anchor="middle" font-size="20" fill="#5c4a36">tudo conectado em um só sistema</text>
      <text x="350" y="60" text-anchor="middle" font-size="26" fill="#2a1f15">cadeia da execução</text>
    </svg>
  `,

  "habit-tracker": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Tabela de hábitos -->
        <rect x="80" y="80" width="540" height="240" rx="8" stroke-width="2"/>
        <line x1="80" y1="125" x2="620" y2="125"/>
        <line x1="200" y1="80" x2="200" y2="320"/>
        <!-- Headers dias da semana -->
        ${[0,1,2,3,4,5,6].map((d, i) => {
          const x = 230 + i * 55;
          const days = ['S','T','Q','Q','S','S','D'];
          return `<text x="${x}" y="110" text-anchor="middle" font-size="18" fill="#c2410c">${days[i]}</text>`;
        }).join('')}
        <!-- Linhas de hábitos -->
        <text x="100" y="160" font-size="18" fill="#5c4a36">leitura</text>
        <text x="100" y="220" font-size="18" fill="#5c4a36">exercício</text>
        <text x="100" y="280" font-size="18" fill="#5c4a36">diário</text>
        <line x1="80" y1="180" x2="620" y2="180" stroke-width="1"/>
        <line x1="80" y1="240" x2="620" y2="240" stroke-width="1"/>
        <!-- Marcações de hábitos -->
        ${[
          [1,1,1,1,1,0,1], // leitura
          [1,0,1,1,1,1,0], // exercício
          [1,1,1,1,1,1,1]  // diário
        ].map((row, ri) => row.map((v, ci) => {
          const x = 230 + ci * 55;
          const y = 155 + ri * 60;
          return v
            ? `<g transform="translate(${x}, ${y})"><circle r="13" fill="rgba(194,65,12,0.18)" stroke="#c2410c"/><path d="M -6 0 L -1 6 L 7 -5" stroke="#c2410c" stroke-width="2.5"/></g>`
            : `<circle cx="${x}" cy="${y}" r="13" stroke-dasharray="3 2"/>`;
        }).join('')).join('')}
      </g>
      <text x="350" y="55" text-anchor="middle" font-size="26" fill="#2a1f15">a constância vira gráfico</text>
      <text x="350" y="350" text-anchor="middle" font-size="18" fill="#c2410c">não interrompa a corrente</text>
    </svg>
  `,

  "roteiro-4-semanas": `
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Caveat',cursive;">
      <g stroke="#5c4a36" stroke-width="2" fill="none" stroke-linecap="round">
        <!-- Linha do tempo horizontal -->
        <line x1="80" y1="200" x2="620" y2="200" stroke-width="2.5"/>
        <!-- 4 marcos -->
        <circle cx="130" cy="200" r="35" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="130" y="207" text-anchor="middle" font-size="22" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">1</text>
        <circle cx="290" cy="200" r="35" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="290" y="207" text-anchor="middle" font-size="22" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">2</text>
        <circle cx="450" cy="200" r="35" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="450" y="207" text-anchor="middle" font-size="22" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">3</text>
        <circle cx="610" cy="200" r="35" stroke="#c2410c" stroke-width="3" fill="rgba(194,65,12,0.08)"/>
        <text x="610" y="207" text-anchor="middle" font-size="22" fill="#c2410c" font-family="Cormorant Garamond, serif" font-weight="700">4</text>
        <!-- Labels acima -->
        <text x="130" y="145" text-anchor="middle" font-size="18" fill="#5c4a36">princípios</text>
        <text x="130" y="165" text-anchor="middle" font-size="18" fill="#5c4a36">+ limpeza</text>
        <text x="290" y="145" text-anchor="middle" font-size="18" fill="#5c4a36">blocos</text>
        <text x="290" y="165" text-anchor="middle" font-size="18" fill="#5c4a36">+ tracker</text>
        <text x="450" y="145" text-anchor="middle" font-size="18" fill="#5c4a36">projeto</text>
        <text x="450" y="165" text-anchor="middle" font-size="18" fill="#5c4a36">+ revisão</text>
        <text x="610" y="145" text-anchor="middle" font-size="18" fill="#5c4a36">sustentação</text>
        <text x="610" y="165" text-anchor="middle" font-size="18" fill="#5c4a36">+ ajustes</text>
        <!-- Labels abaixo -->
        <text x="130" y="265" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">semana 1</text>
        <text x="290" y="265" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">semana 2</text>
        <text x="450" y="265" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">semana 3</text>
        <text x="610" y="265" text-anchor="middle" font-size="16" fill="#8a7559" font-style="italic">semana 4</text>
        <!-- Bandeira no final -->
        <line x1="610" y1="160" x2="610" y2="115" stroke="#c2410c" stroke-width="2.5"/>
        <path d="M 610 115 L 645 122 L 610 135 Z" fill="#c2410c" stroke="#c2410c"/>
      </g>
      <text x="350" y="55" text-anchor="middle" font-size="26" fill="#2a1f15">o caminho de implementação</text>
      <text x="350" y="335" text-anchor="middle" font-size="20" fill="#c2410c">28 dias para virar rotina viva</text>
    </svg>
  `
};
