// import b from "./b.js"; // var b => b.js (has default)

export async function a() {
    console.log("A");
    if (3 < 5) {
        const bModule = await import("./b.js");
        bModule.default();
        // import("./b.js").then((response) => {
        //     response.default();
        // }).catch((e) => {
        //     alert("Loading script failed");
        // });
    }
}

// b();