import React from 'react'

export default function AboutMe() {
  return (
    <div id="personal">
        <div id="myDiv">
            <div class="text">
                <h1>This is Me</h1>
                <br />
                <p>
                    My name is Xinzhe Yu. I'm a student of web development in Coder Academy. My major before is Maritime Design which is related to AUV (Autonomous Underwater Vehicles). Now I decide to change my career into IT industry. This is my current situations. 
                </p>
                <div class="myPhoto">
                    <img src="./img/myPhoto.png" alt="#" />
                </div>
            </div>
        </div>

        <hr />


        <div class="backing">
            <div id="threecard">
                <h1>My Hobbies</h1>
                <div class="card">
                    <img src="./img/music.jpg" alt="#" />
                    <h2>Music</h2>
                    <p>Music is one of my relaxing styles. I like playing guitar, bass, blues-harmonica and many other music instruments. I also record the songs with my friends online in my spare time.</p>
                </div>
                <div class="card">
                    <img src="./img/food.jpg" alt="#" />
                    <h2>Cooking</h2>
                    <p>It's not so much cooking as eating. No one don't like delicious food. I'm no exception. Because of covid, cooking already become one of my favourite entertainment.</p>
                </div>
                <div class="card">
                    <img src="./img/travel.jpg" alt="#" />
                    <h2>Traveling</h2>
                    <p>Hiking, finishing, camping and so on. Traveling always can bring me a fantastic experience which can improves my working efficiency. BTW, my next destination is New Zealand.</p>
                </div>
            </div>

            <hr />
            
            <div id="blog">
                <h1>This Is My Life...</h1>

                <div class="box1">
                    <img class="img" src="./img/Screen Shot 2022-03-05 at 18.13.47.png" alt="" />
                    <p>BBQ with My friends!<br/>(posted with Weibo)</p>
                </div>

                <div className="bigbox">
                <div class="box">
                    <img class="img" src="./img/output-onlinepngtools.png" alt="" />
                    <p>Cover a Japanese song with netizens.<br/>(posted with Twitter)</p>
                    <br/>
                </div>

                <div class="box">
                    <img class="img" src="./img/output-onlinepngtools (1).png" alt="" />
                    <p>Cover a fingerstyle guitar song 'Drifting'.<br/>(posted with Instagram)</p>
                    <br/>
                </div>

                <div class="box">
                    <img class="img" src="./img/output-onlinepngtools (2).png" alt=""/>
                    <p>Enjoy delicious dishes from Thai.<br/>(posted with Twitter)</p>
                    <br/>
                </div>

                <div class="box">
                    <img class="img" src="./img/output-onlinepngtools (3).png" alt=""/>
                    
                    <p>Play music instrument on Chinese Tiktok.<br/>(posted with Weibo and Tiktok)</p>
                    <br/>
                </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
