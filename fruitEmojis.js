const fruitEmojis = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍍", "🍒", "🍉", "🥭", "🍑"];
//1)
console.log("1)"+fruitEmojis.length)
//2)
console.log("2)"+"first = "+fruitEmojis[0]+" ,, last = "+fruitEmojis[fruitEmojis.length-1]);
//3)
fruitEmojis.push("🥝");
console.log("3)" +fruitEmojis[fruitEmojis.length-1]);
//4)
fruitEmojis.pop();
console.log("4)"+fruitEmojis[fruitEmojis.length-1]);

//5)
const findfrout = fruitEmojis.find((emojy) => emojy  = "🍓");
if (findfrout)
    console.log("5)🍓is found")
else
    console.log("5)🍓not found")


//6)
//  let index1; 
//  console.log(findfrout);
//  for (let i = 0 ; i <fruitEmojis.length; i++) {
//     if (fruitEmojis[i] == ("🍓")){
//      index1=i;
//      console.log("6)"+index1)
//     }}

let index = fruitEmojis.findIndex(emoji => emoji === "🍓");
if (index !== -1) {
    console.log("6) " + index);
}

 //7)   
 const firstThreeFruits = [...fruitEmojis].slice(0, 3);
 console.log("7)"+firstThreeFruits);

 //8)
 const emojisString = [...fruitEmojis].join(" ");
console.log("8)"+emojisString);
//9)
const sortedFruitEmojis = [...fruitEmojis].sort();
console.log("9)"+sortedFruitEmojis);
//10)
const reversedFruitEmojis = [...fruitEmojis].reverse();
console.log("(10)"+reversedFruitEmojis);

