import handlebars from "https://dev.jspm.io/handlebars@4.7.6";
import { Engine } from "../types/index.ts";

const hb = <any> handlebars;

export const renderHandlebars: Engine = (
  template: string,
  data: object = {},
): string => {
  return hb.compile(template)(data);
};
