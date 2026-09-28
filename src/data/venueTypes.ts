export interface VenueType {
  slug: string;
  label: string;
  title: string;
  description: string;
  pitch: string;
  example?: string;
}

export const venueTypes: VenueType[] = [
  {
    slug: 'cafes',
    label: 'คาเฟ่',
    title: 'ขนมกัญชาไมโครโดสสำหรับคาเฟ่ | Baked Brand',
    description: 'ละลายคาราเมลไมโครโดของ Baked ลงในกาแฟหรือเครื่องดื่มร้อน เมนูใหม่ที่เพิ่มได้ง่าย ไม่ต้องปรับสูตรร้าน',
    pitch: 'คาราเมลไมโครโดของเราถูกออกแบบมาให้ละลายในกาแฟหรือเครื่องดื่มร้อนได้พอดี เป็นเมนูเสริมที่เพิ่มมูลค่าให้ร้านโดยไม่ต้องเปลี่ยนสูตรอะไรเลย',
    example: 'Fuel Coffee, Mao Cafe และ Rx Cafe ในเชียงใหม่ เป็นลูกค้าของเราอยู่แล้ว',
  },
  {
    slug: 'restaurants',
    label: 'ร้านอาหาร',
    title: 'ขนมกัญชาไมโครโดสสำหรับร้านอาหาร | Baked Brand',
    description: 'เสนอคุกกี้หรือคาร