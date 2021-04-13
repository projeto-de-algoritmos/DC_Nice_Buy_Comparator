import countInversions from './inversionCount';

class WishListComparator {
    // constructor() {
    //   return this;
    // }

    compareLists(listA, listB) {
      let reflected = this.reflectLists(listA, listB);
      return countInversions(reflected, 0, reflected.length-1);
    }

    // As listas são objects(ou hashtables) que contém como chaves os itens,
    // e o valor delas é o ranking
    // list = {headphone: 1, T-shirt: 2}
    reflectLists(listA, listB) {
      let reflectedB = [];
      let listBaux = [];
      for (let key of Object.keys(listA)) {
        listBaux.push({key: key, original: listB[key], reflected: listA[key]});
      }
      for (let item of listBaux.sort(compare)) {
        reflectedB.push(item["reflected"]);
      }
      return reflectedB;
    }
}

function compare(a, b) {
  return a["original"] - b["original"];
}

export default WishListComparator;