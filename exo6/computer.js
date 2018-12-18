export default class Compute {
  static sum() {
    if (arguments.length < 2) {
      throw new Error("Please sum take two number");
    }
    for (let i = 0; i < arguments.length; i++) {
      if (
        typeof arguments[i] !== "number" ||
        typeof arguments[i] == null ||
        typeof arguments[i] === undefined ||
        typeof arguments[i] === "string"
      ) {
        throw new Error("number can be a number");
      }
      if (typeof arguments[i] === "number") {
        let calcul = 0;
        for (let i = 0; i < arguments.length; i++) {
          calcul += arguments[i];
        }
        return calcul;
      }
      if(typeof arguments[i] ==='float'|| typeof arguments[i]==="object"){
         calcul+= [...arguments[i]]
      }
    }
  }
  static multiplication(){

  }
}
