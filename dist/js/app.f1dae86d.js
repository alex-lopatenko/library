(function(){"use strict";var a={3842:function(a,r,n){var t=n(9242),e=n(2483),i=n(3396),o=n(7139),s=n.p+"img/03.495b95e5.jpg",l=n.p+"img/01.ffd3901b.jpg",c=n.p+"img/02.390068f5.jpg";const _={class:"home__wrapper"},u=(0,i.uE)('<nav class="home__navbar"><ul class="home__navbar-list"><div class="home__navbar-title">Категории</div><li class="home__navbar-item"><a href="#" class="home__navbar-link">Книги</a></li><li class="home__navbar-item"><a href="#" class="home__navbar-link">Журналы</a></li><li class="home__navbar-item"><a href="#" class="home__navbar-link">Газеты</a></li></ul><ul class="home__navbar"><div class="home__navbar-title">СПИСКИ РЕКОМЕНДАЦИЙ</div><li class="home__navbar-item"><a href="#" class="home__navbar-link">Рекомендации</a></li><li class="home__navbar-item"><a href="#" class="home__navbar-link">Новинки</a></li></ul><ul class="home__navbar"><div class="home__navbar-title">ПОИСК ПО ЖАНРУ</div><li class="home__navbar-item"><a href="#" class="home__navbar-link">Бесплатно</a></li><li class="home__navbar-item"><a href="#" class="home__navbar-link">Детективы</a></li><li class="home__navbar-item"><a href="#" class="home__navbar-link">Приключения</a></li></ul></nav>',1),v={class:"home__content"},h={class:"home__card"},m=(0,i._)("img",{src:s,alt:""},null,-1),d={class:"home__card-title"},f={class:"home__card-author"},p={class:"home__card-price"},b=(0,i._)("button",{class:"home__card-btn"},"Купить",-1),w=(0,i._)("button",{class:"home__card-btn"},"Подарить",-1),g={class:"home__card"},y=(0,i._)("img",{src:l,alt:""},null,-1),k={class:"home__card-title"},z={class:"home__card-author"},O={class:"home__card-price"},j=(0,i._)("button",{class:"home__card-btn"},"Купить",-1),Z=(0,i._)("button",{class:"home__card-btn"},"Подарить",-1),D={class:"home__card"},T=(0,i._)("img",{src:c,alt:""},null,-1),x={class:"home__card-title"},W={class:"home__card-author"},C={class:"home__card-price"},F=(0,i._)("button",{class:"home__card-btn"},"Купить",-1),H=(0,i._)("button",{class:"home__card-btn"},"Подарить",-1);function P(a,r,n,t,e,s){return(0,i.wg)(),(0,i.iD)("div",_,[u,(0,i._)("div",v,[(0,i._)("div",h,[m,(0,i._)("div",d,(0,o.zw)(e.title),1),(0,i._)("div",f,(0,o.zw)(e.author),1),(0,i._)("div",p,(0,o.zw)(e.price),1),b,w]),(0,i._)("div",g,[y,(0,i._)("div",k,(0,o.zw)(e.title),1),(0,i._)("div",z,(0,o.zw)(e.author),1),(0,i._)("div",O,(0,o.zw)(e.price),1),j,Z]),(0,i._)("div",D,[T,(0,i._)("div",x,(0,o.zw)(e.title),1),(0,i._)("div",W,(0,o.zw)(e.author),1),(0,i._)("div",C,(0,o.zw)(e.price),1),F,H])])])}var E={data(){return{title:"Название книги",author:"Автор книги",price:"500 ₽"}}},L=n(89);const U=(0,L.Z)(E,[["render",P]]);var A=U;function K(a,r){return" Тут будет страница Магазин "}const M={},Y=(0,L.Z)(M,[["render",K]]);var q=Y;function B(a,r){return" У вас еще не куплены Книги, Журналы, Газеты "}const G={},I=(0,L.Z)(G,[["render",B]]);var J=I;function N(a,r){return" Тут будет страница Сообщество "}const Q={},R=(0,L.Z)(Q,[["render",N]]);var S=R;function V(a,r){return" Тут будет страница Личного кабинета пользователя "}const X={},$=(0,L.Z)(X,[["render",V]]);var aa=$;const ra={class:"page__inner"},na=(0,i._)("span",{class:"page__title"},"Страница не найдена",-1),ta=(0,i._)("span",{class:"page__subtitle"},"¯\\_(ツ)_/¯",-1),ea=[na,ta];function ia(a,r){return(0,i.wg)(),(0,i.iD)("div",ra,ea)}const oa={},sa=(0,L.Z)(oa,[["render",ia]]);var la=sa;const ca=(0,e.r5)(),_a=(0,e.p7)({history:ca,routes:[{path:"/",name:"homePage",component:A},{path:"/shop",name:"shop",component:q},{path:"/library",name:"library",component:J},{path:"/community",name:"community",component:S},{path:"/user",name:"user",component:aa},{path:"/:CathAll(.*)",name:"404",component:la}]});var ua=_a;const va={class:"wrapper"},ha={class:"wrapper-content"},ma={class:"container"};function da(a,r,n,t,e,o){const s=(0,i.up)("TheHeader"),l=(0,i.up)("router-view"),c=(0,i.up)("TheFooter");return(0,i.wg)(),(0,i.iD)("div",va,[(0,i.Wm)(s),(0,i._)("div",ha,[(0,i._)("div",ma,[(0,i.Wm)(l)])]),(0,i.Wm)(c)])}const fa={class:"navbar"},pa={class:"container"},ba={class:"navbar-content"},wa={class:"navbar-list"};function ga(a,r,n,t,e,s){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",fa,[(0,i._)("div",pa,[(0,i._)("div",ba,[(0,i.Wm)(l,{to:"/",class:"navbar-logo"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.title),1)])),_:1}),(0,i._)("ul",wa,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.links,(a=>((0,i.wg)(),(0,i.iD)("li",{class:"navbar-item",key:a.alias},[(0,i.Wm)(l,{to:a.url,class:"navbar-link"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(a.title),1)])),_:2},1032,["to"])])))),128))])])])])}const ya={div:!0},ka=(ya.dev,{title:"Library"}),za=[{title:"Главная",alias:"home",url:"/"},{title:"Магазин",alias:"shop",url:"/shop"},{title:"Библиотека",alias:"library",url:"/library"},{title:"Сообщество",alias:"community",url:"/community"},{title:"Пользователь",alias:"user",url:"/user"}];var Oa={data(){return{title:ka.title,links:za}}};const ja=(0,L.Z)(Oa,[["render",ga]]);var Za=ja;const Da={class:"footer"},Ta=(0,i._)("div",{class:"container"},[(0,i._)("div",{class:"navbar-content"},[(0,i._)("p",{class:"footer-text"},"© 2022 Library production. Все права защищены. Все торговые марки являются собственностью соответствующих владельцев в России и других странах.")])],-1),xa=[Ta];function Wa(a,r,n,t,e,o){return(0,i.wg)(),(0,i.iD)("footer",Da,xa)}var Ca={};const Fa=(0,L.Z)(Ca,[["render",Wa]]);var Ha=Fa,Pa={components:{TheHeader:Za,TheFooter:Ha}};const Ea=(0,L.Z)(Pa,[["render",da]]);var La=Ea;const Ua=(0,t.ri)(La);Ua.use(ua),Ua.mount("#app")}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return a[t](i,i.exports,n),i.exports}n.m=a,function(){var a=[];n.O=function(r,t,e,i){if(!t){var o=1/0;for(_=0;_<a.length;_++){t=a[_][0],e=a[_][1],i=a[_][2];for(var s=!0,l=0;l<t.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(a){return n.O[a](t[l])}))?t.splice(l--,1):(s=!1,i<o&&(o=i));if(s){a.splice(_--,1);var c=e();void 0!==c&&(r=c)}}return r}i=i||0;for(var _=a.length;_>0&&a[_-1][2]>i;_--)a[_]=a[_-1];a[_]=[t,e,i]}}(),function(){n.n=function(a){var r=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(r,{a:r}),r}}(),function(){n.d=function(a,r){for(var t in r)n.o(r,t)&&!n.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)}}(),function(){n.p="/"}(),function(){var a={143:0};n.O.j=function(r){return 0===a[r]};var r=function(r,t){var e,i,o=t[0],s=t[1],l=t[2],c=0;if(o.some((function(r){return 0!==a[r]}))){for(e in s)n.o(s,e)&&(n.m[e]=s[e]);if(l)var _=l(n)}for(r&&r(t);c<o.length;c++)i=o[c],n.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return n.O(_)},t=self["webpackChunklibrary"]=self["webpackChunklibrary"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(3842)}));t=n.O(t)})();
//# sourceMappingURL=app.f1dae86d.js.map