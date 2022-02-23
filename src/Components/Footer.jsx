import React from 'react';
import '../footer.css'

const Footer = () => {
    return (
        <><header class="header">
        <div>
            <p class="header-intro">Hi, I'm</p>
            <h1 class="header-name">Ankit Yadav</h1>
        </div>
    </header>

    <section class="about">
        <h2>Introduction</h2>
        <p>Hi, I'm a freelance Designer who's currently learning to code on <a href="http://www.thinkful.com/" target="_blank">Thinkful</a>. I really want to learn how to implement my own designs in the browser and offer a better service to my clients by telling them that I can code too!</p>
        
        <p>I spend far too much time on the web, keeping one eye on Twitter and the other on <a href="http://www.allblacks.com/">Product Hunt</a> to ensure I dont miss out on any new products! As well as web design, I have a real desire to learn iOS development as well, but all in good time.</p>
    </section>

    <section class="questions">
        <h2>More about me</h2>
        <h3>Where am I from?</h3>
        <p> I'm living in Faridabad with my Family.</p>

       
    </section>

    <footer class="footer">
        <p>You can find out a bit more about me in these places</p>
        <ul class="social">
            <li><a href="https://twitter.com/HamishAIrving" target="=_blank" />Instagram</li>
            <li><a href="https://github.com/hamishirving" target="_blank" />Github</li>
            <li><a href="#" target="_blank" />Facebook</li>
        </ul>
    </footer></>
    )
};

export default Footer;