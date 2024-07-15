let bookCart = []

const Add_To_Cart = 'addToCart'
const Remove_From_Cart = 'removeFromCart'
const View_Cart = 'viewCart'

function viewCart() {
    console.log('Current Cart of Books', bookCart)
}

function performCartActions(action, newBook) {
    switch (action) {
        case Add_To_Cart:
            bookCart.push(newBook)
            break;
        case Remove_From_Cart:
            if (bookCart.length === 0) {
                console.log('Cart is empty, there is no books to remove.')
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case View_Cart:
            viewCart()
            break;

        default:
            console.log('Invalid. Please choose an action')
            break;
    }
}

performCartActions(Add_To_Cart, 'El monje que vendio su ferrari')
performCartActions(View_Cart)