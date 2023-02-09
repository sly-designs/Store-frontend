const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, Credentials: true }));

const stripes = require("stripe")("sk_test_51MYutsLjlbwfYKGxWN5mcukXLVt12jNqF8BJMcbI4KDlNuNiJumZSShe8B2Vld4VVtQ8cw5fN7dl1r5x46avqYUE00Eyb9ECXv");
