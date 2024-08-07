/*Стандарт ECMAScript определяет 8 типов:

    6 типов данных являющихся примитивами:
    Undefined (Неопределённый тип) : typeof instance === "undefined"
    Boolean (Булев, Логический тип) : typeof instance === "boolean"
    Number (Число) : typeof instance === "number"
    String (Строка) : typeof instance === "string"
    BigInt : typeof instance === "bigint", числа, которые больше 2 в степени 53, 4568n
    Null (Null тип ) : typeof instance === "object". Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;  
    
    Symbol (в ECMAScript 6) : typeof instance === "symbol"
    Object (Объект) : typeof instance === "object".*/

//Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.

//При сравнии 2 строк само сравнение происходит посимвольно, используя внутреннюю таблицу кодирования JS(Unicode). При сравнении числа и строки последняя будет приводится к числу.

//При выполнении «CONTINUE» цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true). С помощью «BREAK» мы полностью выходим из цикла в нужный момент.

for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  alert(i); // 1, затем 3, 5, 7, 9
}

/*Temporal Dead Zone (TDZ) - временная зона в коде, в которой переменная существует, но еще не доступна для использования. Это ограничение применяется к переменным, объявленным
с использованием ключевых слов let и const. В TDZ переменная существует, но не может быть доступна или прочитанадо до тех пор, пока не будет выполнено объявление.
Переменные, обявленные с помощью var, имеют функциональную область видимости. Они существуют на всей протяженности функции, в которой объявлены, и поднимаются (hoisting) в начало
своей области видимости. Переменные объявленные с использованием let и const, имеют блочную область видимости. Они существуют только внутри блока, в котором объявлены, и не
поднимаются (не происходит hoisting). Когда переменная объявлена с помощью let или const, она попадает в TDZ до момента фактического объявления и доступ к переменной вызовет
ошибку ReferenceError.
*/

//ФУНКЦИЯ - это блок кода, предназначенный для выполнения определенной задачи.

//ОБЛАСТЬ ВИДИМОСТИ — это зона доступности переменных. Бывает глобальная, функциональная и блочная.

/*КАРРИРОВАНИЕ – это трансформация, которая превращает вызов f от (a, b, c) в f от (a) от (b) от (c). В JavaScript реализация обычно позволяет вызывать функцию обоими вариантами:
либо нормально, либо возвращает частично применённую функцию, если количество аргументов недостаточно.*/

//ЗАМЫКАНИЕ - это способность функции видеть переменные из внешнего окружения.

let a = 1;
function summ() {
  let b = 2;
  return a + b;
}
summ();

//КОЛБЭК (функция обратного вызова) - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.

let summ = (a, b, calc) => {
  let result = a + b;
  calc(result);
};

function calc(result) {
  return "Результат сложения:", result;
}
summ(1, 2);

/*«THIS» - это ключевое слово, которое имеет особое значение, зависящее от контекста в котором оно применяется. 
Значение "this" – это объект «перед точкой», который используется для вызова метода.*/

/*ФУНКЦИИ-КОНСТРУКТОРЫ – это обычные функции, но с двумя соглашениями:
- имя функции-конструктора должно начинаться с большой буквы.
- функция-конструктор должна выполняться только с помощью оператора "new".*/

//ФУНКЦИИ ВЫСШЕГО ПОРЯДКА — это функции, которые работают с другими функциями, либо принимая их в виде параметров, либо возвращая их.

//РЕКУРСИЯ - это вызов функции из этой же самой функции.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(5);

/*BOM (Browser Object Model) - это дополнительные объекты, предоставляемые браузером (окружением), такие как: window.screen, .location, .history, .navigator, .alert,
.confirm, .prompt, .setTimeout, .setInterval.*/

//REST-оператор(остаточные параметры) - располагается в конце списка параметров функции. Он собирает остальные неуказанные аргументы и делает из них массив.

//SPREAD-оператор(оператор расширения) - встречается в вызове функции или где-либо ещё. Он извлекает элементы из массива.

/*NAMED FUNCTION EXPRESSION или NFE – это термин для Function Expression, у которого есть имя.
Есть две важные особенности ради которых даётся имя функции:
- позволяет функции ссылаться на себя же.
- имя не доступно за пределами функции.*/

//IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

(function () {
  statements;
})();

/*Методы CALL(), APPLY(), BIND():
- func.call(this = obj, a, b, c) - вызывает функцию с заданными аргументами и устанавливает контекст this = obj.
- func.apply(this = obj, args) - вызывает функцию с аргументами, предоставленными в виде массива и устанавливает контекст this = obj.
- func.bind(this = obj) - создаёт новую функцию, которая при вызове устанавливает в качестве контекста "this" переданный объект. Контекст закрепляется(байндится) за функцией.*/

/*ОСОБЕННОСТИ СТРЕЛОЧНЫХ ФУНКЦИЙ:
- не имеют "this" (его значение берётся снаружи).
- не имеют arguments.
- не могут быть вызваны с помощью оператора "new".
- не имеют "super".*/

/*MAP – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

Методы и свойства:

    new Map() – создаёт коллекцию.
    map.set(key, value) – записывает по ключу key значение value.
    map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
    map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
    перебор коллекции for (let key of myMap)*/

/*SET – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

Его основные методы это:

    new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
    set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
    set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
    перебор коллекции for (let key of mySet)*/

/*USE STRICT - это установка, которая заставляет код обрабатываться в строгом режиме (преобразовывает ошибки в исключения, упрощает сопоставление имени переменной
с местом её определения в коде, снижает количество странностей в поведении arguments и eval).
При ее отключении код обрабатывается в неограниченном режиме (т.е. можно задавать значение неопределенной переменной, можно задать одинаковое свойство у объекта и т.д.).*/

/*ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ(??) - это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит «null» или «undefined».
В противном случае возвращается значение левого операнда.*/

/*Конструкция «SWITCH(выражение) – CASE(с чем сравнить)» - сравнивает «выражение» со случаями, перечисленными внутри «case».
А затем выполняет соответствующие инструкции, описанные далее в «case». Работает в паре с «break»*/

/*РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ - это шаблоны, используемые для сопоставления последовательностей символов в строках.
В JavaScript регулярные выражения также являются объектами([0-9], [a-zA-z] и т.д.).*/

/*ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных*/
let arr = [1, 2];
let [one, two] = arr;

/*ОПЦИОНАЛЬНАЯ ЦЕПОЧКА(?.) - это безопасный способ доступа к свойствам вложенных объектов, даже если какое-либо из промежуточных свойств не существует.
Опциональная цепочка останавливает вычисления и возвращает «undefined», если значение перед (?.) равно «undefined» или «null».*/

/*ГЕНЕРАТОРЫ
  Генераторы являются функциями с возможностью выхода и последующего входа. Их контекст исполнения (значения переменных) сохраняется при последующих входах.
  Когда вызывается функция-генератор, её тело исполняется не сразу, а вместо этого возвращается объект-итератор.
  При вызове метода next() итератора тело функции-генератора исполняется до первого встреченного оператора yield,
который определяет возвращаемое значение или делегирует дальнейшее выполнение другому генератору при помощи yield* anotherGenerator().
  Метод next() возвращает объект со свойством value, содержащим отданное значение, и свойством done, которое указывает, что генератор уже отдал своё последнее значение.
  Вызов метода next() с аргументом прекращает выполнение функции-генератора, и заменяет инструкцию yield на которой было приостановлено выполнение на аргумент переданный в next().*/

function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

/*МОДУЛИ
  Модуль – это файл. Чтобы работал import/export, нужно для браузеров указывать атрибут <script type="module".>
  У модулей есть своя область видимости, обмениваться функциональностью можно через import/export.
  В модулях всегда включена директива use strict.
  Код в модулях выполняется только один раз. Экспортируемая функциональность создаётся один раз и передаётся всем импортёрам.*/

/*Сборка мусора выполняется автоматически. Мы не можем ускорить или предотвратить её. Объекты сохраняются в памяти, пока они достижимы.
Если на объект есть ссылка – вовсе не факт, что он является достижимым (из корня): набор взаимосвязанных объектов может стать недоступен в целом.*/

/*Инструкция «THROW» позволяет генерировать исключения, определяемые пользователем. При этом выполнение текущей функции будет остановлено и управление будет передано
в первый блок catch в стеке вызовов. Если catch блоков среди вызванных функций нет, выполнение программы будет остановлено.*/

//Оператор NEW (операторная функция) создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.

/*Создание массива:
- let arr = [] - создание массива с использованием синтаксиса литерала.
- let arr = new Array() - создание массива с использованием ключевого слова new.
- Array.from() - создаёт новый экземпляр Array из итерируемого или массивоподобного объекта.
- Array.of() - создаёт новый экземпляр Array с переменным количеством аргументов, независимо от количества или типа аргументов.

Методы массива:
- filter() - возвращает новый массив, содержащий все элементы исходного массива, для которых переданная функция вернула true.
- join() - объединяет все элементы массива в строку.
- split() - разбивает строку на массив строк путём разделения строки указанной подстрокой.
- map() - возвращает новый массив, содержащий результат применения переданной функции к каждому элементу исходного массива.
- pop() - удаляет последний элемент массива и возвращает его значение.
- push() - добавляет один или более элементов в конец массива и возвращает новое значение length массива.
- shift() - удаляет первый элемент массива и возвращает его значение.
- unshift() - добавляет один или более элементов в начало массива и возвращает новое значение length массива.
- reduce() - вызывает указанную функцию-редьюсер для каждого элемента массива (слева направо) для получения единственного значения.
- slice() - извлекает часть массива и возвращает её в виде нового массива.
- splice() - добавляет и/или удаляет элементы массива.
- sort() - сортирует элементы массива на месте (то есть изменяя исходный массив) и возвращает массив.

Чтобы проверить является ли сущность массивом используется метод Array.isArray(), который возвращает true или false.*/

/*Создание объекта:
- let obj = {} - cоздание объектов с использованием синтаксиса литерала.
- let obj = new Object() - cоздание объектов с использованием ключевого слова new.
- cоздание объектов с помощью Object.create() - создает новый объект и принимает два параметра:
  - первый параметр - это обязательный объект, который служит прототипом нового создаваемого объекта.
  - второй параметр - это необязательный объект, который содержит свойства, добавляемые к новому объекту.
- использование Object.assign() для создания новых объектов - Object.assign(newObj, firstObject, secondObject) - используется для копирования
значений всех собственных свойств из одного или нескольких исходных объектов в целевой объект. Он возвращает целевой объект.
- создание объекта с помощью синтаксиса class:
class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}
const person = new Person('Иван', 'Петров')

Методы объекта:
- Object.defineProperty() - добавляет к объекту именованное свойство, описываемое переданным дескриптором.
- Object.freeze() - замораживает объект: другой код не сможет удалить или изменить никакое свойство.
- Object.getOwnPropertyNames() - возвращает массив, содержащий имена всех переданных объекту собственных перечисляемых и неперечисляемых свойств.
- Object.getPrototypeOf() - возвращает прототип указанного объекта.
- Object.is() - определяет, являются ли два значения одинаковыми без приведения типов.
- Object.keys() - возвращает массив, содержащий имена всех собственных перечислимых свойств переданного объекта.
- Object.observe() - асинхронно наблюдает за изменениями в объекте.
- Object.preventExtensions() - предотвращает любое расширение объекта.
- Object.seal() - предотвращает удаление свойств объекта другим кодом.
- Object.setPrototypeOf() - устанавливает прототип (т.е. внутреннее свойство [[Prototype]]).

Для перебора всех свойств объекта используется цикл for..in.

Поверхностное и глубокое копирование объектов
  При копировании примитивного значения ему присваивается новый адрес в памяти.
  А когда копируется ссылочная переменная (объект), новая переменная будет указывать на место скопированной в памяти (копирование по ссылке).
    Создать поверхностную копию объекта можно создав и присвоив новой переменной значение объекта.
    Создание глубоких копий:
      Если объект, который нужно скопировать, находится на глубине только одного уровня, для создания глубокой копии рекомендуется использовать оператор spread.
      Применение комбинации JSON.parse() и JSON.stringify().
      Использование встроенной в JS функции structuredClone().
      Использование свойства Object.assign() - описано чуть выше.
      Для создания глубоких копий также можно использовать сторонние библиотеки (Lodash  _.cloneDeep()).

// Микрофронтенд, монорепозитории
// Дескрипторы свойств объекта: врайтебл, enumurable, configurable (можно изменять дескрипторы). Object.freeze, Object.seal (методы которые изменяют все дескрипторы на полях).
// Прокси - объект обертка, который позволяет перехватывать операции над обернутым объектом: чтение, удаление, изменение. Для этого в прокси есть свойства-ловушки.*/

//Формула Бине

const fib = (n) => {
  for (let i = 1; i <= n; i++) {
    const a = (1 + 5 ** 0.5) / 2;
    console.log(Math.round(a ** i / 5 ** 0.5));
  }
};

fib(10);
