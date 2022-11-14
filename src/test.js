const arrayObj = [
  { name: "One", id: 2 },
  { name: "Two", id: 3 },
  { name: "Three", id: 3 },
  { name: "Four", id: 2 },
  { name: "Five", id: 5 },
];
const ids = [2, 3, 7];

const testarr = arrayObj.map((item) => ({ ...item }));

for (var i = 0; i < testarr.length; i++) {
  for (var j = 0; j < ids.length; j++) {
    if (testarr[i].id === ids[j]) {
      testarr[i].isChecked = true;
    }
  }
}
console.log(testarr);
console.log(arrayObj);
