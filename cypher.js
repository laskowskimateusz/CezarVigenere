function cipher(text, key, mode) {
  return text
    .toUpperCase()
    .split("")
    .map((char, i) => {
      if (/[A-Z]/.test(char)) {
        const keyOffset =
          typeof key === "string"
            ? key[i % key.length].toUpperCase().charCodeAt(0) - 65
            : key;
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 65 + keyOffset * mode) % 26) + 26) % 26) + 65
        );
      } else {
        return char;
      }
    })
    .join("");
}
