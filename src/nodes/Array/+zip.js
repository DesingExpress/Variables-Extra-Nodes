import { Pure } from "@design-express/fabrica";
import { zip as _zip } from "lodash";
// import { useEffect, useState } from "react";

export class zip extends Pure {
  static path = "Variables/Array";
  static title = "Zip";
  static description = "Zip";

  constructor() {
    super();
    this.addInput("array", "array");
    this.addInput("array", "array");

    this.addOutput("array", "array");
  }

  onExecute() {
    const _array1 = this.getInputData(1);
    const _array2 = this.getInputData(2);

    this.setOutputData(1, _zip(_array1, _array2));
  }
}
