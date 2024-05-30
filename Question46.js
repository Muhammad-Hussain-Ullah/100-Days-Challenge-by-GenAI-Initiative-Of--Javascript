let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${this.year},${this.model} of ${this.make}`);
    }
};
laptop.describe();
export {};
