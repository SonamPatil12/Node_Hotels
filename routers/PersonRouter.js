const express = require("express");
const router = express.Router();
const Person = require("./../modules/Person");

router.post("/person", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save(); // ✅ Await the save() method
    console.log("Data saved");
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/person/:workType", async (req, resp) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      resp.status(200).json(response);
    } else {
      resp.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/person/:id', async (req, resp) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updateData, {
            new: true,
            runValidators: true
        });
        if (!response) {
            return resp.status(404).json({ error: 'Person Not find' })
        }

        resp.status(200).json(response);
    } catch (error) {
        resp.status(400).json({ error: error.message });
      }
})
    
router.delete('/person/:id', async (req, resp) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return resp.status(404).json({ error: 'Person Not find' })
        }
        resp.status(200).json({message : 'Record deleted'});
    } catch (error) {
        resp.status(400).json({ error: error.message });
      }
    })

module.exports = router;
