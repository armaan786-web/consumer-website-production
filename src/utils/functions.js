import axios from "../axios";

export const uploadImage = async (file) => {
  var formData = new FormData();
  formData.append("media", file);
  try {
    const { data } = await axios.post("/auth/uploadImage", formData);
    console.log(data);

    return data;
  } catch (error) { }
};



export const extractDateForDOB = (e) => {
  if (e) {
    let extractDate = new Date(e).getDate() + "/" + new Date(e).getMonth() + "/" + new Date(e).getFullYear();
    return extractDate;
  } else {
    return "";
  }
}


export const extractDate = (e) => {
  if(e) {
      let date = new Date(e).toLocaleDateString()
      return date;
  } else {
      return "";
  }
}  