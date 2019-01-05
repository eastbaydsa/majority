const newsletterFormMachineConfig = {
  id: "newsletterForm",
  initial: "ready",
  states: {
    ready: {
      on: { SUBMIT: "submitted" }
    },
    submitted: {
      onEntry: ["submitSignupForm"],
      on: { SIGNED_UP: "signedUp", ERROR: "ready" },
    },
    signedUp: {}
  }
};

export default newsletterFormMachineConfig;