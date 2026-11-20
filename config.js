// ใส่ Project URL และ publishable/anon key เท่านั้น ห้ามใช้ service_role
window.CONFIG={url:'https://eerffuoqapgksyhzezms.supabase.co',key:'sb_publishable_WUpPJFR-d-xwQCjjCwkNZg_PI82IAqg'};
window.db=CONFIG.url&&CONFIG.key?supabase.createClient(CONFIG.url,CONFIG.key):null;
window.esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.demo={id:'demo',title:'หลักสูตรตัวอย่าง — ความรู้คอมพิวเตอร์',questions:[{text:'อุปกรณ์ใดใช้ป้อนข้อความ?',options:['จอภาพ','แป้นพิมพ์','ลำโพง','เครื่องพิมพ์'],answer:1},{text:'ข้อใดเป็นการสำรองข้อมูล?',options:['ลบไฟล์','เปลี่ยนชื่อไฟล์','สร้างสำเนาไฟล์','ปิดหน้าจอ'],answer:2},{text:'รหัสผ่านควรมีลักษณะอย่างไร?',options:['เดาง่าย','ใช้ชื่อเดียวกันทุกระบบ','เผยแพร่ทั่วไป','ยาวและไม่ซ้ำระบบอื่น'],answer:3}]};
