const Category = require("../models/Category.model");
const APIError = require("../api-error");
const Joi = require("joi");

exports.create = async (req, res, next) => {
  try {
    const schema = Joi.object({
      categoryName: Joi.string().max(255).required(),
      categoryDes: Joi.string(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: "Dữ liệu có lỗi! Vui lòng kiểm tra lại dữ liệu của bạn",
      });
    }

    const category = new Category(req.body);
    await category.save();
    res.json("Thêm danh mục thành công");
  } catch (err) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi thêm danh mục"));
  }
};

exports.findAll = async (req, res, next) => {
  try {
    // Sử dụng Mongoose để lấy danh sách category
    const categories = await Category.find();

    // Trả về danh sách category dưới dạng JSON
    res.json(categories);
  } catch (error) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi lấy danh sách danh mục")
    );
  }
};

exports.update = async (req, res, next) => {
  try {
    const categoryId = req.params.id; // Lấy ID danh mục từ tham số đường dẫn

    // Kiểm tra xem có tồn tại danh mục với ID đã cung cấp không
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({
        error: "Danh mục không tồn tại",
      });
    }

    // Kiểm tra và cập nhật các trường dữ liệu của danh mục
    if (req.body.categoryName) {
      existingCategory.categoryName = req.body.categoryName;
    }
    if (req.body.categoryDes) {
      existingCategory.categoryDes = req.body.categoryDes;
    }
    // Lưu danh mục đã cập nhật
    await existingCategory.save();
    res.json("Cập nhật danh mục thành công");
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi cập nhật danh mục"));
  }
};

exports.delete = async (req, res, next) => {
  try {
    const categoryId = req.params.id; // Lấy ID danh mục từ tham số đường dẫn

    // Kiểm tra xem có tồn tại danh mục với ID đã cung cấp không
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({
        error: "Danh mục không tồn tại",
      });
    }

    // Xóa danh mục
    await existingCategory.deleteOne({ _id: categoryId });

    // Trả về thông báo xóa thành công
    res.json("Danh mục đã được xóa thành công");
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi xóa danh mục"));
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const categoryId = req.params.id; // Lấy ID danh mục từ tham số đường dẫn

    // Sử dụng Mongoose để lấy thông tin danh mục bằng ID
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        error: "Danh mục không tồn tại",
      });
    }

    res.json(category);
  } catch (error) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi lấy thông tin danh mục")
    );
  }
};