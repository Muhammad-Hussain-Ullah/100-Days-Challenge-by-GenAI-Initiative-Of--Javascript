let invitedGuests = ["Yousuf", "Mayesha", "Najam", "Ali"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (invitedGuests.length > 2) {
    let removed_Guests = invitedGuests.pop();
    console.log("Unfortunately" + removed_Guests, "i cant invite you at dinner");
}
invitedGuests.forEach(invitedGuests => {
    console.log(`${invitedGuests},You guys are still invited`);
});
export {};
