'use script'
// Преобразуйте последнюю букву строки в верхний регистр. 
// let str = 'london';
// let res = str.slice(0,-1) + str.slice(-1).toUpperCase()
// console.log(res);

// Преобразуйте первые 2 буквы строки в верхний регистр.
// let str = 'london';
// let res = str.slice(0,2).toUpperCase() +str.slice(2)
// console.log(res);

//  Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// let str = 'London';

// Преобразуйте первую букву строки в нижний регистр. 
// let str = 'London';
// let res = str.slice(0,1).toLowerCase() + str.slice(1) ;
// console.log(res);

// Давайте напишем код, который преобразует первую букву каждого слова в 
// верхний регистр. Сразу приведу решение с комментариями: 
// let str = 'word1 word2 word3';
// let arr = str.split(' ') ;
// console.log(arr);
// for ( let i = 0 ; i < arr.length ; i ++)
// {
//     arr[i]=arr[i].slice( 0 , 1 ).toUpperCase()+ arr[i].slice( 1 )
// }
// console.log(arr);

// str = arr.join(" ")
// console.log(str);

//  Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого 
// типа (то есть для строк, в которых слова разделены символов подчеркивания). 

// let str = 'var_test_text'
// let arr = str.split('_')
// console.log(arr);
// for ( let i = 0 ; i < arr.length ; i ++){
//     arr[i]=arr[i].slice(0,1).toUpperCase()+ arr[i].slice(1)
// }
// console.log(arr);
// str = arr.join('');
// console.log(str);

// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре. 
// let str = 'var_test_text'
// let arr = str.split('_')
// console.log(arr);
// for ( let i = 0 ; i < arr.length ; i ++){
//     arr[i]=arr[i].slice(0,1).toLowerCase()+ arr[i].slice(1)
// }
// console.log(arr);
// str = arr.join('');
// console.log(str);


// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке. 
// let str = 'one two thry'
// let res =str.split(' ').reverse().join(' ') ;
// console.log(res);

