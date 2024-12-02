export const getDataStructure = (cloudinaryResponse: { resources: [] }) => {
  const allCloudinaryData = cloudinaryResponse.resources;
  const portfolioData: any = {};

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

  // Helper function to recursively sort portfolioData
  const sortPortfolioData = (data: any): any => {
    const sortedData: any = {};

    // Sort keys of the current level of the object
    const sortedKeys = Object.keys(data).sort();

    sortedKeys.forEach((key) => {
      if (key === "pictures") {
        // Sort pictures array by fileName
        sortedData[key] = data[key].sort((a: any, b: any) => a.fileName.localeCompare(b.fileName));
      } else {
        // Recurse into subfolders
        sortedData[key] = sortPortfolioData(data[key]);
      }
    });

    return sortedData;
  };

  allCloudinaryData.forEach((item: DataObject) => {
    const { public_id, context, url, folder, width, height } = item;

    const fileName = public_id.split("/").pop();
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

    let folders = folder.split("/").map((item) => item.toLowerCase());
    folders.splice(0, 1); // Remove unnecessary folders

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

  // Sort the portfolioData object
  return sortPortfolioData(portfolioData);
};
