function makingT_shirts(size = "medium", message = "I love TypeScript") {
    console.log(`I would like to order a T_shirt of ${size},with a message ${message} printed on it`);
}
makingT_shirts(); // Default large and message
makingT_shirts("medium"); // Default message, medium size
makingT_shirts("small", "Dive into Coding"); // Custom message, small size
export {};
