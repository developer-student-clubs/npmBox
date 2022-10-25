// Defining The queue
import { queue as _queue } from 'async';

const queue = _queue((task, completed) => {
	// Here task is the current element being
	// processed and completed is the "callback function"
	
	console.log("Currently Processing Task is " + task);
	
	// Simulating a complex process.
	setTimeout(()=>{
		// Number of elements to be processed.
		const remaining = queue.length();
		completed(null, {task, remaining});
	}, 1000);

}, 1);

async.mapLimit(urls, 5, async function(url) {
    const response = await fetch(url)
    return response.body
}, (err, results) => {
    if (err) throw err
    // results is now an array of the response bodies
    console.log(results)
})
// The concurrency value is set to one,
// Which means that one element is being
// Processed at a particular time

