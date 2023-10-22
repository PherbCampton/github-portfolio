export function useToCapitalize() {
  function toCapitalize(inputString) {
    return inputString
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .replace(/(?:^|\s)\S/g, function (match) {
        return match.toUpperCase();
      });
  }

  return { toCapitalize };
}
