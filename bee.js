document.addEventListener('DOMContentLoaded', function() {
    const beeContainer = document.getElementById('bee-container');
    if (!beeContainer) {
        console.error('bee-container not found');
        return;
    }

    const numberOfBees = 6; // Adjust the number of bees as needed
    const beeClasses = ['bee1', 'bee2', 'bee3']; // Different bee classes
    const weights = [1, 3, 1]; // Adjust weights to control frequency: more weight for bee2

    function getRandomBeeClass() {
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
        let random = Math.random() * totalWeight;

        for (let i = 0; i < weights.length; i++) {
            if (random < weights[i]) {
                return beeClasses[i];
            }
            random -= weights[i];
        }
    }

    for (let i = 0; i < numberOfBees; i++) {
        const bee = document.createElement('div');
        const beeClass = getRandomBeeClass();
        bee.classList.add('bee', beeClass);

        // Randomize initial position
        bee.style.left = `${Math.random() * 100}%`;
        bee.style.top = `${Math.random() * 100}%`;

        // Randomize animation duration and translation distances
        bee.style.animationDuration = `${Math.random() * 2 + 1.5}s`; // Random duration between 1.5s and 3.5s
        bee.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay up to 0.5s

        // Set random translations for each keyframe
        for (let j = 1; j <= 10; j++) {
            const tx = `${Math.random() * 200 - 100}px`; // Random translateX between -100px and 100px
            const ty = `${Math.random() * 200 - 100}px`; // Random translateY between -100px and 100px
            bee.style.setProperty(`--tx${j}`, tx);
            bee.style.setProperty(`--ty${j}`, ty);
        }

        console.log(`Bee ${i}: class=${beeClass}, animationDuration=${bee.style.animationDuration}, animationDelay=${bee.style.animationDelay}`);
        beeContainer.appendChild(bee);
    }
});
