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