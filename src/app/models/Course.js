const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, required: true, maxLength: 1000 },
  img: { type: String, maxLength: 255 },
  videoID: { type: String, required: true, maxLength: 255 },
  level: { type: String, required: true, maxLength: 255 },
  slug: { type: String, unique: true },
}, {
  timestamps: true,
});

// Middleware: tự tạo slug trước khi lưu
CourseSchema.pre('save', async function (next) {
  if (!this.slug) {
    let baseSlug = slugify(this.name, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    // Lặp cho đến khi tìm được slug chưa tồn tại
    while (await mongoose.models.Course.findOne({ slug })) {
      slug = `${baseSlug}-${count+2}`;
    }

    this.slug = slug;
  }
  next();
});

module.exports = mongoose.model('Course', CourseSchema);
