import globalRank from './globalRank'

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

const rank = Object.keys(globalRank);
const AntonioRuan = rank;
const Wagner = shuffle(JSON.parse(JSON.stringify(rank)));
const Ian = shuffle(JSON.parse(JSON.stringify(rank)));
const Rafael = shuffle(JSON.parse(JSON.stringify(rank)));
const Maria = shuffle(JSON.parse(JSON.stringify(rank)));
const Joao = shuffle(JSON.parse(JSON.stringify(rank)));

export default [AntonioRuan, Wagner, Ian, Rafael, Maria, Joao]