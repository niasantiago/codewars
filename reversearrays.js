// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let step1 = n.toString()
    console.log(step1) 
   let nia = step1.split("") 
     let step2 = nia.reverse()
    console.log(step2);
    return step2.map(x => Number(x))
}