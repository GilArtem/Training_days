//// ПОЛУЧЕНИЕ КУКИ

const expire = new Date();
expire.setHours(expire.getHours() + 4);

document.cookie = "language=JavaScript;expires="+expire.toUTCString()+";";
document.cookie = "company=Localhost;expires="+expire.toUTCString()+";";
document.cookie = "login=kb24;";

console.log(document.cookie);

// Извлеченные куки не включают параметры expires, path, domain и secure. 
// Кроме того, сами куки разделяются точкой с запятой, поэтому нужно еще провести некоторые преобразования, 
// чтобы получить их имя и значение:

const cookies = document.cookie.split(";");
for(cookie of cookies){
 
    const parts = cookie.split("=");
    console.log("Имя куки:", parts[0]);
    console.log("Значение:", parts[1],"\n\n");
}