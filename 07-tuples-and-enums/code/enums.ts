console.log("============================================================================================")
console.log("                           Enums                                                            ")
console.log("============================================================================================")


// Basic enum definition
// By default, enum values correspond to an integer decided by their position in the definition
enum OrderStatus {
    ACCEPTED, REJECTED, DELIVERED
}
let my_status: OrderStatus = OrderStatus.DELIVERED;
console.assert(OrderStatus.DELIVERED === 2);


// We can assign explicit numeric literal values to the enum
// this will update the ordering of the elements after it
enum AccountStatus {
    CREATED, SUSPENDED=20, ACTIVE, DELETED
}
console.assert(AccountStatus.ACTIVE === 21)

// We can also assign String values
// If one enum value is assigned a String value, the next element MUST be assigned a String or numeric value
// Implicit numeric value assignment recommences if an explicit numeric value is assigned
enum GameStatus {
    AWAITING, STARTED, HALF_TIME="45", FULL_TIME=90, CALLED_OFF
}
console.assert(GameStatus.HALF_TIME === "45");
console.assert(GameStatus.CALLED_OFF === 91);