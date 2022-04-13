import { LitElement, html, css } from 'lit';

export class SunsetBackground extends LitElement {
  static get properties() {
    return {
      animated: {
        type: Boolean,
        reflect: true,
      },
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
          justify-content: flex-start;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100vw;
          height: 100vh;
          background-image: linear-gradient(
            rgb(59, 47, 111) 40%,
            rgb(167, 43, 116) 65%,
            rgb(157, 34, 172) 70%,
            rgb(141, 23, 194) 80%,
            rgb(101, 24, 200) 100%
          );
          overflow: hidden;
        }
      `,
      /* Sunset */
      css`
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
          background-image: url('./assets/background-sunset.webp');
          background-size: auto;
          background-repeat: no-repeat;
          background-position: bottom;
          image-rendering: pixelated;
        }
      `,
      css`
        #mountain {
          position: absolute;
          bottom: -28px;
          left: 0;
          width: 100vw;
          height: 93px;
          border-bottom: 2px solid rgb(167, 43, 116);
          background: url('./assets/mountain-sprite.webp');
          background-repeat: repeat-x;
          image-rendering: pixelated;
        }
        :host([animated]) #mountain {
          animation: sprite 30s linear infinite;
        }

        @keyframes sprite {
          from {
            background-position: 0px 0;
          }
          to {
            background-position: -3219px 0;
          }
        }
      `,
      css`
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
          transform: perspective(64px) rotateX(25deg);
          will-change: animation;
        }
        :host([animated]) .grid {
          animation: scroll 22.5s linear infinite;
        }

        #vertical-grid {
          background-image: linear-gradient(
            0deg,
            transparent 20%,

            hsl(266, 80%, 44%) 20%,
            hsl(266, 80%, 44%) 20.5%,

            transparent 20.5%,
            transparent 25%,

            hsl(275, 80%, 43%) 25%,
            hsl(275, 80%, 43%) 25.5%,

            transparent 25.5%,
            transparent 30%,

            hsl(284, 75%, 42%) 30%,
            hsl(284, 75%, 42%) 30.4%,

            transparent 30.4%,
            transparent 35%,

            hsl(293, 75%, 41%) 35%,
            hsl(293, 75%, 41%) 35.5%,

            transparent 35.5%,
            transparent 40%,

            hsl(302, 70%, 40%) 40%,
            hsl(302, 70%, 40%) 41%,

            transparent 41%,
            transparent 45%,

            hsl(311, 70%, 39%) 45%,
            hsl(311, 70%, 39%) 46%,

            transparent 46%,
            transparent 50%,

            hsl(320, 65%, 38%) 50%,
            hsl(320, 65%, 38%) 51%,

            transparent 51%,
            transparent 55%,

            hsl(329, 65%, 37%) 55%,
            hsl(329, 65%, 37%) 56%,

            transparent 56%,
            transparent 61%,

            hsl(329, 65%, 37%) 61%,
            hsl(329, 65%, 37%) 62%,

            transparent 61%,
            transparent
          );
        }

        #horizontal-grid {
          background-image: linear-gradient(
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

        @keyframes scroll {
          from {
            background-position: 0px 0;
          }
          to {
            background-position: -3219px 0;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.animated = true;
  }

  render() {
    return html`
      <section id="background">
        <div id="sunset">
          <div id="mountain"></div>
        </div>
        <div class="grid" id="horizontal-grid"></div>
        <div class="grid" id="vertical-grid"></div>
      </section>
    `;
  }

  toggleAnimation() {
    this.animated = !this.animated;
  }
}
