let guests = ["Yousuf", "Mayesha", "Najam", "Ali"];
console.log(`"Great news ${guests}, I found a bigger dinner table"`);
//to add more elements in the array
guests.unshift("Abdullah");
guests.splice(guests.length / 2, 0, "Mossa");
guests.push("Areeb");
guests.forEach(guests => {
    console.log(`Dear ${guests},"would you like to join us today at dinner table`);
});
export {};
