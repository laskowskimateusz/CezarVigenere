const FREQ_EN = [
  { letter: "E", frequency: 12.7 },
  { letter: "T", frequency: 9.06 },
  { letter: "A", frequency: 8.17 },
  { letter: "O", frequency: 7.51 },
  { letter: "I", frequency: 6.97 },
  { letter: "N", frequency: 6.75 },
  { letter: "S", frequency: 6.33 },
  { letter: "H", frequency: 6.09 },
  { letter: "R", frequency: 5.99 },
  { letter: "D", frequency: 4.25 },
  { letter: "L", frequency: 4.03 },
  { letter: "C", frequency: 2.78 },
  { letter: "U", frequency: 2.76 },
  { letter: "M", frequency: 2.41 },
  { letter: "W", frequency: 2.36 },
  { letter: "F", frequency: 2.23 },
  { letter: "G", frequency: 2.02 },
  { letter: "Y", frequency: 1.97 },
  { letter: "P", frequency: 1.93 },
  { letter: "B", frequency: 1.49 },
  { letter: "V", frequency: 0.98 },
  { letter: "K", frequency: 0.77 },
  { letter: "J", frequency: 0.15 },
  { letter: "X", frequency: 0.15 },
  { letter: "Q", frequency: 0.1 },
  { letter: "Z", frequency: 0.07 },
];

function findCommon(text) {
  const letterMap = {};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (const letter of alphabet) {
    letterMap[letter] = 0;
  }

  for (const char of text) {
    if (alphabet.includes(char)) {
      letterMap[char] = (letterMap[char] || 0) + 1;
    }
  }

  for (const letter in letterMap) {
    letterMap[letter] = (letterMap[letter] / text.length) * 100;
  }

  return letterMap;
}

function calculateSimilarity(decodedFrequencies) {
  let similarity = 0;

  for (const { letter, frequency } of FREQ_EN) {
    similarity += Math.abs(frequency - decodedFrequencies[letter]);
  }

  return similarity;
}

function crackCaesarCipher(ciphertext, topResults = 10) {
  const results = [];

  for (let shift = 0; shift < 26; shift++) {
    const decryptedText = cipher(ciphertext, shift, -1);
    const freq = findCommon(decryptedText);
    const similarity = calculateSimilarity(freq);
    results.push({ shift, decryptedText, similarity });
  }

  return results
    .sort((a, b) => a.similarity - b.similarity)
    .slice(0, topResults);
}
