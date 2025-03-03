// import cloudinary from "./cloudinary";

const cloudinary = require("next-cloudinary").v2;

export const UploadImage = async (file: File, folder: string) => {
  const buffer = await file.arrayBuffer();

  const bytes = Buffer.from(buffer);

  return new Promise(async (resolve, rejects) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        async (error: any, result: any) => {
          if (error) {
            return rejects(error.message);
          }
          return resolve(result);
        }
      )
      .end(bytes);
  });
};
