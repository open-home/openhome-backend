export class ErrorPayload {

  text: string;
  stack: any;

  constructor(text: string, stack: any) {

    this.text = text;
    this.stack = stack;
  }
}
