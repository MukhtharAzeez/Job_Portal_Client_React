import axios from 'axios'

export const uploadImage = async (image:any) => {
  const formData = new FormData();
  formData.append("file", image);
    formData.append('upload_preset', 'fetovrfe');
    const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
  return data?.secure_url;
};