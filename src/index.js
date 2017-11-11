import Db from './db'


const run = async () => {

  const yeti = await Db.products.findOne(`5a073a24ef0d9c0a26c10f34`)
  yeti.name = 'Snowman Yeti'

  const results = await Db.products.findOneAndUpdate(`5a073a24ef0d9c0a26c10f34`, yeti)

  console.log(results)

  // const insertResults = await Db.products.insert({ name: 'Yeti', price: 9.99 })
  // console.log(insertResults)
  //
  // // console.log((await Db.products.find('5a03be3caf136770825e7955')))
  //
  // console.log(results)


}


run()
