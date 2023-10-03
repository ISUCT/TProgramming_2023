function convertToCamelCase(input) {      
    var words = input.split(/[-_]/);   // Разделить строку по тире или нижнему подчеркиванию   
    for (var i = 1; i < words.length; i++) {    
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();   
    }      // Соединить слова, пропустив разделители   
    var camelCase = words.join("");      
    return camelCase; 
  }  

    // Пример использования 
    var input = "hello-world"; 
    var camelCase = convertToCamelCase(input); 
    console.log(camelCase); // Выводит "helloWorld" 
