class BoxType<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new BoxType<string>();
box.value = "Gameboy";
 
box.value;
     
// (property) BoxType<unknown>.value?: unknown
 
if (box.hasValue()) {
  box.value;
       
// (property) value: unknown
}