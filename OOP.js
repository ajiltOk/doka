/*ИНКАПСУЛЯЦИЯ

При проектировании компонентов приложения сокрытие внутренних данных компонента и деталей его реализации от других компонентов приложения
и предоставление набора методов для взаимодействия с ним (API).

Всего модификаторов доступа четыре:
    -public – полный доступ к сущности (полю или методу класса) из любого пакета;
    -protected – доступ к сущности только для классов своего пакета и наследников класса;
    -неявный модификатор по умолчанию (при отсутствии трёх явных) – доступ к сущности только для классов своего пакета;
    -private – доступ только внутри класса, в котором объявлена сущность.
    
    Защищенные свойства объекта начинаются с префикса "_". Обращаться к полю, начинающемуся с "_" можно только из его класса и классов, унаследованных от него.
Приватные свойства и методы должны начинаться с "#". Они доступны только внутри класса.*/
//
//

/*НАСЛЕДОВАНИЕ

Используя наследование, можно создать общий класс, который будет определять характеристики и поведение, свойственные какому-то набору связанных объектов.      
В дальнейшем этот класс может быть унаследован другими, более частными классами, которые дополнят или изменят поведение базового класса.

Наследование - это способ расширения одного объекта другим объектом. Наследование в JS реализовано с помощью [[Prototype]]
и конструкции «class».
[[Prototype]] - это свойство, которое имеют все объекты и которое либо равно null, либо ссылается на другой объект.
Наследоваться от другого объекта с помощью [[Prototype]] можно следующим образом:
- свойство __proto__ (obj1.__proto__ = obj2).
- современного метода Object.create(proto, [descriptors])
( let obj1 = Object.create(obj2) ).

«CLASS» - это конструкция, которая предоставляет новые возможности, полезные для объектно-ориентированного программирования.

Наследоваться от другого объекта с помощью «class» можно следующим образом:
- с помощью ключевого слова «extends»(class Obj1 extends Obj2).

Для определения класса существуют 2 способа — class declaration и class expressions.

Разница между объявлением функции (function declaration) и объявлением класса (class declaration) в том, что объявление функции совершает подъём (hoisting),
в то время как объявление класса — нет. Выражения класса (class expressions) так же не совершают подъем.

Базовый синтаксис:
class MyClass {
        constructor() {…}
        method1() {…}
        method2() {…}
        …
}

Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. В классе может быть только один метод с именем constructor.
Исключение типа SyntaxError будет выброшено, если класс содержит более одного вхождения метода constructor.

Ключевое слово static, определяет статический метод или свойства для класса, который не может быть вызваны у экземпляров (instance) класса.

Для переопределения родительских методов или родительского конструктора у классов есть ключевое слово "super".*/
//
//

/*ПОЛИМОРФИЗМ - это возможность функции или объекта работать с данными различных типов. То есть разные объекты могут реагировать на один и тот же запрос, проявляя разное поведение
в зависимости от своего типа.
Полиморфизм бывает:
    -параметрический (исполнение одного и того же кода для всех допустимых типов аргументов (в один и тот же метод можно передать как строку, так и число))
    -add-hoc (мнимый полиморфизм, это возможность реализовывать интерфейс разными способами.
    Интерфейс описывает какие-то публичные методы. Когда реализуются два разных класса от одного интерфейса, можно записать различные реализации одного и того же метода)*/
//
//

/*АБСТРАКЦИЯ - это отделение описания публичного API объекта от его реализации. В TS достигается через абстрактные классы или интерфесы.
Это также делается для инверсии зависимостей, чтобы зависимость была на интерфейс*/

/*Перегрузка метода(функции внутри объектов) (ООП) - в родительском классе есть функцияя с реализацией.
В дочернем классе вместо того, чтобы использовать эту функцию будет объявляться и использоваться новая. То есть дочерним методом перегружается метод родителя.*/

//Перегрузка функции (ts) - параметрический полиморфизм функции при реализации.

/*В ООП между объектами есть связи. Эти связи создаются с помощью ассоциаций.
    Ассоциации - это включение внутрь одного объекта ссылки на другой объект для его дальнейшего использования. Ассоциация бывает двух типов: с помощью композиции и агрегации.
        -композиция - это когда ссылка существует только внутри объекта.
        -агрегация - это когда ссылка существует вне объекта; от этого зависит поведение зависимости при удалении объекта-контейнера.
    В композиции время жизни зависимости ограничено временем жизнью объекта-родителя. В агрегации зависимость может существовать и при удалении родителя.*/

//Более сложный вариант добавления зависимостей - инъекция зависимостей, инъекция может существовать только в виде агрегации. Уже есть какой-то объект и я его внедряю внутрь другого объекта
//Есть 2 вида инъекции зависимостей:
//1) Функция-конструктор (классическая агрегация) - принимает в себя зависимость, назначает её внутрь объекта
//2) Функциия-сеттер - то же самое, что и конструктор (вызывается не только при создании как конструктор, можно вызывать несколько раз. Используется в паттерне "Стратегия")
