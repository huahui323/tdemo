function add({one,two}:{one:number,two:number}):number{
    return one+two;
}
const total = add({one:1,two:2});
console.log(total);