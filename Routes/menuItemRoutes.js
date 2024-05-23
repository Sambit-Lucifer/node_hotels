const express = require('express');
const router = express.Router();
const MenuItem = require("../models/MenuIem");

// POST method to menuItems.

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);

        const response = await newMenu.save();
        console.log("Data Saved...!");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET method to get the Menu tems
router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/:taste", async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'sour' || taste == 'spicy') {
            const response = await MenuItem.find({ taste: taste });
            console.log("response fetched");
            res.status(200).json(response);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedmenuData = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId, updatedmenuData, {
            new: true,
            runValidators: true,
        })
        if (!response) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(menuId);

        if (!response) {
            return res.status(404).json({ error: 'menuItem not found' })
        }
        console.log('data deleted !');
        res.status(200).json({ message: 'person Deleted Successfully' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;