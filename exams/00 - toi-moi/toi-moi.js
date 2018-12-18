export default function toiMoi(name = "toi") {
  if (typeof name === "number" || typeof name === "object") {
    throw new Error("Please toiMoi take a params a string");
  }
  if (name === "Cristiano") {
    return "Meilleur joueur du monde";
  }
  return `Un pour ${name}, Un pour moi`;
}
