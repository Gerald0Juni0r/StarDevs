document.addEventListener('DOMContentLoaded', function () {
  const quoteElem = document.getElementById('Quote');
  const btn = document.getElementById('quoteButton');

  const quoteArray = [
    [
      "You must do what you feel is right, of course. \n-Obi-Wan Kenobi",
      "Remember... the Force will be with you, always. \n-Obi-Wan Kenobi",
      "In my experience, there is no such thing as luck. \n-Obi-Wan Kenobi",
      "These aren't the droids you're looking for. \n-Obi-Wan Kenobi"
    ],
    [
      "I find your lack of faith disturbing. \n-Darth Vader",
      "No. I am your father. \n-Darth Vader",
      "Impressive. Most impressive. \n-Darth Vader"
    ],
    [
      "Do. Or do not. There is no try. \n-Yoda",
      "You must unlearn what you have learned. \n-Yoda",
      "Fear is the path to the dark side. \n-Yoda"
    ],
    [
      "I'll never turn to the Dark Side. I am a Jedi, like my father before me. \n-Luke Skywalker",
      "I'm Luke Skywalker. I'm here to rescue you. \n-Luke Skywalker"
    ],
    [
      "Never tell me the odds. \n-Han Solo",
      "Chewie... we're home. \n-Han Solo"
    ],
    [
      "Help me, Obi-Wan Kenobi. You're my only hope. \n-Princess Leia Organa",
      "Someone has to save our skins. Into the garbage chute, fly boy. \n-Princess Leia Organa"
    ],
    [
      "It's a trap! \n-Admiral Ackbar",
      "May the Force be with you. \n-Various Characters"
    ]
  ];

  function generateQuote() {
    const randomArray = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    const randomQuote = randomArray[Math.floor(Math.random() * randomArray.length)];

    // usar textContent (seguro) e white-space: pre-line no CSS para \n
    quoteElem.textContent = randomQuote;

    // animação leve (fallback se Web Animations não estiver disponível)
    if (quoteElem.animate) {
      quoteElem.animate(
        [
          { transform: 'translateY(-20px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 300, easing: 'ease-out' }
      );
    } else {
      quoteElem.style.opacity = 0;
      quoteElem.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        quoteElem.style.transition = 'transform 300ms ease-out, opacity 300ms ease-out';
        quoteElem.style.transform = 'translateY(0)';
        quoteElem.style.opacity = 1;
      }, 10);
    }
  }

  // evento do botão
  btn.addEventListener('click', generateQuote);

  // mostra uma frase ao carregar
  generateQuote();
});
