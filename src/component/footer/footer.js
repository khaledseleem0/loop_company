import { Footers, SocialiIcon, Copyright } from "./footers";
export default function Footer(){
  const icons = [
    "./images/icon-facebook.svg",
    "./images/icon-instagram.svg",
    "./images/icon-pinterest.svg",
    "./images/icon-twitter.svg"
];


    return (
      <>
        <Footers>
          <SocialiIcon>{icons.map((icon, index) => {
      return (
        <span key={index}>
          <img src={icon} alt={icon} />
        </span>
      );
    })}</SocialiIcon>
          <Copyright>
            <a href="/support">support</a>
            <span>all right reseved to loop studio &copy; 2021</span>
          </Copyright>
        </Footers>
        <div className="cpd">
        Created By Nights Of Crying And{" "}
        <a
          href="http://github.com/khaledseleem0"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            window.open("https://twitter.com/Khaled70834970");
          }}
        >
          @Khalid
          🚀🐦
        </a>
      </div>

      </>
    );
  
}
