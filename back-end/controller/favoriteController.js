const Favorite = require("../models/favorite");
const Product = require("../models/product");

exports.getAllFavorites = async (req, res) => {
  const { email } = req.params;
  console.log(email)
  try {
    let favs = await Favorite.find({ email }).populate("product").exec();
    console.log(favs)

    if (!favs.length) {
      return res.status(400).json({ message: "No products found" });
    }

    return res.json(favs);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


exports.addFavorite = async (req, res) => {
  const {email, id} = req.body

  const product = await Product.findById(id);
  console.log(req.body)
  if (!product) {
    return res.status(400).json({ message: "product does not exist" });
  }
  const fav = await Favorite.findOne({email, product: id});
  if (fav) {
    return res.status(400).json({ message: "duplicate" });
  }
  const result = Favorite.create({email, product: product.id });

  if (!result) {
    return res.status(400).json({ message: "failed to add to favs" });
  }
  res.status(201).json({ message: `Succesfully added to favs` });
};

exports.removeFavorite = async (req, res) => {
  const {email, id} = req.body
  console.log(req.body)
  const fav = await Favorite.findOne({email, product: id});
  console.log(fav)
  if (!fav) {
    return res.status(400).json({ message: "not in favs" });
  }
  const result = await fav.deleteOne();

  if (!result) {
    return res.status(400).json({ message: "failed to remove from favs" });
  }

  res.status(201).json({ message: `Succesfully removed from favs` });
};
