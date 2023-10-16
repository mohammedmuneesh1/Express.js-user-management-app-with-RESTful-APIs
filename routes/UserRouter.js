const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/",controller.getAllUsers)
router.post("/",controller.createUser);
router.get("/:id",controller.getUserById)
router.put('/:id',controller.updateUser)
router.delete("/:id",controller.deleteUser)


// router.post("/",con)


module.exports = router 
