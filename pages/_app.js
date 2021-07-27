import React, {useEffect, useState} from 'react';
import '../assets/scss/globals.scss'
import "../assets/scss/index.scss";
import "../assets/scss/MainNav.scss";
import "../assets/scss/ServiceCard.scss";
import "../assets/scss/contact.scss";
import "../assets/scss/services.scss";
import "./_app.scss";

import MainNav from "../components/MainNav";

function MyApp({ Component, pageProps }) {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();

  useEffect(() => {
    setCanvas(document.getElementById("canvas"));
  });
  useEffect(() => {
    if(!canvas) return;
    setCtx(canvas.getContext("2d"));
  }, [canvas]);

  return (
    <div>
      <canvas id="canvas"></canvas>
      {
        !ctx ? 
        null :
        <React.Fragment>
          <MainNav ctx={ctx} />
          <Component {...pageProps} />
        </React.Fragment> 
      }
    </div>
  )
}

export default MyApp
