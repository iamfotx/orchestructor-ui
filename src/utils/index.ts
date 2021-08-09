const removeComma = (str: string) => {
  const tempArr = str.split('');
  tempArr.pop();
  return tempArr.join('');
};

export function stringify(obj: Record<string, string | number>): string {
  const placeHolderValue = `""`;
  const objStr = Object.entries(obj)?.reduce((prevValue, [key, value]) => {
    return prevValue + `"${key}":${value ? value : placeHolderValue},`;
  }, ``);
  return `{` + removeComma(objStr) + `}`;
}
