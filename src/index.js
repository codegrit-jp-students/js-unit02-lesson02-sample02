const getUserAvatar = (userId) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    }
    img.onerror = () => {
      reject("Failed")
    }
    img.src = `../images/${userId}.png`;
  });
};

const getDefaultAvatar = () => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    }
    img.onerror = () => {
      reject("Failed")
    }
    img.src = "../images/default.png";
  });
};

const getAvatar = async (userId) => {
  let image;
  try {
    image = await getUserAvatar(userId);
  } catch (e) {
    image = await getDefaultAvatar();
  }
  return image
}

const showAvatar = async (userId) => {
  let result;
  try {
    image = await getAvatar(userId);
    document.body.appendChild(image);
  } catch (e) {
    console.log(e);
  }
}

{
  showAvatar(2);
}
