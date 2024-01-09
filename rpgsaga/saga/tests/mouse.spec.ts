import { Mouse } from '../src/classTask/mouse';
import { Mode } from "../src/classTask/mouse";

xdescribe('Testing Mouse constructor', () => {
    it('Mouse should be created with incorrect age', () => {
        const mouse = new Mouse(6, "Красный");
        expect(mouse.year).toEqual(0);
        expect(mouse._healthpool).toEqual(100);
        expect(mouse._color).toEqual("Красный");
        expect(mouse._mode).toEqual(Mode.ALIVE);
    });
    it("Mouse should be created", () => {
        const mouse = new Mouse(2, "Чёрный");
        expect(mouse.year).toEqual(2);
        expect(mouse._healthpool).toEqual(100);
        expect(mouse._color).toEqual("Чёрный");
        expect(mouse._mode).toEqual(Mode.ALIVE);
    });
});

xdescribe('Testing Mouse methods', () => {
    it("Method hit", () => {
        const mouse = new Mouse(2, "Чёрный");
        for (let index = 1; index < 10; index++) {
            mouse.hit()
            expect(mouse._healthpool).toEqual(100 - index * 10)
        };
    });
    it("Method heal", () => {
        const mouse = new Mouse(2, "Чёрный");
        mouse.heal();
        expect(mouse._healthpool).toEqual(100)
    });
    it("Method color with same color and not", () => {
        const mouse = new Mouse(2, "Чёрный");
        expect(mouse.paint("Красный")).toEqual("Теперь мышь имеет Красный цвет");
        expect(mouse.paint("Красный")).toEqual("Зачем вы красите Красный в Красный");
    })
});

