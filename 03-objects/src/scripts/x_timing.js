async function showDelaySolution() {
    try {
        console.log('One');
        const value = await                 // Simulate fetch
            new Promise(
                (resolve, reject) =>
                    setTimeout(() => resolve("Two"),
                        1 * 1000));
        // Now that we have the value we can use it.
        console.log(value);
        console.log('Three');
    } catch (error) {
        console.log(error);
    }
}
console.log('Before: showDelaySolution');
showDelaySolution();
console.log('After: showDelaySolution');