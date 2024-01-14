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
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.crossOrigin = 'Anonymous';
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

const imageUrl = 'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/418217390_1188100345908649_3496970687857150471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG8PDNSXRg2jGOqD-RMLGOE6bb9yizatz7ptv3KLNq3PgLtpqHpYLwJol9HQ07VIzlqD38XRI1dZqr6zEXwWHX6&_nc_ohc=jALLw4Zx_00AX-p5kPT&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC12oZAMwYg0OZlznPulBo-_wRIEx8Ih4lU19-7MdKRLg&oe=65A900BF';
getBase64FromImage(imageUrl)
    .then(base64Data => {
        console.log(base64Data); // Base64 data of the image
    })
    .catch(error => {
        console.error(error);
    });