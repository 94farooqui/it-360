import Asset from "../model/asset.model.js";
import Asset_Category from "../model/assetCategory.model.js";
import Ticket from "../model/ticket.model.js";
import User from "../model/user.model.js";
import Vendor from "../model/vendor.model.js";

export const getDashDetails = async (req, res) => {
  const { username, password } = req.body;
  try {
    const assets = await Asset.find().countDocuments();
    const openTickets = await Ticket.find().countDocuments({ status: "Open" });
    const vendors = await Vendor.find().countDocuments();
    const categories = await Asset_Category.find().countDocuments();
    const users = await User.find().countDocuments();

    return res
      .status(200)
      .json([{ title: "Assets", value: assets },{title:"Open Tickets", value:openTickets},{title:"Vendors", value:vendors},{title:"Categories", value:categories},  {title: "Users", value:users}]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
