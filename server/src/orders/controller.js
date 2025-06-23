import Order from "./models.js";

const createAOrder = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newOrder = await Order(data);
    const savedOrder = await newOrder.save();
    // if (!savedOrder) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Unable to create order" });
    // }
    res.status(201).json({
      success: true,
      message: "Order Book Successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email)
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    if(!orders) {
      return res.status(404).json({ success: false, message: "Orders not found" })
  }
  res.status(200).json({
    // success: true,
    // message: "Order fetch Successfully",
    orders: orders,
  });
  } catch (error) {
    console.error("Error fetching order", error);
    res.status(500).json({ success: false, message: "Failed to fetch order" });
  }
};

export { createAOrder, getOrderByEmail };
