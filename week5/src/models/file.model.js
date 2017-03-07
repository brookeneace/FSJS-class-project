// Load mongoose package
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  filename: String,
  title: String,
  updated_at: { type: Date, default: Date.now },
});

const File = mongoose.model('File', FileSchema);

module.exports = File

File.count({}, function(err, count) {
  if (err) {
    throw err;
  }
<<<<<<< HEAD
  // ...
  if (count > 0) return ;
=======
  
  if (count > 0) return;
  
  const files = require('./file.seed.json');
  File.create(files, function(err, newFiles) {
    if (err) {
      throw err;
    }
  });
});
>>>>>>> upstream/master

	const files = require('./file.seed.json');
	File.create(files, function(err, newFiles) {
		if (err) {
			throw err;
		}
		console.log("DB seeded")
	});
});