const greetings = {
  rus: 'Привет!',
  esp: 'Hola!',
  default: 'Hello!'
}

const sayHello = (lang) => {
  const keys = Object.keys(greetings);
  if(!lang || typeof lang !== 'string') return greetings[keys[Math.round(Math.random() * (keys.length-1))]];
  return greetings[lang] || greetings["default"];
}

module.exports = sayHello;
