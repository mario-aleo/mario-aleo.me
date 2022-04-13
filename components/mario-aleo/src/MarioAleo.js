import { LitElement, html, css } from 'lit';
import '../../sunset-background/sunset-background.js';

export class MarioAleo extends LitElement {
  static get properties() {
    return {
      animated: {
        type: Boolean,
        reflect: true,
      },
      unresolved: {
        type: Boolean,
        reflect: true,
      },
      showLayout: {
        type: Boolean,
        reflect: true,
      },
      _experienceYears: { state: true },
    };
  }

  static get styles() {
    return [
      /* Host */
      css`
        :host {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas:
            'about-me       .          main-content'
            '.              .          main-content'
            'layout-control navigation spotify';
          height: 100vh;
          max-width: 100vw;
          max-height: 100vh;
          font-size: 16px;
          color: #1a2b42;
          margin: 0 auto;
        }

        a,
        a:hover,
        a:visited {
          color: #fff;
          text-decoration: none;
          text-decoration-color: #fff;
        }

        button {
          height: 40px;
          padding: 0 12px;
          border: solid 4px #212121;
          font-family: 'Press Start 2P', sans-serif;
          font-size: 16px;
          background-color: #fff;
          box-shadow: inset -2px -2px 0px 2px #919191;
          cursor: pointer;
        }

        .card {
          position: relative;
          padding: 24px 16px 16px;
          border: solid 4px #fff;
          margin: 16px;
          color: #fff;
          background-color: #212121;
        }
        .card h1 {
          position: absolute;
          top: -5px;
          left: 8px;
          padding: 0px 8px;
          margin: 0;
          font-size: 16px;
          letter-spacing: 3px;
          background-color: #212121;
        }

        [hidden] {
          display: block !important;
          opacity: 0;
          visibility: hidden;
        }
      `,
      /* Sunset Background */
      css`
        sunset-background {
          z-index: -1;
        }
      `,
      /* About Me */
      css`
        #about-me {
          grid-area: about-me;
          position: relative;
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
          max-width: 80%;
          margin: 16px;
          border: solid 4px #fff;
          color: #fff;
          background-color: #212529;
          will-change: visibility;
        }

        #avatar {
          grid-area: avatar;
          justify-self: center;
          width: 64px;
          height: 64px;
          image-rendering: pixelated;
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
          display: flex;
          justify-content: space-around;
          justify-self: center;
          margin-top: 32px;
        }
        #social a {
          display: inline-block;
          width: 48px;
          height: 48px;
        }

        @media screen and (min-width: 426px) {
          #about-me {
            max-width: 512px;
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
            width: calc(100% - 16px);
            margin: 32px 8px 0 8px;
          }
        }
      `,
      /* Main Content */
      css`
        #main-content {
          grid-area: main-content;
        }

        main section {
          padding: 0 16px;
          margin-bottom: 40px;
        }
        main h2 {
          font-size: 18px;
        }
        main h3 {
          margin-left: 16px;
          font-size: 12px;
          color: #919191;
        }
        main p {
          margin-left: 16px;
          font-size: 14px;
        }
      `,
      /* Experience */
      css``,
      /* Layout Control */
      css`
        #layout-control {
          grid-area: layout-control;
          align-self: flex-end;
          justify-self: flex-start;
          padding: 16px;
        }
      `,
      /* Navigation */
      css`
        #navigation {
          grid-area: navigation;
          align-self: flex-end;
          height: 64px;
        }

        #navigation a::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          margin-right: 8px;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid transparent;
        }

        #navigation a[active]::before {
          border-left: 8px solid #fff;
        }
      `,
      /* Spotify */
      css`
        #spotify {
          position: fixed;
          top: 16px;
        }

        @media screen and (min-width: 426px) {
          #spotify {
            top: unset;
            right: 16px;
            bottom: 16px;
          }
        }
      `,
      /* Icons */
      css`
        .icon {
          position: relative;
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 32px;
          margin-bottom: 32px;
          transform: scale(3);
          transform-origin: top left;
        }
        .icon::before {
          position: absolute;
          top: -1px;
          left: -1px;
          display: block;
          content: '';
          background: transparent;
        }

        .icon.github::before {
          width: 1px;
          height: 1px;
          color: #333;
          box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px,
            8px 1px, 9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px,
            15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px #fff, 6px 2px,
            7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px,
            14px 2px #fff, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px,
            4px 3px, 5px 3px #fff, 6px 3px #fff, 7px 3px, 8px 3px, 9px 3px,
            10px 3px, 11px 3px, 12px 3px, 13px 3px #fff, 14px 3px #fff, 15px 3px,
            16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px #fff,
            6px 4px #fff, 7px 4px #fff, 8px 4px #fff, 9px 4px #fff,
            10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff,
            14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px,
            4px 5px #fff, 5px 5px #fff, 6px 5px #fff, 7px 5px #fff, 8px 5px #fff,
            9px 5px #fff, 10px 5px #fff, 11px 5px #fff, 12px 5px #fff,
            13px 5px #fff, 14px 5px #fff, 15px 5px #fff, 16px 5px, 1px 6px,
            2px 6px, 3px 6px, 4px 6px #fff, 5px 6px #fff, 6px 6px #fff,
            7px 6px #fff, 8px 6px #fff, 9px 6px #fff, 10px 6px #fff,
            11px 6px #fff, 12px 6px #fff, 13px 6px #fff, 14px 6px #fff,
            15px 6px #fff, 16px 6px, 1px 7px, 2px 7px, 3px 7px, 4px 7px #fff,
            5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff, 9px 7px #fff,
            10px 7px #fff, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff,
            14px 7px #fff, 15px 7px #fff, 16px 7px, 1px 8px, 2px 8px, 3px 8px,
            4px 8px #fff, 5px 8px #fff, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff,
            9px 8px #fff, 10px 8px #fff, 11px 8px #fff, 12px 8px #fff,
            13px 8px #fff, 14px 8px #fff, 15px 8px #fff, 16px 8px, 1px 9px,
            2px 9px, 3px 9px, 4px 9px, 5px 9px #fff, 6px 9px #fff, 7px 9px #fff,
            8px 9px #fff, 9px 9px #fff, 10px 9px #fff, 11px 9px #fff,
            12px 9px #fff, 13px 9px #fff, 14px 9px #fff, 15px 9px, 16px 9px,
            1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px, 6px 10px #fff,
            7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff,
            11px 10px #fff, 12px 10px #fff, 13px 10px #fff, 14px 10px, 15px 10px,
            16px 10px, 1px 11px, 2px 11px #fff, 3px 11px #fff, 4px 11px,
            5px 11px, 6px 11px, 7px 11px, 8px 11px #fff, 9px 11px #fff,
            10px 11px #fff, 11px 11px #fff, 12px 11px, 13px 11px, 14px 11px,
            15px 11px, 16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px #fff,
            5px 12px, 6px 12px, 7px 12px #fff, 8px 12px #fff, 9px 12px #fff,
            10px 12px #fff, 11px 12px #fff, 12px 12px #fff, 13px 12px, 14px 12px,
            15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px,
            5px 13px #fff, 6px 13px #fff, 7px 13px #fff, 8px 13px #fff,
            9px 13px #fff, 10px 13px #fff, 11px 13px #fff, 12px 13px #fff,
            13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px,
            3px 14px, 4px 14px, 5px 14px, 6px 14px, 7px 14px #fff, 8px 14px #fff,
            9px 14px #fff, 10px 14px #fff, 11px 14px #fff, 12px 14px #fff,
            13px 14px, 14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px,
            3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px #fff, 8px 15px #fff,
            9px 15px #fff, 10px 15px #fff, 11px 15px #fff, 12px 15px #fff,
            13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
            4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px,
            10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
        }
        @supports (-moz-appearance: meterbar) {
          .icon.github::before {
            box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
              5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em,
              8px 1px 0 0.02em, 9px 1px 0 0.02em, 10px 1px 0 0.02em,
              11px 1px 0 0.02em, 12px 1px 0 0.02em, 13px 1px 0 0.02em,
              14px 1px 0 0.02em, 15px 1px 0 0.02em, 1px 2px 0 0.02em,
              2px 2px 0 0.02em, 3px 2px 0 0.02em, 4px 2px 0 0.02em,
              5px 2px 0 0.02em #fff, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
              8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em,
              11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
              14px 2px 0 0.02em #fff, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
              1px 3px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em,
              4px 3px 0 0.02em, 5px 3px 0 0.02em #fff, 6px 3px 0 0.02em #fff,
              7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
              10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em,
              13px 3px 0 0.02em #fff, 14px 3px 0 0.02em #fff, 15px 3px 0 0.02em,
              16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
              3px 4px 0 0.02em, 4px 4px 0 0.02em, 5px 4px 0 0.02em #fff,
              6px 4px 0 0.02em #fff, 7px 4px 0 0.02em #fff,
              8px 4px 0 0.02em #fff, 9px 4px 0 0.02em #fff,
              10px 4px 0 0.02em #fff, 11px 4px 0 0.02em #fff,
              12px 4px 0 0.02em #fff, 13px 4px 0 0.02em #fff,
              14px 4px 0 0.02em #fff, 15px 4px 0 0.02em, 16px 4px 0 0.02em,
              1px 5px 0 0.02em, 2px 5px 0 0.02em, 3px 5px 0 0.02em,
              4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff,
              6px 5px 0 0.02em #fff, 7px 5px 0 0.02em #fff,
              8px 5px 0 0.02em #fff, 9px 5px 0 0.02em #fff,
              10px 5px 0 0.02em #fff, 11px 5px 0 0.02em #fff,
              12px 5px 0 0.02em #fff, 13px 5px 0 0.02em #fff,
              14px 5px 0 0.02em #fff, 15px 5px 0 0.02em #fff, 16px 5px 0 0.02em,
              1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em,
              4px 6px 0 0.02em #fff, 5px 6px 0 0.02em #fff,
              6px 6px 0 0.02em #fff, 7px 6px 0 0.02em #fff,
              8px 6px 0 0.02em #fff, 9px 6px 0 0.02em #fff,
              10px 6px 0 0.02em #fff, 11px 6px 0 0.02em #fff,
              12px 6px 0 0.02em #fff, 13px 6px 0 0.02em #fff,
              14px 6px 0 0.02em #fff, 15px 6px 0 0.02em #fff, 16px 6px 0 0.02em,
              1px 7px 0 0.02em, 2px 7px 0 0.02em, 3px 7px 0 0.02em,
              4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff,
              6px 7px 0 0.02em #fff, 7px 7px 0 0.02em #fff,
              8px 7px 0 0.02em #fff, 9px 7px 0 0.02em #fff,
              10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff,
              12px 7px 0 0.02em #fff, 13px 7px 0 0.02em #fff,
              14px 7px 0 0.02em #fff, 15px 7px 0 0.02em #fff, 16px 7px 0 0.02em,
              1px 8px 0 0.02em, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
              4px 8px 0 0.02em #fff, 5px 8px 0 0.02em #fff,
              6px 8px 0 0.02em #fff, 7px 8px 0 0.02em #fff,
              8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
              10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
              12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff,
              14px 8px 0 0.02em #fff, 15px 8px 0 0.02em #fff, 16px 8px 0 0.02em,
              1px 9px 0 0.02em, 2px 9px 0 0.02em, 3px 9px 0 0.02em,
              4px 9px 0 0.02em, 5px 9px 0 0.02em #fff, 6px 9px 0 0.02em #fff,
              7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff,
              9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff,
              11px 9px 0 0.02em #fff, 12px 9px 0 0.02em #fff,
              13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff, 15px 9px 0 0.02em,
              16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em,
              3px 10px 0 0.02em, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
              6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff,
              8px 10px 0 0.02em #fff, 9px 10px 0 0.02em #fff,
              10px 10px 0 0.02em #fff, 11px 10px 0 0.02em #fff,
              12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
              14px 10px 0 0.02em, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
              1px 11px 0 0.02em, 2px 11px 0 0.02em #fff, 3px 11px 0 0.02em #fff,
              4px 11px 0 0.02em, 5px 11px 0 0.02em, 6px 11px 0 0.02em,
              7px 11px 0 0.02em, 8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
              10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff,
              12px 11px 0 0.02em, 13px 11px 0 0.02em, 14px 11px 0 0.02em,
              15px 11px 0 0.02em, 16px 11px 0 0.02em, 1px 12px 0 0.02em,
              2px 12px 0 0.02em, 3px 12px 0 0.02em, 4px 12px 0 0.02em #fff,
              5px 12px 0 0.02em, 6px 12px 0 0.02em, 7px 12px 0 0.02em #fff,
              8px 12px 0 0.02em #fff, 9px 12px 0 0.02em #fff,
              10px 12px 0 0.02em #fff, 11px 12px 0 0.02em #fff,
              12px 12px 0 0.02em #fff, 13px 12px 0 0.02em, 14px 12px 0 0.02em,
              15px 12px 0 0.02em, 16px 12px 0 0.02em, 1px 13px 0 0.02em,
              2px 13px 0 0.02em, 3px 13px 0 0.02em, 4px 13px 0 0.02em,
              5px 13px 0 0.02em #fff, 6px 13px 0 0.02em #fff,
              7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #fff,
              9px 13px 0 0.02em #fff, 10px 13px 0 0.02em #fff,
              11px 13px 0 0.02em #fff, 12px 13px 0 0.02em #fff,
              13px 13px 0 0.02em, 14px 13px 0 0.02em, 15px 13px 0 0.02em,
              16px 13px 0 0.02em, 1px 14px 0 0.02em, 2px 14px 0 0.02em,
              3px 14px 0 0.02em, 4px 14px 0 0.02em, 5px 14px 0 0.02em,
              6px 14px 0 0.02em, 7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff,
              9px 14px 0 0.02em #fff, 10px 14px 0 0.02em #fff,
              11px 14px 0 0.02em #fff, 12px 14px 0 0.02em #fff,
              13px 14px 0 0.02em, 14px 14px 0 0.02em, 15px 14px 0 0.02em,
              16px 14px 0 0.02em, 1px 15px 0 0.02em, 2px 15px 0 0.02em,
              3px 15px 0 0.02em, 4px 15px 0 0.02em, 5px 15px 0 0.02em,
              6px 15px 0 0.02em, 7px 15px 0 0.02em #fff, 8px 15px 0 0.02em #fff,
              9px 15px 0 0.02em #fff, 10px 15px 0 0.02em #fff,
              11px 15px 0 0.02em #fff, 12px 15px 0 0.02em #fff,
              13px 15px 0 0.02em, 14px 15px 0 0.02em, 15px 15px 0 0.02em,
              16px 15px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
              4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em,
              7px 16px 0 0.02em, 8px 16px 0 0.02em, 9px 16px 0 0.02em,
              10px 16px 0 0.02em, 11px 16px 0 0.02em, 12px 16px 0 0.02em,
              13px 16px 0 0.02em, 14px 16px 0 0.02em, 15px 16px 0 0.02em;
          }
        }

        .icon.twitter::before {
          width: 1px;
          height: 1px;
          color: #2c9ceb;
          box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px,
            8px 1px, 9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px,
            15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px,
            7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px,
            14px 2px, 15px 2px, 16px 2px, 1px 3px, 2px 3px #fff, 3px 3px,
            4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px #fff,
            11px 3px #fff, 12px 3px #fff, 13px 3px, 14px 3px, 15px 3px, 16px 3px,
            1px 4px, 2px 4px #fff, 3px 4px #fff, 4px 4px #fff, 5px 4px, 6px 4px,
            7px 4px, 8px 4px, 9px 4px #fff, 10px 4px #fff, 11px 4px #fff,
            12px 4px #fff, 13px 4px #fff, 14px 4px, 15px 4px, 16px 4px, 1px 5px,
            2px 5px #fff, 3px 5px #fff, 4px 5px #fff, 5px 5px #fff, 6px 5px #fff,
            7px 5px, 8px 5px #fff, 9px 5px #fff, 10px 5px #fff, 11px 5px #fff,
            12px 5px #fff, 13px 5px #fff, 14px 5px #fff, 15px 5px #fff, 16px 5px,
            1px 6px, 2px 6px, 3px 6px #fff, 4px 6px #fff, 5px 6px #fff,
            6px 6px #fff, 7px 6px #fff, 8px 6px #fff, 9px 6px #fff,
            10px 6px #fff, 11px 6px #fff, 12px 6px #fff, 13px 6px #fff,
            14px 6px #fff, 15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff,
            4px 7px #fff, 5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff,
            9px 7px #fff, 10px 7px #fff, 11px 7px #fff, 12px 7px #fff,
            13px 7px #fff, 14px 7px #fff, 15px 7px, 16px 7px, 1px 8px, 2px 8px,
            3px 8px, 4px 8px #fff, 5px 8px #fff, 6px 8px #fff, 7px 8px #fff,
            8px 8px #fff, 9px 8px #fff, 10px 8px #fff, 11px 8px #fff,
            12px 8px #fff, 13px 8px #fff, 14px 8px, 15px 8px, 16px 8px, 1px 9px,
            2px 9px, 3px 9px, 4px 9px #fff, 5px 9px #fff, 6px 9px #fff,
            7px 9px #fff, 8px 9px #fff, 9px 9px #fff, 10px 9px #fff,
            11px 9px #fff, 12px 9px #fff, 13px 9px, 14px 9px, 15px 9px, 16px 9px,
            1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px #fff, 6px 10px #fff,
            7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff,
            11px 10px #fff, 12px 10px #fff, 13px 10px, 14px 10px, 15px 10px,
            16px 10px, 1px 11px, 2px 11px, 3px 11px, 4px 11px, 5px 11px,
            6px 11px #fff, 7px 11px #fff, 8px 11px #fff, 9px 11px #fff,
            10px 11px #fff, 11px 11px #fff, 12px 11px #fff, 13px 11px, 14px 11px,
            15px 11px, 16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px,
            5px 12px #fff, 6px 12px #fff, 7px 12px #fff, 8px 12px #fff,
            9px 12px #fff, 10px 12px #fff, 11px 12px #fff, 12px 12px, 13px 12px,
            14px 12px, 15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px #fff,
            4px 13px #fff, 5px 13px #fff, 6px 13px #fff, 7px 13px #fff,
            8px 13px #fff, 9px 13px #fff, 10px 13px, 11px 13px, 12px 13px,
            13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px,
            3px 14px, 4px 14px #fff, 5px 14px #fff, 6px 14px #fff, 7px 14px,
            8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px,
            14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px,
            4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px,
            10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px, 15px 15px,
            16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px,
            7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px,
            13px 16px, 14px 16px, 15px 16px;
        }
        @supports (-moz-appearance: meterbar) {
          .icon.twitter::before {
            box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
              5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em,
              8px 1px 0 0.02em, 9px 1px 0 0.02em, 10px 1px 0 0.02em,
              11px 1px 0 0.02em, 12px 1px 0 0.02em, 13px 1px 0 0.02em,
              14px 1px 0 0.02em, 15px 1px 0 0.02em, 1px 2px 0 0.02em,
              2px 2px 0 0.02em, 3px 2px 0 0.02em, 4px 2px 0 0.02em,
              5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
              8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em,
              11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
              14px 2px 0 0.02em, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
              1px 3px 0 0.02em, 2px 3px 0 0.02em #fff, 3px 3px 0 0.02em,
              4px 3px 0 0.02em, 5px 3px 0 0.02em, 6px 3px 0 0.02em,
              7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
              10px 3px 0 0.02em #fff, 11px 3px 0 0.02em #fff,
              12px 3px 0 0.02em #fff, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
              15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em,
              2px 4px 0 0.02em #fff, 3px 4px 0 0.02em #fff,
              4px 4px 0 0.02em #fff, 5px 4px 0 0.02em, 6px 4px 0 0.02em,
              7px 4px 0 0.02em, 8px 4px 0 0.02em, 9px 4px 0 0.02em #fff,
              10px 4px 0 0.02em #fff, 11px 4px 0 0.02em #fff,
              12px 4px 0 0.02em #fff, 13px 4px 0 0.02em #fff, 14px 4px 0 0.02em,
              15px 4px 0 0.02em, 16px 4px 0 0.02em, 1px 5px 0 0.02em,
              2px 5px 0 0.02em #fff, 3px 5px 0 0.02em #fff,
              4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff,
              6px 5px 0 0.02em #fff, 7px 5px 0 0.02em, 8px 5px 0 0.02em #fff,
              9px 5px 0 0.02em #fff, 10px 5px 0 0.02em #fff,
              11px 5px 0 0.02em #fff, 12px 5px 0 0.02em #fff,
              13px 5px 0 0.02em #fff, 14px 5px 0 0.02em #fff,
              15px 5px 0 0.02em #fff, 16px 5px 0 0.02em, 1px 6px 0 0.02em,
              2px 6px 0 0.02em, 3px 6px 0 0.02em #fff, 4px 6px 0 0.02em #fff,
              5px 6px 0 0.02em #fff, 6px 6px 0 0.02em #fff,
              7px 6px 0 0.02em #fff, 8px 6px 0 0.02em #fff,
              9px 6px 0 0.02em #fff, 10px 6px 0 0.02em #fff,
              11px 6px 0 0.02em #fff, 12px 6px 0 0.02em #fff,
              13px 6px 0 0.02em #fff, 14px 6px 0 0.02em #fff, 15px 6px 0 0.02em,
              16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em,
              3px 7px 0 0.02em #fff, 4px 7px 0 0.02em #fff,
              5px 7px 0 0.02em #fff, 6px 7px 0 0.02em #fff,
              7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff,
              9px 7px 0 0.02em #fff, 10px 7px 0 0.02em #fff,
              11px 7px 0 0.02em #fff, 12px 7px 0 0.02em #fff,
              13px 7px 0 0.02em #fff, 14px 7px 0 0.02em #fff, 15px 7px 0 0.02em,
              16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em,
              3px 8px 0 0.02em, 4px 8px 0 0.02em #fff, 5px 8px 0 0.02em #fff,
              6px 8px 0 0.02em #fff, 7px 8px 0 0.02em #fff,
              8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
              10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
              12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff, 14px 8px 0 0.02em,
              15px 8px 0 0.02em, 16px 8px 0 0.02em, 1px 9px 0 0.02em,
              2px 9px 0 0.02em, 3px 9px 0 0.02em, 4px 9px 0 0.02em #fff,
              5px 9px 0 0.02em #fff, 6px 9px 0 0.02em #fff,
              7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff,
              9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff,
              11px 9px 0 0.02em #fff, 12px 9px 0 0.02em #fff, 13px 9px 0 0.02em,
              14px 9px 0 0.02em, 15px 9px 0 0.02em, 16px 9px 0 0.02em,
              1px 10px 0 0.02em, 2px 10px 0 0.02em, 3px 10px 0 0.02em,
              4px 10px 0 0.02em, 5px 10px 0 0.02em #fff, 6px 10px 0 0.02em #fff,
              7px 10px 0 0.02em #fff, 8px 10px 0 0.02em #fff,
              9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
              11px 10px 0 0.02em #fff, 12px 10px 0 0.02em #fff,
              13px 10px 0 0.02em, 14px 10px 0 0.02em, 15px 10px 0 0.02em,
              16px 10px 0 0.02em, 1px 11px 0 0.02em, 2px 11px 0 0.02em,
              3px 11px 0 0.02em, 4px 11px 0 0.02em, 5px 11px 0 0.02em,
              6px 11px 0 0.02em #fff, 7px 11px 0 0.02em #fff,
              8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
              10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff,
              12px 11px 0 0.02em #fff, 13px 11px 0 0.02em, 14px 11px 0 0.02em,
              15px 11px 0 0.02em, 16px 11px 0 0.02em, 1px 12px 0 0.02em,
              2px 12px 0 0.02em, 3px 12px 0 0.02em, 4px 12px 0 0.02em,
              5px 12px 0 0.02em #fff, 6px 12px 0 0.02em #fff,
              7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff,
              9px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff,
              11px 12px 0 0.02em #fff, 12px 12px 0 0.02em, 13px 12px 0 0.02em,
              14px 12px 0 0.02em, 15px 12px 0 0.02em, 16px 12px 0 0.02em,
              1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em #fff,
              4px 13px 0 0.02em #fff, 5px 13px 0 0.02em #fff,
              6px 13px 0 0.02em #fff, 7px 13px 0 0.02em #fff,
              8px 13px 0 0.02em #fff, 9px 13px 0 0.02em #fff, 10px 13px 0 0.02em,
              11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em,
              14px 13px 0 0.02em, 15px 13px 0 0.02em, 16px 13px 0 0.02em,
              1px 14px 0 0.02em, 2px 14px 0 0.02em, 3px 14px 0 0.02em,
              4px 14px 0 0.02em #fff, 5px 14px 0 0.02em #fff,
              6px 14px 0 0.02em #fff, 7px 14px 0 0.02em, 8px 14px 0 0.02em,
              9px 14px 0 0.02em, 10px 14px 0 0.02em, 11px 14px 0 0.02em,
              12px 14px 0 0.02em, 13px 14px 0 0.02em, 14px 14px 0 0.02em,
              15px 14px 0 0.02em, 16px 14px 0 0.02em, 1px 15px 0 0.02em,
              2px 15px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em,
              5px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em,
              8px 15px 0 0.02em, 9px 15px 0 0.02em, 10px 15px 0 0.02em,
              11px 15px 0 0.02em, 12px 15px 0 0.02em, 13px 15px 0 0.02em,
              14px 15px 0 0.02em, 15px 15px 0 0.02em, 16px 15px 0 0.02em,
              2px 16px 0 0.02em, 3px 16px 0 0.02em, 4px 16px 0 0.02em,
              5px 16px 0 0.02em, 6px 16px 0 0.02em, 7px 16px 0 0.02em,
              8px 16px 0 0.02em, 9px 16px 0 0.02em, 10px 16px 0 0.02em,
              11px 16px 0 0.02em, 12px 16px 0 0.02em, 13px 16px 0 0.02em,
              14px 16px 0 0.02em, 15px 16px 0 0.02em;
          }
        }

        .icon.linkedin::before {
          width: 1px;
          height: 1px;
          color: #2577b9;
          box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px,
            8px 1px, 9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px,
            15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px,
            7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px,
            14px 2px, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px #fff,
            4px 3px #fff, 5px 3px #fff, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
            10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px, 15px 3px, 16px 3px,
            1px 4px, 2px 4px, 3px 4px #fff, 4px 4px #fff, 5px 4px #fff, 6px 4px,
            7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px, 13px 4px,
            14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px #fff,
            4px 5px #fff, 5px 5px #fff, 6px 5px, 7px 5px, 8px 5px, 9px 5px,
            10px 5px, 11px 5px, 12px 5px, 13px 5px, 14px 5px, 15px 5px, 16px 5px,
            1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px,
            8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
            15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff, 4px 7px #fff,
            5px 7px #fff, 6px 7px, 7px 7px #fff, 8px 7px #fff, 9px 7px #fff,
            10px 7px, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px,
            15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px #fff, 4px 8px #fff,
            5px 8px #fff, 6px 8px, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
            10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff,
            14px 8px #fff, 15px 8px, 16px 8px, 1px 9px, 2px 9px, 3px 9px #fff,
            4px 9px #fff, 5px 9px #fff, 6px 9px, 7px 9px #fff, 8px 9px #fff,
            9px 9px #fff, 10px 9px #fff, 11px 9px #fff, 12px 9px #fff,
            13px 9px #fff, 14px 9px #fff, 15px 9px, 16px 9px, 1px 10px, 2px 10px,
            3px 10px #fff, 4px 10px #fff, 5px 10px #fff, 6px 10px, 7px 10px #fff,
            8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px,
            12px 10px #fff, 13px 10px #fff, 14px 10px #fff, 15px 10px, 16px 10px,
            1px 11px, 2px 11px, 3px 11px #fff, 4px 11px #fff, 5px 11px #fff,
            6px 11px, 7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px,
            11px 11px, 12px 11px #fff, 13px 11px #fff, 14px 11px #fff, 15px 11px,
            16px 11px, 1px 12px, 2px 12px, 3px 12px #fff, 4px 12px #fff,
            5px 12px #fff, 6px 12px, 7px 12px #fff, 8px 12px #fff, 9px 12px #fff,
            10px 12px, 11px 12px, 12px 12px #fff, 13px 12px #fff, 14px 12px #fff,
            15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px #fff,
            4px 13px #fff, 5px 13px #fff, 6px 13px, 7px 13px #fff, 8px 13px #fff,
            9px 13px #fff, 10px 13px, 11px 13px, 12px 13px #fff, 13px 13px #fff,
            14px 13px #fff, 15px 13px, 16px 13px, 1px 14px, 2px 14px,
            3px 14px #fff, 4px 14px #fff, 5px 14px #fff, 6px 14px, 7px 14px #fff,
            8px 14px #fff, 9px 14px #fff, 10px 14px, 11px 14px, 12px 14px #fff,
            13px 14px #fff, 14px 14px #fff, 15px 14px, 16px 14px, 1px 15px,
            2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px,
            9px 15px, 10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px,
            15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px,
            6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px,
            12px 16px, 13px 16px, 14px 16px, 15px 16px;
        }
        @supports (-moz-appearance: meterbar) {
          .icon.linkedin::before {
            box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
              5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em,
              8px 1px 0 0.02em, 9px 1px 0 0.02em, 10px 1px 0 0.02em,
              11px 1px 0 0.02em, 12px 1px 0 0.02em, 13px 1px 0 0.02em,
              14px 1px 0 0.02em, 15px 1px 0 0.02em, 1px 2px 0 0.02em,
              2px 2px 0 0.02em, 3px 2px 0 0.02em, 4px 2px 0 0.02em,
              5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
              8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em,
              11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
              14px 2px 0 0.02em, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
              1px 3px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em #fff,
              4px 3px 0 0.02em #fff, 5px 3px 0 0.02em #fff, 6px 3px 0 0.02em,
              7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
              10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em,
              13px 3px 0 0.02em, 14px 3px 0 0.02em, 15px 3px 0 0.02em,
              16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
              3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff,
              5px 4px 0 0.02em #fff, 6px 4px 0 0.02em, 7px 4px 0 0.02em,
              8px 4px 0 0.02em, 9px 4px 0 0.02em, 10px 4px 0 0.02em,
              11px 4px 0 0.02em, 12px 4px 0 0.02em, 13px 4px 0 0.02em,
              14px 4px 0 0.02em, 15px 4px 0 0.02em, 16px 4px 0 0.02em,
              1px 5px 0 0.02em, 2px 5px 0 0.02em, 3px 5px 0 0.02em #fff,
              4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff, 6px 5px 0 0.02em,
              7px 5px 0 0.02em, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
              10px 5px 0 0.02em, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
              13px 5px 0 0.02em, 14px 5px 0 0.02em, 15px 5px 0 0.02em,
              16px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em,
              3px 6px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em,
              6px 6px 0 0.02em, 7px 6px 0 0.02em, 8px 6px 0 0.02em,
              9px 6px 0 0.02em, 10px 6px 0 0.02em, 11px 6px 0 0.02em,
              12px 6px 0 0.02em, 13px 6px 0 0.02em, 14px 6px 0 0.02em,
              15px 6px 0 0.02em, 16px 6px 0 0.02em, 1px 7px 0 0.02em,
              2px 7px 0 0.02em, 3px 7px 0 0.02em #fff, 4px 7px 0 0.02em #fff,
              5px 7px 0 0.02em #fff, 6px 7px 0 0.02em, 7px 7px 0 0.02em #fff,
              8px 7px 0 0.02em #fff, 9px 7px 0 0.02em #fff, 10px 7px 0 0.02em,
              11px 7px 0 0.02em #fff, 12px 7px 0 0.02em #fff,
              13px 7px 0 0.02em #fff, 14px 7px 0 0.02em, 15px 7px 0 0.02em,
              16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em,
              3px 8px 0 0.02em #fff, 4px 8px 0 0.02em #fff,
              5px 8px 0 0.02em #fff, 6px 8px 0 0.02em, 7px 8px 0 0.02em #fff,
              8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
              10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
              12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff,
              14px 8px 0 0.02em #fff, 15px 8px 0 0.02em, 16px 8px 0 0.02em,
              1px 9px 0 0.02em, 2px 9px 0 0.02em, 3px 9px 0 0.02em #fff,
              4px 9px 0 0.02em #fff, 5px 9px 0 0.02em #fff, 6px 9px 0 0.02em,
              7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff,
              9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff,
              11px 9px 0 0.02em #fff, 12px 9px 0 0.02em #fff,
              13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff, 15px 9px 0 0.02em,
              16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em,
              3px 10px 0 0.02em #fff, 4px 10px 0 0.02em #fff,
              5px 10px 0 0.02em #fff, 6px 10px 0 0.02em, 7px 10px 0 0.02em #fff,
              8px 10px 0 0.02em #fff, 9px 10px 0 0.02em #fff,
              10px 10px 0 0.02em #fff, 11px 10px 0 0.02em,
              12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
              14px 10px 0 0.02em #fff, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
              1px 11px 0 0.02em, 2px 11px 0 0.02em, 3px 11px 0 0.02em #fff,
              4px 11px 0 0.02em #fff, 5px 11px 0 0.02em #fff, 6px 11px 0 0.02em,
              7px 11px 0 0.02em #fff, 8px 11px 0 0.02em #fff,
              9px 11px 0 0.02em #fff, 10px 11px 0 0.02em, 11px 11px 0 0.02em,
              12px 11px 0 0.02em #fff, 13px 11px 0 0.02em #fff,
              14px 11px 0 0.02em #fff, 15px 11px 0 0.02em, 16px 11px 0 0.02em,
              1px 12px 0 0.02em, 2px 12px 0 0.02em, 3px 12px 0 0.02em #fff,
              4px 12px 0 0.02em #fff, 5px 12px 0 0.02em #fff, 6px 12px 0 0.02em,
              7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff,
              9px 12px 0 0.02em #fff, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
              12px 12px 0 0.02em #fff, 13px 12px 0 0.02em #fff,
              14px 12px 0 0.02em #fff, 15px 12px 0 0.02em, 16px 12px 0 0.02em,
              1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em #fff,
              4px 13px 0 0.02em #fff, 5px 13px 0 0.02em #fff, 6px 13px 0 0.02em,
              7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #fff,
              9px 13px 0 0.02em #fff, 10px 13px 0 0.02em, 11px 13px 0 0.02em,
              12px 13px 0 0.02em #fff, 13px 13px 0 0.02em #fff,
              14px 13px 0 0.02em #fff, 15px 13px 0 0.02em, 16px 13px 0 0.02em,
              1px 14px 0 0.02em, 2px 14px 0 0.02em, 3px 14px 0 0.02em #fff,
              4px 14px 0 0.02em #fff, 5px 14px 0 0.02em #fff, 6px 14px 0 0.02em,
              7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff,
              9px 14px 0 0.02em #fff, 10px 14px 0 0.02em, 11px 14px 0 0.02em,
              12px 14px 0 0.02em #fff, 13px 14px 0 0.02em #fff,
              14px 14px 0 0.02em #fff, 15px 14px 0 0.02em, 16px 14px 0 0.02em,
              1px 15px 0 0.02em, 2px 15px 0 0.02em, 3px 15px 0 0.02em,
              4px 15px 0 0.02em, 5px 15px 0 0.02em, 6px 15px 0 0.02em,
              7px 15px 0 0.02em, 8px 15px 0 0.02em, 9px 15px 0 0.02em,
              10px 15px 0 0.02em, 11px 15px 0 0.02em, 12px 15px 0 0.02em,
              13px 15px 0 0.02em, 14px 15px 0 0.02em, 15px 15px 0 0.02em,
              16px 15px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
              4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em,
              7px 16px 0 0.02em, 8px 16px 0 0.02em, 9px 16px 0 0.02em,
              10px 16px 0 0.02em, 11px 16px 0 0.02em, 12px 16px 0 0.02em,
              13px 16px 0 0.02em, 14px 16px 0 0.02em, 15px 16px 0 0.02em;
          }
        }
      `,
    ];
  }

  constructor() {
    super();

    this.animated = true;
    this.unresolved = true;
    this.showLayout = true;

    this._experienceYears =
      new Date().getFullYear() - new Date('07/18/2015').getFullYear();
  }

  firstUpdated() {
    this.unresolved = false;
  }

  render() {
    return html`
      <sunset-background ?animated="${this.animated}"></sunset-background>

      <section id="about-me" class="card" ?hidden=${!this.showLayout}>
        <h1>About me</h1>
        <img id="avatar" alt="Avatar" src="./assets/avatar_32.webp" />
        <p id="name">Mario Aleo</p>
        <p id="job">Web Developer</p>
        <p id="carreer">
          I have ${this._experienceYears} years of experience in building web
          applications using more of the web platform and fewer frameworks.
        </p>
        <nav id="social">
          <a
            href="https://twitter.com/MarioAleo"
            target="_blank"
            rel="noopener"
            aria-label="My Twitter profile"
          >
            <i class="icon twitter is-medium"></i>
          </a>
          <a
            href="https://github.com/mario-aleo"
            target="_blank"
            rel="noopener"
            aria-label="My Github profile"
          >
            <i class="icon github is-medium"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mario-henrique-vivan-aleo-7513b3b8/"
            rel="noopener"
            target="_blank"
            aria-label="My Linkedin profile"
          >
            <i class="icon linkedin is-medium"></i>
          </a>
        </nav>
      </section>

      <main id="main-content" class="card">
        <h1>Experience</h1>

        <section>
          <h2>Terapeasy</h2>
          <h3>Jan. 2021 - Present</h3>
          <p>Web Developer</p>
          <p>Stack: Lit</p>
        </section>

        <section>
          <h2>Golfleet Tecnologia</h2>
          <h3>Dec. 2019 - Present</h3>
          <p>Web Developer</p>
          <p>Stack: Lit, Angular, Cordova</p>
        </section>

        <section>
          <h2>Wallbrand</h2>
          <h3>Jul. 2019 - Dec. 2019</h3>
          <p>Front-End Developer</p>
          <p>Stack: React, ReactNative</p>
        </section>

        <section>
          <h2>Golfleet Tecnologia</h2>
          <h3>Jul. 2015 - Jul. 2019</h3>
          <p>Front-End Developer</p>
          <p>Stack: Angular, Cordova, Electron</p>
        </section>
      </main>

      <div id="layout-control">
        <button id="toggle-about-me" @click="${() => this.toggleAboutMe()}">
          ${this.showLayout ? 'Hide' : 'Show'}
        </button>

        <button id="toggle-animation" @click="${() => this.toggleAnimation()}">
          ${this.animated ? 'Stop' : 'Start'}
        </button>
      </div>

      <nav id="navigation" class="card">
        <h1>Menu</h1>

        <a href="#experience" active>Experience</a>
      </nav>

      <iframe
        id="spotify"
        title="Spotify embed player"
        src="https://open.spotify.com/embed/track/4wUdDfYSNNOr260yLDHAZr"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    `;
  }

  toggleLayout() {
    this.showLayout = !this.showLayout;
  }
}
