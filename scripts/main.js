//WRITING MACHINE EFFECT
const textElement = document.querySelector("#quote");
const quotes = [
  "It’s not a bug. It’s an undocumented feature!",
  "Software Developer” – An organism that turns caffeine into software",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
  "A user interface is like a joke. If you have to explain it, it’s not that good.",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  "My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.",
  "Things aren’t always #000000 and #FFFFFF",
  "Programming is like sex. One mistake and you have to support it for the rest of your life.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
];
const textToType = quotes[Math.floor(Math.random() * quotes.length)];

function typeText() {
  textElement.textContent = "";
  let i = 0;
  const typingInterval = setInterval(() => {
    textElement.textContent += textToType[i];
    i++;
    if (i > textToType.length - 1) {
      clearInterval(typingInterval);
    }
  }, 50);
}

typeText();
