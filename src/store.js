import { writable, readable, derived } from 'svelte/store';






// export  const MahlzeitenStore = writable([
//     { name: "TestName", kohlenhydrate: 11
//     }
// ]);
export  let MahlzeitenStore = writable([]);;

// export const MahlzeitenStore = (key, initial) => {
// 	const persist = localStorage.getItem(key)
// 	const data = persist ? JSON.parse(persist) : initial
// 	//if sub is broken, sets value to current local storage value
// 	const store = writable(data, () => {
// 	  const unsubscribe = store.subscribe(value => {
// 		localStorage.setItem(key, JSON.stringify(value))
// 	  })
// 	  return unsubscribe
// 	})
// 	return store
//   } 


// export const totalBolus = derived(
// 	MahlzeitenStore,
// 	($MahlzeitenStore) => {
// 		let kohlenhydrate = 0
// 		$MahlzeitenStore.forEach(e => kohlenhydrate = kohlenhydrate+e.kohlenhydrate)
// 		return kohlenhydrate
// 	}
// );


