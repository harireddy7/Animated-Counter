const countNodes = document.querySelectorAll('.count-value');
let speed = 100;

countNodes.forEach(counterNode => {
    const updateCount = () => {
        
        const target = +counterNode.getAttribute('data-target');
        let counterValue = +counterNode.innerText;
        let inc = target / speed;
        const nearTarget = Math.ceil(target -  (2 *inc));
        
        if (counterValue === nearTarget) {
            speed = target;
        }

        counterNode.innerText = Math.ceil(counterValue + inc);

        if (counterValue < target) {
            if (target - counterValue <= 5) {
                counterValue += inc;
                setTimeout(updateCount, 500);
            } else {
                counterValue += inc;
                setTimeout(updateCount, 1);
            }
        } else {
            counterNode.innerText = target;
        }
    }

    updateCount();
});
