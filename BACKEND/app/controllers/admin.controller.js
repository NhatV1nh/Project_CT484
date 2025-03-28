const Admin = require("../models/Admin.model");
const APIError = require("../api-error");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "mysecretkey";
exports.signUp = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().max(255).required(),
      username: Joi.string().max(255).required(),
      password: Joi.string()
        .min(6)
        .pattern(new RegExp("^(?=.*[a-zA-Z]).+$"))
        .required(),
    });

    // Validate dữ liệu đầu vào với schema
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: "Dữ liệu có lỗi! Vui lòng kiểm tra lại dữ liệu của bạn!",
      });
    }

    const admin = new Admin(req.body);
    await admin.save();
    // res.json(req.body);
    res.json("Đăng ký thành công");
  } catch (err) {
    console.error(err);
    return next(new APIError(500, "Đã có lỗi xảy ra khi đăng ký"));
  }
};

exports.signIn = async (req, res, next) => {
  try {
    // Định nghĩa schema validation cho dữ liệu đầu vào (username và password)
    const schema = Joi.object({
      username: Joi.string().max(255).required(),
      password: Joi.string().min(6).required(),
    });

    // Validate dữ liệu đầu vào với schema
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
      });
    }

    const { username, password } = req.body;

    // Tìm admin theo username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: "Username không chính xác." });
    }

    // Kiểm tra mật khẩu bằng bcrypt
    const isMatch = await bcrypt.compare(password, admin.password);

    if (isMatch) {
      // Nếu mật khẩu khớp, tạo mã thông báo (token) và gửi phản hồi thành công
      const token = jwt.sign({ adminId: admin._id }, jwtSecret, {
        expiresIn: "24h",
      });

      return res
        .status(200)
        .json({ message: "Đăng nhập thành công", token: token });
    } else {
      // Nếu mật khẩu không khớp, gửi phản hồi lỗi
      return res.status(401).json({ error: "Mật khẩu không chính xác." });
    }
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xãy ra khi đăng nhập"));
  }
};

exports.signOut = (req, res) => {
  res.status(200).json({ message: "Đăng xuất thành công" });
};