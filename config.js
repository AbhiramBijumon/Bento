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
  twelveHourFormat: false,

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
  defaultLatitude: ' 9.498067',
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
      name: 'Mail',
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
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '5',
      name: 'Linux Mint',
      icon: 'bookmark',
      link: 'https://linuxmint.com/',
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
        name: 'Online Convert'
        link: 'https://www.online-convert.com',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Amazon',
        link: 'https://www.amazon.in/',	      
      } 
    ],
    secondList: [
      {
        name: 'AnimePahe',
        link: 'https://animepahe.org/',
      },
      {
        name: 'StackExchange',
        link: 'https://stackexchange.com/',
      },
      {
	name: 'GoGoAnime',
        link: 'https://gogoanime.vc/',
      },
      {
        name: 'Unix & Linux',
        link: 'https://unix.stackexchange.com/',
      },
    ],
  },
};
