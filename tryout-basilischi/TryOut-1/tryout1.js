if (process.argv.length < 3) {

 console.log('Usage: node ' + process.argv[1] + ' FILENAME');

 process.exit(1);

}

// Read the file and print its contents.

var fs = require('fs')

 , filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, str) {

 if (err) throw err;
  
    var adjustedStr = str.replace(/\n|\t|\s\s+/g, ' ');
    return adjustedStr.split(' ').reduce(function(count, word) {
      count[word] = (count[word] || 0) + 1;
});
      
console.log(" jumlah kata = "+ word(data)  );
console.log(" jumlah kata yang unik= "  );
console.log(" jumlah angka 8 = "  );
console.log(" jumlah semua angka = "  );
      return count;
  
  
 
});