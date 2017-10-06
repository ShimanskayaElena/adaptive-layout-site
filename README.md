# MASHA
test task - adaptive layout site

Демо версию этого проекта можно посмотреть здесь - https://shimanskayaelena.github.io/adaptive-layout-site/#/opportunities

Необходиьо было сделать актуальный адаптивный дизайн для продукта: http://masha24.by.

Установка: необходимо выполнить следующие команды 
- git init
- git clone https://github.com/ShimanskayaElena/adaptive-layout-site
- npm install
- bower install

Приложение необходимо запускать на localhost.

Целью создания этого сайта была демонстрация возможности совместного использования таких популярных фреймворков, 
как AngularJS и  Bootstrap3 для максимально быстрого и удобного создания одностраничных приложений.

Было выбрано достаточно большое количество точек прерывания для медиа запросов специально,
чтобы показать на сколько гибко может меняться дизайн сайта подстраиваясь под большинство наиболее популярных
на сегодняшний день девайсов. 
Для того, чтобы сайт  одинаково смотрелся как на больших экранах, так и на мобильниках,
я сохранила первоначальный вид главного меню, убрав некоторые пункты меню с помощью 
специальных классов Bootstrap. По этой же причине я не использовала специальное раскрывающееся меню для мобильников,
чтобы сделать вёрстку в index.html максимально простой, логичной и семантической. В случае необходимости 
в этот код можно будет легко внести необходимые изменения.
Для удобства редактирования CSS был задействован препроцессор LESS, благодаря чему теперь можно 
буквально за одну минуту изменить цветовое оформление сайта и используемые шрифты. В самом Bootstrap были 
исключены компоненты, которые не задействованы в вёрстке для того, чтобы уменьшить размер конечного скомпилированного
css-файла.
Конечно же, нет предела совершенству, поэтому ещё очень многое в этом проекте можно сделать лучше:).