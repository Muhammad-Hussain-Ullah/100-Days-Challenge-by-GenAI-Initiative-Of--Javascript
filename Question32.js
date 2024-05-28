let current_users = ["User1", "user2", "User3", "User4", "User5"];
let new_users = ["user1", "user6", "user3", "user7", "user5"];
new_users.forEach(new_users => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users},need to enter a new username`);
    }
    else {
        console.log(`${new_users} is available.`);
    }
});
export {};
