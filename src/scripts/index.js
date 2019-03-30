import { saludar } from "./utils";
import "../styles/index.scss";

const saludo = saludar("hola a todos!");

class Persona {
  nombre = "myself";
}

console.log(saludo);
