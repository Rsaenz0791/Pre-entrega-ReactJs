import Badge from 'react-bootstrap/Badge';

import cart from './assets/cart.png';

const styles = {
    img: {
        height: 30
    }
}

export const CartWidget = () => {
    return (
        <Badge bg="dark">
        <img src={cart} alt="Imagen de un carrito de compras" style={styles.img} />
        <span>0</span>
        </Badge>

    )
}