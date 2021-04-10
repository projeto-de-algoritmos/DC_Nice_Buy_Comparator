function countInversions(vetor, l, r) {
	if (l >= r) return 0;
	let m = Math.floor((l+r)/2);
	let leftsum = countInversions(vetor, l, m);
	let rightsum = countInversions(vetor, m+1, r);
	return leftsum + rightsum + countAndSort(vetor, l, m+1, r);
}

function countAndSort(vetor, l, m, r) {
	let aux = [];
	let i = l;
	let j = m;
	let counter = 0;
	while (i < m && j <= r) {
		if (less(vetor[j], vetor[i])) {
			counter += m-i;
			aux.push(vetor[j++]);
		}
		else aux.push(vetor[i++]);
	}
	while (i < m) aux.push(vetor[i++]);
	while (j <= r) aux.push(vetor[j++]);

	let k = l;
	for (let element of aux) vetor[k++] = element;

	return counter;
}

function less(c1, c2){
	return c1 < c2;
}

export default countInversions;









