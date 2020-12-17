class ZaloChatPlugin {
  constructor(oaid) {
    this.oaid = oaid;
    this.body = document.querySelector('body');
  }

  /**
   * Render zalo chat window with welcome message
   * @param {string} message
   */
  render() {
    const zaloNode = document.createElement('div');

    zaloNode.setAttribute('class', 'zalo-chat-widget');
    zaloNode.setAttribute('data-oaid', this.oaid);

    this.body.appendChild(zaloNode);
  }
}

export default ZaloChatPlugin;
