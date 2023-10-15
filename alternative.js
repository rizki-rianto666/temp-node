module.exports.items = ['item1', 'item2'] //==> {items:['item1', 'item2']}
//exporting the array and assign it in a property called "items", we can directly make properti since exports is an object
//So it is like we are making property inside exports and the value is anything we assign to it
const person = {
    name: "Rizz"
}

module.exports.seorang = person//==> {seorang:{name:'Rizz}}