function duplicateEncode(word) {
    // const не изменяемая переменная, let изменяемая переменная
    const charCount = {};

    // toLowerCase() возвращает значение строки, преобразованное в нижний регистр
    word = word.toLowerCase()

    // Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), 
    // вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.
    for (const i of word) {
        charCount[i] = (charCount[i] || 0) + 1
    }

    // Метод split() разбивает строку на массив
    return word.split('').map(i => { // "=>" стрелочная функция, представляет собой более короткую форму функции
        return charCount[i] === 1 ? '(' : ')'
    }).join(''); // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку
}


// Тесты
console.log(duplicateEncode("din") == "(((");
console.log(duplicateEncode("recede") == "()()()");
console.log(duplicateEncode("Success") == ")())())");
console.log(duplicateEncode("(( @") == "))((");