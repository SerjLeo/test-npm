const greetings = {
  ru: 'Привет!',
  es: 'Hola!',
  uk: 'Здрастуйте!',
  gr: 'Χαίρετε!',
  it: 'Ciao!',
  cn: '你好!',
  jp: 'こんにちは!',
  se: 'Hallå!',
  cz: 'Ahoj!',
  in: 'नमस्ते!',
  fr: 'Bonjour!',
  fi: 'Hei!',
  default: 'Hello!'
}

const sayHello = (lang) => {
  const keys = Object.keys(greetings);
  if(!lang || typeof lang !== 'string') return greetings[keys[Math.round(Math.random() * (keys.length-1))]];
  return greetings[lang.toLowerCase()] || greetings["default"];
}

module.exports = sayHello;
