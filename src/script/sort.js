 function sortByIdThenName(a, b) {
  const n = a.listId - b.listId;
  // sort by listId
  if (n !== 0) {
    return n;
  }
  // if listId is equal then sort by name
  return a.name.localeCompare(b.name);
}

export {sortByIdThenName}