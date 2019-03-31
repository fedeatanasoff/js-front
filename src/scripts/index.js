import { saludar } from "./utils";
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import "../styles/index.scss";

const saludo = saludar("hola a todos!");

class Persona {
  nombre = "myself";
}

console.log(saludo);
