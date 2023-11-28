import './App.css';

function App() {
  return (
    <div className="App">
      <body>

<nav class="navbar">
    <ul class="navbar-nav">
        <li class="logo">
            <a href="#" class="nav-link">
                <span class="link-text logo-text">Lutodaja</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="#" class="nav-link">
                <span class="link-text">Credentials</span>
            </a>
        </li>

        
        <li class="nav-item">
            <a href="#" class="nav-link">
                <span class="link-text">What we can do for you</span>
            </a>
        </li>

        
        <li class="nav-item">
            <a href="#" class="nav-link">
                <span class="link-text">Business Solutions</span>
            </a>
        </li>

        
        <li class="nav-item">
            <a href="#" class="nav-link">
                <span class="link-text">do you wanna buy quark</span>
            </a>
        </li>

        <li class="nav-item" id="themeButton">
            <a href="#" class="nav-link">
              <svg
                class="theme-icon"
                id="lightIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="moon-stars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                class="theme-icon"
                id="solarIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sun"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                class="theme-icon"
                id="darkIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sunglasses"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span class="link-text">Themify</span>
            </a>
          </li>
    </ul>
</nav>

  <main>
      <h1>I personally love dinosaurs and the idea of them</h1>

      <form>
        <input></input>
        <a>are you carbon neutral ?</a>
        <br/>
        <button>I want to know</button>
      </form>

      <p>this text is mean to glorify the existence of dinosaurs and to spread the love for them</p>
      
      <p>
          For long people have question the existence of dinosaurs. This website will challenge
          anyone who has oppossing views cause we are all about dinasours thats who you are that'
          thats all we are
        </p>
        <p>
          you might feel like a smartass prick and just say well dinosours dont exist.
          well guess what buddy we don't care how you feel about it cause there's science 
          and theres proof of their existence. we might not hold the best arguments but 
          we'll surely come down on you with all of our might if that's what it takes 
          to shut your airhole 
        </p>
        <p>
          Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh franzen
          viral taxidermy mustache slow-carb crucifix vape. Taiyaki yuccie hell of
          tacos kitsch meggings tbh truffaut kickstarter mixtape af kogi.
          Fingerstache vegan tofu waistcoat gentrify cray. Drinking vinegar 3 wolf
          moon health goth craft beer master cleanse. Letterpress health goth 8-bit
          chillwave craft beer brooklyn. Chicharrones master cleanse 8-bit,
          mumblecore copper mug messenger bag poutine lomo kale chips flannel. Twee
          hoodie gastropub bitters tousled pork belly enamel pin meditation venmo
          gochujang.
        </p>
        <p>
          Next level selfies cronut ethical. Tofu tumblr you probably haven't heard
          of them, man braid literally forage swag chillwave. Pug yr flannel
          tumeric. Coloring book yr chillwave snackwave, shoreditch shaman gentrify
          typewriter tumeric DIY copper mug small batch. Scenester waistcoat YOLO
          hexagon kombucha poke 8-bit meditation. Selvage scenester forage
          williamsburg. Hoodie fingerstache tacos mustache, hashtag quinoa next
          level sartorial craft beer retro disrupt lo-fi.
        </p>
        <p>
          YOLO twee keytar farm-to-table flexitarian cardigan polaroid lumbersexual
          adaptogen drinking vinegar echo park dreamcatcher. Brunch shoreditch
          dreamcatcher iPhone knausgaard plaid edison bulb letterpress ethical yr
          fanny pack. Typewriter portland woke glossier cronut, post-ironic migas
          gentrify letterpress cray brunch lyft 8-bit master cleanse. Pitchfork
          thundercats organic pour-over unicorn lomo.
        </p>
        <p>
          Ugh yr tacos aesthetic everyday carry, tumeric selvage cliche skateboard.
          Wolf truffaut enamel pin vexillologist poutine. Hoodie roof party pabst,
          cardigan letterpress af disrupt +1 subway tile chillwave live-edge
          meggings next level readymade. Master cleanse gentrify hashtag, stumptown
          fam single-origin coffee occupy dreamcatcher air plant viral vexillologist
          enamel pin meggings. Tumblr chambray pickled microdosing austin scenester
          green juice.
        </p>
        <p>
          Austin four dollar toast church-key, vaporware hoodie edison bulb jean
          shorts sustainable williamsburg plaid helvetica scenester lomo humblebrag.
          Meditation tumblr kickstarter ennui williamsburg taiyaki pabst pour-over.
          8-bit godard cred, chillwave enamel pin skateboard you probably haven't
          heard of them. Meditation before they sold out single-origin coffee swag
          try-hard jianbing slow-carb shaman leggings. Palo santo shabby chic
          whatever man bun. Master cleanse wayfarers single-origin coffee pork belly
          cronut, normcore cliche jianbing before they sold out tousled shabby chic
          af pop-up gentrify. Direct trade la croix vexillologist jianbing,
          flexitarian selvage try-hard stumptown polaroid shaman wayfarers poke
          ramps food truck swag.
        </p>
        <p>
          Pok pok lumbersexual wayfarers, direct trade leggings poutine truffaut
          kitsch. Seitan aesthetic master cleanse squid coloring book banh mi YOLO
          vegan locavore vexillologist readymade next level pop-up edison bulb.
          Selvage knausgaard literally, quinoa photo booth 3 wolf moon microdosing
          freegan yuccie. Truffaut gentrify lomo put a bird on it waistcoat. Ugh
          austin distillery, tbh actually pork belly snackwave artisan mixtape
          quinoa vexillologist pok pok polaroid listicle readymade.
        </p>
        <p>
          Hammock letterpress prism dreamcatcher truffaut shabby chic vice
          cold-pressed. Franzen pug fashion axe before they sold out, tumblr irony
          kogi actually af bushwick banh mi. Snackwave bicycle rights tofu
          dreamcatcher tote bag pour-over meditation raw denim fanny pack. Pop-up
          retro taiyaki meditation twee gastropub VHS etsy. Semiotics gochujang
          street art normcore, edison bulb farm-to-table pour-over taxidermy
          brooklyn.
        </p>

      </main>
      </body>
    </div>
  );
}

export default App;
