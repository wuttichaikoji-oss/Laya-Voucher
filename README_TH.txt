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
