// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Abhiram',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Time to sleep!',

  // Weather
  weatherKey: 'a6ed81c2300d4273b5df0ab3faa63f2d',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '9.498067',
  defaultLongitude: '76.338844',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'GMail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '5',
      name: 'news',
      icon: 'bookmark',
      link: 'https://news.google.co.in',
    },
    {
      id: '6',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://facebook.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'instagram',
  secondListIcon: 'monitor',

  // Links
  lists: {
    firstList: [
      {
        name: 'Manjaro',
        link: 'https://manjaro.org',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Amazon',
        link: 'https://www.amazon.in/',
      },
    ],
    secondList: [
      {
        name: 'AnimePahe',
        link: 'https://www.animepahe.org/',
      },
      {
        name: 'GoGoAnime',
        link: 'https://www.gogoanime.vc/',
      },
      {
        name: 'Mangadex',
        link: 'https://mangadex.org',
      },
      {
        name: 'Manjaro Forum',
        link: 'https://forum.manjaro.org',
      },
    ],
  },
};
