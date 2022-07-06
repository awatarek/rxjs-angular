import { map, tap, take, of, from } from 'rxjs';

console.log("map");
of(2, 4, 6).pipe(
	map(item => item * 2),
	map(item => item - 3)
).subscribe(item => console.log(item));

console.log("tap");
of(2, 4, 6).pipe(
	map(item => item * 2),
	tap(item => console.log(item)),
	map(item => item - 3)
).subscribe(item => console.log(item));

console.log("take");
of(2, 4, 6).pipe(
	tap(item => console.log(item)),
	map(item => item * 2),
	take(2),
	map(item => item - 3),
	tap(item => console.log(item)),
).subscribe();

console.log("all");

from([20, 15, 10, 5]).pipe(
	tap(item => console.log(`emitted item ... ${item}`)),
	map(item => item * 2),
	map(item => item - 10),
	map(item => {
		if(item === 0){
		throw new Error("zero detected")
		}
		return item;
	}),
	take(3)
).subscribe({
	next: (item) => console.log(`resulting item .. ${item}`),
	error: (err) => console.error(`error ocurred ${err}`),
	complete: () => console.log(`complete`),
})


