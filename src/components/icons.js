import React from "react"
import { Icon } from "bloomer"

const SocialIcons = () => {
  
  const data = [
    {
      // Icon color #ff0000
      "url":"https://www.google.com",
      "icon": "fab fa-youtube youtube fa-lg",
    },
    {
      // Icon color #3b5998
      "url":"https://www.google.com",
      "icon":"fab fa-facebook facebook fa-lg",
    },
    {
      // Icon color #b31217
      "url":"https://www.google.com",
      "icon":"fab fa-pinterest pinterest fa-lg",
    },
    {
      // Icon color #f10176
      "url":"https://www.google.com",
      "icon":"fab fa-instagram instagram fa-lg",
    },
    {
      // Icon color #55acee
      "url":"https://www.google.com",
      "icon":"fab fa-twitter twitter fa-lg",
    },
  ];
  
  const icons = data.map(function(d, idx){
    return (
      <a className="icon-row" href={d.url} key={idx}>
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
