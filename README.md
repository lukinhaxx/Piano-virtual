# 🎹 Piano Virtual

Bem-vindo ao **Piano Virtual**, um projeto interativo e educativo que permite aos usuários explorar a música de maneira simples e divertida diretamente em um navegador web. Este projeto combina HTML, CSS e JavaScript para criar uma experiência imersiva e funcional.

---

## 🚀 Funcionalidades

- **Tocar Notas com o Mouse ou Teclado:**
  - Clique em qualquer tecla virtual do piano para ouvir seu som.
  - Use o teclado físico para tocar as notas mapeadas.

- **Controle de Volume:**
  - Ajuste o volume do piano utilizando um controle deslizante intuitivo.

- **Exibição Personalizável:**
  - Opção para ocultar ou mostrar os nomes das teclas, permitindo diferentes níveis de interação.

- **Efeito Visual:**
  - As teclas acendem momentaneamente ao serem tocadas, oferecendo feedback visual.

---

## 🛠️ Tecnologias Utilizadas

- **HTML:** Estrutura do piano virtual e dos controles adicionais.
- **CSS:** Design responsivo, efeitos visuais e estilização geral.
- **JavaScript:** Lógica principal para tocar notas, controlar o volume e gerenciar eventos de interação.

---

## 🖥️ Como Funciona

1. **Teclas Virtuais:**
   - Cada tecla possui um atributo `data-key` que mapeia o som correspondente.
   - O arquivo de som é carregado e reproduzido dinamicamente com base na tecla pressionada.

2. **Eventos de Clique e Teclado:**
   - Eventos `click` permitem interação com o mouse.
   - Eventos `keydown` permitem tocar o piano usando o teclado físico.

3. **Controle de Volume:**
   - A propriedade `audio.volume` é ajustada em tempo real pelo controle deslizante.

4. **Ocultar/Mostrar Teclas:**
   - Um checkbox permite alternar entre mostrar ou ocultar os nomes das teclas no piano.



