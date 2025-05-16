const Orders = require('../models/orders');

class OrdersControllers {
    static async findAllOrders(req, res) {
        try {
            const orders = await Orders.findAll();
            return res.status(200).json(orders);
        } catch (err) {
            return res.status(500).json({ message: 'Error fetching orders', error: err.message });
        }
    }
    
    static async findOrderById(req, res) {
        try {
            const { id } = req.params;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json({ message: 'Error fetching order', error: err.message });
        }
    }
    static async createOrder(req, res) {
        try {
            const { userId, products } = req.body;
            const newOrder = await Orders.create({ userId, products });
            return res.status(201).json(newOrder);
        } catch (err) {
            return res.status(500).json({ message: 'Error creating order', error: err.message });
        }
    }
    static async updateOrder(req, res) {
        try {
            const { id } = req.params;
            const { userId, products } = req.body;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            order.userId = userId;
            order.products = products;
            await order.save();
            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json({ message: 'Error updating order', error: err.message });
        }
    }
    static async deleteOrder(req, res) {
        try {
            const { id } = req.params;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            await order.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: 'Error deleting order', error: err.message });
        }
    }
    static async findOrdersByUserId(req, res) {
        try {
            const { id } = req.params;
            const orders = await Orders.findAll({ where: { userId: id } });
            if (orders.length === 0) {
                return res.status(404).json({ message: 'No orders found for this user' });
            }
            return res.status(200).json(orders);
        } catch (err) {
            return res.status(500).json({ message: 'Error fetching orders', error: err.message });
        }
    }
}
module.exports = OrdersControllers;