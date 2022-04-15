// implements is required class Methods
// implements not allow optional var
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
// class Ball implements Pingable {
//   Class 'Ball' incorrectly implements interface 'Pingable'.
//   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }


interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  check(s:string) {
    // Notice no error here
    return s.toLowerCase() === "ok";             
  }
}