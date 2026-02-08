function findFlames(name1, name2) {
    let s1 = name1.toLowerCase();
    let s2 = name2.toLowerCase();

    let c = 0;
    let arr2 = s2.split("");

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (s1[i] === arr2[j]) {
                c = c + 2;
                arr2[j] = "?";
                break;
            }
        }
    }

    let s3 = s1 + arr2.join("");
    let l = s3.length - c;

    let flames = ["f", "l", "a", "m", "e", "s"];
    let index = 0;

    while (flames.length > 1) {
        index = (index + l - 1) % flames.length;
        flames.splice(index, 1);
    }

    switch (flames[0]) {
        case "f": return "Friends";
        case "l": return "Lovers";
        case "a": return "Affection";
        case "m": return "Marriage";
        case "e": return "Enemies";
        case "s": return "Siblings";
    }
}

module.exports = findFlames;
