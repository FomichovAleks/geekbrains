# GeekBrains. PHP. Уровень 2.
Преподаватель: Игорь Полуянов.
<br>https://geekbrains.ru/courses/5

## Урок 3. Углублённое проектирование реляционных БД.
Типы БД. Нормализация. Типы связей. Создание резервных копий и восстановление данных. Индексы. Расширенная выборка данных. Встроенные функции SQL.

### Домашнее задание

1. Самим реализовать класс Db, разобраться с PDO.

2. Создать БД, если еще не создали, описать в ней сущности для интернет-магазина: 4-5 - продукт, заказ, категория и т.д. Таблицы БД делать с помощью нормализации. Описать для них модели, а в моделях реализовать - CRUD(create, read, update, delete) (извлечь все, извлечь 1 запись, добавить, удалить) с  использованием нашего Db. В моделях - методы, которые реализует стандратный CRUD.

3. Сделать так, чтобы при getOne и getAll данные возвращались не в виде ассоциативного массива, а в виде объектов этого класса.