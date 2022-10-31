// Reactive Extensions Library for JavaScript.
import { range, filter, map } from 'rxjs';

range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));
