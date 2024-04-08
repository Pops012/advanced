

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

        element.innerHTML = 'Loading...';

        const renderValue = ( value ) => {
                element.innerHTML = value;
        }

        //Esto es como una carreca que la promesa que acabe primero se ejecutara
        Promise.race([
                slowPromise(),
                mediumPromise(),
                mediumPromise(),
                fastPromise(),
                mediumPromise(),
                slowPromise(),
        ]).then( renderValue );

}


const slowPromise = () => new Promise( resolve => {
        setTimeout(() => {
                resolve('Slow Promise');
        }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
        setTimeout(() => {
                resolve('MediumPromise');
        }, 1500);
});

const fastPromise = () => new Promise( resolve => {
        setTimeout(() => {
                resolve('fastPromise');
        }, 1000);
});

