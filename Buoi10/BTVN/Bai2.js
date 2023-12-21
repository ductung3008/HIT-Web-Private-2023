const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Hãy tính lượng thức ăn recommended và lưu thành 1 thuộc tính (recFood) cho từng chú chó. Biết recommended food = weight ** 0.75 * 28
dogs.map(dog => dog.recFood = dog.weight ** 0.75 * 28);
console.log(dogs);

// Tìm chú chó của Sarah và in ra console nếu nó ăn quá nhiều hoặc quá ít
const dogOfSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogOfSarah);

if (dogOfSarah.curFood < dogOfSarah.recFood * .9) {
    console.log("Chu cho cua Sarah gay");
}
else if (dogOfSarah.curFood > dogOfSarah.recFood * 1.1) {
    console.log("Chu cho cua Sarah beo");
}

// Tạo một mảng chứa tất cả chủ nhân của những chú chó ăn quá nhiều (ownersEatTooMuch) và một mảng chứa tất cả chủ nhân của những chú chó ăn quá ít (ownersEatTooLittle)
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood * 1.1).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood * 0.9).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

// Từ 2 mảng trên hãy in ra A and B and C's dogs eat too much! và D and E and F's dogs eat too little!
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// In ra consle xem có chú chó nào ăn CHÍNH XÁC lượng thức ăn được recommended hay không (chỉ in true hoặc false)
console.log(dogs.some(dog => dog.curFood == dog.recFood));

// In ra consle xem có chú chó nào ăn ĐỦ lượng thức ăn hay không (chỉ in true hoặc false)
console.log(dogs.some(dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1));

// Tạo một mảng chứa những chú chó ăn đủ lượng thức ăn
const dogsEatEnough = dogs.filter(dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1);
console.log(dogsEatEnough);

// Tạo một mảng shallow copy từ mảng đã cho và sắp xếp tăng dần theo lượng thức ăn recommended
const sortedDogsList = [...dogs].sort((dog1, dog2) => dog1.recFood - dog2.recFood);
console.log(sortedDogsList);