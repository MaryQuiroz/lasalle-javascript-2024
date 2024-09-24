console.log("%cMetodos de Arrays", "font-weight:bold");
// probar metodos conocat(), join(), push(), pop(), shift(), unshift(), flat()

animals = ["🐶", "🐷", "😻", "🐨", "🙉"]
colors = ["🔴", "🌕", "🟢", "🟣", "⚪️", "🔵"]

console.log(animals);
console.log(colors);

console.log("   ejemplos de método Concat()");

console.log(animals.concat(colors));
console.log(animals.concat("🐮"));

console.log("   ejemplos de método join()")

console.log(animals.join());
console.log(animals.join(colors));
console.log(animals.join("🐼"));
console.log(animals.join("/"));

console.log("   ejmplos de método push()")

console.log(animals.push(colors)); // da el lenght del conjunto
console.log(animals.push("😂")); 
caritaRisa = animals.push()
console.log(caritaRisa); 

console.log("   ejemplos de metodo pop()")
pop = animals.pop()
console.log(pop);
console.log(animals);

console.log("   ejemplos de método shift()");
// hacen lo mismo que pop() y push() y sus subarrays


