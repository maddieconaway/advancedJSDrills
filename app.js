document.addEventListener('DOMContentLoaded', function () {
    name = 'Maddie';
    var name;
    console.log(name);

    setName();
    function setName() {
        var name = 'conaway';
        console.log(name);

    }

    console.log('some text1');
    let avg = findAvg(2, 2);
    console.log('some text2', avg);

    function findAvg(a, b) {
        console.log('some text3');
        var answer = (a + b) / 2;
        return answer;
    }

    let fruits = ['apples', 'oranges', 'bananas'];
    // let favFruit;

    function printFruits() {
        let favFruit = fruits[2];
        let leastFav = fruits[1];
        console.log(fruits[0]);
        printFavFruit();
        console.log('least favorite = ' + leastFav);
        function printFavFruit() {
            console.log(favFruit);
        }
    }

    printFruits();

    helloFunc();
    function helloFunc() {
        console.log('Hello Maddie');
    }

    let alertCall = function () {
        alert('this is an alert');
    }
    
    alertCall();
});

