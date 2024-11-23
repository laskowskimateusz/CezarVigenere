function cipher(text, key, mode) {
  const filteredKey =
    typeof key === "string" ? key.replace(/[^a-zA-Z]/g, "").toUpperCase() : key;

  if (typeof filteredKey === "string" && filteredKey.length === 0) {
    return text;
  }
  let keyIndex = 0;

  return text
    .split("")
    .map((char) => {
      if (/[A-Z]/i.test(char)) {
        const keyOffset =
          typeof filteredKey === "string"
            ? filteredKey[keyIndex % filteredKey.length].charCodeAt(0) - 65
            : filteredKey;
        keyIndex++;
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode(
          ((((char.charCodeAt(0) - base + keyOffset * mode) % 26) + 26) % 26) +
            base
        );
      } else {
        return char;
      }
    })
    .join("");
}
