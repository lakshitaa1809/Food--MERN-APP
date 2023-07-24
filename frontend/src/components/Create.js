import React from "react";
import "./Create.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  // we get the auth slice from the entire state, which(auth slice)
  // is the userInfo and the token
  const { token } = useSelector((state) => state.auth);

  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImage("");
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + image.name;
        formData.append("filename", filename);
        formData.append("image", image);

        await fetch(`https://food-app-8d87.onrender.com/upload/image`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: formData,
        });
      }

      // uploading product
      const res = await fetch(`https://food-app-8d87.onrender.com/product`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        }),
      });

      const food = await res.json();

      navigate(`/food/${food._id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div name="CREATE" className="Create_container">
      <div className="Create_wrapper">
        <h2 className="Create_title">Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className="Create_inputWrapper">
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className="input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="Create_inputWrapper">
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description..."
              className="input"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="Create_inputWrapper">
            <label>Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className="input"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="Create_inputWrapperImage">
            <label htmlFor="image" className="labelFileInput">
              Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              id="image"
              placeholder="Image..."
              className="input"
              onChange={onChangeFile}
              style={{ display: "none" }}
            />
            {image && (
              <p className="Create_imageName">
                {image.name}{" "}
                <AiOutlineCloseCircle
                  onClick={handleCloseImg}
                  className="closeIcon"
                />
              </p>
            )}
          </div>
          <div className="Create_inputWrapper">
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className="input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="Create_inputWrapper">
            <label>Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder="Review..."
              className="input"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="Create_buttonWrapper">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
