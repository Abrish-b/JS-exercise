import asyncUploadUser from "./task-10.js";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
