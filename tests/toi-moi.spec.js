import toiMoi from '../src/toi-moi'

describe('Verification des variables de toi et moi ', () => {
    test('test for variable mama  return un pour mama, Un pour moi ', () => {
        expect(toiMoi('mama')).toEqual('Un pour mama, Un pour moi')
    });
    test('test for variable lala  return un pour lala, Un pour moi ', () => {
        expect(toiMoi('lala')).toEqual('Un pour lala, Un pour moi')
    });
    test('test for variable oliver  return un pour oliver, Un pour moi ', () => {
        expect(toiMoi('oliver')).toEqual('Un pour oliver, Un pour moi')
    });
    test('test for variable Papa  return un pour Papa, Un pour moi ', () => {
        expect(toiMoi('Papa')).toEqual('Un pour Papa, Un pour moi')
    });
    test('test for variable undefined  return un pour mama, Un pour moi ', () => {
        expect(toiMoi()).toEqual('Un pour toi, Un pour moi')
    });
    describe("Test for variable Cristiano who return Meilleur joueur du monde", () => {
        test("test for variable Cristiano  return Meilleur joueur du monde ", () => {
            expect(toiMoi('Cristiano')).toEqual("Meilleur joueur du monde");
        });
    });
    describe("Test for variable int who return a error ", () => {
        test("Give 5  ", () => {
            expect(() => toiMoi(5)).toThrow(new Error("Please toiMoi take a params a string"));
        });
        test("Give 8  ", () => {
            expect(() => toiMoi(8)).toThrow(new Error("Please toiMoi take a params a string"));
        });
        test("Give 10  ", () => {
            expect(() => toiMoi(10)).toThrow(new Error("Please toiMoi take a params a string"));
        });
        test("Give 20  ", () => {
            expect(() => toiMoi(20)).toThrow(new Error("Please toiMoi take a params a string"));
        });
    });

});
