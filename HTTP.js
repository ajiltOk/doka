/*Критические этапы рендера (Critical Rendering Path или CRP)
Загрузка веб-страницы или приложения начинается с запроса HTML. Сервер возвращает HTTP-ответ, состоящий из заголовков (headers) и тела запроса. Именно в теле запроса содержится
HTML-документ. 

1) Браузер начинает парсить загружаемый HTML, преобразуя полученные байты документа в DOM-дерево.
Построение DOM инкрементально. Ответ в виде HTML превращается в токены, которые превращаются в узлы (nodes), которые формируют DOM дерево. Узлы содержат всю необходимую
информацию об HTML-элементе, соответствующем этому узлу. Узлы (nodes) связаны с Render Tree с помощью иерархии токенов.

2) После завершения парсинга DOM, браузер конструирует CSS модель.
В этот момент становится доступным событие «DOMContentLoaded», которое срабатывает на объекте document (document.addEventListener("DOMContentLoaded", ready)) – браузер полностью
загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены. Когда браузер обрабатывает HTML-документ и встречает
тег <script>, он должен выполнить его перед тем, как продолжить строить DOM. Это делается на случай, если скрипт захочет изменить DOM. Есть два исключения из этого правила:
скрипты с атрибутом async не блокируют DOMContentLoaded и скрипты, сгенерированные динамически при помощи document.createElement('script') и затем добавленные на страницу,
также не блокируют это событие. Так же если после стилей есть скрипт, то этот скрипт должен дождаться, пока загрузятся стили.
Построение CSSOM – не инкрементально. CSS блокирует рендер: браузер блокирует рендеринг страницы до тех пор, пока не получит и не обработает все CSS-правила. CSS блокирует
рендеринг, потому что правила могут быть перезаписаны, а значит, необходимо дождаться построения CSSOM, чтобы убедиться в отсутствии дополнительных переопределений.

3) Как только DOM и CSSOM сформированы, браузер строит дерево рендера (render tree), в котором вычисляет стили для каждого видимого элемента страницы.
В этот момент становится доступным событие «load», которое срабатывает на объекте window (window.onload) – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.). 

4) После формирования дерева происходит компоновка (layout), которая определяет положение и размеры элементов этого дерева.
Компоновка зависит от размеров экрана. Этот этап определяет, где и как на странице будут спозиционированы элементы и каковы связи между элементами.

5) Как только этап компоновки завершён - страница рендерится или "отрисовывается" (paint) на экране.
 
При первичной загрузке документа (onload) весь экран будет отрисован. После этого будут перерисовываться только необходимые к обновлению части экрана, так как браузер старается
оптимизировать процесс отрисовки, избегая ненужной работы.

Когда посетитель покидает страницу, на объекте window генерируется событие unload. В этот момент происходит закрытие связанных всплывающих окон и отсылается статистика.
Для сохранения данных пользователя используется метод navigator.sendBeacon(url, data). Если посетитель собирается уйти со страницы или закрыть окно, обработчик beforeunload
попросит дополнительное подтверждение, уверен ли пользователь в этом.

С помощью document.readyState можно посмотреть состояние загрузки. Есть три возможных значения:
"loading" – документ загружается.
"interactive" – документ был полностью прочитан.
"complete" – документ был полностью прочитан и все ресурсы (такие как изображения) были тоже загружены.*/

/*Оптимизация CRP
1. Уменьшение количества критических ресурсов, откладывая их загрузку, помечая их как async и/или группируя их;
2. Оптимизация количества необходимых запросов, а так же размеры файлов;
3. Оптимизация порядка так, чтобы критические ресурсы загружались в первую очередь, сокращая таким образом длину критических этапов рендеринга.*/

/*SEO - Search Engine Optimization - это оптимизация сайта под поисковые движки, которые считывают данные находящиеся на странице нашего сайта, чтобы понимать, какую информацию
предоставляет сайт и при каких запросах поиска наш сайт выводить, и на сколько информация, которую наш сайт предоставляет актуальна. Это надо для того, чтобы при поиске какой-либо
информации, которую наш сайт может предоставить, в поисковиках наш сайт оказался на первых рядах списка выдачи результата.

Оптимизация сайта для SEO по большой части подразумевает то, что мы должны разработать сайт таким образом, чтобы поисковой движок мог легко понимать наш сайт, а именно:
- семантическая и структурированная верстка. Семантическая верстка наполняет смыслом теги, и структуры, которые мы создаем в HTML, и это облегчает роботам понимать где и что
находится на странице нашего сайта.
- правильно использовать и структурировать заголовки на страницах. У каждой страницы должен быть один и единственный тег <h1>, который считается основным заголовком и говорит
о чем страница, далее должна соблюдаться вложенность заголовков, то есть h2, у вложенного в него элемента заголовок h3 и т.д.
- не забывать alt атрибут у тега <img>, таким образом мы объясняем роботам, что это за картинка.
- указывать язык страницы, используя атрибут lang на теге <html>.
- правильно указывать название страницы, то есть тег <title>, он должен быть уникален для каждой страницы, помимо этого значение тега должно отличаться от значения от тега <h1>.
- использовать мета-тег description: тут пишется описание страницы, на каждую страницу оно должно быть уникальным.*/

/*Атрибуты defer и asynk у тега <script>
Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда DOM дерево будет
полностью построено. Скрипты с defer никогда не блокируют страницу и всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded. Атрибут defer предназначен
только для внешних скриптов и будет проигнорирован, если в теге <script> нет src.

Атрибут async означает, что скрипт абсолютно независим и не блокирует отображение страницы:
- страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
- событие DOMContentLoaded и асинхронные скрипты не ждут друг друга.
- остальные скрипты не ждут async, и скрипты c async не ждут другие скрипты.

На практике defer используется для скриптов, которым требуется доступ ко всему DOM и/или важен их относительный порядок выполнения, а async хорош для независимых скриптов,
например счётчиков и рекламы, относительный порядок выполнения которых не играет роли.*/

/*Протокол передачи гипертекста (Hypertext Transfer Protocol - HTTP) - это протокол, позволяющий получать различные ресурсы, например HTML-документы.
Протокол HTTP лежит в основе обмена данными в Интернете. HTTP является протоколом клиент-серверного взаимодействия, что означает инициирование запросов к серверу        
самим получателем, обычно веб-браузером (web-browser). Для пересылки своих сообщений чаще всего использует возможности другого протокола - TCP (или TLS - защищённый TCP)
Так же для передачи данных используются протоколы DNS, UDP, IP*/

/*Методы HTTP запроса:

GET - запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.

POST - предназначен для отправки данных на сервер. Тип тела запроса указывается в заголовке Content-Type.

PUT - создаёт новый ресурс или заменяет представление целевого ресурса данными, представленными в теле запроса.

DELETE - удаляет указанный ресурс.

PATCH - частично изменяет ресурс.

OPTIONS - используется для описания параметров соединения с целевым ресурсом.

CONNECT - запускает двустороннюю связь с запрошенным ресурсом. Метод можно использовать для открытия туннеля.

HEAD - запрашивает ресурс так же, как и метод GET, но без тела ответа (только заголовки).

TRACE - выполняет проверку обратной связи по пути к целевому ресурсу, предоставляя полезный механизм отладки.

Разница между PUT, PATCH и POST: PUT является идемпотентным, т.е. единичный и множественные вызовы этого метода, с идентичным набором данных,
будут иметь тот же результат выполнения (без сторонних эффектов). Запрос PATCH является набором инструкций о том, как изменить ресурс и может как быть идемпотентным,
так и не быть. Запрос POST так же может иметь сторонние эфекты и может как быть идемпотентным, так и не быть.*/

/*Код состояния ответа HTTP показывает, был ли успешно выполнен определённый HTTP запрос. Ответы сгруппированы в 5 классов:

Информационные ответы (100 – 199)
Успешные ответы (200 – 299)
Сообщения о перенаправлении (300 – 399)
Ошибки клиента (400 – 499)
Ошибки сервера (500 – 599)*/

/*HTTP-кеширование
Техника кеширования заключается в сохранении копии полученного ресурса для возврата этой копии в ответ на дальнейшие запросы, снижая тем самым нагрузку на сервер. 
Кеширование является основным источником повышения производительности веб-сайтов. Существует две основные категории кеша: 
- приватные кеши. Приватный кеш (private cache) предназначен для отдельного пользователя, который используется для доступа к ранее загруженным страницам при навигации 
назад/вперёд, позволяет сохранять страницы, полезен при отключении от сети.
- кеши совместного использования. В кешах совместного использования (shared cache) хранятся копии, которые могут направляться разным пользователям. 
Заголовок Cache-Control используется для задания инструкций по механизму кеширования как в запросах, так и в ответах. Применяется для задания политик кеширования.
Директива "public" для заголовка Cache-Control указывает, что ответ можно сохранять в любом кеше, а директива "private" указывает, что ответ предназначен отдельному пользователю
и не должен храниться в кеше совместного использования. 
Вытеснение данных из кеша (cache eviction) – это процесс вытеснения более старых версий ресурса более свежими.*/

/*HTTPS (HTTP Secure) является зашифрованной версией HTTP протокола. Обычно он использует SSL (en-US) или TLS для шифрования соединения между клиентом и сервером.
Это безопасное соединение позволяет клиентам безопасно обмениваться конфиденциальными данными с сервером, например, для банковских операций или онлайн-покупок.*/

/*Cross-Origin Resource Sharing (CORS) — механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя получать разрешения на доступ
к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент.

CORS заголовки:
Access-Control-Allow-Origin указывает, какой источник может получать ресурсы.
Access-Control-Allow-Methods указывает, какие HTTP-методы разрешены.
Access-Control-Allow-Headers указывает, какие заголовки запросов разрешены.
Access-Control-Allow-Credentials указывает, разрешена ли отправка файлов cookie.
Access-Control-Max-Age указывает в секундах, как долго должен кэшироваться результат запроса.*/

/*WebSockets - это технология, позволяющая открыть постоянное двунаправленное сетевое соединение между браузером пользователя и сервером.
Библиотеки для вебсокетов: ws, socket.io (поддерживает  сообщения с кастомными именами). Сокеты используются везде, где есть необходимость обновления данных в реальном времени.
Поллинг имеет смысл, когда нужно от него получать периодично какую-то информацию. Если речь идет о большом количестве инфы, то лучше сначала одним гет-запросом получить
сообщения, а потом сокетами получать их обновления*/

// Создание WebSocket-соединения.
const socket = new WebSocket("ws://localhost:8080");

// Соединение открыто/закрыто("lose")
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Получение сообщений, ошибок("error")
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

/*HTTP cookie (web cookie, куки браузера) - это небольшой фрагмент данных, который сервер отправляет браузеру пользователя. Получив HTTP-запрос, вместе с ответом
сервер может отправить заголовок Set-Cookie. Куки обычно запоминаются браузером и посылаются в HTTP-заголовке Cookie с каждым новым запросом к одному и тому же серверу.
Можно задать срок действия кук, а также срок их жизни, после которого куки не будут отправляться. Также можно указать ограничения на путь и домен.

Куки часто используются для: управления сеансом (логины, корзины для виртуальных покупок), персонализации (пользовательские предпочтения),
трекинга (отслеживания поведения пользователей)

Куки бывают сессионные и постоянные. Сессионный cookie (session cookie) - такие cookie удаляются при закрытии клиента, то есть существуют только на протяжении текущего сеанса.
Постоянные cookie (permanent cookies) удаляются не с закрытием клиента, а при наступлении определённой даты (атрибут Expires) или после определённого интервала времени
(атрибут Max-Age).

"Безопасные" (secure) куки отсылаются на сервер только тогда, когда запрос отправляется по протоколу SSL и HTTPS. Куки с флагом HTTPonly не доступны из JavaScript через свойства
Document.cookie API, что помогает избежать межсайтового скриптинга. Устанавливайте этот флаг для тех кук, к которым не требуется обращаться через JavaScript.
*/

/*Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере. Данные, которые в них записаны, сохраняются после обновления
страницы (в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage).

В отличие от куки, объекты веб-хранилища не отправляются на сервер при каждом запросе. Именно поэтому мы можем хранить гораздо больше данных.

Ещё одно отличие от куки – сервер не может манипулировать объектами хранилища через HTTP-заголовки. Всё делается при помощи JavaScript.

Хранилище привязано к источнику (домен/протокол/порт). Это значит, что разные протоколы или поддомены определяют разные объекты хранилища,
и они не могут получить доступ к данным друг друга.

Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства: setItem(key, value) – сохранить пару ключ/значение,
getItem(key) – получить данные по ключу key, removeItem(key) – удалить данные с ключом key, clear() – удалить всё,key(index) – получить ключ на заданной позиции,
length – количество элементов в хранилище.*/
