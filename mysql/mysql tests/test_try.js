function test() {
    try {
      let hello = prompt("Type hello");
      if (hello == "try") {
        throw new Error("Oops, you typed try");
      }
      if (hello !== "hello") {
        throw new Error("Oops, you didn’t type hello");
      }
    } catch (e) {
      alert(e.message);
    } finally {
      alert("thanks for playing!");
    }
  }