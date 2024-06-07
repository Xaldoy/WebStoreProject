const cartRepository = [
        addToCart = (id) => {
                const item = data.categories.flatMap(category => category.products).find(x => x.id === id);
                if (item) {
                        cartData.push(item);
                }
        }
];

module.exports(cartRepository);