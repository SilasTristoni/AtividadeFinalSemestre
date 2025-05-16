const Products = require('../models/products');

class ProductsControllers {
    static async createProduct(req, res) {
        try {
            const { name, price, categoryId } = req.body;

            if (!name || !price || !categoryId) {
                return res.status(400).json({ message: 'Name, price and categoryId are required' });
            }

            const product = await Products.create({
                name,
                price,
                categoryId
            });
            return res.status(201).json(product);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro ao criar tarefa', error: err.message });
        }
    }
    static async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { name, price, categoryId } = req.body;
            const product = await Products.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            product.name = name;
            product.price = price;
            product.categoryId = categoryId;
            await product.save();
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({ message: 'Error updating product', error: err.message });
        }
    }
    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await Products.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            await product.destroy();
            return res.status(204).send();
        }
        catch (err) {
            return res.status(500).json({ message: 'Error deleting product', error: err.message });
        }
    }
    static async findAllProducts(req, res) {
        try {
            const products = await Products.findAll();
            return res.status(200).json(products);
        }
        catch (err) {
            return res.status(500).json({ message: 'Error fetching products', error: err.message });
        }
    }
    static async findProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await Products.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({ message: 'Error fetching product', error: err.message });
        }
    }
    static async findProductsByCategoryId(req, res) {
        try {
            const { id } = req.params;
            const products = await Products.findAll({ where: { categoryId: id } });
            if (!products) {
                return res.status(404).json({ message: 'No products found for this category' });
            }
            return res.status(200).json(products);
        }
        catch (err) {
            return res.status(500).json({ message: 'Error fetching products by category', error: err.message });
        }
    }
    static async findProductsByOrderId(req, res) {
        try {
            const { id } = req.params;
            const products = await Products.findAll({ where: { orderId: id } });
            if (!products) {
                return res.status(404).json({ message: 'No products found for this order' });
            }
            return res.status(200).json(products);
        }
        catch (err) {
            return res.status(500).json({ message: 'Error fetching products by order', error: err.message });
        }
    }
}
module.exports = ProductsControllers;
    
