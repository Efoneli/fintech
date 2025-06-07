// 3. Debounced Search Input (JS + React)
// Prompt:
// Create a search input that only triggers the onSearch function 500ms after user stops typing.


// Hints:

// Use useEffect, useState, setTimeout, and clearTimeout



// 'use client'
// import { useState, useEffect } from "react";
import { is } from './../../.next/server/chunks/240';

// const DebouncedSearch: React.FC = () => {
//     const [input, setInput] = useState('')
//     const [searchQuery, setSearchQuery] = useState('')

//     useEffect(() => {
//         const timeout = setTimeout(() => setSearchQuery(input), 500);
//         return () => clearTimeout(timeout)
//     }, [input])

//     return(
//         <div>
//             <input onChange={e => setInput(e.target.value)} value={input} />
//             <p>Searching for: {searchQuery} </p>
//         </div>
//     )
// }

// export default DebouncedSearch;


//debounce
// interface Client {
//     id: number;
//     name: string;
//     email: string;
// }

// const clients: Client[] = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
//   { id: 4, name: "Alice Dup", email: "alice@example.com" },
//   { id: 5, name: "Bob Dup", email: "bob@example.com" },
// ];


// const uniqueClients = clients.filter((client => {
//   const seen = new Set<string>();
//   return client => {
//     if (seen.has(client.email)) return false;
//     seen.add(client.email);
//     return true;
//   };
// })());

// console.log(uniqueClients, 'herrreee');


//flatten and array
// function flatten(arr: any[]): any[] {
//     return arr.reduce(
//         (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val ),
//         []
//     )
// }

// console.log(flatten([1, [2, [3, 4]], 5]))




// 5. Find Unique Values in Two Arrays

// function unique(a: number[], b: number[]): number[] {
//     const aSet = new Set(a)
//     const bSet = new Set(b)

//     return [...a.filter(x => !bSet.has(x)), ...b.filter(x => !aSet.has(x))]
// }

// console.log(unique([1,2,3], [2,3,4]))



function isPalindrome(str: string): boolean {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return clean === clean.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))