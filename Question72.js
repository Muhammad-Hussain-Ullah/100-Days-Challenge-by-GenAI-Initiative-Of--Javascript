{
    let blocklet = "Visible only inside the block scope";
    const blockconst = "Also works inside the block scope";
    console.log(blocklet);
    console.log(blockconst);
}
try {
    console.log(blocklet);
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockconst);
}
catch (error) {
    console.log("`blockconst` is not accessible outside the block.");
}
export {};
