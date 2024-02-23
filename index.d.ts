type SayHelloProps = {
    firstName: String;
    lastName: String;
    age: Number;
};

declare function sayHello({ firstName, lastName, age }: SayHelloProps): void;

export { type SayHelloProps, sayHello };
