function cipher(text, key, mode) {
  const filteredKey =
    typeof key === "string" ? key.replace(/[^a-zA-Z]/g, "").toUpperCase() : key;

  if (typeof filteredKey === "string" && filteredKey.length === 0) {
    return text;
  }

  return text
    .toUpperCase()
    .split("")
    .map((char, i) => {
      if (/[A-Z]/.test(char)) {
        const keyOffset =
          typeof filteredKey === "string"
            ? filteredKey[i % filteredKey.length].charCodeAt(0) - 65
            : filteredKey;
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 65 + keyOffset * mode) % 26) + 26) % 26) + 65
        );
      } else {
        return char;
      }
    })
    .join("");
}
