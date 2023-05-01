import React from "react";
import useFetch from "../useFetch";
import loaderIcon from "../assets/images/loader.gif";

const Home = () => {
  //
  const {
    data: products,
    pending,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  //
  return (
    <div className="products--row" style={{ position: "relative" }}>
      {/* Loading state code block */}
      {pending && (
        <img
          className="loader--icon"
          src={loaderIcon}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      )}
      {/* Error code block */}
      {error && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          {error}
        </div>
      )}
      {/* Products code block */}
      {products &&
        products.map((product) => (
          <div className="product--card" key={product.id}>
            <div className="product--image" style={{ marginBottom: "8px" }}>
              <img src={product.image} alt="" className="product--img" />
            </div>
            <div className="card--context">
              <div
                className="product--price"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                ${product.price}
              </div>
              <div
                className="product--title"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                {product.title}
              </div>
              <div
                className="ratesAndBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",
                  justifyContent: "space-between",
                }}
              >
                {/* rateings */}
                <div
                  className="rate"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="product--rate--star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>

                  <div>{product.rating.rate}</div>
                </div>
                <button className="add--cart--btn">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
