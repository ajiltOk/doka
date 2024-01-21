//В TypeScript есть три  примитива : string, numberи boolean.

//Если в качестве входных даный используется массив строк или массив чисел, то используется следующий синтаксис:

    - string[] или number[]
    - Array<string> или Array<number>

//Определение входящих параметров функции:

    function greet(name: string) {
        console.log("Hello, " + name.toUpperCase() + "!!");
    }

//Определение возвращаемых параметров функции:

    function getFavoriteNumber(): number {
        return 26;
    }

//Определение параметров функции, которая возвращает Promise:

    async function getFavoriteNumber(): Promise<number> {
        return 26;
    }

/*Для ананимных (стрелочных) функций применяется контекстная типизация, поскольку контекст, в котором возникла функция, сообщает,
какой тип она должна иметь.*/

/*Если тип входящих параметров может менятся в процессе работы приложения или для его корректной работы подходят несколько типов входящих параметров
применяется объединение типов.*/

    function printId(id: number | string) {
        console.log("Your ID is: " + id);
    }

//Для того, чтобы ссылаться на один и тот же тип более одного раза по одному имени используется Type Alias или Interface.

    type Point = {
        x: number;
        y: number;
    };

    interface Point {
        x: number;
        y: number;
      }
   
    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }
   
    printCoord({ x: 100, y: 100 });

/*Types и Interfaces очень похожи и во многих случаях можно свободно выбирать между ними.
Почти все функции Interface доступны в Type, ключевое отличие состоит в том, что Type не может быть повторно открыт для добавления новых свойств
по сравнению с Interface, который всегда расширяется. Interface расширяется посредством Extends или простым добавление нового поля в его структуру.
Type же расширяется посредством пересечений (&) с другими Type, но после создания саму структуру Type изменить нельзя.*/

//
//
//

//Дженерики (Generics)

//Дженерики — это возможность создавать компоненты, работающие не только с одним, а с несколькими типами данных.

/*Дженерики и типы соотносятся друг с другом, как значения и аргументы функции. Это такой способ сообщить компонентам
(функциям, классам или интерфейсам), какой тип необходимо использовать при их вызове так же, как во время вызова мы сообщаем функции,
какие значения использовать в качестве аргументов.*/

    function identity <T>(value: T) : T {
        return value;
    }

    console.log(identity<Number>(1))

/*При вызове identity<Number>(1), тип Number — это аргумент, который подставляется везде вместо T.
Функция может принимать несколько типов аналогично тому, как она принимает несколько аргументов.*/