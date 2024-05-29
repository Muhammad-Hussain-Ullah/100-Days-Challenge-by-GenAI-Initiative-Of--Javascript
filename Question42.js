let great_Magicians = ["Alice", "Harley", "Vale"];
function show_magicians(great_Magicians) {
    great_Magicians.forEach(great_Magician => {
        console.log("These are magicians " + great_Magician);
    });
}
function make_great(great_Magicians) {
    for (let i = 0; i < great_Magicians.length; i++) {
        great_Magicians[i] = great_Magicians[i] + ",These are great magicians";
        console.log(great_Magicians[i]);
    }
}
show_magicians(great_Magicians);
make_great(great_Magicians);
export {};
