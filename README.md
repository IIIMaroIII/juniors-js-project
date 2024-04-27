!!! Important !!!

Needs to fix:
- rearrange from Javascript to React (IMPORTANT)
- apply Redux Toolkit as a state manager (IMPORTANT)
- 









# Создать папку .vscode

# Внутри этой папки создать файл settings.json

# Положить эти настройки

{ "liveSassCompile.settings.formats": [ { "format": "expanded", "extensionName":
".css", "savePath": "/src/css" }, { "extensionName": ".min.css", "format":
"compressed", "savePath": "/src/css" } ],
"liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"] }

# @Mixin

// Usage examples // .my-custom-heading { // @include dm-sans(700); // Use the
bold version (weight: 700) // font-size: 24px; // }

// .my-custom-paragraph { // @include dm-sans(400); // Use the regular version
(weight: 400) // font-size: 16px; // }

// ================ 1st Example =================

// @mixin button-styles { // padding: 10px 20px; // background-color: #3498db;
// color: #fff; // border: none; // border-radius: 5px; // cursor: pointer;

// &:hover { // background-color: #217dbb; // } // }

// .my-button { // @include button-styles; // }

// =================================================

// ================ 2nd Example =================

// @mixin media-query($breakpoint) { // @media screen and (min-width:
$breakpoint) { // @content; // } // }

// .section { // width: 100%;

// @include media-query(768px) { // width: 80%; // margin: 0 auto; // }

// @include media-query(1200px) { // width: 70%; // } // }

// =================================================

// ================ 3rd Example =================

// @mixin triangle($size, $color) { // width: 0; // height: 0; // border-left:
$size solid transparent; // border-right: $size solid transparent; //
border-bottom: $size solid $color; // }

// .arrow-down { // @include triangle(10px, #333); // }

// =================================================

// @mixin flex( // $row-gap, // $column-gap: $row-gap, // $justify-content:
center, // $align-items: center, // $flex-wrap: nowrap // ) { // display: flex;
// row-gap: $row-gap; // column-gap: $column-gap; // justify-content:
$justify-content; // align-items: $align-items; // flex-wrap: $flex-wrap; // }

// ================= Пример использования @mixin ======================

// ========= Символ & просто берет имя родительского селектора и подставляет,
======== // ========== благодаря этому можно использовать вложенность селекторов
==========

// ========= разметка для примера (глубина вложенности не имеет значения)
===============

// <ul class="gallery"> //
<li class="gallery-item"><img src="" alt="" class="gallery-img"></li> //
<li class="gallery-item"><img src="" alt="" class="gallery-img"></li> //
<li class="gallery-item"><img src="" alt="" class="gallery-img"></li> // </ul>

// .gallery { // @include flex(24px, 24px, flex-start, flex-start, wrap);

// &-item { // border: 1px solid $border-normal-color; // flex-basis:
calc((100% - 2 \* 24px) / 3);

// transform: scale(1); // transition: transform 250ms ease-in-out; // }

// &-item:hover { // transform: scale(1.05); // }

// &-image { // width: 100%; // height: 160px; // object-fit: cover; // } // }

# Установить расширение для VSCode - Live Sass Compiler

# Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.
