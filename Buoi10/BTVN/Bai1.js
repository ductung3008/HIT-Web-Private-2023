const ageOfCats = [1, 2, 3, 4, 5];

const ageOfOwners = ageOfCats.map((age) => {
    if (age <= 2) return age * 2;
    return age * 4 + 16;
});

console.log(ageOfOwners);

const adultOwnerAge = ageOfOwners.filter((age) => {
    return age >= 18;
});

console.log(adultOwnerAge);

const averageAge = ageOfOwners.reduce((total, age) => total + age, 0) / ageOfOwners.length;

console.log(averageAge);