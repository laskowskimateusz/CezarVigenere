function useCypher(id, mode) {
  const text = document.getElementById("text" + id).value;
  const key = document.getElementById("key" + id).value;
  if (!text || !key) {
    alert("Wypełnij poprawnie tekst i wpisz klucz.");
    return;
  }
  const encryptedText = cipher(text, key, mode);
  document.getElementById("result" + id).value = encryptedText;
}

function runHack() {
  const text = document.getElementById("textHack").value;
  const total = document.getElementById("totalResults").value;
  const result = crackCaesarCipher(text, total);
  const decryptedTexts = result.map((item) => item.decryptedText).join("\n\n");
  document.getElementById("resultHack").value = decryptedTexts;
}
