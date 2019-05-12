/* eslint-disable global-require */

// These should be in alphabetical order by English name.
export const LANGUAGES = {
  sa: 'Arabic',
  hr: 'Croatian',
  nl: 'Dutch',
  gb: 'English',
  gr: 'Greek',
  fr: 'French',
  de: 'German',
  hu: 'Hungarian',
  it: 'Italian',
  lt: 'Lithuanian',
  no: 'Norwegian',
  br: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  ua: 'Ukrainian',
  es: 'Spanish',
  pl: 'Polish',
  ee: 'Estonian',
  vn: 'Vietnamese',
  jp: 'Japanese',
  tw: 'TraditionalChinese',
  cn: 'SimplifiedChinese'
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

  // eslint-disable-next-line import/no-dynamic-require
  const BODY = require(`../language/${LANGUAGES[currentLanguage]}/index.mdx`);
  // eslint-disable-next-line import/no-dynamic-require
  const FAQ = require(`../language/${LANGUAGES[currentLanguage]}/faq.mdx`);

  return [
    {
      name: currentLanguage,
      body: BODY,
      faq: FAQ
    },
    Object.keys(LANGUAGES).sort()
  ];
};
