// Seleciona todas as teclas do piano (elementos com a classe "key" dentro do container "piano-keys")
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Seleciona o controle deslizante de volume (input dentro do elemento com classe "volume-slider")
const volumeSlider = document.querySelector(".volume-slider input");

// Seleciona o checkbox que controla a visibilidade das teclas
const keysCheck = document.querySelector(".keys-check input");

// Array para armazenar as teclas mapeadas (os valores do atributo data-key)
let mapedkeys = [];

// Cria um objeto de áudio para tocar os sons das notas
let audio = new Audio("src/tunes/a.wav");

// Função para tocar o som de uma tecla
const playTune = (key) => {
    // Atualiza o caminho do áudio para a nota correspondente (baseado no valor recebido em 'key')
    audio.src = `src/tunes/${key}.wav`;
    audio.play(); // Reproduz o som

    // Seleciona a tecla correspondente ao valor de 'key' (usando o atributo data-key)
    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    
    // Verifica se a tecla existe antes de tentar manipular sua classe
    if (clickedkey) {
        // Adiciona a classe 'active' para criar um efeito visual (tecla pressionada)
        clickedkey.classList.add("active");

        // Remove a classe 'active' após 150ms, desfazendo o efeito visual
        setTimeout(() => {
            clickedkey.classList.remove("active");
        }, 150);
    }
};

// Adiciona um ouvinte de evento 'click' a cada tecla do piano
pianoKeys.forEach((key) => {
    // Quando uma tecla do piano é clicada, toca o som correspondente
    key.addEventListener("click", () => playTune(key.dataset.key));

    // Armazena o valor do atributo data-key da tecla no array mapedkeys
    mapedkeys.push(key.dataset.key);
});

// Adiciona um ouvinte de evento 'keydown' para o teclado físico
document.addEventListener("keydown", (e) => {
    // Verifica se a tecla pressionada está no array de teclas mapeadas
    if (mapedkeys.includes(e.key)) {
        playTune(e.key); // Toca o som da tecla correspondente
    }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
    // Define o volume do áudio com base no valor do controle deslizante
    audio.volume = e.target.value;
};

// Adiciona um ouvinte de evento 'input' no controle deslizante de volume
// Quando o usuário ajusta o controle, a função handleVolume é chamada
volumeSlider.addEventListener("input", handleVolume);

// Função para mostrar ou esconder as teclas no piano
const showHideKeys = () => {
    // Alterna a classe "hide" para cada tecla (mostrando ou ocultando as teclas)
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

// Adiciona um ouvinte de evento 'click' no checkbox de exibição de teclas
// Quando o checkbox é marcado/desmarcado, chama a função showHideKeys
keysCheck.addEventListener("click", showHideKeys);
