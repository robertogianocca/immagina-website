export const addCaption = (gallery, source) => {
  // Check if the gallery exists and iterate
  if (gallery && Array.isArray(gallery)) {
    source.forEach((item, index) => {
      if (gallery[index]) {
        gallery[index].heading = item;
        gallery[index].description = item;
      }
    });
  } else {
    console.error("Gallery or images not found");
  }
};
