export async function uploadToImgBB(file) {
  if (!file) {
    throw new Error("No file selected");
  }

  const formData = new FormData();
  formData.append("image", file);

  let url = `https://api.imgbb.com/1/upload?key=a6c948ab64f7987bbf9e5477cde3a1cb`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        url: data.data.url,
        deleteUrl: data.data.delete_url,
        thumbUrl: data.data.thumb?.url || data.data.medium?.url,
        size: data.data.size,
        width: data.data.width,
        height: data.data.height,
      };
    } else {
      throw new Error(data.error?.message || "Upload failed");
    }
  } catch (error) {
    return {
      message: "Not Updeat Your Images",
      success: false,
      error: error.message,
    };
  }
}
