/* ============================================================
   HUGO BAPTISTELLA SILVA — PORTFOLIO
   Exclusive Typography: Lato (Łukasz Dziedzic)
   Interactive Engine, Modals & Closet.AI Experience
   ============================================================ */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     FEATURED PROJECTS (EXACTLY THREE)
     ═══════════════════════════════════════════════ */
  const FEATURED_PROJECTS = [
    {
      id: 'cyber-overdrive',
      name: 'Cyber Overdrive',
      category: 'Web Game / Creative Development / Night City Protocol',
      year: '2025',
      status: 'Publicado &bull; Jogável',
      cover: 'assets/cyber-overdrive.jpg',
      liveUrl: 'https://ad-3-tri-game.vercel.app/',
      repoUrl: 'https://github.com/Hugo-specs/AD-3-Tri---Game',
      description: 'Um jogo de navegador com temática cyberpunk inspirado em jogos de ritmo e captura de munições em alta velocidade. O jogador precisa coletar munições cibernéticas, desviar de ameaças e sobreviver em Night City.',
      overview: 'Cyber Overdrive é uma experiência arcade desenvolvida diretamente para a web utilizando renderização em HTML5 Canvas e a Web Audio API para sintetização de efeitos sonoros procedurais. O jogador assume o controle de um coletor de munições em ritmo acelerado, precisando manter o combo alto enquanto desvia de perigos que drenam sua barra de HP.',
      objective: 'Construir um motor de jogo web performático do zero em Vanilla JavaScript e Canvas, sem dependência de engines ou bibliotecas pesadas, mantendo taxa de quadros estável (60 FPS), controle de colisões customizado e feedback sonoro sincronizado.',
      process: 'O projeto foi estruturado de forma modular: config.js para parâmetros globais e balanceamento; audio.js para sintetização de efeitos sonoros com Web Audio API; particles.js para feedback visual de explosões e faíscas; collision.js para detecção precisa de contato; player.js e entities.js para movimentação e spawn de munições.',
      technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'Web Audio API', 'Engine de Física & Colisão', 'Sistema de Partículas', 'CSS3'],
      features: [
        { title: 'Pontuação & Recorde (High Score)', desc: 'Contagem dinâmica de pontos e armazenamento do recorde no navegador em tempo real.' },
        { title: 'Combos & Multiplicadores', desc: 'Multiplicadores progressivos que recompensam sequências perfeitas sem interrupção.' },
        { title: 'Níveis Progressivos', desc: 'Aumento gradual de velocidade, densidade de projéteis e complexidade do ambiente.' },
        { title: 'Indicador de Vida & Precisão', desc: 'Barra visual de HP e cálculo de acurácia com percentual exibido na tela de Game Over.' },
        { title: 'Áudio Procedural Nativo', desc: 'Efeitos sonoros gerados diretamente por osciladores da Web Audio API.' },
        { title: 'Controles Híbridos', desc: 'Suporte a teclado (Espaço, Enter, Setas ou WASD) e mouse com alta taxa de resposta.' }
      ],
      results: 'Jogo funcional e publicado na Vercel com jogabilidade fluida e resposta imediata de comandos.',
      launchAction: 'play-game',
      launchText: 'Jogar Cyber Overdrive no Navegador',
      nextProject: 1
    },
    {
      id: 'criptobro-bot',
      name: 'Criptobro-Bot',
      category: 'Automação / Python / APIs de Mercado / Telegram',
      year: '2026',
      status: 'Repositório Público',
      cover: 'assets/criptobro-bot.jpg',
      liveUrl: '',
      repoUrl: 'https://github.com/hugospecs/criptobro-bot',
      description: 'Robô autônomo de análise técnica e automação programado em Python. Conecta-se à exchange OKX via biblioteca ccxt, avalia simultaneamente múltiplos indicadores de mercado e dispara notificações em tempo real pelo Telegram.',
      overview: 'Criptobro-Bot é um software desenvolvido em Python para monitoramento do mercado financeiro de ativos digitais. Executa cálculos de análise técnica em tempo real sobre pares em USDC na exchange OKX, avaliando tendências e automatizando o acompanhamento com política estrita de controle de risco.',
      objective: 'Criar um sistema de automação robusto com execução assíncrona (AsyncIO), eliminando a necessidade de intervenção humana constante para identificação de padrões técnicos e protegendo o capital com lógica de stop loss móvel (trailing stop).',
      process: 'Implementação de estratégia multicondicional "Quad+ Entry Signal" exigindo 5 confirmações simultâneas: tendência macro pelo EMA200 (1h), momento de sobrevenda com inflexão ascendente no RSI (< 35), cruzamento confirmado no MACD, volume 20% acima da média e confirmação de price action no tempo gráfico de 5 minutos. Gerenciamento de risco estruturado com trailing stop progressivo em três patamares (+1.5%, +2.5% e +3.5%) e take profit automático.',
      technologies: ['Python 3', 'CCXT (Crypto Exchange Trading)', 'python-telegram-bot', 'AsyncIO & Programação Assíncrona', 'Indicadores Técnicos (EMA, RSI, MACD)', 'Persistência JSON'],
      features: [
        { title: 'Sinal Quad+ de 5 Condições', desc: 'Verificação rigorosa simultânea para evitar falsos rompimentos de mercado.' },
        { title: 'Escalated Trailing Stop', desc: 'Ajuste dinâmico de stop loss à medida que o ganho aumenta, protegendo o lucro acumulado.' },
        { title: 'Integração Telegram Bot', desc: 'Notificações imediatas no smartphone sobre entradas, saídas, níveis de stop e relatórios.' },
        { title: 'Loop Assíncrono Duplo', desc: 'Rastreamento de entradas a cada 5 minutos e monitoramento de risco contínuo a cada 15 segundos.' },
        { title: 'Modo Simulado (Dry Run)', desc: 'Validação segura em ambiente de teste com registro de posições em arquivo JSON.' }
      ],
      results: 'Código modularizado publicado no GitHub com suporte a variáveis de ambiente e deploy em nuvem.',
      launchAction: 'view-github',
      launchText: 'Acessar Repositório no GitHub',
      nextProject: 2
    },
    {
      id: 'scratcher',
      name: 'Scratcher',
      category: 'Sistemas Linux / Shell Scripting / Auditoria de Segurança',
      year: '2025',
      status: 'Repositório Público',
      cover: 'assets/scratcher.jpg',
      liveUrl: '',
      repoUrl: 'https://github.com/hugospecs/scratcher',
      description: 'Ferramenta CLI desenvolvida em Bash para administração de sistemas Linux, inspeção granular de arquivos e auditoria de segurança de permissões de sistema.',
      overview: 'Scratcher é um utilitário de terminal para varreduras recursivas em ambientes UNIX/Linux. Oferece modos de busca geral e específica com filtros combináveis por tipo, extensão, palavras-chave e privilégios de arquivos.',
      objective: 'Desenvolver uma ferramenta de linha de comando eficiente em Bash puro, sem dependências externas, que permita a administradores e estudantes inspecionar estruturas de diretórios e auditar permissões com velocidade.',
      process: 'Construção de analisador de argumentos (parser) tratando múltiplos parâmetros de entrada (-b, -d, -n, -k, -t, -e, -m). Implementação de rotinas para auditoria de permissões RWX (usuário e grupo), busca por arquivos e pastas ocultas e detecção especializada de binários com bits especiais SUID e SGID, críticos para segurança e prevenção de elevação de privilégios.',
      technologies: ['Bash Shell Scripting', 'Administração de Sistemas Linux', 'Auditoria de Permissões RWX', 'Análise de Bits SUID / SGID', 'POSIX Tools'],
      features: [
        { title: 'Busca Geral & Específica', desc: 'Varredura recursiva por arquivos (f), diretórios (d) ou ambos (a).' },
        { title: 'Filtros por Nome e Conteúdo', desc: 'Localização de arquivos por extensão (-e), correspondência de nome (-n) e palavras-chave (-k).' },
        { title: 'Inspeção de Permissões RWX', desc: 'Identificação de privilégios específicos de leitura, escrita e execução para usuários e grupos.' },
        { title: 'Detecção de SUID e SGID', desc: 'Varredura de binários com bits de execução privilegiada no sistema de arquivos.' },
        { title: 'Arquivos Ocultos', desc: 'Identificação e listagem detalhada de arquivos ocultos (-t) em qualquer profundidade.' }
      ],
      results: 'Script disponível no GitHub nas versões 1, 2 e 3, demonstrando domínio de sistemas Linux e automação em terminal.',
      launchAction: 'view-github',
      launchText: 'Acessar Repositório no GitHub',
      nextProject: 0
    }
  ];

  /* ═══════════════════════════════════════════════
     CLOSET.AI PREDEFINED SCENARIOS
     ═══════════════════════════════════════════════ */
  const CLOSET_PRESETS = {
    docs: {
      text: 'Minha equipe gasta 4 horas diárias renomeando notas fiscais em PDF e digitando valores manualmente em planilhas.',
      category: 'Produtividade',
      title: 'Extração Manual de Notas Fiscais e Documentos',
      summary: 'Gargalo operacional caracterizado por digitação manual de notas fiscais com alto custo em horas humanas e risco de inconsistências de digitação.',
      aiTitle: 'Pipeline Inteligente com OCR e Extração LLM Estruturada',
      aiDesc: 'Modelo de visão multimodal combinado com LLM especializada em esquemas JSON para leitura estruturada de chaves, valores e impostos em PDFs não padronizados.',
      flow: [
        'Upload em lote no diretório monitorado',
        'Pré-processamento e normalização por visão computacional',
        'Extração dos campos via modelo de linguagem com esquema JSON',
        'Validação automática de CNPJ/Valores e inserção no banco MySQL'
      ],
      benefits: [
        'Redução estimada de até 85% no tempo de processamento documental.',
        'Eliminação de retrabalho por digitação incorreta de chaves e valores.',
        'Notificações automáticas para itens com divergência de cálculo.'
      ],
      nextSteps: '1. Coleta de amostras representativas; 2. Definição do schema JSON de saída; 3. Validação do protótipo em ambiente de homologação.'
    },
    support: {
      text: 'Clientes esperando mais de 30 minutos no WhatsApp e e-mail para tirar dúvidas simples sobre status de entrega e horário.',
      category: 'Negócios',
      title: 'Tempo Excessivo de Espera em Suporte de Primeiro Nível',
      summary: 'Atendimento sobrecarregado por perguntas repetitivas de triagem, gerando lentidão nas respostas e desgaste da equipe.',
      aiTitle: 'Agente Conversacional com Recuperação Contextual (RAG)',
      aiDesc: 'Assistente integrado à base de conhecimento da empresa com conexão a APIs internas para responder consultas de status em tempo real.',
      flow: [
        'Recepção da mensagem e classificação semântica de intenção',
        'Consulta à base de conhecimento e sistema interno de pedidos',
        'Geração de resposta personalizada e contextualizada',
        'Transbordo automático para atendente humano quando necessário'
      ],
      benefits: [
        'Resolução imediata para a maioria das dúvidas comuns.',
        'Atendimento disponível 24 horas por dia, 7 dias por semana.',
        'Liberação da equipe para atendimento especializado.'
      ],
      nextSteps: '1. Mapeamento das 20 principais perguntas frequentes; 2. Estruturação da base em formato limpo; 3. Teste em canal fechado.'
    },
    scheduling: {
      text: 'Perco muito tempo organizando pautas de reuniões, conflitos de horários em calendários e lembretes de tarefas acadêmicas.',
      category: 'Organização',
      title: 'Desalinhamento de Agendas e Conflito de Compromissos',
      summary: 'Desorganização de horários entre membros de equipe resultando em atrasos, reuniões redundantes e esquecimento de entregas.',
      aiTitle: 'Motor Heurístico de Agendamento com Otimização de Calendário',
      aiDesc: 'Algoritmo inteligente que analisa prioridades, janelas de foco profundo e preferências de participantes para alocar horários ideais.',
      flow: [
        'Ingestão das tarefas pendentes e prazos limites',
        'Análise de compatibilidade de fusos e janelas livres de reunião',
        'Alocação automática de blocos com disparos de convites',
        'Envio de pauta resumida 15 minutos antes do início'
      ],
      benefits: [
        'Economia média de 4 horas semanais por pessoa.',
        'Preservação de blocos ininterruptos para trabalho focado.',
        'Redução a zero de reuniões marcadas em horários conflitantes.'
      ],
      nextSteps: '1. Conectar calendários via API; 2. Parametrizar regras de duração máxima; 3. Ativar notificações de lembrete.'
    },
    data: {
      text: 'Temos planilhas antigas com milhares de linhas cheias de duplicidades, telefones sem DDD e dados despadronizados.',
      category: 'Tecnologia',
      title: 'Inconsistência e Duplicidade em Bases de Dados Legadas',
      summary: 'Base de dados fragmentada que impede emissão de relatórios confiáveis e dificulta automações de marketing ou faturamento.',
      aiTitle: 'Sanitizador Preditivo com Fuzzy Matching e Normalização',
      aiDesc: 'Algoritmo de correspondência fonética e semântica com regras determinísticas para consolidação de registros similares.',
      flow: [
        'Varredura dos registros e identificação de campos críticos',
        'Agrupamento de duplicatas por similaridade fonética e numérica',
        'Normalização de formatos (telefone, CPF, CEP e endereços)',
        'Geração de relatório auditável antes do commit definitivo no banco'
      ],
      benefits: [
        'Higienização de 100% da base sem perda acidental de dados.',
        'Conformidade rigorosa com diretrizes de governança e LGPD.',
        'Relatórios gerenciais baseados em dados íntegros e auditáveis.'
      ],
      nextSteps: '1. Backup prévio dos dados brutos; 2. Execução em lote de teste de 500 registros; 3. Aplicação na base completa.'
    }
  };

  /* ═══════════════════════════════════════════════
     DOM READY
     ═══════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initVhsIntro();
    initAudioController();
    initFluidScroll();
    initNavigation();
    initMobileMenu();
    initScrollReveal();
    initProjectDetailModal();
    initGameModal();
    initCvModal();
    initContactInteractions();
    initClosetAiEnvironment();
    initBackToTop();
    initActiveNavTracking();

    // Check hash for direct entry into Closet.AI
    if (window.location.hash === '#closet-ai') {
      openClosetEnvironment();
    }
  }


  /* ═══════════════════════════════════════════════
     NAVIGATION & SCROLL
     ═══════════════════════════════════════════════ */
  function initNavigation() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Smooth scroll for internal links (respects Lenis or native)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || targetId === '#closet-ai') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const navHeight = nav.offsetHeight || 72;
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { offset: -navHeight, duration: 1.2 });
        } else {
          const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }


  /* ═══════════════════════════════════════════════
     MOBILE MENU
     ═══════════════════════════════════════════════ */
  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const links = document.querySelectorAll('[data-mobile-link]');

    if (!toggle || !mobileMenu) return;

    function toggleMenu() {
      const isOpen = toggle.classList.contains('open');
      toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    }

    toggle.addEventListener('click', toggleMenu);

    links.forEach(link => {
      link.addEventListener('click', () => {
        if (toggle.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    const mobileCloset = document.getElementById('mobileClosetTrigger');
    if (mobileCloset) {
      mobileCloset.addEventListener('click', (e) => {
        e.preventDefault();
        if (toggle.classList.contains('open')) {
          toggleMenu();
        }
        openClosetEnvironment();
      });
    }
  }


  /* ═══════════════════════════════════════════════
     SCROLL REVEAL OBSERVER
     ═══════════════════════════════════════════════ */
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }


  /* ═══════════════════════════════════════════════
     PROJECT DETAIL MODAL
     ═══════════════════════════════════════════════ */
  function initProjectDetailModal() {
    const modal = document.getElementById('projectDetailModal');
    const closeBtn = document.getElementById('closeProjectModalBtn');
    const detailTriggers = document.querySelectorAll('[data-open-detail]');

    detailTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = btn.dataset.openDetail;
        openProjectDetail(projectId);
      });
    });

    // Also clicking project cards opens details
    document.querySelectorAll('.project-showcase').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        const projectId = card.dataset.projectId;
        if (projectId) openProjectDetail(projectId);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeProjectDetail);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeProjectDetail();
      }
    });
  }

  function openProjectDetail(projectId) {
    const project = FEATURED_PROJECTS.find(p => p.id === projectId);
    const modal = document.getElementById('projectDetailModal');
    const content = document.getElementById('projectModalContent');
    const tag = document.getElementById('projectModalTag');

    if (!project || !modal || !content) return;

    if (tag) {
      tag.textContent = `${project.name} // Detalhes Técnicos`;
    }

    content.innerHTML = `
      <div class="modal-detail-hero">
        <div class="modal-meta-row">
          <div class="modal-meta-item">
            <span class="modal-meta-lbl">Categoria</span>
            <span class="modal-meta-val">${project.category}</span>
          </div>
          <div class="modal-meta-item">
            <span class="modal-meta-lbl">Ano</span>
            <span class="modal-meta-val">${project.year}</span>
          </div>
          <div class="modal-meta-item">
            <span class="modal-meta-lbl">Status</span>
            <span class="modal-meta-val" style="color:var(--accent-yellow);">${project.status}</span>
          </div>
        </div>

        <h2 class="modal-project-title">${project.name}</h2>
        <p class="modal-project-desc">${project.description}</p>

        <div class="modal-actions-row">
          ${project.launchAction === 'play-game' ? `
            <button class="editorial-btn editorial-btn--primary" id="modalPlayGameBtn">
              <span>▶ Jogar no Navegador</span>
            </button>
          ` : ''}
          ${project.repoUrl ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="editorial-btn editorial-btn--outline">
              <span>Ver no GitHub ↗</span>
            </a>
          ` : ''}
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="editorial-btn editorial-btn--outline">
              <span>URL Externa ↗</span>
            </a>
          ` : ''}
        </div>

        <img src="${project.cover}" alt="${project.name}" class="modal-cover-img" loading="lazy">
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">01 // VISÃO GERAL &amp; CONCEITO</h3>
        <p class="modal-section-content">${project.overview}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">02 // OBJETIVO TÉCNICO</h3>
        <p class="modal-section-content">${project.objective}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">03 // PROCESSO DE ENGENHARIA &amp; ARQUITETURA</h3>
        <p class="modal-section-content">${project.process}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">04 // FUNCIONALIDADES VERIFICADAS</h3>
        <div class="modal-features-grid">
          ${project.features.map(f => `
            <div class="feature-box">
              <h5>${f.title}</h5>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">05 // TECNOLOGIAS UTILIZADAS</h3>
        <div class="modal-tech-pills">
          ${project.technologies.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">06 // RESULTADO</h3>
        <p class="modal-section-content">${project.results}</p>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;

    const modalPlayBtn = document.getElementById('modalPlayGameBtn');
    if (modalPlayBtn) {
      modalPlayBtn.addEventListener('click', () => {
        closeProjectDetail();
        openGameModal();
      });
    }
  }

  function closeProjectDetail() {
    const modal = document.getElementById('projectDetailModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }


  /* ═══════════════════════════════════════════════
     EMBEDDED GAME MODAL (CYBER OVERDRIVE)
     ═══════════════════════════════════════════════ */
  function initGameModal() {
    const launchBtn = document.getElementById('launchCyberGameBtn');
    const modal = document.getElementById('gameModal');
    const closeBtn = document.getElementById('closeGameModalBtn');
    const iframe = document.getElementById('gameIframe');
    const fullscreenBtn = document.getElementById('gameFullscreenBtn');
    const restartBtn = document.getElementById('gameRestartBtn');
    const loader = document.getElementById('gameModalLoader');

    if (launchBtn) {
      launchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openGameModal();
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeGameModal);

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          modal.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    if (restartBtn && iframe) {
      restartBtn.addEventListener('click', () => {
        if (loader) loader.classList.remove('hidden');
        iframe.src = iframe.src;
      });
    }

    if (iframe) {
      iframe.addEventListener('load', () => {
        if (loader) loader.classList.add('hidden');
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open') && !document.fullscreenElement) {
        closeGameModal();
      }
    });
  }

  function openGameModal() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');
    const loader = document.getElementById('gameModalLoader');

    if (!modal || !iframe) return;

    if (loader) loader.classList.remove('hidden');
    iframe.src = 'https://ad-3-tri-game.vercel.app/';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGameModal() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');

    if (!modal || !iframe) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.body.style.overflow = '';
  }


  /* ═══════════════════════════════════════════════
     CURRÍCULO (PDF READY MODAL)
     ═══════════════════════════════════════════════ */
  function initCvModal() {
    const openBtn = document.getElementById('openCvModalBtn');
    const modal = document.getElementById('cvModal');
    const closeBtn = document.getElementById('closeCvModalBtn');
    const overlay = document.getElementById('cvModalOverlay');
    const printBtn = document.getElementById('printCvBtn');

    function openModal() {
      if (!modal) return;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }


  /* ═══════════════════════════════════════════════
     CONTACT INTERACTIONS (COPY EMAIL & LINKS)
     ═══════════════════════════════════════════════ */
  function initContactInteractions() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const copyText = document.getElementById('copyBtnText');
    const email = 'hbaptistellasilva@gmail.com';

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        if (copyText) copyText.textContent = 'E-mail Copiado!';
        setTimeout(() => {
          if (copyText) copyText.textContent = 'Copiar E-mail';
        }, 2200);
      } catch (err) {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          if (copyText) copyText.textContent = 'E-mail Copiado!';
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copiar E-mail';
          }, 2200);
        } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }


  /* ═══════════════════════════════════════════════
     CLOSET.AI — MINI-SITE CONCEITUAL EMBUTIDO
     ═══════════════════════════════════════════════ */
  function initClosetAiEnvironment() {
    const navLink = document.getElementById('navClosetLink');
    const heroBtn = document.getElementById('heroClosetBtn');
    const bannerBtn = document.getElementById('openClosetFromBannerBtn');
    const exitBtn = document.getElementById('exitClosetBtn');
    const finalExitBtn = document.getElementById('closetFinalExitBtn');

    const form = document.getElementById('closetAnalysisForm');
    const problemInput = document.getElementById('closetProblemInput');
    const analyzeBtn = document.getElementById('analyzeProblemBtn');
    const btnText = document.getElementById('analyzeBtnText');
    const resultBox = document.getElementById('closetDiagnosisResult');
    const categoryBtns = document.querySelectorAll('#closetCategoryGroup .cat-btn');
    const presetChips = document.querySelectorAll('.preset-chip');
    const archiveBtn = document.getElementById('archiveProblemBtn');
    const counterEl = document.getElementById('archivedProblemsCounter');

    let currentCategory = 'Produtividade';
    let archivedCount = 1482;

    // Triggers
    if (navLink) navLink.addEventListener('click', (e) => { e.preventDefault(); openClosetEnvironment(); });
    if (heroBtn) heroBtn.addEventListener('click', openClosetEnvironment);
    if (bannerBtn) bannerBtn.addEventListener('click', openClosetEnvironment);
    if (exitBtn) exitBtn.addEventListener('click', closeClosetEnvironment);
    if (finalExitBtn) finalExitBtn.addEventListener('click', closeClosetEnvironment);

    // Category button selection
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
      });
    });

    // Preset chips
    presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const key = chip.dataset.preset;
        const preset = CLOSET_PRESETS[key];
        if (preset) {
          problemInput.value = preset.text;
          categoryBtns.forEach(b => {
            if (b.dataset.category.toLowerCase() === preset.category.toLowerCase()) {
              b.click();
            }
          });
          problemInput.focus();
        }
      });
    });

    // Analyze Problem
    function executeAnalysis() {
      const text = problemInput.value.trim();
      if (!text) {
        problemInput.focus();
        return;
      }

      if (btnText) btnText.textContent = 'Processando...';
      analyzeBtn.disabled = true;

      setTimeout(() => {
        renderDiagnosis(text, currentCategory);
        if (btnText) btnText.textContent = 'Analisar Problema';
        analyzeBtn.disabled = false;
      }, 500);
    }

    if (form) form.addEventListener('submit', executeAnalysis);
    if (analyzeBtn) analyzeBtn.addEventListener('click', executeAnalysis);

    function renderDiagnosis(input, category) {
      let scenario = null;
      const lower = input.toLowerCase();

      if (lower.includes('nota') || lower.includes('pdf') || lower.includes('fiscal') || lower.includes('document')) {
        scenario = CLOSET_PRESETS.docs;
      } else if (lower.includes('atendimento') || lower.includes('cliente') || lower.includes('suporte') || lower.includes('espera')) {
        scenario = CLOSET_PRESETS.support;
      } else if (lower.includes('agend') || lower.includes('calend') || lower.includes('reuni') || lower.includes('horário')) {
        scenario = CLOSET_PRESETS.scheduling;
      } else if (lower.includes('planilha') || lower.includes('duplic') || lower.includes('banco') || lower.includes('dados')) {
        scenario = CLOSET_PRESETS.data;
      } else {
        scenario = {
          title: `Otimização de Processo em ${category}`,
          summary: `Gargalo reportado: "${input.length > 70 ? input.substring(0, 70) + '...' : input}". Mapeado para rotina de automação inteligente na categoria ${category}.`,
          aiTitle: `Agente de Automação Contextual & Inferência (${category})`,
          aiDesc: `Implementação de rotina automatizada em Python com classificação de dados e persistência relacional MySQL, reduzindo intervenções manuais.`,
          flow: [
            'Captura padronizada das entradas e validação de requisitos',
            'Classificação semântica dos dados pelo modelo de inferência',
            'Execução da tarefa via script automatizado ou webhook',
            'Armazenamento em banco de dados e notificação do resultado'
          ],
          benefits: [
            'Padronização integral do fluxo com eliminação de erros humanos.',
            'Disponibilidade contínua de processamento em tempo real.',
            'Rastreabilidade total das etapas com registro de auditoria.'
          ],
          nextSteps: '1. Levantamento de dados amostrais; 2. Definição do formato de saída; 3. Teste em homologação.'
        };
      }

      document.getElementById('diagTitle').textContent = scenario.title;
      document.getElementById('diagDesc').textContent = scenario.summary;
      document.getElementById('diagAiTitle').textContent = scenario.aiTitle;
      document.getElementById('diagAiDesc').textContent = scenario.aiDesc;

      const flowList = document.getElementById('diagFlowList');
      flowList.innerHTML = scenario.flow.map((step, i) => `
        <div class="flow-item">
          <span class="flow-step-num">0${i + 1}</span>
          <span>${step}</span>
        </div>
      `).join('');

      const benefitsList = document.getElementById('diagBenefitsList');
      benefitsList.innerHTML = scenario.benefits.map(b => `<li>${b}</li>`).join('');

      document.getElementById('diagNextSteps').textContent = scenario.nextSteps;

      resultBox.style.display = 'block';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Archive button
    if (archiveBtn) {
      archiveBtn.addEventListener('click', () => {
        archivedCount++;
        if (counterEl) {
          counterEl.textContent = archivedCount.toLocaleString('pt-BR');
        }
        archiveBtn.textContent = '✓ Problema Engavetado com Sucesso!';
        archiveBtn.disabled = true;

        setTimeout(() => {
          archiveBtn.textContent = '📥 Engavetar Este Problema';
          archiveBtn.disabled = false;
        }, 3000);
      });
    }

    // Hash routing
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#closet-ai') {
        openClosetEnvironment();
      } else {
        const env = document.getElementById('closetEnv');
        if (env && env.classList.contains('active')) {
          closeClosetEnvironment(false);
        }
      }
    });
  }

  function openClosetEnvironment() {
    const env = document.getElementById('closetEnv');
    if (!env) return;

    env.classList.add('active');
    env.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (window.location.hash !== '#closet-ai') {
      window.history.pushState(null, '', '#closet-ai');
    }
  }

  function closeClosetEnvironment(updateHistory = true) {
    const env = document.getElementById('closetEnv');
    if (!env) return;

    env.classList.remove('active');
    env.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (updateHistory && window.location.hash === '#closet-ai') {
      window.history.pushState(null, '', window.location.pathname);
    }
  }


  /* ═══════════════════════════════════════════════
     BACK TO TOP
     ═══════════════════════════════════════════════ */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  /* ═══════════════════════════════════════════════
     ACTIVE NAV TRACKING
     ═══════════════════════════════════════════════ */
  function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav__link[data-section]');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }


  /* ═══════════════════════════════════════════════
     YOUTUBE BACKGROUND AUDIO ENGINE (OFFICIAL API)
     Exact Video: https://www.youtube.com/watch?v=sYeWkKyebQQ
     ═══════════════════════════════════════════════ */
  const YT_VIDEO_ID = 'sYeWkKyebQQ';
  let ytPlayer = null;
  let isYtReady = false;
  let isAudioPlaying = false;
  let userHasTriggeredAudio = false;

  function initYouTubePlayer() {
    if (window.YT && window.YT.Player) {
      setupYTPlayerInstance();
    } else {
      const prevOnReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function() {
        if (typeof prevOnReady === 'function') {
          try { prevOnReady(); } catch (e) {}
        }
        setupYTPlayerInstance();
      };
    }
  }

  function setupYTPlayerInstance() {
    if (ytPlayer) return;
    try {
      ytPlayer = new YT.Player('ytAudioPlayer', {
        height: '10',
        width: '10',
        videoId: YT_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: YT_VIDEO_ID,
          modestbranding: 1,
          rel: 0,
          playsinline: 1
        },
        events: {
          onReady: function(event) {
            isYtReady = true;
            try {
              event.target.setVolume(35);
            } catch (e) {}
            if (userHasTriggeredAudio) {
              startAudioPlayback();
            }
          },
          onStateChange: function(event) {
            if (event.data === YT.PlayerState.PLAYING) {
              isAudioPlaying = true;
              updateAudioUI(true);
            } else if (event.data === YT.PlayerState.PAUSED) {
              isAudioPlaying = false;
              updateAudioUI(false);
            } else if (event.data === YT.PlayerState.ENDED) {
              try { ytPlayer.playVideo(); } catch (e) {}
            }
          },
          onError: function(event) {
            console.warn('YouTube Player error code:', event.data);
            isAudioPlaying = false;
            updateAudioUI(false);
          }
        }
      });
    } catch (err) {
      console.warn('Falha na inicialização do YouTube IFrame API:', err);
      updateAudioUI(false);
    }
  }

  function startAudioPlayback() {
    userHasTriggeredAudio = true;
    if (isYtReady && ytPlayer && typeof ytPlayer.playVideo === 'function') {
      try {
        ytPlayer.unMute();
        ytPlayer.setVolume(35);
        ytPlayer.playVideo();
        updateAudioUI(true);
      } catch (err) {
        console.warn('Erro ao reproduzir áudio:', err);
        updateAudioUI(false);
      }
    } else {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (isYtReady && ytPlayer && typeof ytPlayer.playVideo === 'function') {
          clearInterval(interval);
          try {
            ytPlayer.unMute();
            ytPlayer.setVolume(35);
            ytPlayer.playVideo();
            updateAudioUI(true);
          } catch (e) {}
        } else if (attempts > 25) {
          clearInterval(interval);
          updateAudioUI(false);
        }
      }, 200);
    }
  }

  function toggleAudioPlayPause() {
    userHasTriggeredAudio = true;
    if (!ytPlayer || typeof ytPlayer.playVideo !== 'function') {
      startAudioPlayback();
      return;
    }
    try {
      if (isAudioPlaying) {
        ytPlayer.pauseVideo();
      } else {
        ytPlayer.unMute();
        ytPlayer.setVolume(35);
        ytPlayer.playVideo();
      }
    } catch (e) {
      console.warn('Erro no controle de áudio:', e);
    }
  }

  function updateAudioUI(isPlaying) {
    const btn = document.getElementById('audioControlBtn');
    if (btn) {
      btn.classList.toggle('is-playing', isPlaying);
      btn.setAttribute('aria-label', isPlaying ? 'Pausar música' : 'Reproduzir música');
      btn.setAttribute('title', isPlaying ? 'Pausar trilha sonora' : 'Reproduzir trilha sonora');
    }
  }


  /* ═══════════════════════════════════════════════
     VHS CINEMATIC INTRO SEQUENCE (NO TEXT)
     ═══════════════════════════════════════════════ */
  let vhsDropTimeout = null;
  let isVhsTransitioning = false;

  function initVhsIntro() {
    const overlay = document.getElementById('vhsIntroOverlay');
    const stage = document.getElementById('vhsIntroStage');
    const wrap = document.getElementById('vhsCassetteWrap');
    const btn = document.getElementById('vhsCassetteBtn');

    if (!overlay || !wrap || !btn) return;

    // Check returning visitor session
    const seen = sessionStorage.getItem('vhs_intro_seen');
    if (seen === 'true') {
      overlay.classList.add('vhs-intro--hidden');
      document.body.classList.remove('vhs-intro-active');
      return;
    }

    startIntroSequence();

    function startIntroSequence() {
      isVhsTransitioning = false;
      document.body.classList.add('vhs-intro-active');
      overlay.classList.remove('vhs-intro--hidden');
      wrap.className = 'vhs-cassette-wrap';
      if (stage) stage.classList.remove('vhs-shake');

      // Cassette falls after approximately 2.5 seconds (2500ms)
      if (vhsDropTimeout) clearTimeout(vhsDropTimeout);
      vhsDropTimeout = setTimeout(() => {
        wrap.classList.add('vhs-dropping');

        // Subtle stage shake on center impact (~670ms into the 1150ms animation)
        setTimeout(() => {
          if (stage) {
            stage.classList.add('vhs-shake');
            setTimeout(() => stage.classList.remove('vhs-shake'), 450);
          }
        }, 670);

        // Center impact & bounce settle after falling animation (1150ms)
        setTimeout(() => {
          wrap.classList.remove('vhs-dropping');
          wrap.classList.add('vhs-settled');
        }, 1150);
      }, 2500);
    }

    // Interaction handler (click or keyboard)
    function handleInsertTape() {
      if (isVhsTransitioning) return;
      isVhsTransitioning = true;

      if (vhsDropTimeout) clearTimeout(vhsDropTimeout);

      // Insertion animation: scale & rotate into slot
      wrap.classList.remove('vhs-settled', 'vhs-dropping');
      wrap.classList.add('vhs-inserting');

      // Static noise canvas burst
      triggerVhsStaticBurst(550, () => {
        overlay.classList.add('vhs-intro--hidden');
        document.body.classList.remove('vhs-intro-active');
        sessionStorage.setItem('vhs_intro_seen', 'true');
      });

      // Start YouTube background music
      startAudioPlayback();
    }

    btn.addEventListener('click', handleInsertTape);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleInsertTape();
      }
    });

    // Expose replay function globally for footer replay button
    window.__replayVhsIntro = function() {
      sessionStorage.removeItem('vhs_intro_seen');
      startIntroSequence();
    };
  }

  /* Analog Canvas Static Burst */
  function triggerVhsStaticBurst(durationMs = 500, callback) {
    const staticScreen = document.getElementById('vhsStaticScreen');
    const canvas = document.getElementById('vhsNoiseCanvas');
    if (!staticScreen || !canvas) {
      if (callback) callback();
      return;
    }

    staticScreen.classList.add('active');
    const ctx = canvas.getContext('2d');
    canvas.width = Math.min(window.innerWidth, 480);
    canvas.height = Math.min(window.innerHeight, 320);

    const start = performance.now();
    let animId;

    function renderNoise(now) {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.createImageData(w, h);
      const buffer = new Uint32Array(imgData.data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        const val = (Math.random() * 255) | 0;
        buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
      }

      // Occasional horizontal glitch bar
      const barY = Math.floor(Math.random() * h);
      const barH = Math.floor(Math.random() * 10) + 3;
      for (let y = barY; y < Math.min(h, barY + barH); y++) {
        for (let x = 0; x < w; x++) {
          buffer[y * w + x] = (255 << 24) | (229 << 16) | (57 << 8) | 53; // Red accent glitch stripe
        }
      }

      ctx.putImageData(imgData, 0, 0);

      if (now - start < durationMs) {
        animId = requestAnimationFrame(renderNoise);
      } else {
        cancelAnimationFrame(animId);
        staticScreen.classList.remove('active');
        if (callback) callback();
      }
    }

    animId = requestAnimationFrame(renderNoise);
  }


  /* ═══════════════════════════════════════════════
     MINIMAL AUDIO CONTROLLER
     ═══════════════════════════════════════════════ */
  function initAudioController() {
    initYouTubePlayer();

    const audioControlBtn = document.getElementById('audioControlBtn');
    const footerReplayBtn = document.getElementById('footerReplayBtn');

    if (audioControlBtn) {
      audioControlBtn.addEventListener('click', toggleAudioPlayPause);
    }

    if (footerReplayBtn) {
      footerReplayBtn.addEventListener('click', () => {
        if (typeof window.__replayVhsIntro === 'function') {
          window.__replayVhsIntro();
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
    }
  }


  /* ═══════════════════════════════════════════════
     FLUID SCROLLING (COFFEE-TECH NATURAL INERTIA)
     ═══════════════════════════════════════════════ */
  function initFluidScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (typeof Lenis !== 'undefined') {
      try {
        const lenis = new Lenis({
          duration: 1.25,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false, // Preserves natural touch scrolling on mobile
          touchMultiplier: 1.4,
          infinite: false
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.__lenis = lenis;
      } catch (err) {
        console.warn('Lenis smooth scrolling setup note:', err);
      }
    }
  }

})();
