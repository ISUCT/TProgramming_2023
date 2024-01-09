function pigIt(str){
    let words = str.split(' ');
    let pigLatin = [];
 
    for(let word of words){
      if((/([a-zA-Z])/).test(word)){
        pigLatin.push(word.substring(1) + word[0] + "ay");
      }else{
        pigLatin.push(word);
      }
    }
    return pigLatin.join(" ");
  }