(function (){
  const WORDS = [
   ["COMPUTADOR","Máquina usada para processar informações"],
["TECLADO","Usado para digitar textos e comandos"],
["MONITOR","Exibe imagens e informações"],
["MOUSE","Usado para controlar o cursor"],
["IMPRESSORA","Produz documentos em papel"],
["PROCESSADOR","Considerado o cérebro do computador"],
["MEMÓRIA","Armazena dados temporariamente"],
["NOTEBOOK","Computador portátil"],
["CELULAR","Dispositivo usado para comunicação"],
["TABLET","Dispositivo portátil com tela sensível ao toque"],
["INTERNET","Rede que conecta computadores no mundo todo"],
["SITE","Página disponível na internet"],
["NAVEGADOR","Programa usado para acessar sites"],
["APLICATIVO","Programa usado em celulares e computadores"],
["SOFTWARE","Parte lógica do computador"],
["HARDWARE","Parte física do computador"],
["SERVIDOR","Computador que fornece serviços para outros"],
["REDE","Conjunto de dispositivos conectados"],
["ROTEADOR","Distribui a conexão de internet"],
["MODEM","Permite a conexão com a internet"],
["WIFI","Tecnologia de conexão sem fio"],
["BLUETOOTH","Conecta dispositivos sem fio"],
["CABO","Pode transmitir dados ou energia"],
["ARQUIVO","Guarda informações digitais"],
["PASTA","Organiza arquivos no computador"],
["DOWNLOAD","Ação de baixar um arquivo"],
["UPLOAD","Ação de enviar um arquivo"],
["LOGIN","Entrada em uma conta"],
["SENHA","Protege o acesso a uma conta"],
["USUÁRIO","Pessoa que utiliza um sistema"],
["SEGURANÇA","Proteção de dados e sistemas"],
["VÍRUS","Programa que pode prejudicar o computador"],
["FIREWALL","Protege a rede contra acessos indevidos"],
["ANTIVÍRUS","Programa que detecta ameaças"],
["BACKUP","Cópia de segurança dos dados"],
["NUVEM","Permite armazenar arquivos pela internet"],
["CRIPTOGRAFIA","Protege informações por meio de códigos"],
["WINDOWS","Sistema operacional da Microsoft"],
["LINUX","Sistema operacional de código aberto"],
["ANDROID","Sistema operacional para celulares"],
["IOS","Sistema operacional dos aparelhos Apple"],
["MACBOOK","Computador produzido pela Apple"],
["BANCO","Local onde dados são armazenados"],
["DADOS","Informações armazenadas ou processadas"],
["SQL","Linguagem usada em bancos de dados"],
["TABELA","Organiza dados em linhas e colunas"],
["REGISTRO","Linha que contém informações em uma tabela"],
["CAMPO","Espaço que guarda uma informação"],
["MYSQL","Sistema de gerenciamento de banco de dados"],
["MONGODB","Banco de dados baseado em documentos"],
["ALGORITMO","Sequência de passos para resolver problemas"],
["CÓDIGO","Instruções escritas para o computador"],
["PROGRAMAÇÃO","Criação de programas de computador"],
["JAVASCRIPT","Linguagem muito usada em páginas web"],
["PYTHON","Linguagem de programação simples e popular"],
["JAVA","Linguagem de programação muito utilizada"],
["HTML","Linguagem usada para criar estruturas de páginas"],
["CSS","Linguagem usada para estilizar páginas"],
["PHP","Linguagem utilizada no desenvolvimento web"],
["VARIÁVEL","Guarda um valor durante a execução do programa"],
["FUNÇÃO","Bloco de código que realiza uma tarefa"],
["LOOP","Repete comandos várias vezes"],
["COMANDO","Instrução dada ao computador"],
["INTERFACE","Permite a interação com um sistema"],
["PIXEL","Pequeno ponto que forma uma imagem"],
["TELA","Exibe imagens e informações"],
["CURSOR","Indicador controlado pelo mouse"],
["ÍCONE","Imagem que representa uma função"],
["MENU","Lista de opções de um programa"],
["WEBCAM","Câmera usada no computador"],
["MICROFONE","Capta sons"],
["FONE","Usado para ouvir sons"],
["CÂMERA","Usada para tirar fotos e gravar vídeos"],
["ROBÔ","Máquina programada para realizar tarefas"],
["AUTOMAÇÃO","Realiza tarefas automaticamente"],
["ROBÓTICA","Área que trabalha com robôs"],
["INTELIGÊNCIA","Capacidade de analisar informações"],
["CHIP","Pequeno componente eletrônico"],
["PLACA","Conecta componentes eletrônicos"],
["BATERIA","Armazena energia elétrica"],
["CIRCUITO","Caminho percorrido pela corrente elétrica"],
["CAPACITOR","Armazena carga elétrica"],
["RESISTOR","Controla a passagem da corrente elétrica"],
["TRANSISTOR","Componente usado em circuitos eletrônicos"],
["ENERGIA","Permite o funcionamento dos aparelhos"],
["HD","Dispositivo usado para armazenar dados"],
["SSD","Armazenamento rápido de dados"],
["RAM","Memória temporária do computador"],
["COOLER","Ajuda a resfriar o computador"],
["GABINETE","Protege os componentes do computador"],
["PLACA-MÃE","Conecta os principais componentes"],
["VIDEOGAME","Aparelho usado para jogar"],
["CONSOLE","Equipamento criado para executar jogos"],
["STREAMING","Transmissão de conteúdo pela internet"],
["QR-CODE","Código que pode ser escaneado pelo celular"],
["PIX","Sistema de pagamento instantâneo"],
["GPS","Sistema usado para localização"],
["TECNOLOGIA","Uso de conhecimentos para criar soluções"]
  ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
  }
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();
