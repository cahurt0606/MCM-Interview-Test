function checkModThree(x) {
    return (x % 3) === 0
}

function checkModFive(x) {
    return (x % 5) === 0
}

for (let i = -50; i <= 101; i++) {
    if (checkModThree(i)) {
        if (checkModFive(i)) {
            console.log("CatDog");
        }
        else {
            console.log("Cat");
        }
    } else if (checkModFive(i)) {
        console.log("Dog");
    } else {
        console.log(i);
    }
}