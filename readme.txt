Functional Programming vs OOP

Functional Programming
1. มองทุกอย่างเป็น Functional
2. ตัวอย่าง เงินในบัญชี จะไม่ถุกแก้ไข เราแค่ส่งค่าเงินในบัญชีไปที่ function เมื่อมีการฝาก ถอน แล้ว return ค่าใหม่ออกมา โดยค่าเงินในบัญชีเริ่มต้นต้องไม่ถูกแก้ไข
3. ทำงานตามแต่ละ function มาประกอบกัน

OOP
1. มองทุกอย่างเป็น object แต่ละ object มี function ต้องเขียนคู่กัน
2. ตัวอย่าง เงินในบัญชี แต่ละ object ถูกแก้ไขได้เมื่อมีการฝาก ถอน เรียก mutable state
3. ทำงานเป็น flow เป็น step

คุณสมบัติ Functional Programming
1. pure function (input เดิม output เดิม)
2. Declarative style สไตล์การประกาศ เช่น การใช้งานfunction ต่างๆ filter, map, reduce แทนการใช้ condition โดยตรง
3. High order function นำ function มาเป็น input เพื่อใช้คุณสมบัติ pure function ให้มาต่อกันได้ ตัวอย่าง const thisDoubleNumbers = numbers.map(number => number * 2);

เทคนิค Functional
1. การรวม function ด้วย Composition
2. Curry ลด argument ซ้ำๆกัน โดยเปลี่ยนเป็น function แทน
3. Partial ลด argument ซ้ำๆกัน โดยเปลี่ยนเป็น function แทน เหมือน Curry แต่ต่างตรง partial จะรับได้มากกว่า 1 argument