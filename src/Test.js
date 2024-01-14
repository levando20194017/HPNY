import React from "react";
import fireworkVideo from "./assets/videos/firework.mp4";

// Hàm chuyển đổi đường link thành base64
const convertToBase64 = (imageUrl) => {
  // Tạo một Promise để xử lý bất đồng bộ
  return new Promise((resolve, reject) => {
    // Tạo một đối tượng hình ảnh
    const image = new Image();

    // Xử lý khi hình ảnh đã được tải
    image.onload = () => {
      // Tạo một canvas để vẽ hình ảnh
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      // Lấy context 2D của canvas
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      // Chuyển đổi hình ảnh thành base64
      const base64Image = canvas.toDataURL('image/png');

      // Resolve với base64Image
      resolve(base64Image);
    };

    // Xử lý khi hình ảnh không tải được
    image.onerror = () => {
      reject(new Error('Không thể tải hình ảnh.'));
    };

    // Thiết lập đường link hình ảnh
    image.src = imageUrl;
  });
};

// Sử dụng hàm convertToBase64
convertToBase64('https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/241955591_1921609911327664_263385309250914838_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHztS4hNvL8A1Tb_wQf1bf5W2lkIeMkN9tbaWQh4yQ322_35kuwp5C81lvhyJQBqvpuy7al9nnHKYNTyLCQaZEd&_nc_ohc=RIBOjwOUoRkAX85jvQd&_nc_ht=scontent.fhan5-8.fna&oh=00_AfChBtunVTeTRsL3n9qU4gNS68WB0Vl1xf5HN9cnbF25FQ&oe=65A87038')
  .then((base64Image) => {
    console.log(base64Image);
    // Thực hiện các công việc khác với base64Image
  })
  .catch((error) => {
    console.error(error);
  });

const Test = () => {
  return (
    <div>
      <video src={fireworkVideo} autoPlay muted></video>

    </div>
  );
};
export default Test;