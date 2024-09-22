//// АБСТРАКТНЫЕ КЛАССЫ, МЕТОДЫ И ПОЛЯ
// Они нужны для создания базовых классов, которые служат основой для других классов. 
// Они определяют интерфейс и общую функциональность, но не могут быть инстанцированы самостоятельно. 


abstract class FigureEx { };

// Мы не можем создать напрямую объект абстрактного класса, используя его конструктор.
//let someFigure = new Figure(); // Ошибка!

// Классы (например фигуры) могут иметь какой-то общий функционал, и в таком случае 
// мы можем определить абстрактный класс фигуры, поместить в него общий функционал, 
// и от него унаследовать классы конкретных геометрических фигур

// АБСТРАКТНЫЙ КЛАСС
abstract class Figure {
    // АБСТРАКТНЫЕ ПОЛЯ (При наследовании класс-наследник также обязан предоставить для них реализацию)
    abstract x: number;
    abstract y: number;

    // АБСТРАКТНЫЙ МЕТОД
    // в данном случае метод getArea в базовом классе не выполняет 
    // никакой полезной работы, так как у абстрактной фигуры не может 
    // быть площади. И в этом случае подобный метод лучше определить 
    // как абстрактный
    // getArea(): void{
    //     console.log('Not implemented');
    // }

    abstract getArea(): void;

}

class Rectangle extends Figure{
    // x: number;
    // y: number;

    constructor(public x: number, public y: number, public width: number, public height: number){
        super();
    }

    getArea(): void {
        let square = this.width * this.height;
        console.log('area =', square);
    }
}


let someFigure: Figure = new Rectangle(10, 10, 20, 30);
someFigure.getArea();  // area = 600