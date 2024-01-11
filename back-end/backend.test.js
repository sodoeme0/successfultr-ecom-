

const productController = require("./controller/productController")
const Product = require("./models/product");

jest.mock("./models/product", () => ({
  find: jest.fn(),
  findById: jest.fn(),
}));

describe("getAllProducts", () => {
  it("should return all products", async () => {
    const products = [{ name: "Product 1" }, { name: "Product 2" }];
    Product.find.mockResolvedValueOnce(products);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await productController.getAllProducts(req, res);

    expect(res.json).toHaveBeenCalledWith(products);
  });

  it("should return 'No products found' message if no products", async () => {
    Product.find.mockResolvedValueOnce([]);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await productController.getAllProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "No products found" });
  });

 
});

