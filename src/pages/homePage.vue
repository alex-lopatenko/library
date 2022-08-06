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
          Какое-то название
        </div>
        <div class="home__card-author">
          Автор
        </div>
        <div class="home__card-price">
          750
        </div>
        <button class="home__card-btn">Купить</button>
      </div>
      <div class="home__card">
        <img src="../assets/images/01.jpg" alt="">
        <div class="home__card-title">
          Какое-то название
        </div>
        <div class="home__card-author">
          Автор
        </div>
        <div class="home__card-price">
          900
        </div>
        <button class="home__card-btn">Купить</button>
      </div>
      <div class="home__card">
        <img src="../assets/images/02.jpg" alt="">
        <div class="home__card-title">
          Какое-то название
        </div>
        <div class="home__card-author">
          Автор
        </div>
        <div class="home__card-price">
          1200
        </div>
        <button class="home__card-btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<style>
.home__wrapper {
  display: flex;
  justify-content: space-between;
}

.home__navbar-title {
  margin-top: 30px;
}

.home__navbar-item {
  margin-top: 5px;
}

.home__content {
  display: flex;
  gap: 50px;
  margin: 0 auto;
}

.home__card {
  border: 1px solid #000;
  min-height: 410px;
  text-align: center;
}

.home__card-title {
  font-size: 16px;
  min-height: 58px;
  padding: 10px 10px;
}
</style>