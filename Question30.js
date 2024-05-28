let users = ["user1", "user2", "user3", "user4",];
users.forEach(users => {
    if (users === "Admin") {
        console.log("Welcome admin  would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
});
export {};
