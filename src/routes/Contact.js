import React from 'react'

export default function Contact() {
  return ( 
    <div id="contact-info">
    <div class="container">
        <div class="table">
            <h1><span>Contact</span> Me</h1>
            <form method="post" action="mailto:toddy9229@outlook.com" enctype="text/plain">
                <p>
                Name: <br/><input name="name" type="text"/><br/>
                E-mail: <br/><input name="E-mail" type="text"/><br/>
                Message: <br/><textarea name="body" placeholder="type here..."></textarea><br/>
                </p>

                <input class="send" type="submit" value="Send"/>
            </form>
        </div>
    </div>
</div>

  )
}
