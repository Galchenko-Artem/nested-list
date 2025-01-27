# Приложение "Вложенный список"

Данный проект представляет собой приложение на основе React.js, которое позволяет пользователям работать с вложенным списком. Пользователи могут добавлять дочерние элементы к выбранному элементу списка и удалять элементы, за исключением корневого родителя.

## Функциональность
- Отображение вложенного списка.
- Добавление дочерних элементов к выбранному элементу списка.
- Удаление выбранных элементов из списка.
- Корневой родительский элемент защищён от удаления.

## Стек технологий
- **React.js**: Используется для построения пользовательского интерфейса.
- **TypeScript**: Обеспечивает статическую типизацию и улучшает качество кода.
- **CSS-in-JS (Styled-components)**: Используется для стилизации компонентов внутри приложения, позволяя применять локальные и динамические стили.

## Верстка
- Для структуры макета используется **Flexbox**.
- Дизайн можно легко настроить по своему вкусу.

## Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://gitverse.ru/ArtemGalcenko/nested-list.git
    ```
   
2. Перейдите в директорию проекта:
    ```bash
    cd nested-list
    ```

3. Установите зависимости:
    ```bash
    npm install
    ```

4. Запустите сервер разработки:
    ```bash
    npm start
    ```

Приложение должно запуститься по адресу `http://localhost:3000`.

## Использование
- Нажмите на любой элемент списка, чтобы выбрать его.
- Используйте доступные кнопки для добавления дочерних элементов или удаления выбранного элемента.
- Корневой элемент защищён от удаления для сохранения структуры списка.

## В будущем
- Добавление функционала перетаскивания (drag-and-drop) для изменения порядка элементов списка.
- Реализация сохранения состояния списка (например, с помощью local storage или интеграции с сервером).
