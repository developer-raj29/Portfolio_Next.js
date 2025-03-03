import { NextResponse, NextRequest } from "next/server";
import SocialModel from "../../../lib/models/SocialModel";

import connectDB from "@/lib/config/db";

import { UploadImage } from "@/lib/config/upload-image";
const cloudinary = require("next-cloudinary").v2;

connectDB();
// const loadDB = async () => {
//   await connectDB();
// };

// loadDB();

// function isFileTypeSupported(type, supportedTypes) {
//   return supportedTypes.includes(type);
// }

// async function uploadFileToCloudinary(file, folder, quality) {
//   const options = { folder };

//   if (quality) {
//     options.quality = quality;
//   }

//   options.resource_type = "auto";

//   return await cloudinary.uploader
//     .upload(file, options)
//     .then((result) => {
//       console.log("Upload successful", result);
//       return result;
//     })
//     .catch((error) => {
//       console.error("Cloudinary upload error: ", error);
//       throw new Error(error);
//     });
// }

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const socialMedia = await SocialModel.find({});

    return NextResponse.json({
      success: true,
      data: socialMedia,
      message: "Social Data GET Method Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Social Data GET Method Failed",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  // // try {
  //   const { name, path } = params;

  //   const socialMedia = await SocialModel.find({});

  //   let id;

  //   if (socialMedia.length > 0) {
  //     let last_product_array = socialMedia.slice(-1);
  //     let last_product = last_product_array[0];
  //     id = last_product.id + 1;
  //   } else {
  //     id = 1;
  //   }

  //   if (!name || !path) {
  //     return NextResponse.json({
  //       success: false,
  //       message: "All fields are required",
  //     });
  //   }

  //   // image Url on cloud is pending.
  //   let file = req.files.imageURL;

  //   console.log("File : ", file);

  //   // validation supported extensions
  //   const supportedTypes = ["jpg", "jpeg", "png"];

  //   const fileType = file.name.split(".")[1].toLowerCase();

  //   console.log("File Type : ", fileType);

  //   if (!isFileTypeSupported(fileType, supportedTypes)) {
  //     return NextResponse.json({
  //       success: false,
  //       message: "File Formate or type not supported",
  //     });
  //   }

  //   // file format is supported
  //   console.log("uploading to folder");

  //   // cloudinary.uploader.upload(file.tempFilepath, "Folder");
  //   const response = await uploadFileToCloudinary(file, "Portfolio", "auto");

  //   console.log(response);

  //   const social = await SocialModel.create({
  //     id: id,
  //     name,
  //     path,
  //     imageURL: response.secure_url,
  //   });

  //   console.log(social);

  //   social.save();

  const fromData = await req.formData();

  const image = fromData.get("image") as unknown as File;

  const data:any = await UploadImage(image, "Portfolio-dev");

  return NextResponse.json(
    {
      success: true,
      message: "Social Data POST Method Successfully",
      data: data,
    },
    { status: 200 }
  );
  // } catch (error) {
  //   return NextResponse.json({
  //     success: false,
  //     message: "Social Data POST Method Failed",
  //   });
  // }
}

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Social Data PUT Method Failed",
    });
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    const id = await req.json();

    await SocialModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Social Data DELET Method Failed",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Social Data DELETE Method Failed",
    });
  }
};
