// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//     var dataURL = canvas.toDataURL("image/png");
//     return dataURL.replace(/^data:image\/?[A-z]*;base64,/);
// }

// var base64 = getBase64Image(document.getElementById("imageid"));

function getBase64FromImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.crossOrigin = "Anonymous";
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(function (blob) {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(blob);
      });
    };

    img.onerror = function (error) {
      reject(error);
    };

    img.src = imageUrl;
  });
}

const imageUrl =
  "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/420162527_1193601862025164_5333133678617864039_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEG4uqQe0WCKrZF8GC54pou5kNKKMX0DurmQ0ooxfQO6oQ9HK3RTe0q1iJKlhqPNp9FV652Sxe6Vq4LAqZx1YLb&_nc_ohc=_Jd2y6yysc4AX9Rl9OT&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCtSJA6EEqu5ZsYC0kcTLnzcJYxZorBdaZ7YN6MP0YmwQ&oe=65AEF0DB";
getBase64FromImage(imageUrl)
  .then((base64Data) => {
    console.log(base64Data); // Base64 data of the image
  })
  .catch((error) => {
    console.error(error);
  });
