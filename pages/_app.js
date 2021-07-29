import React, {useEffect, useState} from 'react';
import '../assets/scss/globals.scss'
import "../assets/scss/index.scss";
import "../assets/scss/MainNav.scss";
import "../assets/scss/ServiceCard.scss";
import "../assets/scss/contact.scss";
import "../assets/scss/services.scss";
import "./_app.scss";
import { init, reload, loadImages, setCtxAndCanvas, setClientSize } from "../helpers/CanvasHelper";
import MainNav from "../components/MainNav";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => init());
  
  return (
    <div>
      <canvas id="canvas"></canvas>
      <React.Fragment>
        <MainNav />
        <Component {...pageProps} />
      </React.Fragment> 
    </div>
  )
}

export default MyApp
