document.getElementById('order-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(el => el.value);
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);

    const smoothie = new Smoothie(name, size, base, fruits, extras);
    document.getElementById('order-output').innerHTML = smoothie.describe();
    document.getElementById('fun-fact').innerHTML = getRandomFunFact();
});

class Smoothie {
    constructor(name, size, base, fruits, extras) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
        this.prices = {
            size: { small: 3.00, medium: 4.50, large: 6.00 },
            fruits: { banana: 0.50, strawberry: 0.75, blueberry: 0.75, mango: 1.00, pineapple: 0.75 },
            extras: { protein: 1.50, chia: 1.00, honey: 0.50 }
        };
    }

    calculatePrice() {
        let price = this.prices.size[this.size];
        this.fruits.forEach(fruit => price += this.prices.fruits[fruit]);
        this.extras.forEach(extra => price += this.prices.extras[extra]);
        return price.toFixed(2);
    }

    getImage() {
        const baseImages = {
            water: 'images/water-smoothie.jpg',
            milk: 'images/milk-smoothie.jpg',
            yogurt: 'images/yogurt-smoothie.jpg',
            juice: 'images/juice-smoothie.jpg'
        };
        return baseImages[this.base];
    }

    describe() {
        return `
            <h2>Your Smoothie Order</h2>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.join(', ')}</p>
            <p><strong>Extras:</strong> ${this.extras.join(', ')}</p>
            <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
            <img src="${this.getImage()}" alt="Smoothie Image" style="width: 200px; height: auto;">
        `;
    }
}

function getRandomFunFact() {
    const funFacts = [
        "Did you know? The first smoothies were made in Brazil!",
        "Fun fact: Smoothies can help improve digestion.",
        "Did you know? Smoothies are a great way to get your daily fruits and veggies.",
        "Fun fact: The word 'smoothie' was first used in the 1930s.",
        "Did you know? Adding protein to your smoothie can help with muscle recovery."
    ];
    return funFacts[Math.floor(Math.random() * funFacts.length)];
}

$(document).ready(function() {
    $("#nav_para span:first-child").css({position: "relative", left: "-100vw", opacity: 0});
    $("#nav_para span:last-child").css({position: "relative", right: "-100vw", opacity: 0});
    
    $("#nav_para span:first-child").animate({
        left: "0",
        opacity: 1
    }, 1000);
    
    $("#nav_para span:last-child").animate({
        right: "0",
        opacity: 1
    }, 1000);
});