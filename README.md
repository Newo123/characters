# Список персонажей из вселенной популярного мультфильма "Рик и Морти"

![screenshot](/public/poster.jpg)

## В проекте реализовано:

1. Страница с сеткой персонажей
   ![screenshot](/public/1.png)
2. Страница с избранными персонажами (визуализация сетки персонажей была взяла из главной страницы)
3. Страница отдельного персонажа
   ![screenshot](/public/2.png)
4. Фильтрация через поле ввода по имени персонажей
5. Постраничная пагинация
6. Добавление в избранное через локальное хранилище браузера (localStorage)

## Информация для запуска проекта в локальной среде

### 1. Клонируем репозиторий или выкачиваем zip архив

Команда для клонирования

```cmd
git clone https://github.com/Newo123/characters.git <folder>
cd <folder>
```

### 2. Установка пакетов

NPM

```cmd
npm install
```

YARN

```cmd
yarn install
```

PNPM

```cmd
pnpm install
```

### 3. Команды запуска проекта в локальной среде

NPM

```cmd
npm run dev
```

YARN

```cmd
yarn dev
```

PNPM

```cmd
pnpm dev
```

## Стек технологий

1. Reactjs + typescript
2. Для стилизации tailwindcss, shadcn, radix-ui
3. Для запросов к серверу и динамического обновления контента - axios, tanstack react query

## REST API

https://rickandmortyapi.com
