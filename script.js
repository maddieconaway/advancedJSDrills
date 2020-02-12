

document.addEventListener('DOMContentLoaded', function () {

    let arrShapes = [];

    class Shape {
        constructor() {
            this.x = Math.floor(Math.random() * 600);
            this.y = Math.floor(Math.random() * 600);
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super();
            this.height = parseInt(height);
        }

        render() {
            let $divDraw = $('#divDraw');
            let $triangle = $('<span></span>');

            $triangle.css({
                width: 0,
                height: 0,
                left: this.x + 200,
                top: this.y + 250,
                //this is so sneeky
                borderTop: this.height + 'px solid transparent',
                borderLeft: this.height + 'px solid transparent',
                borderRight: this.height + 'px solid transparent',
                borderBottom: this.height + 'px solid yellow',
                position: 'absolute'
            });

            $triangle.dblclick(function () {
                this.remove();
            });

            $triangle.click(function () {
                $('#divSidebar ul').remove();
                let $divSidebar = $('#divSidebar');
                let position = $(this).position();
                let s = this.leg; //DOES NOT WORK
                let $ul = $('<ul>Triangle</ul>');

                $ul.append($(`<li>x: ${position.left}   y: ${position.top}</li>`));
                $ul.append($('<li>height: '+s+'</li>'));

                $divSidebar.append($ul);
            });

            $divDraw.append($triangle);
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $rect = $('<span></span>');
            
            $rect.css({
                width: this.width,
                height: this.height,
                left: this.x + 200,
                top: this.y + 250,
                border: '2px solid green',
                backgroundColor: 'green',
                position: 'absolute'
            });

            $rect.dblclick(function () {
                this.remove();
            });

            $rect.click(function () {
                $('#divSidebar ul').remove();
                let $divSidebar = $('#divSidebar');
                let position = $(this).position();
                let $ul = $('<ul>Rectangle</ul>');

                $ul.append($(`<li>x: ${position.left}   y: ${position.top}</li>`));
                $ul.append($(`<li>width: ${$(this).css('width')}</li>`));
                $ul.append($(`<li>height: ${$(this).css('height')}</li>`));
                $divSidebar.append($ul);
            });

            $divDraw.append($rect);
        }
    }

    class Square extends Shape {
        constructor(leg) {
            super();
            this.leg = leg;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $square = $('<span></span>');
            
            $square.css({
                width: this.leg,
                height: this.leg,
                left: this.x + 200,
                top: this.y + 250,
                border: '2px solid red',
                backgroundColor: 'red',
                position: 'absolute'
            });

            $square.dblclick(function () {
                this.remove();
            });

            $square.click(function () {
                $('#divSidebar ul').remove();
                let s = this.leg; //DOES NOT WORK

                let $divSidebar = $('#divSidebar');
                let position = $(this).position();
                let $ul = $('<ul>Square</ul>');

                $ul.append($(`<li>x: ${position.left}   y: ${position.top}</li>`));
                $ul.append($('<li>side length: '+s+'</li>'));
                $divSidebar.append($ul);
            });

            $divDraw.append($square);

        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $circle = $('<span></span>');

            $circle.css({
                borderRadius: '50%',
                left: this.x + 200,
                top: this.y + 250,
                width: this.radius*2,
                height: this.radius*2,
                border: '2px solid purple',
                backgroundColor: 'purple',
                position: 'absolute'
            });

            $circle.dblclick(function () {
                this.remove();
            });

            $circle.click(function () {
                $('#divSidebar ul').remove();
                let s = this.radius; //DOES NOT WORK

                let $divSidebar = $('#divSidebar');
                let position = $(this).position();
                let $ul = $('<ul>Circle</ul>');

                $ul.append($(`<li>x: ${position.left}   y: ${position.top}</li>`));
                $ul.append($('<li>radius: '+s+'</li>'));
                $divSidebar.append($ul);
            });

            $divDraw.append($circle);
        }
    }

    $('#btnRectangle').on('click', function () {
        let rectangle = new Rectangle($('#txtRectangleHeight').val(), $('#txtRectangleWidth').val());
        rectangle.render();
        arrShapes.push(rectangle);
    });

    $('#btnCircle').on('click', function () {
        let circle = new Circle($('#txtRadius').val());
        circle.render();
        arrShapes.push(circle);
    });

    $('#btnSquare').on('click', function () {
        let square = new Square($('#txtSquare').val());
        square.render();
        arrShapes.push(square);
    });

    $('#btnTriangle').on('click', function () {
        let triangle = new Triangle($('#txtTriangle').val());
        triangle.render();
        arrShapes.push(triangle);
    });

    $('#canvasDraw').on('click', function (e) {
        let c = document.getElementById('canvasDraw')
        var rect = c.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        for (i = 0; i < arrShapes.length; i++) {
            let a = arrShapes[i];
            console.log('x:' + x + 'y:' + y);
            console.log(x >= a.startx && x <= a.endx);
            console.log('a.starty:' + a.starty);
            console.log('a.endy:' + a.endy);
            console.log(y >= a.starty && y <= a.endy);
            if ((x >= a.startx && x <= a.endx) && (y >= a.starty && y <= a.endy)) {
                console.log('found a shape');
                break;
            }
        }
    });
});


