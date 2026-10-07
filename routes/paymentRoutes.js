const express = require("express");

const {
  createPaymentRecord,
  getMyPayments,
  getAllPayments,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/auth");
const authorize = require("../middleware/roles");

const router = express.Router();

router.get("/me", protect, authorize("customer"), getMyPayments);

router.post("/", protect, authorize("customer"), createPaymentRecord);

router.get(
  "/",
  protect,
  authorize("property_manager", "admin", "super_admin"),
  getAllPayments
);

module.exports = router;
