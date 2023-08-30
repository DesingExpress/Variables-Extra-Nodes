import { Pure } from "@design-express/fabrica";
// import { useEffect, useState } from "react";

export class range extends Pure {
  static path = "Variables/Array";
  static title = "Range";
  static description = "range";

  constructor() {
    super();
    this.properties = { min: 0, max: 1, step: 0.1 };
    this.addInput("min", "number");
    this.addInput("max", "number");
    this.addInput("step", "number");

    this.addOutput("array", "array");
    this.addWidget("number", "min", this.properties.min, "min", { step: 1 });
    this.addWidget("number", "max", this.properties.max, "max", { step: 1 });
    this.addWidget("number", "step", this.properties.step, "step", {
      step: 1,
      min: 0,
    });
    this.widgets_up = true;
    this.widgets_start_y = -2;
  }

  onExecute() {
    const _min = this.getInputData(1) ?? this.properties.min;
    const _max = this.getInputData(2) ?? this.properties.max;
    const _step = this.getInputData(3) ?? this.properties.step;
    const _result = [_min];

    if (_min >= _max || _step <= 0) return;
    let latest = _min;
    while (_max - _step >= latest) {
      _result.push((latest = Number((latest + _step).toPrecision(7))));
    }
    this.setOutputData(1, _result);
  }
}
