export default function hasValuesFromArray(mySet, value) {
  const verify = value.every((el) => mySet.has(el));
  return verify;
}
