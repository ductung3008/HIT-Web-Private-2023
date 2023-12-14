const obj1 = {
    fullName: 'Nguyễn An',
    height: 180,
    weight: 72,
    calcBMI: function () {
        const height_m = this.height / 100;
        return Math.round(this.weight / (height_m ** 2) * 10) / 10;
    }
}

const obj2 = {
    fullName: 'Lê Bình',
    height: 150,
    weight: 45,
    calcBMI: function () {
        const height_m = this.height / 100;
        return Math.round(this.weight / (height_m ** 2) * 10) / 10;
    }
}

console.log("obj1: " + obj1.calcBMI());
console.log("obj2: " + obj2.calcBMI());

let compare;
if (obj1.calcBMI() === obj2.calcBMI()) {
    compare = '=';
}
else if (obj1.calcBMI() > obj2.calcBMI()) {
    compare = '>';
}
else {
    compare = '<';
}

console.log(`obj1.BMI ${compare} obj2.BMI`);