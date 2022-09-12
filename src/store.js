import { writable, readable, derived } from 'svelte/store';





// export  const MahlzeitenStore = writable([
//     { name: "TestName", kohlenhydrate: 11
//     }
// ]);
export  const MahlzeitenStore = writable([]);;


export const totalBolus = derived(
	MahlzeitenStore,
	($MahlzeitenStore) => {
		let kohlenhydrate = 0
		$MahlzeitenStore.forEach(e => kohlenhydrate = kohlenhydrate+e.kohlenhydrate)
		return kohlenhydrate
	}
);

