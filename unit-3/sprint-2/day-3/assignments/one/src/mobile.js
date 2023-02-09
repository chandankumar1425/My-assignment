class Mobile {
    #unlockPin
    constructor(model, number, unlockPin) {
        this.model = model;
        this.number = number;
        this.#unlockPin = unlockPin;
      }
    
      get getUnlockPin() {
        return this.#unlockPin;
      }
    
      set unlockPin(newPin) {
        this.#unlockPin = newPin;
      }
    
      sendSMS(text) {
        return text;
      }
}
  
export default Mobile