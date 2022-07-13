document.write("<h1>hello \"Mr.Chen\"</h1>");

var course = "js課程";
var day = "7/11";
document.write(course);
document.write("</br>");
document.write(day);
document.write("</br>");
var name1 = prompt("請輸入你的名字");

document.write("您好，"+ name1);
document.write("</br>");
document.write("</br>");

var n1 = parseFloat(prompt("please key in a value"))
var n2 = parseFloat(prompt("please key another value"))

document.write("The answer is: "+(n1+n2));
document.write("</br>");
var person ={
    name1 : "abc",
    age : 20,
    is_male : true,
    print_n : function(){
    document.write(this.name1);
    }
    };
    //document.write(person.name1);
    person.print_n();
