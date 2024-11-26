export const getDataStructure = (cloudinaryResponse: { resources: [] }) => {
  const allCloudinaryData = cloudinaryResponse.resources;
  const portfolioData = {};

  // Typescript interface

  interface DataObject {
    public_id: string;
    context: {
      custom: {
        alt: string;
        caption: string;
        index: string;
      };
    };
    url: string;
    folder: string;
    width: number;
    height: number;
  }

  allCloudinaryData.forEach((item: DataObject) => {
    // Destructur object and create variables from cloudinary data

    const { public_id, context, url, folder, width, height } = item;

    // Extract the file name from public_id

    const fileName = public_id.split("/").pop();

    // Extract metadata if available

    let description = "";
    let heading = "";
    let indexNumber = "";

    if (item.context) {
      const metadata = item.context.custom;
      const { alt, caption, index } = metadata;
      description = alt;
      heading = caption;
      indexNumber = index;
    }

    // Extract the folders hierarchy

    let folders = folder.split("/");

    // Lowercase folders name
    folders = folders.map((item) => item.toLowerCase());

    // Remove immagina and portfolio
    folders.splice(0, 1);

    // Push all the data inside "portfolioData"

    let currentLevel: any = portfolioData;

    folders.forEach((folderName: string, index: number) => {
      currentLevel[folderName] = currentLevel[folderName] || {};

      if (index === folders.length - 1) {
        currentLevel[folderName].pictures = currentLevel[folderName].pictures || [];
        currentLevel[folderName].pictures.push({
          indexNumber,
          fileName,
          url,
          heading,
          description,
          public_id,
          width,
          height,
        });
      }
      currentLevel = currentLevel[folderName];
    });
  });

  return portfolioData;
};
