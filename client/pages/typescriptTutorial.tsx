import { prototype } from "events";
import { stringify } from "querystring";
import React, { useState } from "react";
import { inflate } from "zlib";

export default function index() {
  // let firstName = "Dylan";
  // let firstName2: string = "Dylan";
  // firstName2 = "ddd";
  // const json = JSON.parse("55");
  // console.log(typeof json);
  // let u = true;
  // console.log(u);

  // let v: any = true;
  // v = "string";
  // Math.round(v);
  // console.log(v);

  // const name: string[] = [];
  // name.push("fucker");
  // const names: readonly string[] = ["dylan"];
  // names.push("jack");
  // console.log(names);

  // const numbers = [1, 2, 3];
  // numbers.push(4);

  // numbers.push("2");
  // let head: number = numbers[0];

  // let ourTuple: [number, boolean, string];
  // ourTuple = [5, false, "Code God"];
  // ourTuple.push(true);
  // console.log(ourTuple);

  // const rl: readonly [number, boolean, string] = [5, true, "dman"];
  // rl.push("fukc");

  // const go: [x: number, y: number] = [55.2, 41.3];
  // const go: [number, number] = [55.2, 41.3];
  // const [x, y] = go;
  // console.log(x, y);

  // const go: { type: string; model?: string; year?: number } = {
  //   type: "bmw",
  // };

  // const nameAgeMap: { [index: string]: number } = {};
  // nameAgeMap.Jack = 25;
  // nameAgeMap.Mark = "Fifity";
  // console.log(nameAgeMap);
  // enum test {
  //   a,
  //   b,
  //   c,
  //   d,
  // }
  // console.log(test.a);

  // type a = number;
  // type b = boolean;
  // type c = string;
  // type go = {
  //   x: a;
  //   y: b;
  //   z: c;
  // };

  // const a = 5;
  // const b = true;
  // const c = "fam";
  // const go = {
  //   x: a,
  //   y: b,
  //   z: c,
  // };
  // console.log(go);

  // interface shape {
  //   x: number;
  //   y: number;
  // }

  // const theShape: shape = {
  //   x: 50,
  //   y: 10,
  // };

  // // console.log(theShape);
  // interface go {
  //   x: number,
  //   y: number
  // }

  // interface again extends go {
  //   z: string;
  // }

  // const rst: again = {
  //   x: 10,
  //   y: 5,
  //   z: "feel",
  // };
  // console.log(rst);

  // function test(code: number | string) {
  //   console.log(`usthat ${code}`);
  // }

  // function getTime(): number {
  //   return new Date().getTime();
  // }

  // function ppp(): void {
  //   console.log("damn");
  // }
  // ppp();
  // console.log(ppp());

  // the `?` operator here marks parameter `c` as optional
  // function add(a: number, b: number, c?: number) {
  //   return a + b + (c || 0);
  // }

  // console.log(add(2, 5));

  // function pow(value: number, exponent: number = 10) {
  //   return value ** exponent;
  // }

  // console.log(pow(1));

  // type Negate = (value: number) => number;

  // const go: Negate = (value) => value * 20;
  // console.log(go(10));

  // let x: unknown = "hello";
  // console.log(x as boolean);
  // let x: unknown = 4;
  // console.log((x as string).length); // prints undefined since numbers don't have a length

  // let x = "hello";
  // console.log((x as unknown as number).length); // x is not actually a number so this will return undefined

  // function createP<S, T>(v1: S, v2: T): [S, T] {
  //   return [v1, v2];
  // }
  // console.log(createP<string, number>("fucke", 199));

  // function go<S extends string | number, T extends string | number>(
  //   v1: S,
  //   v2: T
  // ): [S, T] {
  //   console.log(`the answer is ${v1}, ${v2}`);
  //   return [v1, v2];
  // }

  // interface Point {
  //   x: number;
  //   y: number;
  // }

  // let pointP: Partial<Point> = {};
  // pointP.x = 10;
  // console.log(pointP);

  // interface Car {
  //   make: string;
  //   model: string;
  //   mileage?: number;
  // }

  // let myCar: Required<Car> = {
  //   make: "BMW",
  //   model: "M1",
  //   mileage: 222,
  // };

  // console.log(myCar);

  // interface Person {
  //   name: string;
  //   age: number;
  //   location: string;
  // }

  // const bob: Omit<Person, "age" | "location"> = {
  //   name: "Bob",
  // };

  // console.log(bob);

  // interface pp {
  //   name: string;
  //   age: number;
  //   sex: string;
  // }

  // let pp: Pick<pp, "sex"> = {
  //   sex: "boy",
  // };

  // console.log(pp);

  // type pp = string | number | boolean;
  // const value: Exclude<pp, string> = true;
  // console.log(typeof value);

  // type youknow = () => { x: number; y: number };
  // const rakd: ReturnType<youknow> = {
  //   x: 212,
  //   y: 345,
  // };

  // console.log(rakd);

  // type PP = (p: { x: number; y: number }) => void;
  // const point: Parameters<PP>[0] = { x: 10, y: 132 };
  // console.log(point);

  // interface Ppl {
  //   name: string;
  //   age: number;
  // }

  // const theOne: Readonly<Ppl> = {
  //   name: "daivi",
  //   age: 234,
  // };

  // theOne.name = "sss";
  // console.log(theOne);
  // console.log(theOne);

  // interface Per {
  //   name: string;
  //   age: number;
  // }

  // function printIt(person: Per, property: keyof Per) {
  //   console.log(`property: ${property} : ${person[property]}`);
  // }

  // let person = {
  //   name: "max",
  //   age: 334,
  // };

  // printIt(person, "name");

  // type StringMap = { [key: string]: unknown };
  // function createS(property: keyof StringMap, value: string) {
  //   console.log(`${property}:${value}`);
  //   return { [property]: value };
  // }

  // createS(344, "jonson");

  // interface House {
  //   sqft: number;
  //   yard?: {
  //     sqft: number;
  //   };
  // }

  // function printYardSize(house: House) {
  //   // const yardSize = house.yard?.sqft;
  //   const yardSize = house.sqft;
  //   console.log(yardSize);
  //   if (yardSize === undefined) {
  //     console.log("no");
  //   } else {
  //     console.log("yes");
  //   }
  // }

  // let home: House = {
  //   sqft: 600,
  // };

  // printYardSize(home);

  // function getValue(): string | undefined {
  //   return "hello";
  // }

  // let value = getValue();
  // console.log(value!.length);

  // let array: number[] = [1, 2, 4];

  // let v = array[2];
  // console.log(v);

  // type Color = "red" | "blue" | "green";
  // type HexColor<T extends Color> = `#${string}`;

  // let myColor: HexColor<"blue"> = "#0000FF";
  // console.log(myColor);

  return (
    <div>
      {/* <h1 style={{ color: myColor }}>TypeScript</h1> */}
      {/* <div>{name}</div>
      <div>{names}</div> */}
      {/* <div>{firstName}</div>
      <div>{firstName2}</div> */}
      {/* <div>{typeof json}</div> */}
    </div>
  );
}
