function sieveOfEratosthenes(n) {
  const __ = [];
  prime = Array.from({ length: n + 1 }, (_, i) => true);

  for (p = 2; p * p <= n; p++) {
    if (prime[p] == true) {
      for (i = p * p; i <= n; i += p) prime[i] = false;
    }
  }

  for (i = 2; i <= n; i++) {
    if (prime[i] == true) __.push(i);
  }
  return __;
}

function parse(arr) {
  for (const el of arr) {
    console.log(el);
  }
}
let i = 10298340
while(true){
    i++
    const x =sieveOfEratosthenes(i)
    console.log(x[[x.length - 1]])
}