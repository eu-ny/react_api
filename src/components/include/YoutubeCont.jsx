// import React from "react";

// const YoutubeItem = ({ youtube }) => {
//     return (
//         <li>
//             <img src={youtube.snippet.thumbnails.medium.url} alt="" />
//         </li>
//     );
// };

// const YoutubeCont = ({ youtube }) => {
//     return (
//         <section className="youtube__cont">
//             <div className="container">
//                 <div className="youtube__inner">
//                     <ul>
//                         {youtube.map((youtube, index) => (
//                             <YoutubeItem key={index} video={youtube} />
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default YoutubeCont;

import React from 'react'

const YoutubeItem = (props) => {
  return (
    <li>
      <img src={props.youtube.snippet.thumbnails.medium.url} alt="" />
      <h2>{props.youtube.snippet.title}</h2>
    </li>
  )
}

const YoutubeCont = (props) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {props.youtube.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default YoutubeCont
