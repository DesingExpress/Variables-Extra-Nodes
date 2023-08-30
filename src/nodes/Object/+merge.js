import { Pure } from "@design-express/fabrica";
// import { useEffect, useState } from "react";

export class merge extends Pure {
  static path = "Variables/Object";
  static title = "Merge";
  static description = "Merge";

  constructor() {
    super();
    this.addInput("object", "object");
    this.addInput("object", "object");

    this.addOutput("object", "object");
  }

  onExecute() {
    const _obj = this.getInputData(1);
    const _obj2 = this.getInputData(2);
    this.setOutputData(1, { ..._obj, ..._obj2 });
  }
}
