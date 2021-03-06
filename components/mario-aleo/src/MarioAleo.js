import { LitElement, html, css } from 'lit-element';

export class MarioAleo extends LitElement {
  static get properties() {
    return {
      unresolved: {
        type: Boolean,
        reflect: true,
      },
      showAboutMe: {
        type: Boolean,
        reflect: true,
        attribute: false,
      }
    };
  }

  static get styles() {
    return [
      /* Host */
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          max-width: 100vw;
          max-height: 100vh;
          font-size: 16px;
          color: #1a2b42;
          margin: 0 auto;
        }

        a,
        a:hover {
          text-decoration: none;
        }
      `,
      /* Background */
      css`
        #background {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100vw;
          height: 100vh;
          background-image:
            linear-gradient(
              rgb(59, 47, 111) 40%,
              rgb(167, 43, 116) 65%,
              rgb(157, 34, 172) 70%,
              rgb(141, 23, 194) 80%,
              rgb(101, 24, 200) 100%
            );
          overflow: hidden;
        }

        #sunset {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100vw;
          height: 70vh;
          background-image:  url('./assets/background-sunset.webp');
          background-size: auto;
          background-repeat: no-repeat;
          background-position: bottom;
          image-rendering: pixelated;
        }

        #mountain {
          position: absolute;
          bottom: -28px;
          left: 0;
          width: 100vw;
          height: 93px;
          border-bottom: 2px solid rgb(167, 43, 116);
          background:  url('./assets/mountain-sprite.webp');
          background-repeat: repeat-x;
          animation: sprite 30s linear infinite;
          image-rendering: pixelated;
        }

        .grid {
            position: absolute;
            top: calc(70vh - 100px);
            left: -50%;
            width: 200vw;
            height: 300px;
            margin-top: 12px;
            background-size: 96px 100%;
            background-repeat: repeat-x;
            image-rendering: pixelated;
            animation: scroll 22.5s linear infinite;
        }
        #vertical-grid {
          background-image: linear-gradient(
            0deg,

            transparent 23%,
            rgb(101, 24, 200) 23%,
            rgb(101, 24, 200) 23.5%,
            transparent 23.5%,

            transparent 38%,
            rgb(141, 23, 194) 38%,
            rgb(141, 23, 194) 39%,
            transparent 39%,
            
            transparent 50%,
            rgb(157, 34, 172) 50%,
            rgb(157, 34, 172) 51%,
            transparent 51%,
            
            transparent 58%,
            rgb(167, 43, 116) 58%,
            rgb(167, 43, 116) 59%,
            transparent 59%,
            
            transparent
          );
        }
        #horizontal-grid {
          background-image:
            linear-gradient(
              90deg,

              rgb(44, 23, 120) 0%,
              rgb(44, 23, 120) 23%,

              transparent 23%,
              transparent 27%,
              
              rgb(44, 23, 120) 27%,
              rgb(44, 23, 120) 73%,

              transparent 73%,
              transparent 77%,

              rgb(44, 23, 120) 77%,
              rgb(44, 23, 120) 100%
            );
        }

        @keyframes sprite {
          from { background-position: 0px 0; }
          to { background-position: -3219px 0; }
        }

        @keyframes scroll {
          from {
            background-position: 0px 0;
            transform: perspective(64px) rotateX(25deg);
          }
          to {
            background-position: -3219px 0;
            transform: perspective(64px) rotateX(25deg);
          }
        }
      `,
      /* About me */
      css`
        #about-me {
          position: relative;
          max-width: 80%;
          border: solid 4px #fff;
          color: #fff;
          background-color: #212529;
        }

        #about-me-content {
          display: grid;
          grid-gap: 0 16px;
          grid-template-rows: 64px auto auto auto auto;
          grid-template-columns: auto;
          grid-template-areas:
            'avatar'
            'name'
            'job'
            'carreer'
            'social';
        }

        #avatar {
          grid-area: avatar;
          justify-self: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        #name {
          grid-area: name;
          align-self: center;
          justify-self: center;
          margin-top: 8px;
        }

        #job {
          grid-area: job;
          align-self: center;
          justify-self: center;
          margin-top: 8px;
          font-size: 13px;
        }

        #carreer {
          grid-area: carreer;
          margin-top: 32px;
          font-size: 14px;
          line-height: 24px;
        }

        #social {
          grid-area: social;
          justify-self: center;
          margin-top: 32px;
        }

        @media screen and (min-width: 426px) {
          #about-me {
            max-width: 512px;
          }

          #about-me-content {
            grid-template-rows: 32px 32px auto auto;
            grid-template-columns: 64px auto;
            grid-template-areas:
              'avatar   name'
              'avatar   job'
              'carreer  carreer'
              'social   social';
          }

          #name,
          #job {
            justify-self: flex-start;
            margin-top: 0;
          }

          #carreer,
          #social {
            justify-self: flex-start;
            margin: 32px 0 0 8px;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.unresolved = true;
    this.showAboutMe = true;
  }

  firstUpdated() {
    this.unresolved = false;
  }

  render() {
    return html`
      <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">

      <section id="background">
        <div id="sunset">
          <div id="mountain"></div>
        </div>
        <div class="grid" id="horizontal-grid"></div>
        <div class="grid" id="vertical-grid"></div>
      </section>

      <section id="about-me" class="nes-container is-dark with-title" .hidden=${!this.showAboutMe}>
        <p class="title">About me</p>
        <div id="about-me-content" >
          <img id="avatar" class="nes-avatar is-rounded is-large" alt="Avatar" src="./assets/avatar_32.webp">
          <span id="name">Mario Aleo</span>
          <span id="job">Web Developer</span>
          <span id="carreer">I have 5+ years of experience in building web applications using more of the web platform and fewer frameworks.</span>
          <div id="social">
            <a href="https://twitter.com/MarioAleo" target="_blank" rel="noopener" aria-label="My Twitter profile">
              <i class="nes-icon twitter is-medium"></i>
            </a>
            <a href="https://github.com/mario-aleo" target="_blank" rel="noopener" aria-label="My Github profile">
              <i class="nes-icon github is-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/mario-henrique-vivan-aleo-7513b3b8/" rel="noopener" target="_blank" aria-label="My Linkedin profile">
              <i class="nes-icon linkedin is-medium"></i>
            </a>
          </div>
        </div>
      </section>

      <button id="toggle-about-me" type="button" class="nes-btn" @click="${this.toggleAboutMe.bind(this)}">
        ${this.showAboutMe ? 'Hide' : 'Show'}
      </button>
    `;
  }

  toggleAboutMe() {
    this.showAboutMe = !this.showAboutMe;
  }
}
