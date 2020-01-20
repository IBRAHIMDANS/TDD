export function hamming(seq1, seq2) {
  const check = ["A", "T", "C", "G"];
  if (seq1.length !== seq2.length) {
    throw new Error("Sequence should be same size");
  }
  let len = 0;
  for (let i = 0; i < seq1.length; i++) {
    if (isValidLetter(seq1[i]) && isValidLetter(seq2[i])) {
      if (seq1[i] !== seq2[i]) {
        len++;
      }
    } else {
      throw new Error("Letters should be A, T, C or G");
    }
  }
  return len;
}
function isValidLetter(letter) {
  return letter === "A" || letter === "T" || letter === "C" || letter === "G";
}