import React from 'react'

export default function SocialMedia() {

  const socialLinks = [
    {
      'link': "https://www.linkedin.com/in/xinzhe-yu-223628233/",
      'logo': "fa-brands fa-linkedin"
    },
    {
      'link': "https://twitter.com/XINZHEYU0554", 
      'logo': "fa-brands fa-twitter-square"
    },
    {
      'link': "https://www.instagram.com/xinzheyu/",
      'logo': "fa-brands fa-instagram-square"
    },
    {
      'link': "https://github.com/Todd0554",
      'logo': "fa-brands fa-github-square"
    }
    ]
  return (
  
    <div className="social-media">
        {socialLinks.map(link => {
          return (
            <a href={link.link} rel="noreferrer" target="_blank"><i class={link.logo}/></a>
          )
        })}
    </div>
  )
}
