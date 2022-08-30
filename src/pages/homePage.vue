<template>
  <div class="home__wrapper">
    <nav class="home__navbar">
      <ul class="home__navbar-list">
      <div class="home__navbar-title">Категории</div>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Книги</a>
      </li>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Журналы</a>
      </li>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Газеты</a>
      </li>
    </ul>
    <ul class="home__navbar">
      <div class="home__navbar-title">СПИСКИ РЕКОМЕНДАЦИЙ</div>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Рекомендации</a>
      </li>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Новинки</a>
      </li>
    </ul>

    <ul class="home__navbar">
      <div class="home__navbar-title">ПОИСК ПО ЖАНРУ</div>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Бесплатно</a>
      </li>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Детективы</a>
      </li>
      <li class="home__navbar-item">
        <a href="#" class="home__navbar-link">Приключения</a>
      </li>
    </ul>
    </nav>
    
    <div class="home__content">
      <div class="home__card">
        <img src="../assets/images/03.jpg" alt="">
        <div class="home__card-title">
          {{title}}
        </div>
        <div class="home__card-author">
          {{author}}
        </div>
        <div class="home__card-price">
          {{price}}
        </div>
        <button class="home__card-btn">Купить</button>
        <button class="home__card-btn">Подарить</button>
      </div>
      <div class="home__card">
        <img src="../assets/images/01.jpg" alt="">
        <div class="home__card-title">
          {{title}}
        </div>
        <div class="home__card-author">
          {{author}}
        </div>
        <div class="home__card-price">
          {{price}}
        </div>
        <button class="home__card-btn">Купить</button>
        <button class="home__card-btn">Подарить</button>
      </div>
      <div class="home__card">
        <img src="../assets/images/02.jpg" alt="">
        <div class="home__card-title">
          {{title}}
        </div>
        <div class="home__card-author">
          {{author}}
        </div>
        <div class="home__card-price">
          {{price}}
        </div>
        <button class="home__card-btn">Купить</button>
        <button class="home__card-btn">Подарить</button>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  data () {
    return {
      title: 'Название книги',
      author: 'Автор книги',
      price: '500 ₽'
    }
  }
 }
</script>