import React from "react"
import { Icon } from "bloomer"

const SocialIcons = () => {
  
  const data = [
    {
      // Icon color #ff0000
      "url":"https://www.google.com",
      "icon": "fab fa-youtube youtube fa-2x",
      "name": "youtube-social-icon"
    },
    {
      // Icon color #3b5998
      "url":"https://www.google.com",
      "icon":"fab fa-facebook facebook fa-2x",
      "name": "facebook-social-icon"
    },
    {
      // Icon color #b31217
      "url":"https://www.google.com",
      "icon":"fab fa-pinterest pinterest fa-2x",
      "name": "pinterest-social-icon"
    },
    {
      // Icon color #f10176
      "url":"https://www.google.com",
      "icon":"fab fa-instagram instagram fa-2x",
      "name": "instagram-social-icon"
    },
    {
      // Icon color #55acee
      "url":"https://www.google.com",
      "icon":"fab fa-twitter twitter fa-2x",
      "name": "twitter-social-icon",
    },
  ];
  
  const icons = data.map(function(d, idx){
    return (
      <a
        name={d.name}
        className="icon-row" 
        href={d.url} 
        key={idx}
      >
        <Icon className={d.icon}/>
      </a>
    )}
  );

  return (
    <div className={"icon-container"}>
      {icons}
    </div>
  ) 
}

export default SocialIcons
