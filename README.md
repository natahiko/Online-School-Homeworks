# Online-School-Homeworks
---
*Server part:* https://github.com/natahiko/Online-School-Homework-Server


**Що нового Соля зробила:**
- додавання + редагування + видалення предмета
- додавання + редагування + видалення домашки
- додавання + редагування відповіді на домашнє (учень) (потім переміщу в олімпіади, просто пропиши бек для таблички олімпіад)

**Що Соля не зробила:**
- додавання + редагування + видалення олімпіади
- додавання + редагування + видалення олімпіади
- оцінювання + редагування олімпіадних завдань (вчитель)
- кнопочки "назад" на сторінках предмета і домашки
- не зафіксила менюшку яка не fixed поки що
---
**Таски Солі від Натахи:**
* на сторінці домашніх робіт прибрати оту табличку з "статус роботи" + прибрати кнопочку оцінити +  не працює кнопочка "Редагувати домашнє завдання" -> //TODO @solja gethometaskinfo 
* Зробити валідацію на поля addHometask + зробити щоб можна було додавати декілька гіперлінків і кидати в запит масив значень введених посилань (поки що передається порожній) -> //TODO @ solja add hyperlinks value (якщо нема жодного лінка треба передавати пустий масив)
* коли пишеш об'єкти на відповідь пиши назви атрибутів такі ж як у звіті

**Таски Натахі:**
* fillTeacherSubjects +
* fillPupilSubjects +
* fillTeacherHometasks +
* fillPupilHometasks +
* showHometask + 

**Що нового Натаха зробила:**
* при додаванні предмета вертається код і юзається там де треба
* файлик niponiatno для гавнокода і методів які не працюють