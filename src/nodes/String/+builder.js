import { Pure } from "@design-express/fabrica";
import { compile } from "handlebars";

export class stringBuilder extends Pure {
  static path = "Variables/String";
  static title = "Builder";
  static description = "Mustache templating language";

  constructor() {
    super();
    this.properties = { source: "" };
    this.prevSource = undefined;
    this.template = undefined;

    this.addInput("source", "string");
    this.addInput("parameter", "array,object,string,number");

    this.addOutput("", "null", {
      locked: true,
      label: "",
      nameLocked: true,
      hidden: true,
    });
    this.addOutput("result", "string");

    this.addWidget("text", "source", this.properties.source, "source");
    this.widgets_up = true;
  }

  onExecute() {
    const _source = this.getInputData(1) ?? this.properties.source;

    if (!_source) return;

    if (this.prevSource !== _source) {
      this.prevSource = _source;
      this.template = compile(_source);
    }
    const _params = this.getInputData(2);
    this.setOutputData(
      2,
      this.template(typeof _params === "object" ? _params : [_params])
    );
  }
}
