import { Router } from 'express';

var router = Router();

router.get('/add/:id', (req, res, next) => {
        const itemId = req.params.id;
        cartRepository.addToCart(itemId);
});

export default router;
