
const orders = [
  { id: 1, customer: "Alice", items: ["laptop", "mouse"], total: 1200, status: "pending" },
  { id: 2, customer: "Bob", items: ["phone"], total: 800, status: "completed" },
  { id: 3, customer: "Charlie", items: ["keyboard", "mouse"], total: 150, status: "pending" },
  { id: 4, customer: "David", items: ["monitor"], total: 100, status: "completed" },
  { id: 5, customer: "Eve", items: ["tablet", "mouse"], total: 400, status: "pending" },
];

//1
orders.push({ id: 6, customer: "Frank", items: ["headphones"], total: 250, status: "pending" })
console.log(orders)
//2
const updatedOrders = orders.filter(order => order.id !== 3)
console.log(updatedOrders)
//3
console.log(updatedOrders.length)
//4
const firstCompletedOrder = updatedOrders.find(order => order.status === "completed")
console.log(firstCompletedOrder)
//5
const pendingOrders = updatedOrders.filter(order => order.status === "pending")
console.log(pendingOrders)
//6
const mouseBuyers =  updatedOrders.filter(order => order.items.includes("mouse")).map(order => order.customer)
console.log(mouseBuyers)    
//7
const totalSales = updatedOrders.reduce((sum, order) => sum + order.total, 0)
console.log(totalSales)
//8
const allCompleted = updatedOrders.every(order => order.status === "completed")
console.log(allCompleted)
//9
const ordeerSummaries = updatedOrders.map(order => `${order.customer} ordered ${order.items.length} item ($${order.total})`)
console.log(ordeerSummaries)
//10
const sortedByTotal = [...updatedOrders].sort((a, b) => b.total - a.total)
console.log(sortedByTotal)
//11
const customerNames = updatedOrders.map(order => order.customer).join(", ")
console.log(customerNames)
//12
const refundedOrders = updatedOrders.filter(order => order.total < 200)
refundedOrders.forEach(order => {
  console.log(`Order ${order.id} for ${order.customer} has been refunded.`)
})  