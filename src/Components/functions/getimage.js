const image_array = ["pepe.jpg", "pepe2.jpg"];
let selected_image;

function get_random_image() {
  let random_index = Math.floor(Math.random() * image_array.length);

  selected_image = image_array[random_index];

  return `images/${selected_image}`;
}

export default get_random_image;
