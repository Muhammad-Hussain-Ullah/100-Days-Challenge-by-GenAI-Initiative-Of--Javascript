// This profile sets itself up and can share info about the user
let user_profile = (function () {
    let name = "Hussain";
    let age = "17";
    return {
        displayinfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
user_profile.displayinfo();
export {};
