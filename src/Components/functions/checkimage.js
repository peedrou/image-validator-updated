function checkImage(current_image_path, addedPoints) {
  let submitted_name = document.getElementById("image-name").value;
  let current_image = current_image_path.slice(
    7,
    current_image_path.indexOf(".")
  );
  console.log(submitted_name);
  console.log(current_image);
  console.log(submitted_name.toLowerCase() === current_image.toLowerCase());

  if (submitted_name.toLowerCase() === current_image.toLowerCase()) {
    if (true === false) {
      addedPoints -= 75;
      document.body.style.animation = "background-change-red 2s forwards";
      return addedPoints;
    } else {
      addedPoints += 50;
      document.body.style.animation = "background-change-green 2s forwards";
      return addedPoints;
    }
  } else {
    addedPoints -= 75;
    document.body.style.animation = "background-change-red 2s forwards";
    return addedPoints;
  }
}

export default checkImage;
