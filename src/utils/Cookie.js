import Cookies from "cookies-js";

const NAMESPACE = "box_feedback_form_";

export default class Cookie {
  set(data) {
    this.setValue("email", data.email);
    this.setValue("name", data.name);
  }

  get(key) {
    return Cookies.get(NAMESPACE + key);
  }

  setValue(key, value) {
    if (value === undefined || value === null || !typeof key === "string") {
      return;
    } else {
      let secure = document.location.protocol === "https:";
      Cookies.set(NAMESPACE + key, value, { secure: secure  });
    }
  }
}