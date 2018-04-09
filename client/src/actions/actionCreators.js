/*
* action types
*/

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/*
* action creators
*/

export function incrementReduc () {
   return {
       type: 'INCREMENT',
   }
}

export function decrementReduc () {
   return {
       type: 'DECREMENT',
   }
}
