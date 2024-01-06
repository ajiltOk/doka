/*Стек вызовов (call stack) - это механизм для отслеживания текущего местонахождения интерпретатора в скрипте 
	-когда скрипт вызывает функцию, интерпретатор добавляет её в стек вызовов и потом начинает её обработку.
	-любые функции, вызванные этой функцией, добавляются в стек вызовов и выполняются, как только происходит их вызов.
	-когда выполнение основной функции завершено, интерпретатор снимает её со стека вызовов и возобновляет выполнение кода в списке основного кода с той точки, где остановился до этого.
	-если стек занимает больше места, чем ему было присвоено, это приводит к ошибке переполнения стека ("stack overflow" error).
*/
//
//
//
/*Event loop(событийный цикл)

Очередь МИКРОЗАДАЧ - это внутренняя очередь (microtask queue), которая состоит из промисов(async/await).
- очередь определяется как первым-пришёл-первым-ушёл (FIFO): задачи, попавшие в очередь первыми, выполняются тоже первыми.
- выполнение задачи происходит только в том случае, если ничего больше не запущено.

Есть специальная функция queueMicrotask(func), которая помещает func в очередь микрозадач.

Все микрозадачи завершаются до обработки каких-либо событий или рендеринга, или перехода к другой макрозадаче.

Очередь МАКРОЗАДАЧ - это внутренняя очередь (macrotask queue), которая состоит из скрипта, интерфейсных событий и SetTimeout().


Подробный алгоритм событийного цикла (event loop):
- выбрать и исполнить старейшую задачу из очереди макрозадач.
- исполнить все микрозадачи:
    - пока очередь микрозадач не пуста: 
        - выбрать из очереди и исполнить старейшую 	микрозадачу
- отрисовать изменения страницы, если они есть.
- если очередь макрозадач пуста – подождать, пока появится макрозадача.
*/