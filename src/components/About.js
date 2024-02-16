import React, { useState } from "react";

export default function About() {

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
    border: '1px solid black',
  });
  const [btnText, setBtnText] = useState('Enable Dark Mode')

  const toggleStyle = () => {

    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: '1px solid black',
      })
      setBtnText('Enable Dark Mode')
    }
     else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
      })
      setBtnText('Enable Light Mode');
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3 container">About Us</h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h3>Who We Are?</h3>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              consequatur voluptatibus alias reiciendis corrupti sequi et
              tempora, pariatur voluptates beatae eius quam mollitia neque
              ratione iste exercitationem eaque, voluptatem ipsa. Nulla officia
              dolores excepturi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nobis laudantium eligendi in fuga quos porro.
              Labore voluptate quam nisi fuga eum ad explicabo autem esse
              ratione. Cupiditate quam sit recusandae!
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h3>About This Web</h3>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              sint quidem consectetur nemo beatae quaerat ducimus fugiat,
              impedit, iste voluptatem, accusamus laborum optio culpa. Optio
              praesentium possimus aliquam fugiat odit perferendis ducimus rem
              aperiam? Sequi optio voluptates velit similique quis! Adipisci
              numquam commodi sequi, dolorum neque sunt optio maxime explicabo.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h3>Why Us?</h3>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nam pariatur amet modi recusandae illo omnis natus eius, animi
              similique quisquam, hic tempora. Reprehenderit sit voluptatibus
              aliquam, temporibus voluptatum ab ea illo, numquam aperiam
              perspiciatis, illum cum magnam repellendus.
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={toggleStyle} className=" btn btn-primary my-3">{btnText}</button>
      </div>
    </div>
  );
}
