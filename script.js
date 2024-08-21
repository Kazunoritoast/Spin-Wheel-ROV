const heroes = [
    "Airi", "Allain", "Aleister", "Alice", "Aoi", "Amily", "Annette", "Arduin", "Arthur", "Arum",
    "Astrid", "Ata", "Aya", "Azzen'Ka", "Baldum", "Bijan", "Bonnie", "Bright", "Brunhilda", "Butterfly",
    "Capheny", "Chaugnar", "Cresht", "D'Arcy", "Dextra", "Diaochan", "Dirak", "Eland'orr", "Elsu", "Enzo",
    "Errol", "Erin", "Fennik", "Flash", "Florentino", "Gildur", "Grakk", "Hayate", "Helen", "Iggy",
    "Ignis", "Ilumia", "Ishar", "Jinnar", "Kahlii", "Kaine", "Keera", "Kil'Groth", "Kriknak", "Krixi",
    "Krizzix", "Lauriel", "Laville", "Liliana", "Lindis", "Lorion", "Lu Bu", "Lumburr", "Maloch", "Marja",
    "Max", "Mganga", "Mina", "Ming", "Moren", "Murad", "Nakroth", "Natalya", "Omega", "Omen",
    "Ormarr", "Paine", "Preyta", "Qi", "Quillen", "Raz", "Riktor", "Rouie", "Rourke", "Roxie",
    "Ryoma", "Sephera", "Sinestrea", "Skud", "Slimz", "Superman", "Stuart", "Taara", "Tachi", "TeeMee",
    "Teeri", "Tel'Annas", "Thane", "Thorne", "Toro", "Tulen", "Valhein", "Veera", "Veres", "Violet",
    "Volkath", "Wonder Woman", "Wiro", "Wisp", "Wukong", "Xeniel", "Yan", "Yena", "Yorn", "Yue",
    "Y'bneth", "Zanis", "Zata", "Zephys", "Zip", "Zill", "Zuka", "Charlotte", "Dolia"
];

const wheel = document.getElementById("wheel");

heroes.forEach((hero, index) => {
    const segment = document.createElement("div");
    segment.className = "segment";
    segment.style.setProperty("--i", index);
    segment.style.transform = `rotate(${index * (360 / heroes.length)}deg)`;
    segment.innerText = hero;
    wheel.appendChild(segment);
});

document.getElementById("spinButton").addEventListener("click", function() {
    const randomDegree = Math.floor(5000 + Math.random() * 5000);
    const finalDegree = randomDegree % 360;
    const selectedSegment = Math.floor(finalDegree / (360 / heroes.length));
    
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        alert(`Congratulations! You've won: ${heroes[selectedSegment]}`);
    }, 4000);
});
