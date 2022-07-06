
import { from, Observable, Observer, of } from 'rxjs';

 let observer: Observer<any> = {
    next: apple => console.log(`Apple emitted: ${apple}`),
    error: err => console.log(`Error ocurred: ${err}`),
    complete: () => console.log("All done")
 }

let apples$ = new Observable(appleSubscriber =>{
	appleSubscriber.next("test1");
    appleSubscriber.next("test1");
    appleSubscriber.complete();
})

let sub = apples$.subscribe(this.observer);
sub.unsubscribe();

of(2, 4, 6, 8).subscribe(item => console.log(item));

from([10, 20, 30, 40]).subscribe({
    next: item => console.log(`result item.. ${item}`),
    error: err => console.error(`error occurred: ${err}`),
    complete: () => console.log(`completed!`)
});

of("first string", "second string", "third string").subscribe({
    next: item => console.log(`test: ${item}`),
    error: err => console.log(`error ocurred: ${err}`),
    complete: () => console.log(`task completed`)
})
