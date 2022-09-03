export const process = {
    div: true,
  };

  export const site = {
    home: process.dev ? 'http://localhost:8080/' : 'http://test.ru'
  }

  export const app = {
    title: 'Library',
  }

  export const links = [
    {
      title: 'Магазин',
      alias: 'home',
      url: '/'
    },
    // {
    //   title: 'Магазин',
    //   alias: 'shop',
    //   url: '/shop'
    // },
    {
      title: 'Библиотека',
      alias: 'library',
      url: '/library'
    },
    {
      title: 'Сообщество',
      alias: 'community',
      url: '/community'
    },
    {
      title: 'Пользователь',
      alias: 'user',
      url: '/user'
    },
  ]