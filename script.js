//your JS code here. If required.

function makeChange(amount) {
    const q = Math.floor(amount / 25);
    amount = amount % 25;

    const d = Math.floor(amount / 10);
    amount = amount % 10;

    const n = Math.floor(amount / 5);
    amount = amount % 5;

    const p = amount;

    return {
        q: q,
        d: d,
        n: n,
        p: p
    };
}
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
