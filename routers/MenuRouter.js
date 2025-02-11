const express = require("express");
const router = express.Router();

const MenuItem = require("./../modules/MenuItem");

router.post("/menu", async (req, res) => {
    try {
      const newMenuItem = new MenuItem(req.body);
      const savedMenuItem = await newMenuItem.save(); // ✅ Await the save() method
      console.log("Data saved");
      res.status(200).json(savedMenuItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.get("/menu", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get("/menu/:test", async (req, resp) => {
    try {
      const test = req.params.test;
      if (test == "sweet" || test == "spicy" || test == "sour") {
        const response = await MenuItem.find({ test: test });
        resp.status(200).json(response);
      } else {
        resp.status(404).json({ error: "Invalid work type" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.put('/menu/:id', async (req, resp) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;
        const response = await MenuItem.findByIdAndUpdate(personId, updateData, {
            new: true,
            runValidators: true
        });
        if (!response) {
            return resp.status(404).json({ error: 'Menu Not find' })
        }

        resp.status(200).json(response);
    } catch (error) {
        resp.status(400).json({ error: error.message });
      }
})
    
router.delete('/menu/:id', async (req, resp) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;
        const response = await MenuItem.findByIdAndDelete(personId);
        if (!response) {
            return resp.status(404).json({ error: 'Menu Not find' })
        }
        resp.status(200).json({message : 'Record deleted'});
    } catch (error) {
        resp.status(400).json({ error: error.message });
      }
    })

  
  module.exports = router