/* eslint-disable global-require */

// These should be in alphabetical order by English name.
export const LANGUAGES = {
  sa: ['Arabic'],
  au: ['Australian'],
  hr: ['Croatian'],
  nl: ['Dutch'],
  gb: ['English'],
  ee: ['Estonian'],
  fr: ['French'],
  de: ['German', 'nimbus-sans'],
  gr: ['Greek'],
  hu: ['Hungarian'],
  it: ['Italian'],
  jp: ['Japanese'],
  lt: ['Lithuanian'],
  no: ['Norwegian'],
  pl: ['Polish'],
  br: ['Portuguese'],
  ro: ['Romanian'],
  ru: ['Russian'],
  cn: ['SimplifiedChinese'],
  es: ['Spanish'],
  tw: ['TraditionalChinese'],
  tr: ['Turkish'],
  ua: ['Ukrainian'],
  vn: ['Vietnamese']
};

export const loadLanguages = (initial) => {
  let currentLanguage = initial;
  if (initial === undefined) {
    if (Object.prototype.hasOwnProperty.call(LANGUAGES, initial)) {
      currentLanguage = initial;
    } else {
      currentLanguage = 'gb';
    }
  }

  const [name, fontFamily] = LANGUAGES[currentLanguage];

  // eslint-disable-next-line import/no-dynamic-require
  const { BODY, FAQ } = require(`../language/${name}`);

  return [
    {
      name,
      fontFamily,
      body: BODY,
      faq: FAQ
    },
    Object.keys(LANGUAGES)
  ];
};
