//Сложность алгоритма - это количественная характеристика, которая говорит о том, сколько времени, либо какой объём памяти потребуется для выполнения алгоритма.
//Big O показывает то, как сложность алгоритма растёт с увеличением входных данных. При этом она всегда показывает худший вариант развития событий - верхнюю границу.

// Получение элемента коллекции это O(1). Будь то получение по индексу в массиве, или по ключу в словаре в нотации Big O это будет O(1).
// Перебор коллекции это O(n).
// Вложенные циклы по той же коллекции это O(n2).
// Разделяй и властвуй (Divide and Conquer) всегда O(log n).
// Итерации которые используют “Разделяй и властвуй” (Divide and Conquer) это O(n log n).

//Микросервисы - подход, при котором система строится как набор слабосвязанных и независимых сервисов. Они могут использовать разные технологии.
//Работа микросервисов определяет паттерны low coupling и High cohesion.
//Контракт - формализация возможности взаимодействия с микросервисом.

//Пирамида тастирования:
//End2End (здесь проходит проверка работы ПО в целом, не только по прописанным требованиям. ) Такие тесты сложнее автоматизируются, дольше, стоят дороже, сложнее поддерживаются. Таких тестов должно быть меньше
//Системное тестирование - API test, service test (проверяют связь тестируемого компонента с ОС, железом, бд) (важно тестировать на максимально приближенном к конечному пользователю окружении, тут используется черный ящик. Интеграционный уровень позволяет верифицировать требования, то есть проверить соответствие ПО прописанным требованиям)
//Интеграционные тесты (проверяют связь тестируемого компонента с другими компонентами, выполняются как функциональные (проверка по тз), так и нефункциональные проверки (нагрузка на компонент) (серый
//или черный ящик). Есть три способа: снизу вверх (маленькие часть собираются в один модуль и тест-ся), сверху вниз (сначала проверяется работа крупных модулей, потом добавляем модули уровнем ниже), большой взрыв (все реализованные модули всех уровней собираются, интегрируются в систему и тестируются))
//Юнит тесты (не зависят от других уровней, тестируют отдельные модули, выполняются быстрее всех и требуют < всех ресурсов. Разработчик пишет юнит тесты, это разработка через тестирование. Используется метод белого ящика (понятно, что принимает и возвращает модуль))

/*
Дана задача, что будет выведено в консоль:

console.log(age) // undefined
age = 1
console.log(age) // 1
console.log(sayHello('Mark')) // Hello Mark!

function sayHello(name) {
    return 'Hеllo ' + name + '!'
}
var age



Дана задача, что будет выведено в консоль:

consоle.log(1);

setTimeout(() => { console.log(2) }, 0);

console.log(3);

new Prоmise(res => {
    console.log(4);
    res();
}).thеn(() => console.log(5));

console.log(6);

whilе('') { console.log(7) }

console.log(8);

// 1, 3, 4, 6, 8, 5, 2



Дана задача, что будет выведено в консоль:

console.log(this); // window

function strictLogContextMessage() {
    'use strict'
     console.log(this);
};

function logContextMessage() {
     console.log(this);
}

strictLogContextMessage(); // undefined

logContextMessage(); // window



Дана задача, что будет выведено в консоль: 
function* yiеldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
}

var gen = yiеldAndReturn()

console.log(gen.next()); // {value: Y, done: false}
consolе.log(gen.next()); // {value: R, done: true}
console.log(gen.nеxt()); // {value: undefined, done: true}



Дана задача, что будет выведено в консоль:

vаr fоо = functiоn bаr() {
  rеturn 1;
}
cоnsоlе.log(typеоf bаr()); // ReferenceError
*/

/*Счетчик

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}
*/

//Управляемый компонент реакт

/*export function ControlledInput() {
  const [name, setName] = useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}*/

// Неуправляемый компонент

/*export function UncontrolledInput() {
  const nameInput = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    console.log(nameInput.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInput} defaultValue="" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}*/

//Компонент, который увеличивает счетчик раз в секунду

/*const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
        );
    };
}*/

/*Redux - это стэйт менеджер для JS приложений. Он может работать не только в React приложениях. Он хранит состояние в дереве объектов внутри единого стора.
Единственная возможность изменить состояние - отправить action. Action - это объект, который описывает действие (он отвечает на вопрос: "Что я хочу изменить в состоянии?").
Далее action попадает в reducer, где описано, как состояние должно быть изменено. (reducer отвечает на вопрос: "Как я хочу изменить стэйт?").*/

/*Сайд эффект - это действие, которые должно произойти на диспатчинг экшена, помимо после сохранения в стор, например, логирование в консоль или отправка запроса на сервер.
Основной способ сделать сайд эффект - вызвать его в middleware. Можно написать свой middleware, а можно использовать сторонние библиотеки, например, redux thunk
- для синхронных и простых асинхронных действий или redux saga - для сложных асинхронных действий.
Можно вызывать сайд эффекты в action сreator'ах. Однако, это не самый лучший способ, т.к. можно задиспатчить действие и без вызова action creator, тогда сайд эффект не сработает.*/
