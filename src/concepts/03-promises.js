import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

        const renderHero = (hero) => {
                element.innerHTML = hero.name;
        }

        const renderTwoHeros = (hero1, hero2) => {
                element.innerHTML = `
                        <h3>${ hero1.name }</h3>
                        <h3>${ hero2.name }</h3>
                `;
        }

        const renderError = (error) => {
                element.innerHTML = `
                        <h1>Error:</h1>
                        <h3>${error}</h3>
                `;
        }

        const id1 = '5d86371f25a058e5b1c8a65e';
        const id2 = '5d86371f97c29d020f1e1f6d';

        //Esta forma se usa cuando las promesas se hacen de forma simultanea
        Promise.all([
                findHero(id1),
                findHero(id2),
        ])
        .then(([hero1, hero2]) => renderTwoHeros( hero1, hero2))
        .catch(renderError);
        //TODO: Estas formas sirven cuando despues de una promesa se ocupa su valor para la sig promesa
        //! Forma 2
        // let hero1;
        // findHero(id1)
        //         .then(hero => {
        //                 hero1 = hero;
        //                 return findHero(id2);
        //         }).then( hero2 => {
        //                 renderTwoHeros(hero1, hero2);
        //         })
        //         .catch(renderError);


        //! Forma 1
        // findHero( id1 )
                // .then( superHero => renderHero( superHero ))
                // .catch(error => renderError(error));

        // ProTip: Cuando se regresa como parametro la misma cantidad de valores a otra funcion, se puede ocupar solo el nombre de la funcion
        // findHero( id1 )
        //         .then( (hero1) => {

        //                 findHero( id2 )
        //                         .then( hero2 => {
        //                                 renderTwoHeros(hero1, hero2)
        //                         })
        //                         .catch(renderError);
        //         })
        //         .catch(renderError);

}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
        return new Promise( ( resolve, reject )=> {
                console.log('Hola mundo');

                const hero = heroes.find( hero => hero.id === id );
        
                if ( hero ) {
                        resolve( hero );
                        return;
                }

                reject(`Hero with id ${ id } not found`);
        
         });
}