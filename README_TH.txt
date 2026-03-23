Laya Voucher Full Starter Repo

ไฟล์ชุดนี้เป็น "starter repo" สำหรับอัปขึ้น GitHub Pages และนำไปต่อกับ Firebase จริง
สิ่งที่มีในชุดนี้:
- login.html
- index.html (redirect ไป login)
- dashboard.html
- search.html
- redeem.html
- voucher-detail.html
- view.html
- admin-users.html
- voucher_print_template.html
- auth-guard.js
- firebase-config.js
- style.css

หมายเหตุสำคัญ:
1) firebase-config.js ยังเป็น placeholder ต้องใส่ค่าจริงของ Firebase ก่อนใช้งาน
2) โค้ดในชุดนี้เป็น starter/structure สำหรับเอาไปต่อและอัป GitHub ได้ ไม่ใช่ production-ready final code
3) หากใช้ Firestore query หลายเงื่อนไข อาจต้องสร้าง index เพิ่มใน Firebase Console ตามที่ระบบแจ้ง
4) ถ้าจะใช้ login จริง ต้องเปิด Authentication > Email/Password ใน Firebase
5) หน้า printable voucher template ทำตามแบบหน้าหลังที่ผู้ใช้ส่งมา

ไฟล์ที่ควรแก้ก่อนอัปจริง:
- firebase-config.js
- login.html
- auth-guard.js
- หน้าต่างๆให้ตรงกับ collection/field จริงของคุณ


อัปเดตแล้ว: firebase-config.js ใส่ค่าโปรเจกต์ laya-voucher ให้เรียบร้อย


อัปเดตเพิ่ม:
- login.html = เข้าระบบด้วยรหัสพนักงาน + รหัสผ่าน
- register.html = สมัครสมาชิกใหม่ โดยสร้าง Firebase Auth และสร้างโปรไฟล์ใน /users
- admin-users.html = เพิ่มช่อง employee_id
หมายเหตุ: หน้า login จะค้นหา employee_id ใน collection /users แล้วใช้ email ที่ผูกไว้ไป login ผ่าน Firebase Auth


อัปเดต rules-ready:
- login.html เปลี่ยนเป็น lookup จาก /employee_login_index/{employee_id}
- register.html จะสร้างทั้ง /users/{uid} และ /employee_login_index/{employee_id}
- เพิ่มไฟล์ firestore.rules.txt สำหรับนำไปวางใน Firebase Console > Firestore Rules


อัปเดตล่าสุด:
- register.html เอาช่อง Email ออกแล้ว
- ระบบจะสร้างอีเมลภายในอัตโนมัติจากรหัสพนักงาน เช่น 300204@laya-voucher.local
- login ยังใช้รหัสพนักงาน + รหัสผ่านเหมือนเดิม


แก้ล่าสุด: register.html เช็ก employee_id ซ้ำจาก employee_login_index แทน /users เพื่อให้สอดคล้องกับ Rules


อัปเดต role dashboard + permissions:
- dashboard.html เปิดให้ staff/supervisor/manager/admin เข้าได้ โดย scope แตกต่างตาม role
- staff เห็นเฉพาะ outlet ของตัวเอง (หรือ voucher ที่ตัวเองออก หากยังไม่กำหนด outlet)
- supervisor / manager เห็นเฉพาะ department ของตัวเอง
- admin เห็นทุก department / outlet
- issue.html ล็อก outlet อัตโนมัติสำหรับ role staff
- auth-guard.js เพิ่มลิงก์ Dashboard ให้ทุก role
- admin-users.html ล้างตัวอักษรหลุด \n ในฟอร์มแล้ว
- firestore.rules.txt ปรับให้สอดคล้องกับ role dashboard เวอร์ชันนี้
