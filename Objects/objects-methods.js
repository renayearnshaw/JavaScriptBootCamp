let restaurant = {
    name: 'Gino\'s',
    capacity: 75,
    seated: 0,
    checkAvailability: function (customers) {
        let available = this.capacity - this.seated
        return customers <= available
    },
    seatParty: function (customers) {
        this.seated += customers
    },
    removeParty: function (customers) {
        this.seated -= customers
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(3)
console.log(restaurant.checkAvailability(5))

