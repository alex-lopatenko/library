<template>
  <div class="container-user">
    <div class="header-user">
      <div class="header-user-img">
        <img src="@/assets/images/user.jpg" alt="" />
      </div>

      <div class="header-user-person">
        <div class="user-person-nickname">Книголюб</div>
        <div class="user-person-name"><bdi>Александр</bdi></div>
        <div class="user-person-city">
          <img
            src="@/assets/images/icon/ru.gif"
            alt=""
            class="user-person-img"
          />
          Нижний Новгород, Россия
        </div>
        <div class="user-person-descr">Люблю читать книги</div>
      </div>

      <div class="header-user-badgeinfo">
        <div class="header-user-badgeinfo-level">
          Уровень
          <div class="header-user-badgeinfo-level-numb">5</div>
        </div>
        <div class="header-user-badgeinfo-edit">
          <router-link class="header-user-badgeinfo-edit-link" to="/edit">Редактировать профиль</router-link>
        </div>
      </div>

    </div>
  </div>
</template>