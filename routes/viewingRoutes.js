const express = require("express");

const {
  createViewing,
  getMyViewings,
  getAllViewings,
  updateViewing,
} = require("../controllers/viewingController");

const { protect } = require("../middleware/auth");
const authorize = require("../middleware/roles");

const router = express.Router();

const staffRoles = ["agent", "property_manager", "admin", "super_admin"];

router.get("/me", protect, authorize("customer"), getMyViewings);

router.post("/properties/:id", protect, authorize("customer"), createViewing);

router.get("/", protect, authorize(...staffRoles), getAllViewings);

router.patch("/:id", protect, authorize(...staffRoles), updateViewing);

module.exports = router;
