import Monk from 'monk'

const db = Monk('mongodb://tylergarlick:orange5@ds044709.mlab.com:44709/order-management')

const products = db.get('products')
const orders = db.get('orders')
const orderItems = db.get('order-items')


export default {
  products,
  orders,
  orderItems
}
