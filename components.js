// SiteNavWrapper.js;
customElements.define(
  "site-nav-wrapper",
  class SiteNavWrapper extends HTMLElement {
    constructor() {
      super();
      const SiteNavWrapperTemplate = document.createElement("template");
      SiteNavWrapperTemplate.innerHTML = `
      <style>
      </style>
      <nav>
        <slot></slot>
      </nav>
      `;
      this.attachShadow({ mode: "open" }).appendChild(
        SiteNavWrapperTemplate.content.cloneNode(true)
      );
    }
  }
);

// NavList.js;
customElements.define(
  "nav-list",
  class NavList extends HTMLElement {
    static get observedAttributes() {
      return ["class", "type"];
    }
    constructor() {
      super();
      const styles = document.createElement("style");
      styles.innerHTML = `
      .u-list-none {
        list-style:none;
      }
      ol, ul {
        margin:0;
        padding:0;
      }
      .sitenav__top {
        display: flex;
        justify-content: flex-end;
      }
      `;
      this.attachShadow({ mode: "open" }).appendChild(styles);
    }
    connectedCallback() {
      this.setListType();
      const listElementType = this.isOrdered ? "ol" : "ul";
      const listElement = document.createElement(listElementType);
      const listClass = this.getAttribute("class");
      listElement.className += listClass;
      if (!this.isOrdered) {
        listElement.classList.add("u-list-none");
      }
      const slot = document.createElement("slot");
      listElement.appendChild(slot);
      this.shadowRoot.appendChild(listElement);
    }
    setListType() {
      const listType = this.getAttribute("type") ?? "unordered";
      switch (listType) {
        case "unordered":
          this.isOrdered = false;
          break;
        case "ordered":
          this.isOrdered = true;
          break;
        default:
          console.warn(`Invalid type attribute on nav-list:`, listType);
          this.isOrdered = false;
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(
        `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
      );
    }
  }
);

// SiteNavSubmenu.js;
customElements.define(
  "site-nav-submenu",
  class SiteNavSubmenu extends HTMLElement {
    constructor() {
      super();
      const SiteNavSubmenuTemplate = document.createElement("template");
      SiteNavSubmenuTemplate.innerHTML = `
      <style>
        button {
          background-color: transparent;
          border: 0;
          cursor: pointer;
          display: flex;
          height: 100%;
          padding-right: 22px;
        }
        svg {
          fill: currentColor;
        }
        div:not([hidden]) {
          align-items: flex-start;
          background-color: white;
          box-shadow: 0 3px 20px var(--color-shadow);
          display: flex;
          justify-content: space-between;
          padding: 36px;
          position: absolute;
          left: 0;
          top: var(--site-nav-height);
          right: 0;
          z-index: -1;
        }
        .is-flipped {
          transform: rotate(180deg);
          transition: transform .3s ease-out
        }
        .is-visually-hidden {
          border: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(100%);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      </style>
      <button type="button" aria-expanded="false" part="submenu-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
          <path d="M10 15.174L2.026 7.202l2.375-2.375 5.6 5.6 5.595-5.6 2.375 2.375z"></path>
        </svg>
        <span class="is-visually-hidden">Toggle submenu</span>
      </button>
      <div hidden>
        <slot>
      </div>
      `;
      this.attachShadow({ mode: "open" }).appendChild(
        SiteNavSubmenuTemplate.content.cloneNode(true)
      );

      this.isOpen = false;
      this.toggleSubmenu = this.toggleSubmenu.bind(this);
      this.setNavHeight = this.setNavHeight.bind(this);
    }
    connectedCallback() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.toggleSubmenu);

      this.setNavHeight();
      window.addEventListener("resize", () => {
        this.setNavHeight();
      });
    }

    toggleSubmenu() {
      const submenuBtn = this.shadowRoot.querySelector("button");
      const icon = submenuBtn.querySelector("svg");
      const submenu = this.shadowRoot.querySelector("div");

      this.isOpen = !this.isOpen;

      if (this.isOpen == true) {
        submenuBtn.setAttribute("aria-expanded", true);
        icon.classList.add("is-flipped");
        submenu.removeAttribute("hidden");
      } else {
        submenuBtn.setAttribute("aria-expanded", false);
        icon.classList.remove("is-flipped");
        submenu.setAttribute("hidden", true);
      }
    }
    setNavHeight() {
      document.documentElement.style.setProperty(
        "--site-nav-height",
        document.querySelector("site-nav-wrapper").offsetHeight + "px"
      );
    }
  }
);
