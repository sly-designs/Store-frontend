const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, Credentials: true }));

const stripes = require("stripe")("sk_test_51MYutsLjlbwfYKGxWN5mcukXLVt12jNqF8BJMcbI4KDlNuNiJumZSShe8B2Vld4VVtQ8cw5fN7dl1r5x46avqYUE00Eyb9ECXv");

app.post("/checkout", async( req, res, next) => {
    try {
        const session = await stripes.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.product]
                },
                unit_amount: item.price * 100
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html"
        });
        res.status(200).json(session)
    }catch (error) {
        next(error);
    }
});

app.listen(4242, () => console.log('app is running on 4242'));
