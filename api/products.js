const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  getProductsList() {
    let products = [
      {
        id: '1',
        title: 'Книга 1',
        price: 1500,
        image: '/products/book-1.jpg',
      },
      {
        id: '2',
        title: 'Книга 2',
        price: 700,
        image: '/products/book-2.jpg',
      },
      {
        id: '3',
        title: 'Книга 3',
        price: 1200,
        image: '/products/book-3.jpg',
      }
    ];
    return products;
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi;
